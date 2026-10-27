import Link from "next/link";
import type { Movie } from "../types";
import Image from "next/image";
import { formatDuration } from "@/lib/format";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="w-40 shrink-0 bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col group"
    >
      <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
        <Image
          src={movie.posterUrl}
          alt={movie.title}
          sizes="160px"
          width={160}
          height={224}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/60 text-white text-[10px] font-medium">
          {formatDuration(movie.duration)}
        </div>
      </div>
      <div className="p-3 flex flex-col flex-1 justify-between gap-2.5">
        <h3 className="text-[15px] text-gray-900 font-bold leading-snug truncate">
          {movie.title}
        </h3>
        <div className="w-full py-2 bg-primary-container text-white font-label-md text-label-md font-bold rounded-xl text-center">
          Beli Tiket
        </div>
      </div>
    </Link>
  );
}

export default MovieCard