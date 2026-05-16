import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, List, Plus, Search, MoreVertical, Calendar, Clock, CheckCircle2 } from 'lucide-react';

const projects = [
  { id: 1, title: 'HR Portal Redesign', client: 'Internal', progress: 75, members: 8, dueDate: 'May 30, 2026', status: 'In Progress' },
  { id: 2, title: 'AI Resume Screener', client: 'Tech Team', progress: 40, members: 12, dueDate: 'June 15, 2026', status: 'In Progress' },
  { id: 3, title: 'Q2 Performance Reviews', client: 'Management', progress: 100, members: 4, dueDate: 'May 10, 2026', status: 'Completed' },
  { id: 4, title: 'Employee Onboarding v2', client: 'Operations', progress: 15, members: 6, dueDate: 'July 01, 2026', status: 'Planning' },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white p-6 rounded-[32px] border border-secondary-100 shadow-premium hover:shadow-premium-hover transition-all group"
  >
    <div className="flex justify-between items-start mb-6">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
        project.status === 'Completed' ? 'bg-green-50 text-green-600' : 
        project.status === 'Planning' ? 'bg-orange-50 text-orange-600' : 'bg-primary-50 text-primary-600'
      }`}>
        <LayoutGrid size={24} />
      </div>
      <button className="text-secondary-300 hover:text-secondary-900 transition-colors">
        <MoreVertical size={20} />
      </button>
    </div>

    <div className="mb-6">
      <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">{project.title}</h3>
      <p className="text-secondary-500 font-medium text-sm mt-1">{project.client}</p>
    </div>

    <div className="space-y-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-semibold text-secondary-700">Progress</span>
        <span className="font-bold text-primary-600">{project.progress}%</span>
      </div>
      <div className="w-full h-2 bg-secondary-50 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${project.progress}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`h-full rounded-full ${
            project.status === 'Completed' ? 'bg-green-500' : 'bg-primary-500'
          }`}
        />
      </div>
    </div>

    <div className="mt-8 flex items-center justify-between">
      <div className="flex items-center -space-x-2">
        {[1, 2, 3, 4].slice(0, project.members).map((i) => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-secondary-100 overflow-hidden shadow-sm">
            <img src={`https://i.pravatar.cc/150?u=${project.id + i + 20}`} alt="" />
          </div>
        ))}
        {project.members > 4 && (
          <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary-50 flex items-center justify-center text-[10px] font-bold text-secondary-500">
            +{project.members - 4}
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-2 text-secondary-400 text-xs font-semibold">
        <Calendar size={14} />
        {project.dueDate}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Projects</h1>
          <p className="text-secondary-500 mt-1">Track and manage active organizational projects.</p>
        </div>
        <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all flex items-center gap-2">
          <Plus size={20} />
          Create Project
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex bg-white p-1 rounded-xl border border-secondary-100 shadow-sm">
          <button className="p-2 bg-primary-50 text-primary-600 rounded-lg"><LayoutGrid size={18} /></button>
          <button className="p-2 text-secondary-400 hover:text-secondary-600 rounded-lg"><List size={18} /></button>
        </div>
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-secondary-200 focus:border-primary-300 focus:ring-4 focus:ring-primary-50 rounded-2xl transition-all outline-none shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
