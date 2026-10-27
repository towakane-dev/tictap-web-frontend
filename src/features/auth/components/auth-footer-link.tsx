import Link from "next/link";

export function AuthFooterLink({
  question,
  linkLabel,
  href,
}: {
  question: string;
  linkLabel: string;
  href: string;
}) {
  return (
    <p className="mt-space-lg text-center text-body-md text-gray-500">
      {question}{" "}
      <Link href={href} className="text-primary font-bold hover:underline">
        {linkLabel}
      </Link>
    </p>
  );
}