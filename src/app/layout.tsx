import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Azimjon Kamiljanov | Full Stack Developer",
  description: "Cosmic portfolio of Azimjon Kamiljanov - Full Stack Developer specializing in React, Next.js, and modern web technologies",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
