"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MailIcon, LockIcon } from "@hugeicons/core-free-icons";
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

export function SignInPage() {
  const router = useRouter();
  const { signInWithGoogle, loading: googleLoading, error: googleError } = useGoogleSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: authError } = await authClient.signIn.email({ email, password, rememberMe });

    if (authError) {
      setError(authError.message ?? "Gagal masuk, coba lagi.");
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
          title="Selamat Datang Kembali!"
          subtitle="Masuk untuk lanjut pesan tiket dan klaim promo seru."
        />

        <div className="w-full bg-white rounded-xl p-space-lg shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-space-md">
            <AuthErrorBanner message={error ?? googleError} />

            <AuthInput
              id="email" label="Email" icon={MailIcon} type="email"
              autoComplete="username" placeholder="contoh@email.com"
              value={email} onChange={setEmail}
            />
            <AuthInput
              id="password" label="Kata Sandi" icon={LockIcon} type="password"
              autoComplete="current-password" placeholder="Masukkan kata sandi"
              value={password} onChange={setPassword}
            />

            {/* khas sign-in: remember + forgot */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-xs text-gray-500">Ingat Saya</span>
              </label>
              <span className="text-label-md text-primary font-bold opacity-50 cursor-not-allowed">
                Lupa Kata Sandi?
              </span>
            </div>

            <AuthSubmitButton text="Masuk Sekarang" loading={loading} />
          </form>

          <AuthDivider label="atau" />
          <GoogleButton
            text="Masuk dengan Google"
            loading={googleLoading}
            onClick={() => signInWithGoogle("/")}
          />
          <AuthFooterLink
            question="Belum punya akun?"
            linkLabel="Daftar Sekarang"
            href="/sign-up"
          />
        </div>
      </div>
    </main>
  );
}

export default SignInPage