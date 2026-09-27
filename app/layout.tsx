import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. Sakender Saikot",
  description:
    "Portfolio of Md. Sakender Saikot - Software Engineer building scalable web and mobile applications with React, Next.js, TypeScript and Flutter.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Md. Sakender Saikot - Software Engineer",
    description:
      "Software Engineer building scalable web and mobile applications. Projects, education, and research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
