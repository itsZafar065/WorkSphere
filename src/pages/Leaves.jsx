import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, XCircle, Clock, ChevronRight, User, Plus } from 'lucide-react';
import { employees } from '../data/mockData';

const leaveRequests = [
  { id: 1, name: 'Mike Johnson', type: 'Sick Leave', duration: '3 Days', dates: 'May 18 - May 20', status: 'Pending', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 2, name: 'Jane Smith', type: 'Vacation', duration: '5 Days', dates: 'June 01 - June 05', status: 'Approved', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Sarah Wilson', type: 'Emergency', duration: '1 Day', dates: 'May 17', status: 'Declined', avatar: 'https://i.pravatar.cc/150?u=4' },
];

const LeaveRequestCard = ({ request, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white p-6 rounded-3xl border border-secondary-100 shadow-premium hover:shadow-premium-hover transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
  >
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-sm">
        <img src={request.avatar} alt={request.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-secondary-900">{request.name}</h3>
        <p className="text-secondary-500 text-sm flex items-center gap-1">
          <User size={14} />
          {request.type}
        </p>
      </div>
    </div>

    <div className="flex flex-col md:items-center">
      <p className="text-secondary-900 font-bold">{request.dates}</p>
      <p className="text-secondary-400 text-sm font-medium">{request.duration}</p>
    </div>

    <div className="flex items-center gap-4">
      <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
        request.status === 'Approved' ? 'bg-green-100 text-green-700' : 
        request.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
      }`}>
        {request.status}
      </span>
      
      {request.status === 'Pending' && (
        <div className="flex gap-2">
          <button className="p-2 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all shadow-sm">
            <CheckCircle size={20} />
          </button>
          <button className="p-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm">
            <XCircle size={20} />
          </button>
        </div>
      )}
      
      {request.status !== 'Pending' && (
        <button className="p-2 text-secondary-300 hover:text-secondary-900 transition-colors">
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  </motion.div>
);

const Leaves = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Leave Requests</h1>
          <p className="text-secondary-500 mt-1">Review and manage employee time-off applications.</p>
        </div>
        <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all flex items-center gap-2">
          <Plus size={20} />
          New Application
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Pending Requests', value: '12', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: 'Approved this Month', value: '45', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Declined Requests', value: '03', icon: XCircle, color: 'text-red-600', bg: 'bg-red-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-secondary-100 shadow-premium flex items-center gap-6">
            <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
              <stat.icon size={28} />
            </div>
            <div>
              <p className="text-secondary-500 font-semibold text-sm">{stat.label}</p>
              <h4 className="text-3xl font-bold text-secondary-900">{stat.value}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between px-4">
          <h2 className="text-xl font-bold text-secondary-900">Recent Applications</h2>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-xs font-bold border border-primary-100">All</button>
            <button className="px-4 py-1.5 bg-white text-secondary-500 rounded-full text-xs font-bold border border-secondary-100 hover:bg-secondary-50 transition-all">Pending</button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {leaveRequests.map((req, idx) => (
            <LeaveRequestCard key={req.id} request={req} index={idx} />
          ))}
          {/* Mock extra requests */}
          {[4, 5].map((id) => (
            <LeaveRequestCard 
              key={id} 
              request={{...leaveRequests[0], id, status: 'Pending', name: `Employee ${id}`, avatar: `https://i.pravatar.cc/150?u=${id + 30}`}} 
              index={id} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaves;
