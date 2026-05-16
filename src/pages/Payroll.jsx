import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ArrowUpRight, DollarSign, FileText, Download, TrendingUp, Wallet, Banknote } from 'lucide-react';
import { employees } from '../data/mockData';

const Payroll = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Payroll Management</h1>
          <p className="text-secondary-500 mt-1">Review and process monthly salaries and bonuses.</p>
        </div>
        <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all flex items-center gap-2">
          <Banknote size={20} />
          Run Payroll
        </button>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 p-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-[40px] text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-12">
              <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20">
                <Wallet size={24} />
              </div>
              <span className="text-primary-100 font-semibold bg-white/10 px-4 py-1 rounded-full text-sm backdrop-blur-md border border-white/10">Next Pay Date: June 01, 2026</span>
            </div>
            <p className="text-primary-100 font-medium mb-2">Total Monthly Expenditure</p>
            <h2 className="text-5xl font-bold mb-8">$485,250.00</h2>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-xs text-primary-100">Monthly Change</p>
                  <p className="font-bold">+4.2%</p>
                </div>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <DollarSign size={20} />
                </div>
                <div>
                  <p className="text-xs text-primary-100">Avg. Salary</p>
                  <p className="font-bold">$7,450</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="bg-white p-8 rounded-[40px] border border-secondary-100 shadow-premium flex flex-col justify-center">
          <h3 className="text-xl font-bold text-secondary-900 mb-6">Payment Status</h3>
          <div className="space-y-4">
            {[
              { label: 'Paid', count: 118, color: 'bg-green-500', percent: 95 },
              { label: 'Pending', count: 4, color: 'bg-orange-500', percent: 3 },
              { label: 'Processing', count: 2, color: 'bg-primary-500', percent: 2 }
            ].map((status, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary-600 font-semibold">{status.label}</span>
                  <span className="text-secondary-900 font-bold">{status.count}</span>
                </div>
                <div className="w-full h-1.5 bg-secondary-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${status.percent}%` }}
                    className={`h-full ${status.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Salary Table */}
      <div className="bg-white rounded-3xl border border-secondary-100 shadow-premium overflow-hidden">
        <div className="p-8 border-b border-secondary-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-secondary-900">Salary Details</h2>
          <button className="text-primary-600 font-semibold text-sm flex items-center gap-2 hover:underline">
            <Download size={16} />
            Download All Slips
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-secondary-50/50">
                <th className="px-8 py-4 text-sm font-semibold text-secondary-500 uppercase tracking-wider">Employee</th>
                <th className="px-8 py-4 text-sm font-semibold text-secondary-500 uppercase tracking-wider">Base Salary</th>
                <th className="px-8 py-4 text-sm font-semibold text-secondary-500 uppercase tracking-wider">Bonus</th>
                <th className="px-8 py-4 text-sm font-semibold text-secondary-500 uppercase tracking-wider">Net Payable</th>
                <th className="px-8 py-4 text-sm font-semibold text-secondary-500 uppercase tracking-wider">Status</th>
                <th className="px-8 py-4 text-sm font-semibold text-secondary-500 uppercase tracking-wider">Slip</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-50">
              {employees.map((emp, i) => (
                <tr key={emp.id} className="hover:bg-secondary-50/30 transition-colors">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary-100 overflow-hidden">
                        <img src={emp.avatar} alt="" />
                      </div>
                      <span className="font-semibold text-secondary-900">{emp.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-secondary-600 font-medium">$8,500.00</td>
                  <td className="px-8 py-4 text-green-600 font-medium">+$500.00</td>
                  <td className="px-8 py-4 text-secondary-900 font-bold">$9,000.00</td>
                  <td className="px-8 py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold">Paid</span>
                  </td>
                  <td className="px-8 py-4">
                    <button className="p-2 text-secondary-300 hover:text-primary-600 transition-colors">
                      <FileText size={18} />
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

export default Payroll;
