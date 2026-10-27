"use client";

import { useState, type ComponentProps } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ViewIcon, ViewOffIcon } from "@hugeicons/core-free-icons";

type HugeIcon = ComponentProps<typeof HugeiconsIcon>["icon"];

interface AuthInputProps {
  id: string;
  label: string;
  icon: HugeIcon;
  type?: "text" | "email" | "password";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  minLength?: number;
}

export function AuthInput({
  id, label, icon, type = "text", value, onChange, placeholder, autoComplete, minLength,
}: AuthInputProps) {
  const isPassword = type === "password";
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className="block font-label-md text-label-md font-semibold text-gray-900"
      >
        {label}
      </label>
      <div className="relative flex items-center bg-gray-50 rounded-lg border border-gray-200 focus-within:border-primary transition-all">
        <HugeiconsIcon
          icon={icon}
          size={20}
          className="absolute left-3.5 text-gray-400 pointer-events-none"
        />
        <input
          id={id}
          type={isPassword && show ? "text" : type}
          required
          minLength={minLength}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-transparent py-3 pl-11 text-body-md rounded-lg focus:outline-none ${isPassword ? "pr-11" : "pr-4"}`}
        />
        {isPassword && (
          <button
            type="button"
            aria-label={show ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
            onClick={() => setShow((v) => !v)}
            className="absolute right-1 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900"
          >
            <HugeiconsIcon icon={show ? ViewOffIcon : ViewIcon} size={20} />
          </button>
        )}
      </div>
    </div>
  );
}