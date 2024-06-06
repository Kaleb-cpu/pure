import "./globals.css";


export const metadata = {
  title: "Pure",
  description: "Pure app for artists",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
