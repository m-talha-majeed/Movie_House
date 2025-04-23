export default function Help() {
  return (
    <div className="help-container">
      <h2 className="help-title">Help Section</h2>
      <p className="help-description">Welcome to the help section. Please select a topic.</p>

      <div className="help-topics">
        <h3 className="help-topics-title">Available Topics:</h3>
        <ul className="help-topics-list">
          <li>
            <a href="/help/faqs" className="help-topics-link">
              Frequently Asked Questions (FAQs)
            </a>
          </li>
          <li>
            <a href="/help/contact" className="help-topics-link">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/help/privacy" className="help-topics-link">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .help-container {
          margin: 20px auto;
          padding: 20px;
          max-width: 800px;
          font-family: sans-serif;
        }

        .help-title {
          font-size: 2em;
          font-weight: bold;
          color: #337ab7;
          margin-bottom: 15px;
        }

        .help-description {
          font-size: 1.1em;
          color: #555;
          margin-bottom: 20px;
        }

        .help-topics {
          margin-top: 25px;
        }

        .help-topics-title {
          font-size: 1.3em;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .help-topics-list {
          list-style: disc;
          padding-left: 20px;
        }

        .help-topics-link {
          color: #337ab7;
          text-decoration: none;
          font-size: 1em;
        }

        .help-topics-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
