import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { ShieldCheck, Mail, Lock } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="inline-flex p-3 bg-indigo-600 rounded-2xl text-white mb-4">
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
            <p className="text-slate-500 mt-2">Enter your credentials to access your vault.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="email" placeholder="name@company.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-indigo-100 transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-indigo-100 transition-all" />
              </div>
            </div>

            <Button className="w-full py-4 text-base">Sign In</Button>
          </form>

          <p className="text-center text-sm text-slate-500">
            Don't have an account? <Link to="/register" className="text-indigo-600 font-semibold hover:underline">Create one</Link>
          </p>
        </div>
      </div>

      {/* Right Side: Branding */}
      <div className="hidden lg:flex w-1/2 bg-slate-50 items-center justify-center p-12 border-l border-slate-200">
        <div className="max-w-lg text-center">
          <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
             {/* Replace with your illustration */}
             <div className="aspect-square bg-indigo-50 rounded-[2rem] flex items-center justify-center text-indigo-200 font-bold text-8xl">R</div>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">Decentralized Storage</h3>
          <p className="text-slate-500 mt-4 leading-relaxed">
            Your files are encrypted and distributed across the globe. No single point of failure, fully owned by you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;