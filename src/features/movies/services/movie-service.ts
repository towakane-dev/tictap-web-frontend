import { api } from "@/lib/api";
import { Movie } from "../types";

export const movieService = {
  getAll: () => api<Movie[]>("/movies"),
};
