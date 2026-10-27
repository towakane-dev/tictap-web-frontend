import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export function AuthSubmitButton({
  text,
  loading = false,
}: {
  text: string;
  loading?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full mt-2 bg-primary hover:bg-primary-container disabled:opacity-60 active:scale-[0.98] text-white font-bold py-3.5 rounded-xl shadow-[0_4px_16px_rgba(187,0,22,0.28)] flex items-center justify-center gap-2 transition-all cursor-pointer"
    >
      {loading ? "Memproses..." : text}
      {!loading && <HugeiconsIcon icon={ArrowRight01Icon} size={20} />}
    </button>
  );
}
