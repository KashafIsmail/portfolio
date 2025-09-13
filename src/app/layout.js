import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Fonts CDN */}
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;700&family=Geist+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
          fontFamily: "'Geist', 'Geist Mono', sans-serif",
        }}
      >
        <main style={{ flex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
