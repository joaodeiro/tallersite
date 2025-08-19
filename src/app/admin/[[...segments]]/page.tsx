import { notFound } from 'next/navigation';
import { getPayload } from '@payloadcms/next-payload';
import config from '../../../payload/payload.config';

export default async function AdminPage({ params }: { params: { segments: string[] } }) {
  const { segments } = params;
  const [segment] = segments || [];

  if (!segment) {
    return notFound();
  }

  const payload = await getPayload({
    config,
  });

  const { render } = await payload.admin({
    user: null,
  });

  return render();
} 