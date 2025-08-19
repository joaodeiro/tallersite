import payload from '../src/payload/next-payload';

interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  author: number;
  categories: number[];
  tags: number[];
  featured_media: number;
  _embedded?: {
    author?: Array<{
      id: number;
      name: string;
      description: string;
      avatar_urls: {
        '96': string;
      };
    }>;
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
  };
}

interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  taxonomy: string;
}

async function fetchWordPressData() {
  console.log('🔄 Iniciando migração do WordPress para Supabase...');

  try {
    // Buscar posts
    const postsResponse = await fetch('https://blog.taller.net.br/wp-json/wp/v2/posts?per_page=100&_embed');
    const posts: WordPressPost[] = await postsResponse.json();

    // Buscar categorias
    const categoriesResponse = await fetch('https://blog.taller.net.br/wp-json/wp/v2/categories?per_page=100');
    const categories: WordPressCategory[] = await categoriesResponse.json();

    // Buscar tags
    const tagsResponse = await fetch('https://blog.taller.net.br/wp-json/wp/v2/tags?per_page=100');
    const tags: WordPressCategory[] = await tagsResponse.json();

    console.log(`📊 Encontrados ${posts.length} posts, ${categories.length} categorias e ${tags.length} tags`);

    return { posts, categories, tags };
  } catch (error) {
    console.error('❌ Erro ao buscar dados do WordPress:', error);
    throw error;
  }
}

async function migrateCategories(categories: WordPressCategory[], tags: WordPressCategory[]) {
  console.log('📂 Migrando categorias e tags para Supabase...');

  const categoryMap = new Map();

  // Migrar categorias
  for (const category of categories) {
    try {
      const createdCategory = await payload.create({
        collection: 'categories',
        data: {
          name: category.name,
          slug: category.slug,
          description: category.description,
          type: 'category',
        },
      });
      categoryMap.set(category.id, createdCategory.id);
      console.log(`✅ Categoria criada: ${category.name}`);
    } catch (error) {
      console.error(`❌ Erro ao criar categoria ${category.name}:`, error);
    }
  }

  // Migrar tags
  for (const tag of tags) {
    try {
      const createdTag = await payload.create({
        collection: 'categories',
        data: {
          name: tag.name,
          slug: tag.slug,
          description: tag.description,
          type: 'tag',
        },
      });
      categoryMap.set(tag.id, createdTag.id);
      console.log(`✅ Tag criada: ${tag.name}`);
    } catch (error) {
      console.error(`❌ Erro ao criar tag ${tag.name}:`, error);
    }
  }

  return categoryMap;
}

async function migrateAuthors(posts: WordPressPost[]) {
  console.log('👥 Migrando autores para Supabase...');

  const authorMap = new Map();
  const uniqueAuthors = new Map();

  // Extrair autores únicos
  for (const post of posts) {
    if (post._embedded?.author?.[0]) {
      const author = post._embedded.author[0];
      if (!uniqueAuthors.has(author.id)) {
        uniqueAuthors.set(author.id, author);
      }
    }
  }

  // Criar autores
  for (const [id, author] of uniqueAuthors) {
    try {
      const createdAuthor = await payload.create({
        collection: 'authors',
        data: {
          name: author.name,
          email: `author-${id}@taller.net.br`, // Email temporário
          bio: author.description,
          role: 'Autor',
        },
      });
      authorMap.set(id, createdAuthor.id);
      console.log(`✅ Autor criado: ${author.name}`);
    } catch (error) {
      console.error(`❌ Erro ao criar autor ${author.name}:`, error);
    }
  }

  return authorMap;
}

async function migratePosts(posts: WordPressPost[], categoryMap: Map<number, string>, authorMap: Map<number, string>) {
  console.log('📝 Migrando posts para Supabase...');

  for (const post of posts) {
    try {
      // Preparar dados do post
      const postData: any = {
        title: post.title.rendered.replace(/<[^>]+>/g, ''),
        slug: post.slug,
        excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 200) + '...',
        content: post.content.rendered,
        status: 'published',
        publishedAt: post.date,
        featured: false,
      };

      // Adicionar autor
      if (post.author && authorMap.has(post.author)) {
        postData.author = authorMap.get(post.author);
      }

      // Adicionar categoria principal
      if (post.categories?.[0] && categoryMap.has(post.categories[0])) {
        postData.category = categoryMap.get(post.categories[0]);
      }

      // Adicionar tags
      if (post.tags?.length > 0) {
        const tagIds = post.tags
          .map(tagId => categoryMap.get(tagId))
          .filter(Boolean);
        if (tagIds.length > 0) {
          postData.tags = tagIds;
        }
      }

      // Adicionar SEO
      postData.seo = {
        metaTitle: post.title.rendered.replace(/<[^>]+>/g, ''),
        metaDescription: post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 160),
      };

      const createdPost = await payload.create({
        collection: 'posts',
        data: postData,
      });

      console.log(`✅ Post criado: ${post.title.rendered.replace(/<[^>]+>/g, '')}`);
    } catch (error) {
      console.error(`❌ Erro ao criar post ${post.title.rendered}:`, error);
    }
  }
}

async function main() {
  try {
    console.log('🚀 Iniciando migração do WordPress para Supabase...');

    // Buscar dados do WordPress
    const { posts, categories, tags } = await fetchWordPressData();

    // Migrar categorias e tags
    const categoryMap = await migrateCategories(categories, tags);

    // Migrar autores
    const authorMap = await migrateAuthors(posts);

    // Migrar posts
    await migratePosts(posts, categoryMap, authorMap);

    console.log('🎉 Migração para Supabase concluída com sucesso!');
  } catch (error) {
    console.error('💥 Erro durante a migração:', error);
    process.exit(1);
  }
}

// Executar migração se chamado diretamente
if (require.main === module) {
  main();
}

export { main as migrateWordPress }; 