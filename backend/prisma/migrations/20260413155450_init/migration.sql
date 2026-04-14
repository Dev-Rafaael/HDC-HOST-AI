-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "itens" TEXT[],
    "description" TEXT NOT NULL,
    "performance" TEXT NOT NULL,
    "uptime" TEXT NOT NULL,
    "ssl" TEXT NOT NULL,
    "backup" TEXT NOT NULL,
    "suporte" TEXT NOT NULL,
    "recomendadoPara" TEXT NOT NULL,
    "tecnologias" TEXT NOT NULL,
    "sla" TEXT NOT NULL,
    "highlight" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);
