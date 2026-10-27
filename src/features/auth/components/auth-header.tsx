"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import Logo from "@/assets/logo.webp";

export function AuthHeader() {
  const router = useRouter();

  return (
    <div className="h-16 px-gutter flex items-center justify-between">
      <button
        type="button"
        aria-label="Kembali"
        onClick={() => router.back()}
        className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-gray-100"
      >
        <HugeiconsIcon icon={ArrowLeft01Icon} size={24} />
      </button>
      <Link href="/" className="flex items-center gap-1.5">
        <Image src={Logo} alt="TicTap" className="h-8 w-8" />
        <span className="font-headline-sm text-headline-sm text-primary tracking-tight">
          Pocket
        </span>
      </Link>
    </div>
  );
}