import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { Download, Filter, TrendingUp, Users, Clock, Star } from 'lucide-react';

const data = [
  { month: 'Jan', performance: 85, hiring: 12 },
  { month: 'Feb', performance: 88, hiring: 15 },
  { month: 'Mar', performance: 92, hiring: 8 },
  { month: 'Apr', performance: 90, hiring: 20 },
  { month: 'May', performance: 95, hiring: 10 },
];

const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'];

const Reports = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Performance & Analytics</h1>
          <p className="text-secondary-500 mt-1">Advanced AI-driven insights for your workforce.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-secondary-200 text-secondary-600 rounded-xl font-semibold hover:bg-secondary-50 transition-all flex items-center gap-2 shadow-sm">
            <Filter size={18} />
            Filters
          </button>
          <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all flex items-center gap-2">
            <Download size={18} />
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Trend */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-[32px] border border-secondary-100 shadow-premium"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-secondary-900 flex items-center gap-2">
              <Star className="text-orange-500" size={20} />
              Avg. Performance Score
            </h2>
            <span className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-lg text-sm">+4.5%</span>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="performance" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorPerf)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Hiring Trend */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-[32px] border border-secondary-100 shadow-premium"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-secondary-900 flex items-center gap-2">
              <Users className="text-primary-600" size={20} />
              Hiring Rate
            </h2>
            <span className="text-secondary-400 font-medium text-sm">Target: 15/mo</span>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <Tooltip 
                   cursor={{fill: '#f8fafc'}}
                   contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="hiring" fill="#3b82f6" radius={[10, 10, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Department Wise Performance */}
      <div className="bg-white p-8 rounded-[32px] border border-secondary-100 shadow-premium">
        <h2 className="text-xl font-bold text-secondary-900 mb-8">Department Efficiency</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Engineering', score: 94, trend: '+2%' },
            { name: 'Design', score: 88, trend: '+5%' },
            { name: 'Marketing', score: 82, trend: '-1%' },
            { name: 'Sales', score: 91, trend: '+3%' },
          ].map((dept, i) => (
            <div key={i} className="p-6 bg-secondary-50 rounded-2xl border border-secondary-100 group hover:bg-white hover:shadow-lg transition-all">
              <p className="text-secondary-500 font-semibold text-sm mb-2">{dept.name}</p>
              <div className="flex items-end justify-between">
                <h4 className="text-3xl font-bold text-secondary-900">{dept.score}%</h4>
                <span className={`text-xs font-bold ${dept.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {dept.trend}
                </span>
              </div>
              <div className="w-full h-1.5 bg-secondary-200 rounded-full mt-4 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${dept.score}%` }}
                  className="h-full bg-primary-600"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
