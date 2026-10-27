import axios from "axios";
import { axiosInstance } from "./axios";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

export async function api<T>(path: string, init?: { method?: string; body?: unknown }) {
  try {
    const res = await axiosInstance.request<{
      message: string;
      data: T;
    }>({
      url: path,
      method: init?.method ?? "GET",
      data: init?.body,
    });
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new ApiError(
        error.response?.status ?? 0,
        error.response?.data?.message ?? "Something went wrong",
      );
    }
    throw error;
  }
}