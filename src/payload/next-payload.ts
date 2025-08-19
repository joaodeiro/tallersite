import { createPayloadClient } from '@payloadcms/next-payload';
import config from './payload.config';

export const payload = createPayloadClient({
  config,
});

export default payload; 