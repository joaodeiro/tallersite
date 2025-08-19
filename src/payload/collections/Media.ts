import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: '../public/media',
    staticURL: '/media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'featured',
        width: 1200,
        height: 600,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*', 'application/pdf'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Texto Alternativo',
      admin: {
        description: 'Descrição da imagem para acessibilidade',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Legenda',
    },
    {
      name: 'credit',
      type: 'text',
      label: 'Créditos',
      admin: {
        description: 'Autor/fonte da imagem',
      },
    },
  ],
  timestamps: true,
};

export default Media; 