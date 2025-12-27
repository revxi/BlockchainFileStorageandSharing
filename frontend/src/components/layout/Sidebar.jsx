import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderOpen, 
  Share2, 
  Clock, 
  Trash2, 
  Shield 
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: FolderOpen, label: 'My Vault', path: '/vault' },
    { icon: Share2, label: 'Shared', path: '/shared' },
    { icon: Clock, label: 'Recent', path: '/recent' },
    { icon: Trash2, label: 'Trash', path: '/trash' },
  ];

  return (
    <aside className="w-64 h-screen sticky top-0 bg-white border-r border-slate-200 flex flex-col p-6">
      {/* Brand */}
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-100">
          <Shield size={22} fill="currentColor" fillOpacity={0.2} />
        </div>
        <span className="text-xl font-bold text-slate-800 tracking-tight">Reverie</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
              ${isActive 
                ? 'bg-indigo-50 text-indigo-600' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
            `}
          >
            <item.icon size={20} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Profile/Status Placeholder */}
      <div className="mt-auto pt-6 border-t border-slate-100">
        <div className="bg-slate-50 rounded-2xl p-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Storage Status</p>
          <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 w-2/3" />
          </div>
          <p className="text-[11px] text-slate-500 mt-2">64% of IPFS node used</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;