import { HugeiconsIcon } from "@hugeicons/react";
import { SearchIcon } from "@hugeicons/core-free-icons";

export function SearchFilterBar() {
  return (
    <section className="px-margin pt-4 pb-2">
      <div className="relative flex items-center">
        <HugeiconsIcon
          icon={SearchIcon}
          size={18}
          className="absolute left-3.5 text-gray-400 pointer-events-none"
        />
        <input
          type="text"
          placeholder="Cari film..."
          className="w-full bg-white text-gray-900 placeholder:text-gray-400 pl-11 pr-11 py-3 rounded-full outline-none border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all"
        />
      </div>
    </section>
  );
}

export default SearchFilterBar