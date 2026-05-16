import React from 'react';
import { motion } from 'framer-motion';
import { User, Building, Bell, Shield, CreditCard, ChevronRight, Camera, Globe, Mail, Phone } from 'lucide-react';

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-secondary-900">Settings</h1>
        <p className="text-secondary-500 mt-1">Manage your account and platform preferences.</p>
      </div>

      {/* Profile Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-secondary-900 flex items-center gap-2">
            <User className="text-primary-600" size={20} />
            Profile Information
          </h2>
        </div>
        <div className="bg-white p-8 rounded-[32px] border border-secondary-100 shadow-premium">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10 pb-10 border-b border-secondary-50">
            <div className="relative">
              <div className="w-32 h-32 rounded-[40px] bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-4xl border-4 border-white shadow-xl overflow-hidden">
                AR
              </div>
              <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-white border border-secondary-100 rounded-2xl flex items-center justify-center text-secondary-600 shadow-lg hover:text-primary-600 transition-all">
                <Camera size={18} />
              </button>
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-secondary-900">Alex Rivera</h3>
              <p className="text-secondary-500 font-medium">Head of Human Resources • San Francisco, CA</p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-bold border border-primary-100">Super Admin</span>
                <span className="px-3 py-1 bg-secondary-50 text-secondary-600 rounded-full text-xs font-bold border border-secondary-100">Verified</span>
              </div>
            </div>
            <button className="px-6 py-2.5 bg-secondary-900 text-white rounded-xl font-bold hover:bg-black transition-all shadow-lg shadow-secondary-200">
              Edit Profile
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-secondary-700 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                <input type="text" defaultValue="Alex Rivera" className="w-full pl-12 pr-4 py-3 bg-secondary-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary-100" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-secondary-700 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                <input type="email" defaultValue="alex@antigravity.ai" className="w-full pl-12 pr-4 py-3 bg-secondary-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary-100" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-secondary-700 ml-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                <input type="text" defaultValue="+1 (555) 000-1234" className="w-full pl-12 pr-4 py-3 bg-secondary-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary-100" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-secondary-700 ml-1">Timezone</label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                <select className="w-full pl-12 pr-4 py-3 bg-secondary-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary-100 appearance-none">
                  <option>Pacific Time (US & Canada)</option>
                  <option>Eastern Time (US & Canada)</option>
                  <option>UTC +0</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Settings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className="p-8 bg-white rounded-[32px] border border-secondary-100 shadow-premium hover:shadow-premium-hover transition-all text-left flex items-center justify-between group">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Bell size={28} />
            </div>
            <div>
              <h3 className="font-bold text-secondary-900 text-lg">Notifications</h3>
              <p className="text-secondary-500 text-sm">Email and push preferences</p>
            </div>
          </div>
          <ChevronRight className="text-secondary-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" size={24} />
        </button>

        <button className="p-8 bg-white rounded-[32px] border border-secondary-100 shadow-premium hover:shadow-premium-hover transition-all text-left flex items-center justify-between group">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center">
              <Shield size={28} />
            </div>
            <div>
              <h3 className="font-bold text-secondary-900 text-lg">Security</h3>
              <p className="text-secondary-500 text-sm">Password and 2FA settings</p>
            </div>
          </div>
          <ChevronRight className="text-secondary-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" size={24} />
        </button>

        <button className="p-8 bg-white rounded-[32px] border border-secondary-100 shadow-premium hover:shadow-premium-hover transition-all text-left flex items-center justify-between group">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center">
              <Building size={28} />
            </div>
            <div>
              <h3 className="font-bold text-secondary-900 text-lg">Company Details</h3>
              <p className="text-secondary-500 text-sm">Business info and branding</p>
            </div>
          </div>
          <ChevronRight className="text-secondary-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" size={24} />
        </button>

        <button className="p-8 bg-white rounded-[32px] border border-secondary-100 shadow-premium hover:shadow-premium-hover transition-all text-left flex items-center justify-between group">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-secondary-900 text-white flex items-center justify-center">
              <CreditCard size={28} />
            </div>
            <div>
              <h3 className="font-bold text-secondary-900 text-lg">Subscription</h3>
              <p className="text-secondary-500 text-sm">Billing and plan management</p>
            </div>
          </div>
          <ChevronRight className="text-secondary-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" size={24} />
        </button>
      </div>

      <div className="flex justify-end gap-4 pt-8">
        <button className="px-8 py-3 bg-white border border-secondary-200 text-secondary-600 rounded-xl font-bold hover:bg-secondary-50 transition-all">
          Cancel
        </button>
        <button className="px-8 py-3 bg-primary-600 text-white rounded-xl font-bold shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
