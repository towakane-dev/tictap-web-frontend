"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export function useGoogleSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signInWithGoogle(callbackURL = "/") {
    setLoading(true);
    setError(null);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: `${window.location.origin}${callbackURL}`,
      });
    } catch {
      setError("Gagal mengalihkan ke Google, coba lagi.");
      setLoading(false);
    }
  }

  return { signInWithGoogle, loading, error };
}