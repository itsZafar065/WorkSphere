import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  CalendarCheck, 
  CheckSquare, 
  Briefcase, 
  CreditCard, 
  BarChart3, 
  FileText, 
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Employees', path: '/employees' },
  { icon: CalendarCheck, label: 'Attendance', path: '/attendance' },
  { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
  { icon: Briefcase, label: 'Projects', path: '/projects' },
  { icon: CreditCard, label: 'Payroll', path: '/payroll' },
  { icon: FileText, label: 'Leaves', path: '/leaves' },
  { icon: BarChart3, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.div 
      initial={false}
      animate={{ width: isCollapsed ? 80 : 260 }}
      className="h-screen bg-white border-r border-secondary-200 flex flex-col sticky top-0 transition-all duration-300 ease-in-out"
    >
      {/* Logo Section */}
      <div className="p-6 flex items-center justify-between">
        {!isCollapsed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="font-display font-bold text-xl text-secondary-900">Antigravity</span>
          </motion.div>
        )}
        {isCollapsed && (
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-xl">A</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 group
              ${isActive 
                ? 'bg-primary-50 text-primary-600' 
                : 'text-secondary-500 hover:bg-secondary-50 hover:text-secondary-900'}
            `}
          >
            <item.icon size={22} className="shrink-0" />
            {!isCollapsed && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-medium"
              >
                {item.label}
              </motion.span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer / Collapse Toggle */}
      <div className="p-4 border-t border-secondary-100">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center gap-4 px-3 py-3 rounded-xl text-secondary-500 hover:bg-secondary-50 hover:text-secondary-900 transition-all duration-200"
        >
          {isCollapsed ? <ChevronRight size={22} className="mx-auto" /> : (
            <>
              <ChevronLeft size={22} />
              <span className="font-medium">Collapse</span>
            </>
          )}
        </button>
        
        <button className="w-full flex items-center gap-4 px-3 py-3 mt-2 rounded-xl text-red-500 hover:bg-red-50 transition-all duration-200">
          <LogOut size={22} className={isCollapsed ? "mx-auto" : ""} />
          {!isCollapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
