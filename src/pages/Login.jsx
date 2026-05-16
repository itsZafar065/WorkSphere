import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-50 p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-white rounded-[40px] overflow-hidden shadow-2xl border border-white"
      >
        {/* Left Side - Form */}
        <div className="p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <span className="font-display font-bold text-2xl text-secondary-900">Antigravity</span>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-secondary-900 mb-2">Welcome Back</h1>
            <p className="text-secondary-500">Sign in to manage your premium workforce.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-secondary-700 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400 group-focus-within:text-primary-500 transition-colors" size={20} />
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-4 py-4 bg-secondary-50 border-2 border-transparent focus:bg-white focus:border-primary-200 focus:ring-4 focus:ring-primary-50 rounded-2xl transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-secondary-700 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400 group-focus-within:text-primary-500 transition-colors" size={20} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-secondary-50 border-2 border-transparent focus:bg-white focus:border-primary-200 focus:ring-4 focus:ring-primary-50 rounded-2xl transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500" />
                <span className="text-secondary-600">Remember me</span>
              </label>
              <a href="#" className="text-primary-600 font-semibold hover:underline">Forgot password?</a>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-2xl shadow-lg shadow-primary-200 transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
            >
              Sign In
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </form>

          <p className="mt-12 text-center text-secondary-500 text-sm">
            Don't have an account? <a href="#" className="text-primary-600 font-bold hover:underline">Contact Sales</a>
          </p>
        </div>

        {/* Right Side - Visuals */}
        <div className="hidden md:flex flex-col justify-center items-center p-12 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10 text-center max-w-sm">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/20 shadow-2xl"
            >
              <ShieldCheck size={40} className="text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-6">AI-Powered Workforce Intelligent Solutions</h2>
            <p className="text-primary-100 text-lg leading-relaxed">
              Experience the future of HR management with our state-of-the-art SaaS platform.
            </p>
          </div>

          {/* Social Proof Placeholder */}
          <div className="mt-20 flex items-center gap-6 opacity-60">
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
