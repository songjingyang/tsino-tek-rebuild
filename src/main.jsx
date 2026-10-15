import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  Download,
  Factory,
  Gauge,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  X
} from "lucide-react";
import { assetUrl, content } from "./content";
import "./styles.css";

const clampIndex = (index, length) => (index + length) % length;

function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <div className={`section-heading ${light ? "section-heading--light" : ""}`}>
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function Header({ text, language, onLanguageChange, onContact }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`site-header ${scrolled ? "site-header--solid" : ""}`}>
      <div className="site-header__inner">
        <button className="brand-button" onClick={() => navigate("home")} aria-label={text.brand}>
          <img src={assetUrl("/assets/ui/logo-white.png")} alt={text.brand} />
        </button>
        <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Primary">
          {text.nav.map(([id, label]) => (
            <button key={id} onClick={() => navigate(id)}>{label}</button>
          ))}
          <button className="main-nav__mobile-contact" onClick={onContact}>
            <Mail size={17} />{text.common.contactUs}
          </button>
        </nav>
        <div className="site-header__actions">
          <a className="header-phone" href="tel:01065400661"><Phone size={16} />010-65400661</a>
          <button className="language-switch" onClick={() => onLanguageChange(language === "zh" ? "en" : "zh")}>{text.languageLabel}</button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? text.common.close : "Menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ text, onContact }) {
  const [active, setActive] = useState(0);
  const pauseRef = useRef(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!pauseRef.current) setActive((value) => clampIndex(value + 1, text.hero.length));
    }, 7000);
    return () => window.clearInterval(timer);
  }, [text.hero.length]);

  return (
    <section id="home" className="hero" onMouseEnter={() => { pauseRef.current = true; }} onMouseLeave={() => { pauseRef.current = false; }}>
      {text.hero.map((slide, index) => (
        <picture key={slide.desktop} className={`hero__media ${active === index ? "is-active" : ""}`}>
          <source media="(max-width: 700px)" srcSet={slide.mobile} />
          <img src={slide.desktop} alt="" fetchPriority={index === 0 ? "high" : "auto"} />
        </picture>
      ))}
      <div className="hero__veil" />
      <div className="hero__content">
        <span className="hero__eyebrow">{text.hero[active].eyebrow}</span>
        <h1>{text.brand}</h1>
        <p className="hero__headline">{text.hero[active].title}</p>
        <p className="hero__copy">{text.hero[active].copy}</p>
        <div className="hero__actions">
          <button className="button button--primary" onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>
            {text.productsIntro.title}<ArrowRight size={18} />
          </button>
          <button className="button button--ghost" onClick={onContact}>{text.common.contactUs}</button>
        </div>
      </div>
      <div className="hero__controls">
        <button aria-label={text.common.previous} onClick={() => setActive(clampIndex(active - 1, text.hero.length))}><ChevronLeft /></button>
        <div className="hero__dots">
          {text.hero.map((_, index) => <button key={index} aria-label={`${index + 1}`} className={active === index ? "is-active" : ""} onClick={() => setActive(index)} />)}
        </div>
        <button aria-label={text.common.next} onClick={() => setActive(clampIndex(active + 1, text.hero.length))}><ChevronRight /></button>
      </div>
      <button className="hero__scroll" onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>
        <ArrowDown size={18} /><span>{text.common.scroll}</span>
      </button>
    </section>
  );
}

