
'use client'; // Keep this as a Client Component since it uses hooks like use

import React, { use } from 'react'; // Added 'use' import
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';


function getHelpContent(slug) {
    const path = slug ? slug.join('/') : '';

    switch (path) {
        case '':
            return {
                title: 'Help Center',
                content: (
                <>
                    <p className="mb-4">Welcome to the CineVerse Help Center. Choose a topic below:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><Link href="/help/faqs" className="text-accent hover:underline">Frequently Asked Questions</Link></li>
                        <li><Link href="/help/contact" className="text-accent hover:underline">Contact Us</Link></li>
                        <li><Link href="/help/privacy" className="text-accent hover:underline">Privacy Policy</Link></li>
                    </ul>
                 </>
                )
            };
        case 'faqs':
            return {
                title: 'Frequently Asked Questions',
                content: (
                 <>
                    <h3 className="font-semibold mb-2">How do I filter movies by genre?</h3>
                    <p className="mb-4">Navigate to the 'Movies' page. You'll find a dropdown menu at the top right allowing you to select a specific genre.</p>
                    <h3 className="font-semibold mb-2">How can I see movies by a specific director?</h3>
                    <p className="mb-4">Go to a movie's detail page. If director information is available, click on the director's name to see their details and other movies they've directed.</p>
                    <h3 className="font-semibold mb-2">Is there a dark mode?</h3>
                    <p className="mb-4">Yes! Click the sun/moon icon in the header to toggle between light and dark themes.</p>
                 </>
                )
            };
        case 'contact':
            return {
                title: 'Contact Us',
                content: <p>For support, please email support@cineverse.example.com.</p>
            };
        case 'privacy':
            return {
                title: 'Privacy Policy',
                content: <p>Your privacy is important to us. This application is a demo and does not collect personal information. All movie data is for illustrative purposes.</p>
            };
        default:
            return {
                title: 'Page Not Found',
                content: <p>The help page you requested could not be found.</p>
            };
    }
}


export default function HelpPage({ params: paramsProp }) {
  // Unwrap the promise using React.use()
  const params = use(paramsProp);
  const { slug } = params;
  const { title, content } = getHelpContent(slug);

  return (
    <div className="container mx-auto py-8 px-4">
        {slug && slug.length > 0 && (
             <Button variant="ghost" asChild className="mb-4">
               <Link href="/help">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Help Center
               </Link>
            </Button>
        )}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
           {content}
        </CardContent>
      </Card>
    </div>
  );
}

// Optional: Generate static paths if needed (for limited, known help pages)
// export async function generateStaticParams() {
//   return [
//     { slug: [] },
//     { slug: ['faqs'] },
//     { slug: ['contact'] },
//     { slug: ['privacy'] },
//   ];
// }
