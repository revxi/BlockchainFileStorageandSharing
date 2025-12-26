import { HardDrive, Clock, Share2, Trash2 } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-20 h-screen bg-white border-r border-slate-200 flex flex-col items-center py-6 gap-8">
      <div className="text-indigo-600 font-bold text-xl">S&S</div>

      <nav className="flex flex-col gap-6 text-slate-500">
        <HardDrive className="hover:text-indigo-600 cursor-pointer" />
        <Clock className="hover:text-indigo-600 cursor-pointer" />
        <Share2 className="hover:text-indigo-600 cursor-pointer" />
        <Trash2 className="hover:text-indigo-600 cursor-pointer" />
      </nav>
    </aside>
  );
};

export default Sidebar;
