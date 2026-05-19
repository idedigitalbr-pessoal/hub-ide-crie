import { SidebarNav } from "@/components/layout/sidebar-nav";
import { Topbar } from "@/components/layout/topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-[#f8fafc] dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans overflow-hidden">
      <SidebarNav />
      <div className="flex-1 flex flex-col min-w-0 h-full">
        <Topbar />
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
