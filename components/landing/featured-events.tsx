import Image from "next/image";
import Link from "next/link";
import { eventsService } from "@/services/events.service";
import { Calendar, MapPin, Video } from "lucide-react";

export async function LandingFeaturedEvents() {
  const events  = (await eventsService.getEvents()).data;
  const featured = events.filter((e) => e.status === "Publicado").slice(0, 3);

  return (
    <section
      id="eventos"
      className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Eventos e Networking
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Participe de workshops, masterclasses e meetups para conhecer as
              pessoas certas.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="shrink-0 text-indigo-600 dark:text-indigo-400 font-medium hover:underline flex items-center gap-2"
          >
            Agenda completa &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((event) => (
            <div
              key={event.id}
              className="group bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row lg:flex-col"
            >
              <div className="relative w-full sm:w-2/5 lg:w-full aspect-[16/10] sm:aspect-auto lg:aspect-[16/10] overflow-hidden shrink-0">
                <Image
                  src={event.coverUrl}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm backdrop-blur-md">
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 flex-1">
                  {event.shortDescription}
                </p>

                <div className="space-y-2 text-sm font-medium text-slate-600 dark:text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    <span>
                      {new Date(event.startDate).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "short",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {event.format === "Online" ? (
                      <Video className="w-4 h-4 text-indigo-500" />
                    ) : (
                      <MapPin className="w-4 h-4 text-indigo-500" />
                    )}
                    <span className="truncate">
                      {event.format === "Online" ? "Online" : event.location}
                    </span>
                  </div>
                </div>

                <Link
                  href="/dashboard"
                  className="block w-full py-2.5 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors"
                >
                  Garantir Vaga
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
