export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Sanniville Academy</title>
      </head>
      <body style={{ margin: 0, fontFamily: 'Inter, sans-serif', color: '#1F2937', backgroundColor: '#FFFFFF' }}>
        {children}
      </body>
    </html>
  );
}