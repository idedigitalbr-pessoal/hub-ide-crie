import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items, className }: { items: BreadcrumbItem[], className?: string }) {
  return (
    <nav className={cn("flex items-center text-sm text-slate-500 dark:text-slate-400", className)} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/dashboard" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-slate-400" />
            {item.href ? (
              <Link href={item.href} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-900 dark:text-slate-100 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
