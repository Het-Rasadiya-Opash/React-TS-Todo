import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentFilter = new URLSearchParams(location.search).get('todos') || 'all';

  const getLinkClasses = (filterName: 'all' | 'active' | 'completed') => {
    const baseClasses = "px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out";
    
    if ((filterName === 'all' && currentFilter === 'all') || (currentFilter === filterName)) {
      return `${baseClasses} bg-blue-600 text-white shadow-md`;
    } else {
      return `${baseClasses} text-gray-700 hover:bg-gray-200 hover:text-gray-900`;
    }
  };

  return (
    <nav className="flex justify-center space-x-4 p-4 bg-gray-100 shadow-md">
      <Link
        to="/"
        className={getLinkClasses('all')} 
      >
        All
      </Link>
      <Link
        to="/?todos=active"
        className={getLinkClasses('active')} 
      >
        Active
      </Link>
      <Link
        to="/?todos=completed"
        className={getLinkClasses('completed')} 
      >
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
