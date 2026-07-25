"use client";

import { MessageCircle } from "lucide-react";

const phone = "12675550198";
const message = encodeURIComponent("Hello Eric, I would like to discuss a legal matter.");

export default function WhatsAppButton({
  floating = false,
  label = "Chat on WhatsApp"
}: {
  floating?: boolean;
  label?: string;
}) {
  const href = `https://wa.me/${phone}?text=${message}`;

  if (floating) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Eric on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-4 font-bold text-[#052b15] shadow-2xl transition hover:-translate-y-1"
      >
        <MessageCircle className="h-6 w-6 fill-white text-white" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/60 px-5 text-xs font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-white/10"
    >
      <MessageCircle className="h-5 w-5 text-[#25D366]" />
      {label}
    </a>
  );
}
