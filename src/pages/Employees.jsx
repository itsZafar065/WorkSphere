import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Plus, MoreHorizontal, Mail, Phone } from 'lucide-react';
import { employees } from '../data/mockData';

const EmployeeCard = ({ employee, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className="bg-white p-6 rounded-3xl border border-secondary-100 shadow-premium hover:shadow-premium-hover transition-all group"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-sm">
        <img src={employee.avatar} alt={employee.name} className="w-full h-full object-cover" />
      </div>
      <button className="p-2 text-secondary-300 hover:text-secondary-900 transition-colors">
        <MoreHorizontal size={20} />
      </button>
    </div>
    
    <div className="mb-6">
      <h3 className="text-lg font-bold text-secondary-900">{employee.name}</h3>
      <p className="text-primary-600 font-medium text-sm">{employee.role}</p>
      <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-50 text-secondary-600 border border-secondary-100">
        {employee.department}
      </div>
    </div>

    <div className="space-y-3 pt-6 border-t border-secondary-50">
      <div className="flex items-center gap-3 text-secondary-500 text-sm">
        <Mail size={16} />
        <span className="truncate">{employee.name.toLowerCase().replace(' ', '.')}@company.com</span>
      </div>
      <div className="flex items-center gap-3 text-secondary-500 text-sm">
        <Phone size={16} />
        <span>+1 (555) 000-0000</span>
      </div>
    </div>

    <button className="w-full mt-6 py-3 bg-secondary-50 hover:bg-primary-50 hover:text-primary-600 text-secondary-600 font-semibold rounded-xl transition-all">
      View Profile
    </button>
  </motion.div>
);

const Employees = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Employees</h1>
          <p className="text-secondary-500 mt-1">Manage and view all your team members in one place.</p>
        </div>
        <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all flex items-center gap-2">
          <Plus size={20} />
          Add Employee
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, role or department..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-secondary-200 focus:border-primary-300 focus:ring-4 focus:ring-primary-50 rounded-2xl transition-all outline-none shadow-sm"
          />
        </div>
        <button className="px-6 py-3 bg-white border border-secondary-200 text-secondary-600 rounded-2xl font-semibold hover:bg-secondary-50 transition-all flex items-center gap-2 shadow-sm">
          <Filter size={18} />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {employees.map((employee, idx) => (
          <EmployeeCard key={employee.id} employee={employee} index={idx} />
        ))}
        {/* Fill more cards for demo */}
        {[5,6,7,8].map((id) => (
           <EmployeeCard 
            key={id} 
            employee={{...employees[0], id, name: `Employee ${id}`, avatar: `https://i.pravatar.cc/150?u=${id}`}} 
            index={id} 
          />
        ))}
      </div>
    </div>
  );
};

export default Employees;
