import { cn } from "@/lib/utils";

export function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse flex p-4 space-x-4", className)}>
      <div className="rounded-full bg-slate-200 dark:bg-slate-800 h-10 w-10"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded"></div>
          <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
}
