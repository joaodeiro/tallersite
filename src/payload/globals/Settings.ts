import { GlobalConfig } from 'payload/types';

const Settings: GlobalConfig = {
  slug: 'settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'site',
      type: 'group',
      label: 'Configurações do Site',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título do Site',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descrição do Site',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo',
        },
        {
          name: 'favicon',
          type: 'upload',
          relationTo: 'media',
          label: 'Favicon',
        },
      ],
    },
    {
      name: 'blog',
      type: 'group',
      label: 'Configurações do Blog',
      fields: [
        {
          name: 'postsPerPage',
          type: 'number',
          defaultValue: 10,
          label: 'Posts por Página',
        },
        {
          name: 'enableComments',
          type: 'checkbox',
          defaultValue: true,
          label: 'Habilitar Comentários',
        },
        {
          name: 'enableNewsletter',
          type: 'checkbox',
          defaultValue: true,
          label: 'Habilitar Newsletter',
        },
        {
          name: 'enableSearch',
          type: 'checkbox',
          defaultValue: true,
          label: 'Habilitar Busca',
        },
      ],
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
          name: 'youtube',
          type: 'text',
          label: 'YouTube',
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram',
        },
      ],
    },
    {
      name: 'analytics',
      type: 'group',
      label: 'Analytics',
      fields: [
        {
          name: 'googleAnalytics',
          type: 'text',
          label: 'Google Analytics ID',
          admin: {
            description: 'ID do Google Analytics (ex: G-XXXXXXXXXX)',
          },
        },
        {
          name: 'googleTagManager',
          type: 'text',
          label: 'Google Tag Manager ID',
          admin: {
            description: 'ID do Google Tag Manager (ex: GTM-XXXXXXX)',
          },
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'defaultMetaTitle',
          type: 'text',
          label: 'Meta Título Padrão',
        },
        {
          name: 'defaultMetaDescription',
          type: 'textarea',
          label: 'Meta Descrição Padrão',
        },
        {
          name: 'defaultMetaImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Meta Imagem Padrão',
        },
      ],
    },
  ],
};

export default Settings; 