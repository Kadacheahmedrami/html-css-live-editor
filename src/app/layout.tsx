import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Your page description here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your Page Title</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
