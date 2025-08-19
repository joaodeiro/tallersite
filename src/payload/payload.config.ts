import { buildConfig } from 'payload/config';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';

// Collections
import Posts from './collections/Posts';
import Categories from './collections/Categories';
import Authors from './collections/Authors';
import Media from './collections/Media';
import Users from './collections/Users';

// Globals
import Settings from './globals/Settings';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- Taller Blog',
      favicon: '/favicon.png',
      ogImage: '/og-image.jpg',
    },
  },
  collections: [
    Users,
    Posts,
    Categories,
    Authors,
    Media,
  ],
  globals: [
    Settings,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  editor: slateEditor({}),
  cors: ['http://localhost:3000', 'https://blog.taller.net.br'],
  csrf: ['http://localhost:3000', 'https://blog.taller.net.br'],
}); 