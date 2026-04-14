import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  // SERVICES
  await prisma.service.createMany({
    data: [
      {
        id: "seguranca",
        icon: "fas fa-shield-alt",
        title: "Segurança Avançada",
        desc: "Firewall inteligente, proteção contra ataques DDoS...",
      },
      {
        id: "performance",
        icon: "fas fa-rocket",
        title: "Alta Performance",
        desc: "Servidores otimizados com SSD NVMe...",
      },
      {
        id: "suporte",
        icon: "fas fa-headset",
        title: "Suporte Especializado",
        desc: "Equipe disponível 24/7...",
      },
    ],
  });

  // PLANS
  await prisma.plan.createMany({
    data: [
      {
        price: "R$15/mês",
        name: "Básico",
        itens: [
          "2GB de espaço",
          "1 subdomínio",
          "25 contas de e-mail",
          "C-panel",
          "Suporte 24/7",
        ],
        description: "Plano ideal para iniciantes...",
        performance: "Processamento básico...",
        uptime: "99.5%",
        ssl: "SSL gratuito",
        backup: "Backup semanal",
        suporte: "Chat e e-mail",
        recomendadoPara: "Blogs pessoais...",
        tecnologias: "PHP, MySQL, HTML/CSS/JS",
        sla: "12h",
        highlight: false,
      },
      {
        price: "R$30/mês",
        name: "Intermediário",
        itens: [
          "5GB de espaço",
          "10 subdomínios",
          "50 contas de e-mail",
          "C-panel",
          "Suporte 24/7",
        ],
        description: "Ideal para pequenos negócios...",
        performance: "Cache padrão...",
        uptime: "99.7%",
        ssl: "SSL gratuito",
        backup: "48h",
        suporte: "Chat, e-mail e WhatsApp",
        recomendadoPara: "Lojas pequenas...",
        tecnologias: "PHP, MySQL, Node",
        sla: "6h",
        highlight: false,
      },
      {
        price: "R$50/mês",
        name: "Dedicado Plus",
        itens: [
          "10GB de espaço",
          "10 subdomínios",
          "100 contas de e-mail",
          "C-panel",
          "Suporte 24/7",
        ],
        description: "Performance avançada...",
        performance: "CDN + cache avançado",
        uptime: "99.9%",
        ssl: "SSL premium",
        backup: "Diário",
        suporte: "Prioritário",
        recomendadoPara: "E-commerces...",
        tecnologias: "PHP, Node, Python",
        sla: "2h",
        highlight: true,
      },
      {
        price: "R$100/mês",
        name: "Cloud",
        itens: [
          "20GB de espaço",
          "20 subdomínios",
          "200 contas de e-mail",
          "C-panel",
          "Suporte 24/7",
        ],
        description: "Infra cloud escalável...",
        performance: "Autoscaling + CDN",
        uptime: "99.99%",
        ssl: "SSL avançado",
        backup: "2x ao dia",
        suporte: "Engenheiros 24/7",
        recomendadoPara: "SaaS e sistemas grandes",
        tecnologias: "Node, Python, PostgreSQL",
        sla: "Imediato",
        highlight: false,
      },
    ],
  });
}

main();