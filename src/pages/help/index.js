export default function Help() {
    return (
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Help Section</h2>
        <p className="text-gray-700">Welcome to the help section. Please select a topic.</p>
  
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Available Topics:</h3>
          <ul className="list-disc list-inside">
            <li>
              <a href="/help/faqs" className="text-blue-600 hover:underline">
                Frequently Asked Questions (FAQs)
              </a>
            </li>
            <li>
              <a href="/help/contact" className="text-blue-600 hover:underline">
                Contact Us
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
  