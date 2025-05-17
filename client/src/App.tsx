import { Route, Switch } from 'wouter';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard">
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            </Route>
            <Route path="/admin">
              <ProtectedRoute adminOnly>
                <AdminDashboard />
              </ProtectedRoute>
            </Route>
            <Route>
              <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="mb-8">The page you are looking for does not exist.</p>
                <a href="/" className="text-blue-600 hover:underline">Go back to home</a>
              </div>
            </Route>
          </Switch>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
