import { CollectionConfig } from 'payload/types';

const Authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role'],
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
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
      label: 'Email',
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Biografia',
      admin: {
        description: 'Breve descrição sobre o autor',
      },
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      label: 'Avatar',
    },
    {
      name: 'role',
      type: 'text',
      label: 'Cargo',
      admin: {
        description: 'Cargo/função na empresa',
      },
    },
    {
      name: 'social',
      type: 'group',
      label: 'Redes Sociais',
      fields: [
        {
          name: 'linkedin',
          type: 'text',
          label: 'LinkedIn',
        },
        {
          name: 'twitter',
          type: 'text',
          label: 'Twitter/X',
        },
        {
          name: 'github',
          type: 'text',
          label: 'GitHub',
        },
        {
          name: 'website',
          type: 'text',
          label: 'Website',
        },
      ],
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
  timestamps: true,
};

export default Authors; 