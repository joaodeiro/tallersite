import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'category', 'publishedAt', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug (URL)',
      admin: {
        description: 'URL amigável do post (ex: desenvolvimento-agil-pratica)',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Resumo',
      admin: {
        description: 'Breve descrição do post (aparece na listagem)',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Conteúdo',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagem de Destaque',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'authors',
      required: true,
      label: 'Autor',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      label: 'Categoria',
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      label: 'Tags',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Rascunho',
          value: 'draft',
        },
        {
          label: 'Publicado',
          value: 'published',
        },
        {
          label: 'Arquivado',
          value: 'archived',
        },
      ],
      label: 'Status',
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Data de Publicação',
      admin: {
        description: 'Data quando o post será publicado',
      },
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Título',
          admin: {
            description: 'Título para SEO (máx 60 caracteres)',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Descrição',
          admin: {
            description: 'Descrição para SEO (máx 160 caracteres)',
          },
        },
        {
          name: 'metaImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Meta Imagem (Open Graph)',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Palavras-chave',
          admin: {
            description: 'Palavras-chave separadas por vírgula',
          },
        },
      ],
    },
    {
      name: 'readingTime',
      type: 'number',
      label: 'Tempo de Leitura (minutos)',
      admin: {
        description: 'Tempo estimado de leitura',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Post em Destaque',
      defaultValue: false,
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-gerar slug se não fornecido
        if (!data.slug && data.title) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
        }
        
        // Auto-calcular tempo de leitura baseado no conteúdo
        if (data.content && !data.readingTime) {
          const wordCount = JSON.stringify(data.content).split(' ').length;
          data.readingTime = Math.ceil(wordCount / 200); // 200 palavras por minuto
        }
        
        return data;
      },
    ],
  },
  timestamps: true,
};

export default Posts; 