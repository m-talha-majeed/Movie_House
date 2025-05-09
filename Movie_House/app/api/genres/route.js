
import { NextResponse } from 'next/server';
import { genres } from '@/lib/data';

export async function GET() {
  return NextResponse.json(genres);
}
