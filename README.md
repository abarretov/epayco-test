# ePayco Test - Todo App

Esta es una aplicación de gestión de tareas (Todo App) desarrollada como prueba técnica. El proyecto está construido utilizando **Next.js 13+ (App Router)**, **TypeScript** y **Tailwind CSS**, implementando una arquitectura de componentes basada en **Atomic Design**.

## 🚀 Características

- **Gestión de Tareas (CRUD):**
  - Crear nuevas tareas.
  - Listar tareas (con integración a API externa).
  - Editar el título de las tareas en línea.
  - Eliminar tareas.
  - Marcar tareas como completadas/pendientes.
- **UX Optimista:** La interfaz se actualiza inmediatamente para una mejor experiencia de usuario mientras se procesa la petición en segundo plano.
- **Diseño Atómico:** Componentes organizados escalablemente en Átomos, Moléculas, Organismos y Plantillas.
- **UI Moderna:** Estilizado con Tailwind CSS utilizando una paleta de colores personalizada (Dark Theme) y tipografía `Public Sans`.

## 🛠️ Tecnologías Utilizadas

- Next.js - Framework de React para producción.
- TypeScript - Superset de JavaScript con tipado estático.
- Tailwind CSS - Framework de utilidades CSS para el diseño.
- Atomic Design - Metodología para la estructura de componentes.

## 📂 Estructura del Proyecto

El código fuente se encuentra en `src/` y sigue esta organización:

```text
src/
├── app/              # Rutas y layouts de Next.js (App Router)
├── components/       # Componentes de UI
│   ├── atoms/        # Elementos base (Button, Input, Checkbox, Iconos)
│   ├── molecules/    # Grupos funcionales (TodoItem, TodoForm)
│   ├── organisms/    # Secciones complejas (TodoList)
│   └── templates/    # Estructura de página (TodoTemplate)
├── services/         # Lógica de comunicación con la API (fetch)
├── types/            # Definiciones de tipos TypeScript (Interfaces)
└── ...
```

## ⚙️ Instalación y Configuración

1.  **Clonar el repositorio:**

    ```bash
    git clone <url-del-repositorio>
    cd epayco-test
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**

    Crea un archivo `.env.local` en la raíz del proyecto y define la URL de la API (por ejemplo, usando JSONPlaceholder):

    ```env
    NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com/todos
    ```

4.  **Ejecutar el servidor de desarrollo:**

```bash
npm run dev

