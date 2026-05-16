import React from 'react';
import { Search, Bell, Menu, User } from 'lucide-react';

const TopNavbar = ({ onMenuClick }) => {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-secondary-100 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-secondary-50 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>
        
        <div className="relative max-w-md w-full hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="w-full pl-10 pr-4 py-2 bg-secondary-50 border-transparent focus:bg-white focus:border-primary-300 focus:ring-4 focus:ring-primary-50 rounded-xl transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-secondary-500 hover:bg-secondary-50 hover:text-secondary-900 rounded-xl transition-all">
          <Bell size={22} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-px bg-secondary-100 mx-2"></div>
        
        <div className="flex items-center gap-3 pl-2 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-secondary-900 leading-none">Alex Rivera</p>
            <p className="text-xs text-secondary-500 mt-1">HR Admin</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 font-bold border-2 border-white shadow-sm group-hover:shadow-md transition-all">
            AR
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
