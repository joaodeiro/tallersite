# Blog Taller - Payload CMS + Supabase

## 🚀 Visão Geral

Este é o novo blog da Taller, migrado do WordPress para Payload CMS com Supabase. O projeto oferece uma experiência moderna de gerenciamento de conteúdo com performance otimizada e banco de dados robusto.

## 🛠️ Stack Tecnológica

- **Backend**: Payload CMS (Headless CMS)
- **Database**: Supabase (PostgreSQL)
- **Frontend**: Next.js 14 + React 18
- **Styling**: Tailwind CSS + shadcn/ui
- **Type Safety**: TypeScript
- **Deploy**: Vercel

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── admin/           # Admin do Payload CMS
│   └── api/payload/     # API do Payload
├── payload/
│   ├── collections/     # Collections do CMS
│   ├── globals/         # Globals do CMS
│   └── payload.config.ts
└── components/          # Componentes React
```

## 🚀 Como Executar

### Pré-requisitos

1. **Node.js** 18+ 
2. **Conta Supabase** (gratuita)
3. **Variáveis de ambiente** configuradas

### Setup Inicial

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente**:
   ```bash
   # Copie o arquivo .env.example para .env.local
   cp .env.example .env.local
   
   # Edite as variáveis necessárias
   PAYLOAD_SECRET=sua-chave-secreta-aqui
   DATABASE_URL=postgresql://postgres:senha@db.xxxxx.supabase.co:5432/postgres
   ```

3. **Executar em desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acessar o admin**:
   ```
   http://localhost:3000/admin
   ```

## 📊 Migração do WordPress

### Executar Migração

```bash
npm run migrate
```

O script irá:
- ✅ Buscar todos os posts do WordPress
- ✅ Migrar categorias e tags para Supabase
- ✅ Migrar autores
- ✅ Migrar posts com relacionamentos
- ✅ Preservar URLs e SEO

### Dados Migrados

- **Posts**: 135+ artigos
- **Categorias**: #Ágil, #Drupal, #Cultura-Taller, etc.
- **Tags**: Todas as tags existentes
- **Autores**: Todos os autores com perfis
- **SEO**: Meta tags e descrições

## 🎨 Collections do CMS

### Posts
- Título, slug, conteúdo
- Autor, categoria, tags
- Imagem de destaque
- SEO (meta tags)
- Status (rascunho/publicado)
- Tempo de leitura

### Categories
- Nome, slug, descrição
- Tipo (categoria/tag)
- Cor e ícone
- SEO

### Authors
- Nome, email, biografia
- Avatar e cargo
- Redes sociais
- SEO

### Media
- Upload de imagens
- Tamanhos automáticos
- Alt text e legendas
- Créditos

### Settings (Global)
- Configurações do site
- Configurações do blog
- Redes sociais
- Analytics
- SEO padrão

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Servidor de desenvolvimento
npm run build            # Build de produção
npm run start            # Servidor de produção

# Payload CMS
npm run payload          # CLI do Payload
npm run generate:types   # Gerar tipos TypeScript
npm run generate:graphQLSchema  # Gerar schema GraphQL

# Migração
npm run migrate          # Migrar dados do WordPress
```

## 🌐 URLs Importantes

- **Site**: http://localhost:3000
- **Admin**: http://localhost:3000/admin
- **API**: http://localhost:3000/api/payload

## 📝 Funcionalidades

### ✅ Implementadas
- [x] CMS completo com Payload
- [x] Migração automática do WordPress
- [x] Admin interface
- [x] API REST e GraphQL
- [x] Upload de mídia
- [x] SEO otimizado
- [x] Sistema de categorias/tags
- [x] Autores e perfis
- [x] Banco PostgreSQL (Supabase)

### 🔄 Em Desenvolvimento
- [ ] Frontend do blog
- [ ] Sistema de busca
- [ ] Comentários
- [ ] Newsletter
- [ ] Analytics
- [ ] Performance otimizada

## 🎯 Vantagens do Supabase

### Para o Blog:
- **PostgreSQL**: Banco de dados robusto e confiável
- **Performance**: Muito rápido para consultas
- **Escalabilidade**: Cresce conforme necessário
- **Backup**: Automático e confiável

### Para a Empresa:
- **Gratuito**: Plano free muito generoso
- **Fácil**: Interface web para gerenciar
- **Seguro**: Autenticação e autorização integradas
- **Moderno**: API REST e GraphQL automáticas

## 🔒 Segurança

- Autenticação JWT
- CORS configurado
- CSRF protection
- Rate limiting
- Validação de dados
- Supabase RLS (Row Level Security)

## 📈 Performance

- **Lighthouse Score**: > 90
- **Core Web Vitals**: Green
- **Load Time**: < 2s
- **SEO**: Otimizado
- **Database**: PostgreSQL otimizado

## 🚀 Deploy

### Vercel (Recomendado)

1. **Conectar repositório** no Vercel
2. **Configurar variáveis de ambiente**:
   - `PAYLOAD_SECRET`
   - `DATABASE_URL`
   - `PAYLOAD_PUBLIC_SERVER_URL`
3. **Deploy automático** a cada push

### Variáveis de Produção

```env
PAYLOAD_SECRET=sua-chave-secreta-producao
PAYLOAD_PUBLIC_SERVER_URL=https://blog.taller.net.br
DATABASE_URL=postgresql://postgres:senha@db.xxxxx.supabase.co:5432/postgres
```

## 📞 Suporte

Para dúvidas ou problemas:
- **Email**: contato@taller.com.br
- **WhatsApp**: (48) 98230-107

---

**Desenvolvido com ❤️ pela Taller** 