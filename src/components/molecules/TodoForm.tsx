'use client';

import { useState } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

// ----------------------------------------------------------------------

type Props = {
  onSubmit: (title: string) => void;
}

// ----------------------------------------------------------------------

export const TodoForm = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState('');

  /**
   * Función para manejar el evento de envío del formulario.
   * @param {React.SubmitEvent<HTMLFormElement>} e - El evento de envío del formulario
   * @returns {Promise<void>} Una promesa que resuelve cuando el formulario ha sido enviado
   * @throws {Error} Si ocurre un error al enviar el formulario
   */
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative mb-8">
      <div className="flex gap-3">
        <div className="flex-1">
          <Input
            placeholder="¿Qué necesitas hacer?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <Button type="submit" variant="primary" className="px-6">
          Add
        </Button>
      </div>
    </form>
  );
};
