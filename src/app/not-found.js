import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <h2 className="text-3xl font-semibold text-foreground mb-4">404 - Page Not Found</h2>
      <p className="text-muted-foreground mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="px-6 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-focus">
        Go Home
      </Link>
    </div>
  );
}

