'use client';

import { useEffect, useState } from 'react';
import { TodoForm } from '../molecules/TodoForm';
import { Todo } from '@/types/todo';
import { TodoItem } from '../molecules/TodoItem';
import { createTodo, deleteTodo, getTodos, updateTodo } from '@/services/todoServices';

// ----------------------------------------------------------------------

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  /**
   * Función para cargar los todos desde la API.
   * @returns {Promise<void>} Una promesa que resuelve cuando los todos han sido cargados
   * @throws {Error} Si ocurre un error al cargar los todos
   */
  const loadTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error('Error loading todos:', error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Función para agregar un nuevo todo.
   * @param {string} title - El título del nuevo todo
   * @returns {Promise<void>} Una promesa que resuelve cuando el todo ha sido agregado
   * @throws {Error} Si ocurre un error al agregar el todo
   */
  const handleAdd = async (title: string) => {
    // Optimistic update para mejor UX
    const tempId = Date.now();
    const newTodo: Todo = {
      userId: 1,
      id: tempId,
      title,
      completed: false,
    };

    setTodos([newTodo, ...todos]);

    try {
      const created = await createTodo({
        title,
        completed: false,
        userId: 1,
      });
      // Reemplazamos el ID temporal con el real (aunque JSONPlaceholder siempre devuelve 201)
      setTodos(prev => prev.map(t => t.id === tempId ? { ...created, id: tempId } : t));
    } catch (error) {
      console.error('Error creating todo:', error);
      setTodos(prev => prev.filter(t => t.id !== tempId));
    }
  };

  /**
   * Función para alternar el estado de completado de un todo.
   * @param {number} id - El ID del todo a actualizar
   * @param {boolean} completed - El nuevo estado de completado
   * @returns {Promise<void>} Una promesa que resuelve cuando el todo ha sido actualizado
   * @throws {Error} Si ocurre un error al actualizar el todo
   */
  const handleToggle = async (id: number, completed: boolean) => {
    const previousTodos = [...todos];
    setTodos(todos.map(t => t.id === id ? { ...t, completed } : t));

    try {
      await updateTodo(id, { completed });
    } catch (error) {
      console.error('Error updating todo:', error);
      setTodos(previousTodos);
    }
  };

  /**
   * Función para eliminar un todo.
   * @param {number} id - El ID del todo a eliminar
   * @returns {Promise<void>} Una promesa que resuelve cuando el todo ha sido eliminado
   * @throws {Error} Si ocurre un error al eliminar el todo
   */
  const handleDelete = async (id: number) => {
    const previousTodos = [...todos];
    setTodos(todos.filter(t => t.id !== id));

    try {
      await deleteTodo(id);
    } catch (error) {
      console.error('Error deleting todo:', error);
      setTodos(previousTodos);
    }
  };

  /**
   * Función para editar el título de un todo.
   * @param {number} id - El ID del todo a editar
   * @param {string} title - El nuevo título del todo
   * @returns {Promise<void>} Una promesa que resuelve cuando el todo ha sido editado
   * @throws {Error} Si ocurre un error al editar el todo
   */
  const handleEdit = async (id: number, title: string) => {
    const previousTodos = [...todos];
    setTodos(todos.map(t => t.id === id ? { ...t, title } : t));

    try {
      await updateTodo(id, { title });
    } catch (error) {
      console.error('Error updating todo:', error);
      setTodos(previousTodos);
    }
  };

  // Hook para cargar los todos al montar el componente
  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <TodoForm onSubmit={handleAdd} />

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="space-y-1">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}

          {todos.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-500">Aún no hay tareas. Añade una para empezar.!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
