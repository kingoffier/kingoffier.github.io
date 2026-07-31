export type Work = {
  slug: string;
  title: string;
  category: string;
  image: string;
  fullImage: string;
  fullImageWidth: number;
  fullImageHeight: number;
  tags: string[];
};

export const works: Work[] = [
  {
    slug: "cottage66",
    title: "Коттедж66",
    category: "Сервис аренды коттеджей",
    image: "/portfolio-work/cottage66.png",
    fullImage: "/portfolio-full/cottage66.png",
    fullImageWidth: 1920,
    fullImageHeight: 3529,
    tags: ["React", "TypeScript", "API", "Адаптив"],
  },
  {
    slug: "alive-audio",
    title: "Alive Audio",
    category: "Каталог аудиотехники",
    image: "/portfolio-work/alive-audio.png",
    fullImage: "/portfolio-full/alive-audio.png",
    fullImageWidth: 1920,
    fullImageHeight: 7934,
    tags: ["Next.js", "Каталог", "CMS", "UI/UX"],
  },
  {
    slug: "aaa-english",
    title: "AAA English",
    category: "Школа английского языка",
    image: "/portfolio-work/aaa-english.png",
    fullImage: "/portfolio-full/aaa-english.png",
    fullImageWidth: 1920,
    fullImageHeight: 12105,
    tags: ["Landing", "JavaScript", "SEO", "Адаптив"],
  },
  {
    slug: "oren-krym",
    title: "Орен-Крым",
    category: "Санаторий в Евпатории",
    image: "/portfolio-work/oren-krym.png",
    fullImage: "/portfolio-full/oren-krym.png",
    fullImageWidth: 1898,
    fullImageHeight: 6395,
    tags: ["React", "Бронирование", "Формы", "CMS"],
  },
  {
    slug: "smelova-event",
    title: "Smelova Event",
    category: "Свадебное агентство",
    image: "/portfolio-work/smelova-event.png",
    fullImage: "/portfolio-full/smelova-event.png",
    fullImageWidth: 1897,
    fullImageHeight: 8227,
    tags: ["Landing", "Анимация", "Формы", "Адаптив"],
  },
  {
    slug: "art-design",
    title: "Арт и Дизайн",
    category: "Открытки и подарки",
    image: "/portfolio-work/art-design.png",
    fullImage: "/portfolio-full/art-design.png",
    fullImageWidth: 1920,
    fullImageHeight: 6122,
    tags: ["Каталог", "CMS", "E-commerce", "UI/UX"],
  },
  {
    slug: "bizoryuk",
    title: "Бизорюк",
    category: "Натуральная косметика",
    image: "/portfolio-work/bizoryuk.png",
    fullImage: "/portfolio-full/bizoryuk.png",
    fullImageWidth: 1920,
    fullImageHeight: 5436,
    tags: ["React", "Каталог", "SEO", "Адаптив"],
  },
];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}
