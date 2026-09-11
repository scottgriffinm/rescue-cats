import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { SaveProvider } from "@/components/providers/SaveProvider";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "Rescue Cats",
  description:
    "A paper-yard puzzle game: slide cats home, name a friend, and keep them on a cream porch.",
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C4BDB4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <SaveProvider>{children}</SaveProvider>
      </body>
    </html>
  );
}