function ProductSection({ text, onContact }) {
  const [selected, setSelected] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const product = text.products[selected];

  return (
    <section id="products" className="products section-band section-band--dark">
      <div className="section-shell">
        <SectionHeading {...text.productsIntro} light />
        <div className="products__layout">
          <div className="product-tabs" role="tablist" aria-label={text.common.category}>
            {text.products.map((item, index) => (
              <button key={item.id} className={index === selected ? "is-active" : ""} onClick={() => setSelected(index)} role="tab" aria-selected={index === selected}>
                <span>{String(index + 1).padStart(2, "0")}</span>{item.category}
              </button>
            ))}
          </div>
          <article className="product-stage" key={product.id}>
            <div className="product-stage__info">
              <span className="product-stage__accent">{product.accent}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-stage__tags">
                {product.thumbs.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="product-stage__actions">
                <button className="button button--primary" onClick={() => setModalOpen(true)}>{text.common.viewSpecs}<ArrowRight size={18} /></button>
                <button className="button button--ghost" onClick={onContact}>{text.common.contactUs}</button>
              </div>
            </div>
            <div className="product-stage__visual">
              <span className="product-stage__index">{String(selected + 1).padStart(2, "0")}</span>
              <img src={product.image} alt={product.name} />
            </div>
          </article>
        </div>
      </div>
      {modalOpen ? (
        <div className="modal" role="dialog" aria-modal="true" aria-label={product.name} onMouseDown={(event) => { if (event.target === event.currentTarget) setModalOpen(false); }}>
          <div className="modal__panel">
            <button className="modal__close" onClick={() => setModalOpen(false)} aria-label={text.common.close}><X /></button>
            <div className="modal__product">
              <img src={product.image} alt={product.name} />
              <div>
                <span className="modal__eyebrow">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <dl>
                  {product.specs.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
                </dl>
                <button className="button button--primary" onClick={() => { setModalOpen(false); onContact(); }}>{text.common.contactUs}<ArrowRight size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ApplicationsSection({ text }) {
  const [selected, setSelected] = useState(0);
  const application = text.applications[selected];
  const headers = [text.common.model, text.common.power, text.common.voltage, text.common.frequency, text.common.device, text.common.speed, text.common.communication];

  return (
    <section id="applications" className="applications section-band">
      <picture className="applications__background" key={application.id}>
        <source media="(max-width: 700px)" srcSet={application.mobile} />
        <img src={application.image} alt="" />
      </picture>
      <div className="applications__overlay" />
      <div className="section-shell applications__inner">
        <SectionHeading {...text.applicationsIntro} light />
        <div className="application-tabs" role="tablist">
          {text.applications.map((item, index) => (
            <button key={item.id} className={selected === index ? "is-active" : ""} onClick={() => setSelected(index)} role="tab" aria-selected={selected === index}>{item.title}</button>
          ))}
        </div>
        <div className="application-content" key={application.id}>
          <div className="application-content__copy">
            <span>{String(selected + 1).padStart(2, "0")}</span>
            <h3>{application.title}</h3>
            <p>{application.description}</p>
          </div>
          <div className="spec-table-wrap">
            <table className="spec-table">
              <thead><tr>{headers.map((item) => <th key={item}>{item}</th>)}</tr></thead>
              <tbody>{application.rows.map((row) => <tr key={row.join("-")}>{row.map((cell, index) => <td key={`${cell}-${index}`}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function FactorySection({ text }) {
  return (
    <section id="factory" className="factory-section section-band">
      <div className="section-shell factory-section__layout">
        <div className="factory-section__media">
          <img src={assetUrl("/assets/news/factory.jpg")} alt={text.factory.imageAlt} />
          <div className="factory-section__badge"><Factory size={24} /><span>TSINO-TEK</span></div>
        </div>
        <div className="factory-section__content">
          <SectionHeading eyebrow={text.factory.eyebrow} title={text.factory.title} copy={text.factory.copy} />
          <div className="factory-metrics">
            {text.factory.metrics.map(([value, label], index) => (
              <div key={label}><span>{index === 0 ? <Factory /> : index === 1 ? <ShieldCheck /> : <Gauge />}</span><strong>{value}</strong><small>{label}</small></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ text }) {
  return (
    <section id="about" className="about-section section-band">
      <div className="section-shell about-section__layout">
        <div className="about-section__content">
          <SectionHeading eyebrow={text.about.eyebrow} title={text.about.title} copy={text.about.copy} />
          <p className="about-section__detail">{text.about.detail}</p>
          <div className="about-section__capabilities">
            <span><Gauge />480,000 rpm</span><span><ShieldCheck />SoC FPGA</span><span><Factory />GaN / SiC</span>
          </div>
        </div>
        <div className="about-section__image">
          <img src={assetUrl("/assets/about/company.jpg")} alt={text.about.imageAlt} />
        </div>
      </div>
    </section>
  );
}

function NewsSection({ text }) {
  return (
    <section id="news" className="news-section section-band">
      <div className="section-shell">
        <SectionHeading {...text.newsIntro} />
        <div className="news-grid">
          {text.news.map((item, index) => (
            <article className={`news-card ${index === 0 ? "news-card--featured" : ""}`} key={item.title}>
              <div className="news-card__image"><img src={item.image} alt="" /></div>
              <div className="news-card__content"><time>{item.date}</time><h3>{item.title}</h3><p>{item.copy}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QualificationsSection({ text }) {
  const [selected, setSelected] = useState(0);
  const item = text.qualifications.tabs[selected];
  return (
    <section id="qualifications" className="qualifications section-band">
      <div className="section-shell">
        <div className="qualifications__heading-row">
          <SectionHeading eyebrow={text.qualifications.eyebrow} title={text.qualifications.title} copy={text.qualifications.copy} />
          <div className="qualification-tabs" role="tablist">
            {text.qualifications.tabs.map((tab, index) => <button key={tab[0]} className={selected === index ? "is-active" : ""} onClick={() => setSelected(index)} role="tab" aria-selected={selected === index}>{tab[1]}</button>)}
          </div>
        </div>
        <div className="qualification-stage" key={item[0]}><img src={item[2]} alt={item[1]} /></div>
      </div>
    </section>
  );
}

function ContactSection({ text, contactOpen, setContactOpen }) {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", need: "" });
  const contactRef = useRef(null);

  useEffect(() => {
    if (contactOpen) {
      contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      const timer = window.setTimeout(() => document.getElementById("contact-name")?.focus(), 700);
      return () => window.clearTimeout(timer);
    }
  }, [contactOpen]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(text.contact.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`${text.contact.formTitle} - ${form.company || form.name}`);
    const body = encodeURIComponent(`${text.contact.name}: ${form.name}\n${text.contact.companyLabel}: ${form.company}\n${text.contact.phoneLabel}: ${form.phone}\n\n${text.contact.need}:\n${form.need}`);
    window.location.href = `mailto:${text.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" ref={contactRef} className="contact-section section-band">
      <div className="section-shell contact-section__layout">
        <div className="contact-section__intro">
          <SectionHeading eyebrow={text.contact.eyebrow} title={text.contact.title} copy={text.contact.copy} light />
          <address>
            <div><Factory /><span><strong>{text.contact.company}</strong></span></div>
            <div><MapPin /><span>{text.contact.address}</span></div>
            <div><Phone /><a href="tel:01065400661">{text.contact.phone}</a></div>
            <div><Mail /><a href={`mailto:${text.contact.email}`}>{text.contact.email}</a></div>
          </address>
          <div className="contact-section__quick-actions">
            <button className="button button--light" onClick={copyEmail}><Clipboard size={18} />{copied ? text.contact.copied : text.contact.copyEmail}</button>
            <a className="button button--ghost" href={`mailto:${text.contact.email}`}><Mail size={18} />{text.contact.openEmail}</a>
          </div>
        </div>
        <form className={`contact-form ${contactOpen ? "contact-form--highlight" : ""}`} onSubmit={submit}>
          <div className="contact-form__head"><span>{text.contact.eyebrow}</span><h3>{text.contact.formTitle}</h3></div>
          <div className="contact-form__grid">
            <label><span>{text.contact.name}</span><input id="contact-name" name="name" autoComplete="name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder={text.contact.namePlaceholder} /></label>
            <label><span>{text.contact.companyLabel}</span><input name="company" autoComplete="organization" value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} placeholder={text.contact.companyPlaceholder} /></label>
            <label className="contact-form__full"><span>{text.contact.phoneLabel}</span><input name="phone" autoComplete="tel" required value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder={text.contact.phonePlaceholder} /></label>
            <label className="contact-form__full"><span>{text.contact.need}</span><textarea name="need" required rows="5" value={form.need} onChange={(event) => setForm({ ...form, need: event.target.value })} placeholder={text.contact.needPlaceholder} /></label>
          </div>
          <button className="button button--primary" type="submit"><Send size={18} />{text.contact.submit}</button>
          <small>{text.contact.privacy}</small>
        </form>
      </div>
    </section>
  );
}

function Footer({ text }) {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__inner">
        <img src={assetUrl("/assets/ui/logo-white.png")} alt={text.brand} />
        <p>{text.footer.copyright}</p>
        <span>{text.footer.record}</span>
      </div>
    </footer>
  );
}

function FloatingActions({ text, onContact }) {
  return (
    <div className="floating-actions">
      <a href="tel:01065400661" aria-label={text.contact.phone}><Phone /></a>
      <button onClick={onContact} aria-label={text.common.contactUs}><Mail /></button>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={text.nav[0][1]}><ArrowDown className="floating-actions__up" /></button>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("tsino-language") || "zh");
  const [contactOpen, setContactOpen] = useState(false);
  const text = useMemo(() => content[language] || content.zh, [language]);

  useEffect(() => {
    document.documentElement.lang = text.locale;
    localStorage.setItem("tsino-language", language);
  }, [language, text.locale]);

  const openContact = () => setContactOpen(true);

  return (
    <>
      <Header text={text} language={language} onLanguageChange={setLanguage} onContact={openContact} />
      <main>
        <Hero text={text} onContact={openContact} />
        <ProductSection text={text} onContact={openContact} />
        <ApplicationsSection text={text} />
        <FactorySection text={text} />
        <AboutSection text={text} />
        <NewsSection text={text} />
        <QualificationsSection text={text} />
        <ContactSection text={text} contactOpen={contactOpen} setContactOpen={setContactOpen} />
      </main>
      <Footer text={text} />
      <FloatingActions text={text} onContact={openContact} />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
