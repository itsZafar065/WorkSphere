import React, { useState } from 'react';
import { motion, Reorder, AnimatePresence } from 'framer-motion';
import { Plus, MoreHorizontal, Calendar, MessageSquare, Paperclip, ChevronRight } from 'lucide-react';

const initialTasks = {
  todo: [
    { id: '1', title: 'Onboard new UI designers', priority: 'High', date: 'May 20', comments: 12, files: 4 },
    { id: '2', title: 'Review Q2 payroll reports', priority: 'Medium', date: 'May 22', comments: 5, files: 2 },
  ],
  inProgress: [
    { id: '3', title: 'Company policy update', priority: 'High', date: 'May 18', comments: 8, files: 10 },
  ],
  completed: [
    { id: '4', title: 'Performance review cycle', priority: 'Low', date: 'May 15', comments: 45, files: 12 },
  ],
};

const TaskCard = ({ task }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -4 }}
    className="bg-white p-5 rounded-2xl border border-secondary-100 shadow-sm hover:shadow-premium transition-all cursor-grab active:cursor-grabbing group"
  >
    <div className="flex justify-between items-start mb-3">
      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
        task.priority === 'High' ? 'bg-red-50 text-red-600' :
        task.priority === 'Medium' ? 'bg-orange-50 text-orange-600' : 'bg-primary-50 text-primary-600'
      }`}>
        {task.priority} Priority
      </span>
      <button className="text-secondary-300 hover:text-secondary-900 opacity-0 group-hover:opacity-100 transition-opacity">
        <MoreHorizontal size={16} />
      </button>
    </div>
    
    <h4 className="font-bold text-secondary-900 mb-4 leading-tight">{task.title}</h4>
    
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center -space-x-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-secondary-100 overflow-hidden shadow-sm">
            <img src={`https://i.pravatar.cc/150?u=${task.id + i}`} alt="" />
          </div>
        ))}
      </div>
      
      <div className="flex items-center gap-3 text-secondary-400">
        <div className="flex items-center gap-1 text-[11px] font-medium">
          <MessageSquare size={14} />
          {task.comments}
        </div>
        <div className="flex items-center gap-1 text-[11px] font-medium">
          <Paperclip size={14} />
          {task.files}
        </div>
      </div>
    </div>
  </motion.div>
);

const Column = ({ title, tasks, id }) => (
  <div className="flex-1 min-w-[320px] bg-secondary-50/50 rounded-[32px] p-4 border border-secondary-100/50">
    <div className="flex items-center justify-between mb-6 px-4">
      <div className="flex items-center gap-3">
        <h3 className="font-bold text-secondary-900 text-lg">{title}</h3>
        <span className="w-6 h-6 rounded-full bg-white text-secondary-400 text-xs font-bold flex items-center justify-center border border-secondary-100">
          {tasks.length}
        </span>
      </div>
      <button className="w-8 h-8 rounded-lg hover:bg-white flex items-center justify-center text-secondary-400 hover:text-primary-600 transition-all">
        <Plus size={20} />
      </button>
    </div>
    
    <div className="space-y-4">
      <AnimatePresence>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </AnimatePresence>
    </div>
    
    <button className="w-full mt-4 py-3 border-2 border-dashed border-secondary-200 rounded-2xl text-secondary-400 font-semibold hover:border-primary-300 hover:text-primary-600 hover:bg-white transition-all flex items-center justify-center gap-2 text-sm">
      <Plus size={18} />
      Add New Task
    </button>
  </div>
);

const Tasks = () => {
  return (
    <div className="h-full flex flex-col space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Task Management</h1>
          <p className="text-secondary-500 mt-1">Keep track of your HR workflows and departmental tasks.</p>
        </div>
        <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-secondary-100 shadow-sm">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-semibold shadow-md shadow-primary-100">Board View</button>
          <button className="px-4 py-2 text-secondary-500 hover:text-secondary-900 text-sm font-semibold transition-colors">List View</button>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto pb-8 -mx-8 px-8 flex gap-8 min-h-[600px]">
        <Column title="To Do" tasks={initialTasks.todo} id="todo" />
        <Column title="In Progress" tasks={initialTasks.inProgress} id="inProgress" />
        <Column title="Completed" tasks={initialTasks.completed} id="completed" />
      </div>
    </div>
  );
};

export default Tasks;
