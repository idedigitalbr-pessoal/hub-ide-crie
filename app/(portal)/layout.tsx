import { PortalSidebar } from "@/components/portal/portal-sidebar";
import { PortalTopbar } from "@/components/portal/portal-topbar";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-900">
      <PortalSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <PortalTopbar />
        <main className="flex-1 overflow-y-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
