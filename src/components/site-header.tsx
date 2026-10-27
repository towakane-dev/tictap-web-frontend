"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "../lib/auth-client";
import Logo from "../assets/logo.webp";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Notification02Icon,
  User02Icon,
  Logout02Icon,
} from "@hugeicons/core-free-icons";

export function SiteHeader() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  async function handleLogout() {
    try {
      setIsLoggingOut(true);
      await authClient.signOut();
      router.push("/sign-in");
      router.refresh();
    } catch (error) {
      console.error("Gagal keluar:", error);
    } finally {
      setIsLoggingOut(false);
    }
  }

  return (
    <header className="sticky top-0 z-50 pt-safe bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="h-16 px-margin flex items-center justify-between gap-space-sm">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <Image src={Logo} alt="TicTap" className="h-8 w-8" />
          <span className="font-title-md font-extrabold tracking-tight">
            Pocket
          </span>
        </Link>

        <div className="flex items-center gap-space-xs shrink-0">
          <button
            aria-label="Notifikasi"
            className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 relative"
            type="button"
          >
            <HugeiconsIcon
              icon={Notification02Icon}
              size={22}
              strokeWidth={1.5}
              color="currentColor"
            />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-white" />
          </button>

          {isPending ? null : session ? (
            <div className="relative group">
              <button
                type="button"
                aria-label="Menu Pengguna"
                className="w-9 h-9 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer"
              >
                <HugeiconsIcon
                  icon={User02Icon}
                  size={18}
                  strokeWidth={1.5}
                  color="currentColor"
                />
              </button>

              {/* Dropdown menu saat di-hover */}
              <div className="absolute right-0 top-full pt-2 w-52 invisible opacity-0 -translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-1.5 overflow-hidden">
                  {session.user && (
                    <div className="px-3 py-2 border-b border-gray-100 mb-1">
                      <p className="text-label-md font-bold text-gray-900 truncate">
                        {session.user.name || "Pengguna"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {session.user.email}
                      </p>
                    </div>
                  )}

                  <Link
                    href="/profile"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-label-md font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    <HugeiconsIcon
                      icon={User02Icon}
                      size={18}
                      strokeWidth={1.5}
                      color="currentColor"
                    />
                    <span>Profil</span>
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-label-md font-medium text-error hover:bg-red-50 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    <HugeiconsIcon
                      icon={Logout02Icon}
                      size={18}
                      strokeWidth={1.5}
                      color="currentColor"
                    />
                    <span>{isLoggingOut ? "Keluar..." : "Keluar"}</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link
              href="/sign-in"
              className="px-3 py-1.5 rounded-full bg-primary-container text-white font-label-md text-label-md font-bold"
            >
              Masuk
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;

