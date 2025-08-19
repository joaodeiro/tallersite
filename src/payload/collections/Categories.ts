import { CollectionConfig } from 'payload/types';

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'type'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nome',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: {
        description: 'URL amigável da categoria',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descrição',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'category',
      options: [
        {
          label: 'Categoria',
          value: 'category',
        },
        {
          label: 'Tag',
          value: 'tag',
        },
      ],
      label: 'Tipo',
    },
    {
      name: 'color',
      type: 'text',
      label: 'Cor',
      admin: {
        description: 'Cor da categoria (hex, ex: #DB2337)',
      },
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Ícone',
      admin: {
        description: 'Nome do ícone (Lucide React)',
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
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Descrição',
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-gerar slug se não fornecido
        if (!data.slug && data.name) {
          data.slug = data.name
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
        }
        return data;
      },
    ],
  },
  timestamps: true,
};

export default Categories; 