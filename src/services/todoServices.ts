import { Todo } from '@/types/todo';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL no está definida');
}

/**
 * Función para obtener los todos desde la API.
 * @returns {Promise<Todo[]>} Una promesa que resuelve con un array de todos
 * @throws {Error} Si ocurre un error al obtener los todos
 */
export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`${API_URL}?_limit=8`);
  if (!response.ok) throw new Error('Error al obtener los todos');
  return response.json();
};

/**
 * Función para crear un nuevo todo.
 * @param {Omit<Todo, 'id'>} todo - El objeto todo a crear, sin el campo 'id'
 * @returns {Promise<Todo>} Una promesa que resuelve con el todo creado
 * @throws {Error} Si ocurre un error al crear el todo
 */
export const createTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  if (!response.ok) throw new Error('Error al crear el todo');
  return response.json();
};

/**
 * Función para actualizar un todo existente.
 * @param {number} id - El ID del todo a actualizar
 * @param {Partial<Todo>} todo - Los campos del todo a actualizar
 * @returns {Promise<Todo>} Una promesa que resuelve con el todo actualizado
 * @throws {Error} Si ocurre un error al actualizar el todo
 */
export const updateTodo = async (id: number, todo: Partial<Todo>): Promise<Todo> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(todo),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  if (!response.ok) throw new Error('Error al actualizar el todo');
  return response.json();
};

/**
 * Función para eliminar un todo.
 * @param {number} id - El ID del todo a eliminar
 * @returns {Promise<void>} Una promesa que resuelve cuando el todo ha sido eliminado
 * @throws {Error} Si ocurre un error al eliminar el todo
 */
export const deleteTodo = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Error al eliminar el todo');
};
