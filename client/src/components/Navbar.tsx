import { Link } from 'wouter';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated, isAdmin, logout, user } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-xl font-bold">CUBA Dashboard</a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <span className="text-gray-300">Hello, {user?.name}</span>
              {isAdmin && (
                <Link href="/admin">
                  <a className="hover:text-blue-300">Admin</a>
                </Link>
              )}
              <Link href="/dashboard">
                <a className="hover:text-blue-300">Dashboard</a>
              </Link>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <a className="hover:text-blue-300">Login</a>
              </Link>
              <Link href="/register">
                <a className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">
                  Register
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
