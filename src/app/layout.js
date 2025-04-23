import './globals.css';
import Link from 'next/link';
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Talha Majeed 21L-5292',
  description: 'Generated for movies exploration',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <nav className="bg-muted p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-semibold">
              Movie House
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <Link href="/movies" className="hover:text-primary">
                Movies
              </Link>
              <Link href="/genres" className="hover:text-primary">
                Genres
              </Link>
              <Link href="/directors" className="hover:text-primary">
                Directors
              </Link>
              <Link href="/help" className="hover:text-primary">
                Help
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}