"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MailIcon, User02Icon, LockIcon } from "@hugeicons/core-free-icons";
import { authClient } from "@/lib/auth-client";
import { useGoogleSignIn } from "../hooks/use-google-sign-in";
import { AuthHeader } from "../components/auth-header";
import { AuthGreeting } from "../components/auth-greeting";
import { AuthErrorBanner } from "../components/auth-error-banner";
import { AuthInput } from "../components/auth-input";
import { AuthDivider } from "../components/auth-divider";
import { GoogleButton } from "../components/auth-google-button";
import { AuthSubmitButton } from "../components/auth-submit-button";
import { AuthFooterLink } from "../components/auth-footer-link";

export function SignUpPage() {
  const router = useRouter();
  const {
    signInWithGoogle,
    loading: googleLoading,
    error: googleError,
  } = useGoogleSignIn();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: authError } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    if (authError) {
      setError(authError.message ?? "Gagal daftar, coba lagi.");
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <main className="flex-1 flex flex-col bg-surface">
      <AuthHeader />

      <div className="flex flex-col w-full px-gutter pb-space-xl">
        <AuthGreeting
          title="Buat Akun Barumu"
          subtitle="Daftar untuk mulai pesan tiket dan kejar promo terbaru."
        />

        <div className="w-full bg-white rounded-xl p-space-lg shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-space-md">
            <AuthErrorBanner message={error ?? googleError} />

            <AuthInput
              id="name"
              label="Nama Lengkap"
              icon={User02Icon}
              type="text"
              autoComplete="name"
              placeholder="Nama lengkapmu"
              value={name}
              onChange={setName}
            />
            <AuthInput
              id="email"
              label="Email"
              icon={MailIcon}
              type="email"
              autoComplete="email"
              placeholder="contoh@email.com"
              value={email}
              onChange={setEmail}
            />
            <AuthInput
              id="password"
              label="Kata Sandi"
              icon={LockIcon}
              type="password"
              minLength={8}
              autoComplete="new-password"
              placeholder="Minimal 8 karakter"
              value={password}
              onChange={setPassword}
            />

            <AuthSubmitButton text="Daftar Sekarang" loading={loading} />
          </form>

          <AuthDivider label="atau" />
          <GoogleButton
            text="Daftar dengan Google"
            loading={googleLoading}
            onClick={() => signInWithGoogle("/")}
          />
          <AuthFooterLink
            question="Sudah punya akun?"
            linkLabel="Masuk Sekarang"
            href="/sign-in"
          />
        </div>
      </div>
    </main>
  );
}

export default SignUpPage;