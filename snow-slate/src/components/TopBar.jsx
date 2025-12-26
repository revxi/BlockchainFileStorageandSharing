import { Search, Upload } from "lucide-react";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-xl font-semibold text-slate-800">Your Files</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
          <input
            placeholder="Search files..."
            className="pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 shadow-sm">
          <Upload size={16} />
          Upload
        </button>
      </div>
    </div>
  );
};

export default TopBar;
