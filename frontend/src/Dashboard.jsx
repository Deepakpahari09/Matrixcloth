import { BarChart, DollarSign, Moon, ShoppingCart, Sun, Users } from "lucide-react";
import { useEffect } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import useDashboardStore from "./store";

export default function Dashboard() {
  const { stats, darkMode, toggleDarkMode, updateStats } = useDashboardStore();

  useEffect(() => {
    const interval = setInterval(updateStats, 3000); // Auto-update stats every 3 sec
    return () => clearInterval(interval);
  }, [updateStats]);

  const chartData = [
    { name: "Jan", revenue: 5000, orders: 150 },
    { name: "Feb", revenue: 8000, orders: 200 },
    { name: "Mar", revenue: 12000, orders: 250 },
    { name: "Apr", revenue: 18000, orders: 280 },
    { name: "May", revenue: stats.revenue, orders: stats.orders },
  ];

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen flex`}>
      
      {/* Sidebar */}
      <aside className={`w-64 p-6 ${darkMode ? "bg-gray-800" : "bg-blue-600 text-white"} space-y-6`}>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
            <BarChart size={20} /> <span>Overview</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
            <Users size={20} /> <span>Users</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
            <ShoppingCart size={20} /> <span>Orders</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
            <DollarSign size={20} /> <span>Revenue</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Welcome to Dashboard</h2>
          <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <StatCard title="Total Users" value={stats.users} color="text-blue-600" />
          <StatCard title="Orders" value={stats.orders} color="text-green-600" />
          <StatCard title="Revenue" value={`$${stats.revenue}`} color="text-yellow-600" />
          <StatCard title="Growth" value={`${stats.growth.toFixed(2)}%`} color="text-purple-600" />
        </div>

        {/* Chart Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Revenue & Orders Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#2563EB" strokeWidth={2} />
              <Line type="monotone" dataKey="orders" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}

// Statistics Card Component
const StatCard = ({ title, value, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
    <p className={`text-3xl font-bold ${color} mt-2`}>{value}</p>
  </div>
);
