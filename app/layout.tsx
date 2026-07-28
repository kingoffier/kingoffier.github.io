import type { Metadata } from "next";
import { headers } from "next/headers";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "Artem Volozhanin — веб-дизайнер и разработчик",
    description:
      "Портфолио Артёма Воложанина: выразительный веб-дизайн и продуманные цифровые интерфейсы.",
    openGraph: {
      title: "Artem Volozhanin — портфолио",
      description:
        "Выразительные цифровые продукты, где сильная визуальная идея работает вместе с удобным интерфейсом.",
      type: "website",
      locale: "ru_RU",
      url: origin,
      images: [
        {
          url: `${origin}/og.png`,
          width: 1672,
          height: 941,
          alt: "Первый экран портфолио Artem Volozhanin",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Artem Volozhanin — портфолио",
      description: "Веб-дизайн и разработка выразительных цифровых продуктов.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${display.variable} ${sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
