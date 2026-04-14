import type { ReactNode } from "react";
import {
  getServiceIconLabel,
  resolveServiceIconKey,
} from "@/features/services/lib/serviceIconMap";

interface ServiceIconProps {
  icon: string;
  serviceId: string;
}

function IconFrame({
  children,
  accentClassName,
}: {
  children: ReactNode;
  accentClassName: string;
}) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 ${accentClassName}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M12 3l7 3v5c0 4.6-2.9 7.9-7 10-4.1-2.1-7-5.4-7-10V6l7-3z" />
      <path d="M9.5 12.5l1.7 1.7 3.5-4" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M14 4c2.7 1 4.8 3.3 5.8 6-2.2 2.4-4.7 4.4-7.5 6l-4.3-4.3c1.6-2.8 3.6-5.3 6-7.5z" />
      <path d="M10 14l-3 3" />
      <path d="M6 18l-1 1" />
      <circle cx="14.5" cy="9.5" r="1.2" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M4 12a8 8 0 0116 0" />
      <path d="M5 13v2a2 2 0 002 2h1v-6H7a2 2 0 00-2 2z" />
      <path d="M19 13v2a2 2 0 01-2 2h-1v-6h1a2 2 0 012 2z" />
      <path d="M9 19c.7.6 1.7 1 3 1s2.3-.4 3-1" />
    </svg>
  );
}

function DefaultIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <rect x="4" y="5" width="16" height="14" rx="3" />
      <path d="M8 9h8M8 13h8" />
    </svg>
  );
}

export function ServiceIcon({ icon, serviceId }: ServiceIconProps) {
  const iconKey = resolveServiceIconKey(icon, serviceId);
  const label = getServiceIconLabel(iconKey);

  if (iconKey === "shield") {
    return (
      <span className="inline-flex items-center gap-3">
        <IconFrame accentClassName="bg-emerald-400/12 text-emerald-200">
          <ShieldIcon />
        </IconFrame>
        <span className="pill w-fit">{label}</span>
      </span>
    );
  }

  if (iconKey === "rocket") {
    return (
      <span className="inline-flex items-center gap-3">
        <IconFrame accentClassName="bg-cyan-400/12 text-cyan-200">
          <RocketIcon />
        </IconFrame>
        <span className="pill w-fit">{label}</span>
      </span>
    );
  }

  if (iconKey === "support") {
    return (
      <span className="inline-flex items-center gap-3">
        <IconFrame accentClassName="bg-violet-400/12 text-violet-200">
          <SupportIcon />
        </IconFrame>
        <span className="pill w-fit">{label}</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-3">
      <IconFrame accentClassName="bg-slate-400/12 text-slate-200">
        <DefaultIcon />
      </IconFrame>
      <span className="pill w-fit">{label}</span>
    </span>
  );
}
