import Link from "next/link";

const footerLinks = [
  { href: "/planos", label: "Planos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/privacidade", label: "Privacidade" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/8">
      <div className="app-container py-12">
        <div className="surface-card grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4">
            <span className="eyebrow w-fit">HDC Host AI</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white">
              Hospedagem moderna com experiência de compra mais inteligente.
            </h2>
            <p className="max-w-2xl text-slate-300">
              Performance, observabilidade e suporte humano em uma jornada clara,
              visual e pensada para conversão.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="soft-card rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition-transform duration-200 hover:-translate-y-1"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} HDC Host AI. Todos os direitos reservados.</p>
          <p>Desenvolvido com foco em performance, clareza e escalabilidade.</p>
        </div>
      </div>
    </footer>
  );
}
