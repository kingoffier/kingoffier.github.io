import Image from "next/image";
import ArrowUpRight from "./ArrowUpRight";
import WorksSection from "./WorksSection";

function Spark({ className = "" }: { className?: string }) {
  return <span className={`spark ${className}`} aria-hidden="true" />;
}

function Orbit() {
  return (
    <div className="orbit" aria-hidden="true">
      <Image
        className="orbit-reference"
        src="/orbit-reference.png"
        alt=""
        width={217}
        height={217}
        priority
        unoptimized
        draggable={false}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-shell" id="top">
      <section className="hero" aria-labelledby="hero-title">
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

        <div className="hero-stage">
          <h1 className="sr-only" id="hero-title">
            Artem Volozhanin
          </h1>

          <div className="wordmark" aria-hidden="true">
            <div className="wordmark-crop wordmark-crop--first">
              <Image
                className="wordmark-source"
                src="/wordmark-source.png"
                alt=""
                width={1672}
                height={941}
                priority
                unoptimized
                draggable={false}
              />
            </div>
            <div className="wordmark-crop wordmark-crop--last">
              <Image
                className="wordmark-source"
                src="/wordmark-source.png"
                alt=""
                width={1672}
                height={941}
                priority
                unoptimized
                draggable={false}
              />
            </div>
          </div>

          <Orbit />

          <p className="intro">
            Привет! Я веб-дизайнер и разработчик. Создаю выразительные цифровые
            продукты, где сильная визуальная идея работает вместе с удобным
            интерфейсом.
          </p>

          <a
            className="portfolio-label"
            href="#work"
            aria-label="Перейти к работам"
          >
            <span>Портфолио</span>
            <span aria-hidden="true">/</span>
            <span>2026</span>
          </a>
        </div>
      </section>

      <section
        className="about-section"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="about-identity">
          <h2 className="about-title" id="about-title">
            <span>Обо</span>
            <span>мне</span>
          </h2>

          <p className="about-statement">
            Создаю сайты, где <strong>визуальная идея</strong> работает на
            результат.
          </p>

          <div className="about-signature" aria-hidden="true">
            <Image
              src="/wordmark-source.png"
              alt=""
              width={1672}
              height={941}
              unoptimized
              draggable={false}
            />
          </div>
        </div>

        <div className="about-content">
          <p className="about-lead">
            Меня зовут Артём, я занимаюсь разработкой сайтов, лендингов,
            интернет-магазинов и веб-приложений. Имею диплом по специальности{" "}
            <strong>«Разработчик веб- и мультимедийных приложений».</strong>
          </p>

          <div className="about-details">
            <p>
              Могу разработать сайт под разные задачи и подобрать подходящий
              стек технологий в зависимости от целей проекта. Работаю как с
              современными frontend-решениями, так и с конструкторами и CMS. При
              необходимости могу реализовать проект на React, JavaScript,
              TypeScript, HTML, CSS, а также подключить backend, API, формы, базы
              данных и сторонние сервисы.
            </p>

            <p>
              Создаю не только визуально привлекательные, но и удобные,
              адаптивные и функциональные сайты. Продумываю структуру,
              пользовательские сценарии, логику интерфейса и подачу информации,
              чтобы посетителю было легко разобраться в продукте и выполнить
              нужное действие.
            </p>

            <p>
              Перед началом работы изучаю задачу, тематику проекта, целевую
              аудиторию и технические требования. Подбираю решение с учётом
              сроков, производительности и возможности дальнейшего развития
              сайта.
            </p>

            <p>
              Если вам нужен современный, понятный и качественно разработанный
              сайт - буду рад помочь. Вместе мы сможем создать проект, который
              будет соответствовать вашим задачам и эффективно работать на
              результат.
            </p>
          </div>

          <div className="about-stack" aria-label="Технологии">
            <span>React</span>
            <i aria-hidden="true"></i>
            <span>TypeScript</span>
            <i aria-hidden="true"></i>
            <span>JavaScript</span>
            <i aria-hidden="true"></i>
            <span>HTML</span>
            <i aria-hidden="true"></i>
            <span>CSS</span>
            <i aria-hidden="true"></i>
            <span>API</span>
            <i aria-hidden="true"></i>
            <span>CMS</span>
          </div>
        </div>

      </section>

      <WorksSection />

      <section
        className="contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <header className="contact-heading">
          <h2 className="contact-title" id="contact-title">
            <Image
              src="/contact-title-cyrillic-blackletter.png"
              alt="Контакты"
              width={1680}
              height={944}
              unoptimized
              draggable={false}
            />
          </h2>
        </header>

        <div className="contact-layout">
          <div className="contact-intro">
            <p>
              Есть задача?
              <br />
              Давайте
              <br />
              обсудим.
            </p>
            <Spark className="contact-spark" />
          </div>

          <div className="contact-actions">
            <a
              className="contact-row"
              href="https://t.me/kingoffier"
              target="_blank"
              rel="noreferrer"
              aria-label="Написать Артёму в Telegram"
            >
              <span className="contact-row__label">Telegram</span>
              <span className="contact-row__action">
                Написать в Telegram
              </span>
              <ArrowUpRight className="contact-row__arrow" />
            </a>

            <a
              className="contact-row"
              href="mailto:kingoffier@mail.ru?subject=%D0%97%D0%B0%D1%8F%D0%B2%D0%BA%D0%B0%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE"
              aria-label="Отправить Артёму письмо"
            >
              <span className="contact-row__label">Email</span>
              <span className="contact-row__action">Отправить письмо</span>
              <ArrowUpRight className="contact-row__arrow" />
            </a>
          </div>
        </div>

        <footer className="contact-footer">
          <span>Открыт для новых проектов</span>
          <span>Artem Volozhanin</span>
        </footer>
      </section>

      <footer className="site-footer" aria-label="Подвал сайта">
        <section className="site-footer__hero">
          <div className="site-footer__wordmark" aria-label="Artem Volozhanin">
            <div className="wordmark-crop wordmark-crop--first">
              <Image
                className="wordmark-source"
                src="/wordmark-source.png"
                alt=""
                width={1672}
                height={941}
                unoptimized
                draggable={false}
              />
            </div>
            <div className="wordmark-crop wordmark-crop--last">
              <Image
                className="wordmark-source"
                src="/wordmark-source.png"
                alt=""
                width={1672}
                height={941}
                unoptimized
                draggable={false}
              />
            </div>
          </div>
        </section>

        <div className="site-footer__grid">
          <div className="site-footer__cell site-footer__cta">
            <p>Давайте создадим сильный проект.</p>
            <Spark className="site-footer__spark" />
          </div>

          <nav
            className="site-footer__cell"
            aria-label="Навигация в футере"
          >
            <span className="site-footer__label">Навигация</span>
            <ul className="site-footer__links">
              <li>
                <a href="#about">
                  Обо мне <ArrowUpRight />
                </a>
              </li>
              <li>
                <a href="#work">
                  Мои работы <ArrowUpRight />
                </a>
              </li>
              <li>
                <a href="#contact">
                  Контакты <ArrowUpRight />
                </a>
              </li>
            </ul>
          </nav>

          <div className="site-footer__cell">
            <span className="site-footer__label">Связаться</span>
            <ul className="site-footer__links">
              <li>
                <a
                  href="https://t.me/kingoffier"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="site-footer__contact-copy">
                    Telegram — @kingoffier
                  </span>
                  <ArrowUpRight />
                </a>
              </li>
              <li>
                <a href="mailto:kingoffier@mail.ru?subject=%D0%97%D0%B0%D1%8F%D0%B2%D0%BA%D0%B0%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE">
                  <span className="site-footer__contact-copy">
                    Почта — kingoffier@mail.ru
                  </span>
                  <ArrowUpRight />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 Artem Volozhanin</span>
          <span>Екатеринбург / Россия</span>
          <a href="#top">Наверх ↑</a>
        </div>
      </footer>
    </main>
  );
}
