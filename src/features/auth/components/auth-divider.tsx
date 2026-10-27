export function AuthDivider({ label }: { label: string }) {
  return (
    <div className="relative my-space-lg flex items-center justify-center">
      <div className="w-full h-[1px] bg-gray-200" />
      <span className="absolute bg-white px-3 font-label-md text-label-md text-gray-500">
        {label}
      </span>
    </div>
  );
}