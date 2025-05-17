import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';

interface UserStats {
  totalVisits: number;
  activeProjects: number;
  tasksCompleted: number;
  upcomingDeadlines: number;
}

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<UserStats>({
    totalVisits: 0,
    activeProjects: 0,
    tasksCompleted: 0,
    upcomingDeadlines: 0
  });

  // This is just mock data for the dashboard
  useEffect(() => {
    // In a real app, we would fetch this data from the API
    setStats({
      totalVisits: 42,
      activeProjects: 5,
      tasksCompleted: 18,
      upcomingDeadlines: 3
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Welcome to your Dashboard, {user?.name}!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Visits</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.totalVisits}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Active Projects</h3>
          <p className="text-3xl font-bold text-green-600">{stats.activeProjects}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Tasks Completed</h3>
          <p className="text-3xl font-bold text-purple-600">{stats.tasksCompleted}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Upcoming Deadlines</h3>
          <p className="text-3xl font-bold text-red-600">{stats.upcomingDeadlines}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium">Project Alpha updated</p>
              <p className="text-sm text-gray-500">Yesterday at 2:30 PM</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium">Task "Create wireframes" completed</p>
              <p className="text-sm text-gray-500">Yesterday at 10:15 AM</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-medium">New comment on Project Beta</p>
              <p className="text-sm text-gray-500">2 days ago</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Upcoming Tasks</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-3 flex justify-between">
              <span>Finalize presentation</span>
              <span className="text-red-600 font-medium">Tomorrow</span>
            </li>
            <li className="py-3 flex justify-between">
              <span>Client meeting</span>
              <span className="text-orange-600 font-medium">In 3 days</span>
            </li>
            <li className="py-3 flex justify-between">
              <span>Review project requirements</span>
              <span className="text-yellow-600 font-medium">In 5 days</span>
            </li>
            <li className="py-3 flex justify-between">
              <span>Team weekly sync</span>
              <span className="text-green-600 font-medium">In 7 days</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
