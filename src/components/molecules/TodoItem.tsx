
'use client';

import { useState } from 'react';
import { Checkbox } from '../atoms/Checkbox';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { Todo } from '@/types/todo';
import { EditIcon } from '../atoms/EditIcon';
import { DeleteIcon } from '../atoms/DeleteIcon';

// ----------------------------------------------------------------------

type Props = {
  todo: Todo;
  onToggle: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
}

// ----------------------------------------------------------------------

export const TodoItem = ({ todo, onToggle, onDelete, onEdit }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  /**
   * Función para manejar la lógica de guardado al editar un todo.
   * @returns {void}
   * @throws {Error} Si ocurre un error al guardar el todo editado
   */
  const handleSave = () => {
    if (editTitle.trim()) {
      onEdit(todo.id, editTitle);
      setIsEditing(false);
    }
  };

  return (
    <div className={`group flex items-center justify-between p-4 mb-3 bg-background-paper rounded-2xl border ${todo.completed ? 'border-transparent' : 'border-grey-700'} transition-all duration-300`}>
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <Checkbox
          checked={todo.completed}
          onChange={(e) => onToggle(todo.id, e.target.checked)}
        />

        {isEditing ? (
          <div className="flex-1 mr-4">
            <Input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              onBlur={handleSave}
            />
          </div>
        ) : (
          <span
            className={`flex-1 text-sm sm:text-base font-medium truncate transition-colors duration-200 ${
              todo.completed ? 'text-text-secondary line-through decoration-text-secondary' : 'text-text-primary'
            }`}
          >
            {todo.title}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="icon"
          onClick={() => setIsEditing(!isEditing)}
          className="text-info hover:text-white hover:bg-info"
          aria-label="Edit"
        >
          <EditIcon width={18} height={18} />
        </Button>
        <Button
          variant="icon"
          onClick={() => onDelete(todo.id)}
          className="text-error hover:text-white hover:bg-error"
          aria-label="Delete"
        >
          <DeleteIcon width={18} height={18} />
        </Button>
      </div>
    </div>
  );
};
