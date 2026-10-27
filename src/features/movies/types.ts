export interface Movie {
  id: string;
  title: string;
  description: string;
  duration: number;
  posterUrl: string;
  createdAt: string;
  updatedAt: string;
}

export type MovieSummary = Pick<Movie, "id" | "title" | "duration" | "posterUrl">;