import type { Metadata, Viewport } from "next";
import { PRODUCT_NAME } from "@/lib/constants";
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
  title: PRODUCT_NAME,
  description:
    "A paper-yard puzzle game: slide cats home, name a friend, and keep them on a cream porch.",
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E8DFD2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-page-bg font-sans">
        <SaveProvider>{children}</SaveProvider>
      </body>
    </html>
  );
}
