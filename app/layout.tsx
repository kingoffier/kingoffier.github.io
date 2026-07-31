import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Artem Volozhanin — веб-дизайнер и разработчик",
  description:
    "Портфолио Артёма Воложанина: выразительный веб-дизайн и продуманные цифровые интерфейсы.",
  openGraph: {
    title: "Artem Volozhanin — портфолио",
    description:
      "Выразительные цифровые продукты, где сильная визуальная идея работает вместе с удобным интерфейсом.",
    type: "website",
    locale: "ru_RU",
    url: "/",
    images: [
      {
        url: "/og.png",
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
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
