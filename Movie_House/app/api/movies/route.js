
import { NextResponse } from 'next/server';
import { movies } from '@/lib/data';

export async function GET() {
  // In a real app, you would fetch data from a database or external API
  return NextResponse.json(movies);
}
