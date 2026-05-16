import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Search, Filter, Download, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { attendanceData, employees } from '../data/mockData';

const Attendance = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Attendance</h1>
          <p className="text-secondary-500 mt-1">Track daily attendance and working hours.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-secondary-200 text-secondary-600 rounded-xl font-semibold hover:bg-secondary-50 transition-all flex items-center gap-2 shadow-sm">
            <Download size={18} />
            Export
          </button>
          <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all flex items-center gap-2">
            <Calendar size={18} />
            Today's Log
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 bg-white p-8 rounded-3xl border border-secondary-100 shadow-premium"
        >
          <h2 className="text-xl font-bold text-secondary-900 mb-8">Weekly Attendance Trend</h2>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="present" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="bg-white p-8 rounded-3xl border border-secondary-100 shadow-premium flex flex-col justify-center">
          <h2 className="text-xl font-bold text-secondary-900 mb-6 text-center">Quick Stats</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-2xl border border-green-100">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" size={24} />
                <span className="font-semibold text-green-900">Present Today</span>
              </div>
              <span className="text-2xl font-bold text-green-600">114</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-2xl border border-red-100">
              <div className="flex items-center gap-3">
                <XCircle className="text-red-600" size={24} />
                <span className="font-semibold text-red-900">Absent Today</span>
              </div>
              <span className="text-2xl font-bold text-red-600">10</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-primary-50 rounded-2xl border border-primary-100">
              <div className="flex items-center gap-3">
                <Clock className="text-primary-600" size={24} />
                <span className="font-semibold text-primary-900">Late Arrivals</span>
              </div>
              <span className="text-2xl font-bold text-primary-600">06</span>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-3xl border border-secondary-100 shadow-premium overflow-hidden">
        <div className="p-8 border-b border-secondary-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-secondary-900">Recent Logs</h2>
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
            <input 
              type="text" 
              placeholder="Filter by employee..." 
              className="w-full pl-10 pr-4 py-2 bg-secondary-50 rounded-xl outline-none focus:ring-2 focus:ring-primary-100 transition-all"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-secondary-50/50">
                <th className="px-8 py-4 text-sm font-semibold text-secondary-500 uppercase tracking-wider">Employee</th>
                <th className="px-8 py-4 text-sm font-semibold text-secondary-500 uppercase tracking-wider">Date</th>
                <th className="px-8 py-4 text-sm font-semibold text-secondary-500 uppercase tracking-wider">Check In</th>
                <th className="px-8 py-4 text-sm font-semibold text-secondary-500 uppercase tracking-wider">Check Out</th>
                <th className="px-8 py-4 text-sm font-semibold text-secondary-500 uppercase tracking-wider">Status</th>
                <th className="px-8 py-4 text-sm font-semibold text-secondary-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-50">
              {employees.map((emp, i) => (
                <tr key={emp.id} className="hover:bg-secondary-50/30 transition-colors group">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <img src={emp.avatar} className="w-10 h-10 rounded-full border border-secondary-100" alt="" />
                      <div>
                        <p className="font-semibold text-secondary-900">{emp.name}</p>
                        <p className="text-xs text-secondary-500">{emp.department}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-secondary-600 font-medium">May 17, 2026</td>
                  <td className="px-8 py-4 text-secondary-600">09:15 AM</td>
                  <td className="px-8 py-4 text-secondary-600">06:05 PM</td>
                  <td className="px-8 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      i % 3 === 0 ? 'bg-green-100 text-green-700' : 
                      i % 3 === 1 ? 'bg-orange-100 text-orange-700' : 'bg-primary-100 text-primary-700'
                    }`}>
                      {i % 3 === 0 ? 'On Time' : i % 3 === 1 ? 'Late' : 'Remote'}
                    </span>
                  </td>
                  <td className="px-8 py-4">
                    <button className="text-secondary-300 hover:text-primary-600 transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const MoreHorizontal = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
);

export default Attendance;
