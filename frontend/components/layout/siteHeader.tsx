"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/planos", label: "Planos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/privacidade", label: "Privacidade" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/82 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="app-container">
        <div
          className={`mt-4 flex items-center justify-between rounded-[24px] border px-4 py-3 transition-all duration-300 md:px-6 ${
            scrolled
              ? "border-white/10 bg-slate-950/70 shadow-2xl shadow-sky-950/20"
              : "border-white/6 bg-slate-950/40"
          }`}
        >
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
              H
            </span>
            <div>
              <p className="font-[family-name:var(--font-space-grotesk)] text-base font-bold tracking-tight text-white">
                HDC Host AI
              </p>
              <p className="text-sm text-slate-400">Infraestrutura pronta para crescer</p>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 md:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "bg-white/12 text-white"
                      : "text-slate-300 hover:bg-white/6 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link href="/planos" className="primary-button ml-2">
              Sugerir plano
            </Link>
          </nav>
        </div>

        {menuOpen ? (
          <nav className="surface-card mt-3 grid gap-2 p-3 md:hidden">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-cyan-400/12 text-cyan-100"
                      : "text-slate-200 hover:bg-white/6"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
