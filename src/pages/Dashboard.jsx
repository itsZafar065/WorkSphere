import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Clock, 
  Calendar,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { stats, attendanceData } from '../data/mockData';

const iconMap = {
  users: Users,
  briefcase: Briefcase,
  clock: Clock,
  calendar: Calendar,
};

const StatCard = ({ label, value, change, icon, index }) => {
  const Icon = iconMap[icon];
  const isPositive = change.startsWith('+');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-2xl border border-secondary-100 shadow-premium hover:shadow-premium-hover transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${isPositive ? 'bg-primary-50 text-primary-600' : 'bg-orange-50 text-orange-600'} group-hover:scale-110 transition-transform`}>
          <Icon size={24} />
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {change}
        </div>
      </div>
      <h3 className="text-secondary-500 font-medium">{label}</h3>
      <p className="text-3xl font-bold text-secondary-900 mt-1">{value}</p>
    </motion.div>
  );
};

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Welcome back, Alex! 👋</h1>
          <p className="text-secondary-500 mt-1">Here's what's happening with your workforce today.</p>
        </div>
        <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all active:scale-95 flex items-center gap-2 w-fit">
          <TrendingUp size={18} />
          View Reports
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} index={idx} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Attendance Area Chart */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 bg-white p-6 rounded-3xl border border-secondary-100 shadow-premium"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-secondary-900">Attendance Overview</h2>
            <select className="bg-secondary-50 border-none rounded-lg px-3 py-1 text-sm text-secondary-600 focus:ring-2 focus:ring-primary-100 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={attendanceData}>
                <defs>
                  <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  itemStyle={{ color: '#3b82f6' }}
                />
                <Area type="monotone" dataKey="present" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorPresent)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Project Progress (Bar Chart) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-3xl border border-secondary-100 shadow-premium"
        >
          <h2 className="text-xl font-bold text-secondary-900 mb-8">Project Activity</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="present" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="absent" fill="#e2e8f0" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary-500"></div>
              <span className="text-sm text-secondary-500 font-medium">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary-200"></div>
              <span className="text-sm text-secondary-500 font-medium">Pending</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Activity Feed / Employees Table Preview */}
      <div className="bg-white p-8 rounded-3xl border border-secondary-100 shadow-premium">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-secondary-900">Recent Activity</h2>
          <button className="text-primary-600 font-semibold text-sm hover:underline">View All</button>
        </div>
        <div className="space-y-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-secondary-50 flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
                <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="avatar" />
              </div>
              <div className="flex-1">
                <p className="text-secondary-900 font-semibold">
                  Employee <span className="text-primary-600">#{i + 1}</span> updated their attendance record.
                </p>
                <p className="text-secondary-400 text-sm mt-0.5">2 hours ago</p>
              </div>
              <button className="p-2 text-secondary-300 group-hover:text-secondary-900 transition-colors">
                <ArrowUpRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
