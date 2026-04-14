# HDC Host AI

Plataforma full stack para apresentação e recomendação inteligente de planos de hospedagem.

O projeto foi estruturado para simular um produto real de SaaS: landing page moderna em Next.js, catálogo dinâmico de serviços e planos, integração com IA para sugestão personalizada e backend organizado por módulos com foco em separação de responsabilidades.

## Visão Geral

O principal objetivo do HDC Host AI é melhorar a experiência de descoberta e contratação de planos de hospedagem.

Em vez de exibir apenas uma tabela estática de preços, a aplicação oferece:

- catálogo de serviços e planos consumido via API
- interface moderna com App Router no Next.js
- recomendação de plano com IA baseada em perfil de uso
- explicação textual do motivo da recomendação
- arquitetura organizada para evolução futura

## Destaques Técnicos

- Frontend em Next.js 16 com React 19 e TypeScript
- Backend em Node.js, Express, TypeScript e Prisma
- Banco PostgreSQL com planos e serviços persistidos
- Integração com OpenRouter para recursos de IA
- Separação por módulos de domínio no backend
- App Router e organização por `features` no frontend
- Testes automatizados cobrindo regras de negócio e controllers

## Arquitetura

### Frontend

O frontend foi reestruturado para seguir um padrão mais próximo de projetos profissionais em Next.js:

- `app/`: rotas e páginas
- `components/`: componentes compartilhados de layout e UI
- `features/`: organização por domínio
- `hooks/`: hooks customizados
- `services/`: camada de consumo da API
- `types/`: contratos TypeScript

Páginas principais:

- `/`
- `/planos`
- `/servicos`
- `/sobre`
- `/privacidade`

### Backend

O backend segue uma organização modular inspirada em clean architecture:

- `modules/IA`
- `modules/Plans`
- `modules/Services`
- `main/`: factories e rotas
- `shared/`: infraestrutura compartilhada

Cada módulo separa:

- `application/useCases`
- `http/controllers`
- `domain/interfaces`
- `infra/providers`
- `dtos`

## Funcionalidades

### 1. Catálogo dinâmico

Os planos e serviços são carregados do backend e exibidos no frontend com interface pensada para clareza visual e conversão.

### 2. Recomendação de plano com IA

O usuário informa:

- quantidade de pessoas
- tipo de uso
- quantidade de dispositivos
- faixa de orçamento
- prioridade

Com base nisso, o backend monta um prompt usando:

- dados reais do formulário
- catálogo real de planos salvo no banco

A resposta retorna:

- o plano recomendado
- uma justificativa contextualizada

### 3. Expansão de descrição de serviços com IA

A interface também permite enriquecer a explicação dos serviços a partir de uma chamada para IA.

## Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Axios

### Backend

- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL
- OpenRouter
- Vitest
- Supertest

## Qualidade e Boas Práticas

Alguns pontos que foram priorizados nesta implementação:

- organização por responsabilidade
- contratos tipados entre camadas
- componentes desacoplados e reutilizáveis
- remoção de código legado e não utilizado
- melhoria de UX com modal, feedback visual e estados de loading
- eliminação de logs e ruído desnecessário no código de aplicação
- testes automatizados no backend e frontend

## Testes

### Frontend

Atualmente o frontend possui testes focados em regras utilitárias da interface:

- resolução de ícones de serviços

Comando:

```bash
cd frontend
npm test
```

### Backend

O backend possui cobertura de use cases e controllers dos módulos principais:

- IA
- Plans
- Services

Exemplos do que está coberto:

- recomendação de plano
- geração de descrição
- listagem e consulta por id
- tratamento de erro em controllers
- validação de payload no fluxo de sugestão

Comando:

```bash
cd backend
npm run test:run
```

## Como Rodar o Projeto

### 1. Backend

```bash
cd backend
npm install
npx prisma migrate dev
npx prisma db seed
npm run dev
```

O backend sobe, por padrão, na porta definida no `.env`.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Criar `.env` no frontend com:

```env
NEXT_PUBLIC_API_URL=http://localhost:3333
```

## Variáveis de Ambiente

### Backend

Exemplo:

```env
PORT=3333
DATABASE_URL=postgresql://...
OPENROUTER_API_KEY=...
```

### Frontend

```env
NEXT_PUBLIC_API_URL=https://*******.onrender.com
```

## O Que Este Projeto Demonstra

Para avaliação técnica e recrutamento, este projeto evidencia:

- domínio de React e Next.js com App Router
- organização de frontend escalável
- integração full stack entre UI, API, banco e IA
- capacidade de refatorar código legado para uma arquitetura mais madura
- preocupação com UX, design de interface e clareza de produto
- escrita de testes automatizados
- cuidado com tipagem, manutenção e legibilidade

## Próximos Passos

Melhorias naturais para continuidade do projeto:

- autenticação e área administrativa
- dashboard para gestão de planos e serviços
- observabilidade e logs estruturados
- validação formal com schema validation
- CI para lint, test e build
- cobertura maior no frontend com testes de componentes

## Autor

Projeto desenvolvido por Rafael Moraes.

Se você é recrutador ou líder técnico, este repositório foi construído para demonstrar capacidade de entregar produto com visão de arquitetura, experiência do usuário e qualidade de código em uma aplicação full stack realista.
