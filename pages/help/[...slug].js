export default function HelpPage({ params }) {
    const { slug } = params;
  
    return (
      <div className="help-container">
        <h2 className="help-title">Help Section</h2>
        <p className="help-path">
          You are here: <span className="help-path-bold">/help/{slug?.join('/') || 'home'}</span>
        </p>
        <div className="help-content">
          <p className="help-text">
            Need assistance? Here are some helpful resources:
          </p>
          <ul className="help-list">
            <li>
              <a href="/help/faqs" className="help-link">
                Frequently Asked Questions
              </a>
            </li>
            <li>
              <a href="/help/contact" className="help-link">
                Contact Support
              </a>
            </li>
            <li>
              <a href="/help/privacy" className="help-link">
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
  
          .help-path {
            font-size: 1em;
            color: #777;
            margin-bottom: 20px;
          }
  
          .help-path-bold {
            font-weight: bold;
          }
  
          .help-content {
            margin-top: 20px;
          }
  
          .help-text {
            font-size: 1.2em;
            color: #555;
          }
  
          .help-list {
            list-style: disc;
            padding-left: 20px;
            margin-top: 10px;
          }
  
          .help-link {
            color: #337ab7;
            text-decoration: none;
            font-size: 1em;
          }
  
          .help-link:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
    );
  }
  