import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { User, Mail, Lock, ShieldCheck } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="inline-flex p-3 bg-indigo-600 rounded-2xl text-white mb-4">
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Create Account</h2>
            <p className="text-slate-500 mt-2">Join Reverie and secure your data on-chain.</p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-indigo-100 transition-all" />
              </div>
            </div>

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

            <div className="flex items-start gap-2 py-2">
              <input type="checkbox" className="mt-1 rounded text-indigo-600 focus:ring-indigo-500" />
              <p className="text-xs text-slate-500 leading-normal">
                I agree to the <span className="text-indigo-600 font-medium">Terms of Service</span> and acknowledge that data stored on-chain is permanent.
              </p>
            </div>

            <Button className="w-full py-4 text-base">Create Account</Button>
          </form>

          <p className="text-center text-sm text-slate-500">
            Already have an account? <Link to="/login" className="text-indigo-600 font-semibold hover:underline">Sign In</Link>
          </p>
        </div>
      </div>

      {/* Right Side: Visual Branding */}
      <div className="hidden lg:flex w-1/2 bg-slate-50 items-center justify-center p-12 border-l border-slate-200">
        <div className="max-w-lg text-center">
          <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200/40 border border-slate-100 mb-10">
             <div className="w-full aspect-video bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-300">
                <ShieldCheck size={80} strokeWidth={1} />
             </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">Your Privacy, Decentralized</h3>
          <p className="text-slate-500 mt-4 leading-relaxed">
            Reverie uses AES-256 encryption before your files ever leave your browser. Only your private key can decrypt your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;