"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { works } from "./works-data";

const scrollLetters = "SCROLL•SCROLL•SCROLL•".split("");

function WorksOrbit() {
  const step = 360 / scrollLetters.length;

  return (
    <div className="works-orbit" aria-hidden="true">
      <div className="works-orbit__text">
        {scrollLetters.map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            style={{
              transform: `translateX(-50%) rotate(${index * step}deg)`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <span className="works-orbit__spark" />
    </div>
  );
}

export default function WorksSection() {
  const [view, setView] = useState<"cards" | "list">("cards");

  return (
    <section className="works-section" id="work" aria-labelledby="works-title">
      <header className="works-heading">
        <h2 className="works-title" id="works-title">
          <Image
            src="/works-title-cyrillic-blackletter.png"
            alt="Мои работы"
            width={1680}
            height={944}
            unoptimized
            draggable={false}
          />
        </h2>
        <WorksOrbit />
      </header>

      <div className="works-view-switch" aria-label="Вид проектов">
        <button
          className={view === "cards" ? "works-view-switch__active" : ""}
          type="button"
          aria-pressed={view === "cards"}
          onClick={() => setView("cards")}
        >
          Карточки
        </button>
        <button
          className={view === "list" ? "works-view-switch__active" : ""}
          type="button"
          aria-pressed={view === "list"}
          onClick={() => setView("list")}
        >
          Список
        </button>
      </div>

      <div
        key={view}
        className={`works-grid ${view === "list" ? "works-grid--list" : ""}`}
        aria-live="polite"
      >
        {works.map((work) => (
          <Link
            className="work-card-link"
            href={`/works/${work.slug}`}
            key={work.slug}
            aria-label={`Открыть полный дизайн проекта «${work.title}»`}
          >
            <article className="work-card">
              <div className="work-card__preview">
                <Image
                  className="work-card__image"
                  src={work.image}
                  alt={`Главный экран проекта «${work.title}»`}
                  fill
                  sizes={
                    view === "list"
                      ? "(max-width: 700px) 100vw, 38vw"
                      : "(max-width: 720px) 100vw, 50vw"
                  }
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  unoptimized
                />
              </div>

              <div className="work-card__tags" aria-label="Особенности проекта">
                {work.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="work-card__meta">
                <h3>
                  {work.title}
                  <span aria-hidden="true">↗</span>
                </h3>
                <p>{work.category}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
