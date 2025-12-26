import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import FileCard from "../components/FileCard";

const mockFiles = [
  {
    fileName: "Blockchain_Report.pdf",
    fileSize: "2.4 MB",
    uploadDate: "Sep 18, 2025",
    isOnChain: true,
  },
  {
    fileName: "Design_Wireframe.png",
    fileSize: "1.1 MB",
    uploadDate: "Sep 16, 2025",
    isOnChain: false,
  },
];

const Dashboard = () => {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        <TopBar />

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockFiles.map((file, idx) => (
            <FileCard key={idx} {...file} />
          ))}
        </section>
      </main>

      {/* Right Panel Placeholder */}
      <aside className="w-80 border-l border-slate-200 bg-white p-6 hidden xl:block">
        <p className="text-slate-400 text-sm">
          Select a file to view blockchain details
        </p>
      </aside>
    </div>
  );
};

export default Dashboard;
