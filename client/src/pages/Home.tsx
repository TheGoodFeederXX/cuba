const Home = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Welcome to CUBA Dashboard</h1>
            <p className="text-xl mb-8">
              A modern dashboard solution with user management capabilities.
            </p>
            <div className="flex gap-4">
              <a 
                href="/register" 
                className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium"
              >
                Get Started
              </a>
              <a 
                href="/login" 
                className="bg-transparent border border-white text-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-blue-700 mb-4">
                {/* SVG icon could go here */}
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">User Dashboard</h3>
              <p className="text-gray-600">
                Access your personalized dashboard with analytics and task management.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-blue-700 mb-4">
                {/* SVG icon could go here */}
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
              <p className="text-gray-600">
                Security-first approach with JWT-based authentication and secure password handling.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-blue-700 mb-4">
                {/* SVG icon could go here */}
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Admin Controls</h3>
              <p className="text-gray-600">
                Powerful admin dashboard to manage users and monitor system activity.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-100 py-16 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already using CUBA Dashboard.
          </p>
          <a 
            href="/register" 
            className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 rounded-md font-medium"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
