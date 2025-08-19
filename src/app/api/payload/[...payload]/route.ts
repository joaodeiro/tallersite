import { nextHandler } from '@payloadcms/next-payload';
import payload from '../../../../payload/next-payload';

export async function GET(req: Request) {
  return nextHandler({
    req,
    payload,
  });
}

export async function POST(req: Request) {
  return nextHandler({
    req,
    payload,
  });
}

export async function PATCH(req: Request) {
  return nextHandler({
    req,
    payload,
  });
}

export async function DELETE(req: Request) {
  return nextHandler({
    req,
    payload,
  });
} 