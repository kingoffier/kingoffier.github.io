import type { CSSProperties } from "react";

const orbitText = "ВЕБ-ДИЗАЙН • РАЗРАБОТКА • ИДЕИ • ";

function Spark({ className = "" }: { className?: string }) {
  return <span className={`spark ${className}`} aria-hidden="true" />;
}

function Orbit() {
  return (
    <div className="orbit" aria-hidden="true">
      <div className="orbit__text">
        {Array.from(orbitText).map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            style={{ "--index": index } as CSSProperties}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
      <Spark className="orbit__spark" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="hero" id="top">
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="В начало страницы">
          <Spark />
        </a>

        <nav className="site-nav" aria-label="Основная навигация">
          <a href="#about">Обо мне</a>
          <a href="#work">Мои работы</a>
          <a className="contact-link" href="#contact">
            Контакты
          </a>
        </nav>
      </header>

      <section className="hero-stage" aria-labelledby="hero-title">
        <h1 className="hero-title" id="hero-title">
          <span className="hero-title__first">Artem</span>
          <span className="hero-title__last" id="work">
            Volozhanin
          </span>
        </h1>

        <Orbit />

        <p className="intro" id="about">
          Привет! Я Артём — веб-дизайнер и разработчик. Создаю выразительные
          цифровые продукты, где сильная визуальная идея работает вместе с
          удобным интерфейсом.
        </p>

        <div className="portfolio-label" id="contact" aria-label="Портфолио 2026">
          <span>Портфолио</span>
          <span aria-hidden="true">/</span>
          <span>2026</span>
        </div>
      </section>
    </main>
  );
}
