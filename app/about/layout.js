export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Sanniville Academy</title>
      </head>
      <body style={{ 
        margin: 0, 
        fontFamily: "'Merriweather', serif", 
        color: '#1F2937', 
        backgroundColor: '#FFFFFF' 
      }}>
        {children}
      </body>
    </html>
  );
}