import { useEffect, useState } from "react";
import { profile, contact, skillGroups, projects, education, certifications } from "./data.js";

const NAV = ["Home", "About", "Skills", "Projects", "Education", "Certifications", "Contact"];
const id = (n) => n.toLowerCase();

const Icon = ({ d, label }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" role="img" aria-label={label}>
    <path d={d} />
  </svg>
);
const ICONS = {
  LinkedIn: "M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 9.75h4V21H3zM9.75 9.75h3.8v1.6h.06c.53-1 1.82-2.05 3.75-2.05 4 0 4.74 2.63 4.74 6.05V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4z",
  GitHub: "M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z",
  Email: "M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm9 7.2L4.5 7v.1L12 12.4 19.5 7.1V7z",
  Download: "M12 3v10.2l3.6-3.6 1.4 1.4-6 6-6-6 1.4-1.4 3.6 3.6V3zM5 19h14v2H5z",
};
const socials = [
  ["LinkedIn", contact.linkedin],
  ["GitHub", contact.github],
  ["Email", `mailto:${contact.email}`],
];

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => { const el = document.getElementById(id(n)); el && obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return active;
}

function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav-in">
        <a href="#home" className="logo">{profile.short}<span>.</span></a>
        <nav className={open ? "links open" : "links"} aria-label="Primary">
          {NAV.map((n) => (
            <a key={n} href={`#${id(n)}`} className={active === id(n) ? "on" : ""} onClick={() => setOpen(false)}>{n}</a>
          ))}
          <a className="btn sm mobile-only" href={profile.resume} download>Download Resume</a>
        </nav>
        <a className="btn sm desktop-only" href={profile.resume} download><Icon d={ICONS.Download} label="" /> Download Resume</a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

const Heading = ({ label, children }) => (
  <div className="heading"><small>{label}</small><h2>{children}</h2></div>
);

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="badge"><i /> Available for Opportunities</span>
          <h1>Hi, I'm <em>Manya</em></h1>
          <p className="sub">{profile.subtitle}</p>
          <p className="lead">{profile.heroText}</p>
          <div className="row">
            <a className="btn" href="#projects">View My Projects</a>
            <a className="btn ghost" href="#contact">Contact Me</a>
            <a className="btn ghost" href={profile.resume} download>Download Resume</a>
          </div>
          <div className="row socials">
            {socials.map(([n, h]) => (
              <a key={n} href={h} target="_blank" rel="noreferrer" aria-label={n} className="soc"><Icon d={ICONS[n]} label={n} /></a>
            ))}
          </div>
        </div>
        <div className="photo-wrap">
          <div className="blob b1" /><div className="blob b2" />
          <div className="photo"><img src={profile.photo} alt="Manya Shettigar" /></div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="sec">
      <div className="wrap two">
        <div>
          <Heading label="About me">Get to Know <em>Me</em></Heading>
          {profile.about.map((t, i) => <p key={i} className="body">{t}</p>)}
          <a className="btn" href="#education">My Education</a>
        </div>
        <div className="card info">
          {profile.info.map(([k, v]) => (
            <div key={k}><small>{k}</small><b>{v}</b></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="sec cream">
      <div className="wrap">
        <Heading label="My skills">Technical <em>Skills</em></Heading>
        <div className="groups">
          {skillGroups.map((g) => (
            <div key={g.group}>
              <h3>{g.group}</h3>
              <div className="chips">
                {g.items.map(([n, ab]) => (
                  <div className="chip card" key={n}><span className="ab">{ab}</span>{n}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="card project">
      <div className="preview">
        {p.image ? <img src={p.image} alt={`${p.title} preview`} loading="lazy" /> : <span>{p.title}</span>}
      </div>
      <div className="pbody">
        <h3>{p.title}</h3>
        <span className="pill">{p.badge}</span>
        <p>{p.description}</p>
        <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
        <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        <div className="row">
          {p.demo && <a className="btn sm" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>}
          {p.github && <a className="btn sm ghost" href={p.github} target="_blank" rel="noreferrer">View Code</a>}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="sec">
      <div className="wrap">
        <Heading label="My projects">Featured <em>Projects</em></Heading>
        <div className="grid2">{projects.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="sec cream">
      <div className="wrap two">
        <div>
          <Heading label="Education">My <em>Education</em></Heading>
          {education.map((e) => (
            <div className="card edu" key={e.degree}>
              <b>{e.degree}</b>
              <p>{e.school}</p>
              <p>{e.meta}</p>
              <span className="pill">{e.score}</span>
            </div>
          ))}
        </div>
        <div id="certifications">
          <Heading label="Certifications"><em>Certifications</em></Heading>
          {certifications.length === 0 ? (
            <div className="card edu empty">
              <b>Certificates coming soon</b>
              <p>Add your certificates in <code>src/data.js</code> with title, issuer, date and a PDF or image link.</p>
            </div>
          ) : certifications.map((c) => (
            <div className="card edu" key={c.title}>
              <b>{c.title}</b>
              <p>{c.org} | {c.date}</p>
              <a className="btn sm" href={c.link} target="_blank" rel="noreferrer">View Certificate</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `${f.get("message")}\n\nFrom: ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Portfolio enquiry from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <section id="contact" className="sec">
      <div className="wrap banner">
        <div>
          <h2>Let's Work <em>Together</em></h2>
          <p>I am open to internship opportunities, entry-level positions, and collaborations where I can learn, contribute, and grow as a developer.</p>
          <div className="row">
            <a className="btn" href={`mailto:${contact.email}`}>Send Email</a>
            <a className="btn ghost" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn ghost" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <form className="card form" onSubmit={submit}>
          <label>Name<input name="name" required autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Message<textarea name="message" rows="4" required /></label>
          <button className="btn" type="submit">Send Message</button>
          {sent && <p role="status" className="ok">Your email app should open with the message ready to send.</p>}
        </form>
      </div>
    </section>
  );
}

export default function App() {
  const active = useActiveSection();
  return (
    <>
      <Navbar active={active} />
      <main>
        <Hero /><About /><Skills /><Projects /><Education /><Contact />
      </main>
      <footer className="foot">© {new Date().getFullYear()} {profile.name}. Built with React.</footer>
    </>
  );
}
