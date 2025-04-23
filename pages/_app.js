function MyApp({ Component, pageProps }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
        <a href="/directors" style={{ margin: '0 10px', padding: '8px 12px', backgroundColor: '#3498db', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Browse Directors
        </a>
        <a href="/movies" style={{ margin: '0 10px', padding: '8px 12px', backgroundColor: '#3498db', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Browse Movies
        </a>
        <a href="/" style={{ margin: '0 10px', padding: '8px 12px', backgroundColor: '#3498db', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Browse Trending
        </a>
        <a href="/genres" style={{ margin: '0 10px', padding: '8px 12px', backgroundColor: '#3498db', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Browse Genres
        </a>
      </div>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
          color: #333;
        }

        .container {
          width: 80%;
          margin: auto;
          padding: 20px;
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export default MyApp;
