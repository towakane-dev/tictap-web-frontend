import Image from "next/image";
import Logo from "../../../assets/logo.webp";
import { HugeiconsIcon } from "@hugeicons/react";
import { TicketStarIcon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

export function PromoBanner() {
  return (
    <section className="px-margin pt-3 pb-4">
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-bl from-red-50 via-amber-50/50 to-orange-50 border border-red-100 shadow-sm p-4 flex items-center justify-between gap-3">
        <div className="absolute -right-8 -top-8 w-36 h-36 bg-red-200/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-28 h-28 bg-amber-200/40 rounded-full blur-xl pointer-events-none" />

        <div className="flex flex-col relative z-10 max-w-[65%]">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-200/60 px-2.5 py-0.5 rounded-full w-max mb-1.5 font-label-sm text-label-sm font-bold uppercase tracking-wider">
            <HugeiconsIcon icon={TicketStarIcon} size={12} />
            TictapSeru
          </span>
          <h2 className="text-title-md text-gray-900 font-extrabold leading-tight">
            Nonton Hemat Bareng TicTap!
          </h2>
          <p className="text-body-md text-gray-600 mt-1 text-xs leading-snug">
            Diskon{" "}
            <span className="text-primary font-bold">30% Tiket Pertama</span>{" "}
            untuk semua studio favoritmu.
          </p>
          <button
            type="button"
            className="mt-3 w-max inline-flex items-center cursor-pointer gap-1 px-4 py-1.5 bg-primary-container text-white font-label-md text-label-md font-bold rounded-full shadow-md shadow-primary-container/30 hover:opacity-95 active:scale-95 transition-all"
          >
            Klaim Promo
            <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
          </button>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center shrink-0 p-4 pr-2">
          <div className="relative group">
            <div className="w-20 h-20 rounded-2xl bg-white/90 border border-red-100 backdrop-blur-sm p-1.5 flex items-center justify-center shadow-md">
              <Image
                src={Logo}
                alt="TicTap Mascot"
                width={80}
                height={80}
                className="w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(238,52,52,0.25)] transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-amber-500 text-white rounded-full text-[9px] font-extrabold tracking-wide uppercase shadow whitespace-nowrap">
              Hemat 30%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PromoBanner