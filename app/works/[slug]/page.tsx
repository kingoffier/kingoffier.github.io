import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWork, works } from "../../works-data";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);

  if (!work) {
    return { title: "Проект не найден" };
  }

  return {
    title: `${work.title} — Artem Volozhanin`,
    description: `Полный дизайн проекта «${work.title}»: ${work.category}.`,
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getWork(slug);

  if (!work) {
    notFound();
  }

  const currentIndex = works.findIndex((item) => item.slug === work.slug);
  const nextWork = works[(currentIndex + 1) % works.length];

  return (
    <main className="project-page" id="top">
      <header className="project-header">
        <Link href="/#work">← Все работы</Link>
        <span>
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(works.length).padStart(2, "0")}
        </span>
      </header>

      <section className="project-intro" aria-labelledby="project-title">
        <p>{work.category}</p>
        <h1 id="project-title">{work.title}</h1>

        <div className="project-tags" aria-label="Технологии проекта">
          {work.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <figure className="project-design">
        <Image
          src={work.fullImage}
          alt={`Полный дизайн проекта «${work.title}»`}
          width={work.fullImageWidth}
          height={work.fullImageHeight}
          sizes="100vw"
          priority
          unoptimized
          draggable={false}
        />
      </figure>

      <nav className="project-navigation" aria-label="Навигация по проектам">
        <Link href="/#work">← Вернуться к работам</Link>
        <Link href={`/works/${nextWork.slug}`}>
          Следующий проект: {nextWork.title} →
        </Link>
      </nav>
    </main>
  );
}
