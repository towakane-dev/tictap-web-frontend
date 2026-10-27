import Image from "next/image";
import Logo from "@/assets/logo.webp";

export function AuthGreeting({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center text-center mt-space-md mb-space-lg">
      <div className="relative h-25 w-25 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-red-200/70 blur-md" />
        <Image
          src={Logo}
          alt="Pocket"
          className="relative h-25 w-25 object-contain"
        />
      </div>
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
        {title}
      </h2>
      <p className="text-body-md text-gray-500 max-w-xs mt-1">{subtitle}</p>
    </div>
  );
}
