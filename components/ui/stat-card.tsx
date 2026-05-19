import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  icon?: LucideIcon;
  progress?: number;
  className?: string;
}

export function StatCard({ title, value, trend, trendValue, icon: Icon, progress, className }: StatCardProps) {
  return (
    <div className={cn("bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between", className)}>
      <div className="flex justify-between items-start">
        <div className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">
          {title}
        </div>
        {Icon && <Icon className="w-5 h-5 text-slate-400" />}
      </div>
      <div>
        <div className="text-2xl font-bold mt-3 text-slate-900 dark:text-slate-50">{value}</div>
        {trendValue && (
          <div className="mt-2 flex items-center gap-2">
            <span className={cn(
              "text-xs font-bold px-1.5 py-0.5 rounded",
              trend === "up" && "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
              trend === "down" && "bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
              trend === "neutral" && "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
            )}>
              {trendValue}
            </span>
          </div>
        )}
      </div>

      {typeof progress === "number" && (
        <div className="mt-4 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 dark:bg-indigo-400 transition-all"
            style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}
