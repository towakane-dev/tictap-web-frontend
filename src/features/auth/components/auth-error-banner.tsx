export function AuthErrorBanner({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div className="rounded-lg bg-red-50 border border-red-100 px-3 py-2 text-xs text-primary font-semibold">
      {message}
    </div>
  );
}