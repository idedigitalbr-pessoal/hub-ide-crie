import { cn } from "@/lib/utils";

export function DataTablePlaceholder() {
  return (
    <div className="w-full border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-950">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 bg-slate-50 dark:bg-slate-900 dark:text-slate-400 uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">Nome / Item</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Data</th>
              <th className="px-6 py-4 text-right font-medium">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse"></div>
                    <div className="space-y-1.5">
                      <div className="h-4 w-24 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
                      <div className="h-3 w-16 bg-slate-50 dark:bg-slate-800/50 rounded animate-pulse"></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-5 w-16 bg-slate-100 dark:bg-slate-800 rounded-full animate-pulse"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 w-20 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="inline-block h-6 w-6 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
