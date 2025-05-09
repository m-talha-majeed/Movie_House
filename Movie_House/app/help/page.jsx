import { redirect } from 'next/navigation';

// This page simply redirects to the catch-all route handler
// to display the main help center content.
export default function HelpBasePage() {
  redirect('/help/');
}
