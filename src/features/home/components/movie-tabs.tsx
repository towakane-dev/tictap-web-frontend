"use client";

import { useState } from "react";
import type { Movie } from "../../movies/types";
import { MovieCard } from "../../movies/components/movie-card";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

type Tab = "now" | "soon";

export function MovieTabs({ movies }: { movies: Movie[] }) {
  const [tab, setTab] = useState<Tab>("now");

  // "Segera Hadir" belum punya data di BE (Movie belum ada status) —
  // jujur: empty state, BUKAN fake data. Backlog: tambah field status di schema Movie.
  const visible = tab === "now" ? movies : [];

  return (
    <section className="px-margin pt-2 pb-3">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center p-1 bg-gray-200/80 rounded-full gap-1">
          <TabButton active={tab === "now"} onClick={() => setTab("now")}>
            Sedang Tayang
          </TabButton>
          <TabButton active={tab === "soon"} onClick={() => setTab("soon")}>
            Segera Hadir
          </TabButton>
        </div>

        <a
          href="#"
          className="font-label-sm text-label-sm text-primary font-bold flex items-center gap-0.5 hover:underline"
        >
          Lihat Semua
          <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
        </a>
      </div>

      {visible.length === 0 ? (
        <p className="text-center text-gray-500 text-body-md py-8">
          Belum ada film di kategori ini.
        </p>
      ) : (
        <div className="flex gap-3.5 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-margin px-margin">
          {visible.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}

export default MovieTabs

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "px-4 py-1.5 rounded-full bg-white text-black font-label-md text-label-md font-bold shadow-sm transition-all"
          : "px-4 py-1.5 rounded-full text-gray-600 hover:text-gray-900 font-label-md text-label-md font-semibold transition-all"
      }
    >
      {children}
    </button>
  );
}
