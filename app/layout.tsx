import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Git Changelog Customer Impact Mapper",
  description: "Map git changes to customer-facing impact. AI-powered changelog entries with business impact for B2B SaaS teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1da56289-925c-4b56-b5ad-5a0d2084c54a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
