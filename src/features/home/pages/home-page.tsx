import { movieService } from "../../movies/services/movie-service";
import type { Movie } from "../../movies/types";
import SearchFilterBar from "../components/search-filter-bar";
import PromoBanner from "../components/promo-banner";
import MovieTabs from "../components/movie-tabs";

export async function HomePage() {
  let movies: Movie[] = [];
  try {
    movies = await movieService.getAll();
  } catch {
  }

  return (
    <main className="flex flex-col bg-surface min-h-screen">
      <SearchFilterBar />
      <PromoBanner />
      <MovieTabs movies={movies} />
    </main>
  );
}

export default HomePage;
