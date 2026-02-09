import AddTodo from './components/AddTodo';
import Navbar from './components/Navbar';
import Todos from './components/Todos';

const App = () => {
  return (
    <>
      <main className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-center my-6 text-blue-600">
            Todo App
          </h1>
          <AddTodo />
          <Todos />
        </div>
      </main>
    </>
  );
};

export default App;
