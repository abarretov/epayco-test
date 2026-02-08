import { TodoList } from '../organisms/TodoList';

// ----------------------------------------------------------------------

export const TodoTemplate = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col items-center py-12 sm:py-24">
      <div className="w-full max-w-3xl px-8 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
            Tareas Pendientes
          </h1>
          <p className="text-lg text-text-secondary max-w-md mx-auto">
            Mantente organizado y productivo
          </p>
        </div>
        <TodoList />
      </div>
    </div>
  );
};
