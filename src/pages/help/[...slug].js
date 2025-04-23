export default function HelpPage({ params }) {
    const { slug } = params;
  
    return (
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Help Section</h2>
        <p className="text-gray-700">
          You are here: <span className="font-bold">/help/{slug?.join('/') || 'home'}</span>
        </p>
        <div className="mt-6">
          <p className="text-lg text-gray-800">
            Need assistance? Here are some helpful resources:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <a href="/help/faqs" className="text-blue-600 hover:underline">
                Frequently Asked Questions
              </a>
            </li>
            <li>
              <a href="/help/contact" className="text-blue-600 hover:underline">
                Contact Support
              </a>
            </li>
            <li>
              <a href="/help/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  