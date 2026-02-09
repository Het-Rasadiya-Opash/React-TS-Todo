# Todo App

A modern, responsive todo application built with React, TypeScript, and Vite. Manage your tasks efficiently with filtering options and persistent state management.

## Features

- ✅ Create new todos
- 🔍 Filter todos by status (All, Active, Completed)
- ✔️ Mark todos as completed
- 🗑️ Delete todos
- 📱 Responsive design with Tailwind CSS
- ⚡ Fast development experience with Vite
- 🛡️ Type-safe with TypeScript

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **React Router** - Navigation and URL parameter handling
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Project Structure

```
src/
├── components/
│   ├── AddTodo.tsx      # Form to add new todos
│   ├── Navbar.tsx       # Navigation with filter options
│   └── Todos.tsx        # Display and manage todos list
├── store/
│   └── Todos.tsx        # State management for todos
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
├── App.css              # Application styles
└── index.css            # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Todo
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint

Check for code issues with ESLint:

```bash
npm run lint
```

## Usage

1. **Adding a Todo**: Type your task in the input field and click "Add" or press Enter
2. **Filtering Todos**: Use the navigation bar to filter by:
   - **All** - See all todos
   - **Active** - See incomplete todos
   - **Completed** - See finished todos
3. **Completing a Todo**: Click the checkbox next to a todo to mark it as complete
4. **Deleting a Todo**: Click the delete button to remove a todo

## Development

This project uses Vite for fast development and hot module replacement. The React plugin supports both Babel and SWC for Fast Refresh:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) - Uses Babel
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Uses SWC

## ESLint Configuration

For production applications, consider enabling type-aware lint rules in `eslint.config.js`:

```js
tseslint.configs.recommendedTypeChecked
// or for stricter rules:
tseslint.configs.strictTypeChecked
```

You can also install React-specific linting plugins:
- `eslint-plugin-react-x`
- `eslint-plugin-react-dom`

## License

This project is open source and available under the MIT License.
