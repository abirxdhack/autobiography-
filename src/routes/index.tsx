import { createFileRoute } from "@tanstack/react-router";
import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Award,
  BookOpen,
  Calendar,
  Code2,
  Download,
  Monitor,
  Moon,
  Sun,
  ExternalLink,
  Facebook,
  Github,
  GraduationCap,
  Heart,
  Instagram,
  Languages as LanguagesIcon,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  Printer,
  Send,
  Sparkles,
  Star,
  Target,
  Trophy,
  TrendingUp,
  Twitter,
  Users,
  Youtube,
  Zap,
  Infinity as InfinityIcon,
  Quote,
  Flag,
  Compass,
  Flame,
  Sunrise,
} from "lucide-react";

import heroImg from "@/assets/photos/hero.webp?url";
import aboutImg from "@/assets/photos/about.jpg?url";
import progressImg from "@/assets/photos/progress.jpg?url";
import g1 from "@/assets/photos/g1.jpg?url";
import g2 from "@/assets/photos/g2.jpg?url";
import g3 from "@/assets/photos/g3.jpg?url";
import g4 from "@/assets/photos/g4.jpg?url";
import g5 from "@/assets/photos/g5.png?url";
import g6 from "@/assets/photos/g6.jpg?url";
import resumePdf from "@/assets/Abir-Arafat-Chawdhury.pdf?url";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abir Arafat Chawdhury — Student Developer & Self-Taught Programmer" },
      { name: "description", content: "Cinematic portfolio of Abir Arafat Chawdhury — Student Developer, Self-Taught Programmer and aspiring Full Stack Engineer from Faridpur, Bangladesh." },
      { property: "og:title", content: "Abir Arafat Chawdhury — Student Developer" },
      { property: "og:description", content: "Turning ideas into reality through code. Self-taught programmer from Faridpur, Bangladesh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "story", label: "Story" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

const SOCIALS = [
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/abirxdhack" },
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com/abirxdhackz" },
  { Icon: Facebook, label: "Facebook", href: "https://facebook.com/abirxdhackz" },
  { Icon: Twitter, label: "X (Twitter)", href: "https://x.com/abirxdhackz" },
  { Icon: Youtube, label: "YouTube", href: "https://youtube.com/@abirxdhackz" },
  { Icon: Github, label: "GitHub", href: "https://github.com/abirxdhack" },
  { Icon: Send, label: "Telegram", href: "https://t.me/abirxdhackz" },
  { Icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/8801963818285" },
  { Icon: Mail, label: "Email", href: "mailto:abirxdhackz.info.me@gmail.com" },
];

const aboutItems = [
  { Icon: Target, title: "Focused", text: "Committed to long-term goals over short wins." },
  { Icon: Mountain, title: "Ambitious", text: "Dreaming big and engineering my way there." },
  { Icon: Lightbulb, title: "Creative", text: "Turning ideas into shippable software." },
  { Icon: Heart, title: "Grateful", text: "Honoring every person and lesson along the way." },
];

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Python", level: 90 },
  { name: "PHP", level: 70 },
  { name: "MongoDB", level: 50 },
  { name: "FastAPI", level: 80 },
  { name: "Git & GitHub", level: 88 },
];

const techStack = [
  { name: "Python", slug: "python" },
  { name: "JavaScript", slug: "javascript" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css" },
  { name: "PHP", slug: "php" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Flask", slug: "flask" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Linux", slug: "linux" },
  { name: "VS Code", slug: "visualstudiocode", src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudiocode.svg" },
];

const achievements = [
  { Icon: Trophy, title: "PSC District Topper", text: "Faridpur District Topper, PSC 2019.", year: "2019" },
  { Icon: Award, title: "Scholarship Winner", text: "General Grade Scholarship recipient.", year: "2019" },
  { Icon: GraduationCap, title: "High Merit Admission", text: "Offered admission at Faridpur Zilla School.", year: "2019" },
  { Icon: Code2, title: "Started Coding in Class 6", text: "First lines of code on my father's laptop.", year: "2020" },
  { Icon: Sparkles, title: "First Coding Income", text: "Earned 1,600 BDT from my first paid project at 17.", year: "2026" },
  { Icon: Star, title: "Open Source Projects", text: "Multiple production-ready repos shipped publicly.", year: "Ongoing" },
];

const education = [
  { level: "PSC", school: "Khalilpur Government Primary School", year: "2019", result: "GPA 5.00", note: "District Topper + Scholarship" },
  { level: "JSC", school: "Sultanpur High School", year: "2022", result: "GPA 5.00", note: "Science track" },
  { level: "SSC", school: "Sultanpur High School", year: "2025", result: "GPA 4.94", note: "Science group" },
  { level: "HSC", school: "Government Yasin College, Faridpur", year: "2027 (running)", result: "Second Year", note: "HSC Candidate" },
];

const projects = [
  { name: "SmartNoteWeaver", flagship: true, href: "https://github.com/abirxdhack/SmartNoteWeaver", text: "Automated LaTeX-powered educational note generator producing professional PDFs across subjects.", tags: ["Python", "LaTeX", "Automation"] },
  { name: "GithubBot", href: "https://github.com/abirxdhack/GithubBot", text: "Telegram bot for GitHub integration: webhooks, secure tokens, repo monitoring & automation.", tags: ["Telethon", "Webhooks", "Python"] },
  { name: "SmartLiveGram", href: "https://github.com/abirxdhack/SmartLiveGram", text: "Private live-chat forwarding system between users and owner through a Telegram bot.", tags: ["Pyrogram", "Bot", "Async"] },
  { name: "CodeUtilBot", href: "https://github.com/abirxdhack/CodeUtilBot", text: "Advanced async Telegram bot for Python hosting, API integration, automation & file management.", tags: ["Telethon", "Async", "DevTools"] },
  { name: "A360API", href: "https://github.com/abirxdhack/A360API", text: "Open-source asynchronous FastAPI framework built on custom libraries. Under active development.", tags: ["FastAPI", "OSS", "WIP"] },
];

const personality = ["Introverted", "Calm", "Ambitious", "Overthinker", "Fast Learner", "Curious", "Persistent", "Detail-Oriented", "Problem Solver", "Consistent"];

const languages = [
  { name: "Bangla", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Basic" },
];

const values = [
  { word: "DISCIPLINE", line: "Success isn't built overnight — it's built every night.", bg: g1 },
  { word: "CONSISTENCY", line: "Showing up beats showing off. Every single day.", bg: g3 },
  { word: "CURIOSITY", line: "The questions I ask today become the code I write tomorrow.", bg: g4 },
];

const roadmap = [
  { Icon: Sunrise, title: "Today", text: "Building open source, learning every day." },
  { Icon: GraduationCap, title: "HSC 2027", text: "Finish HSC with strong results." },
  { Icon: BookOpen, title: "University", text: "Pursue Computer Science with scholarship." },
  { Icon: Flag, title: "Software Engineer", text: "Ship products at world-class companies." },
  { Icon: Compass, title: "USA", text: "Relocate and build a global career." },
  { Icon: Star, title: "Open Source", text: "Maintain libraries the world depends on." },
  { Icon: Heart, title: "Mentor Others", text: "Bring up the next generation behind me." },
];

const manifesto = [
  "Learning never ends.",
  "Consistency beats motivation.",
  "Every bug teaches something.",
  "Open source changes lives.",
  "Failure is feedback.",
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useLiveAge(birth: Date) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return useMemo(() => {
    if (!now) return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 };
    const diffMs = now.getTime() - birth.getTime();
    const totalSeconds = Math.floor(diffMs / 1000);
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    if (days < 0) {
      months -= 1;
      const prev = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prev.getDate();
    }
    if (months < 0) { years -= 1; months += 12; }
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return { years, months, days, hours, minutes, seconds, totalSeconds };
  }, [now, birth]);
}

function HomePage() {
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);
  const [navHidden, setNavHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  useReveal();

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      setShowTop(sy > 520);
      setScrolled(sy > 24);
      const delta = sy - lastY.current;
      if (sy > 120 && delta > 6) setNavHidden(true);
      else if (delta < -4) setNavHidden(false);
      lastY.current = sy;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (sy / max) * 100) : 0);
      const y = sy + 140;
      for (let i = NAV.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(NAV[i].id);
        if (el && el.offsetTop <= y) { setActive(NAV[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-fg selection:bg-accent selection:text-accent-foreground">
      <div className="fixed left-0 top-0 z-50 h-[2px] bg-accent transition-[width] duration-150" style={{ width: `${progress}%` }} />
      <Header active={active} onNav={scrollTo} hidden={navHidden} scrolled={scrolled} />
      <main>
        <Hero onNav={scrollTo} />
        <AvailabilityStrip />
        <QuickFacts />
        <About />
        <Chapter
          id="story"
          number="01"
          title="A Curious Beginning"
          quote="When I first touched a computer, the world quietly shifted."
          paragraphs={[
            "I was a Class 6 kid in Faridpur. My father's laptop sat on the table like a closed door — and one afternoon, I opened it.",
            "Lines of HTML on a black screen. The browser blinked back at me. Something I typed had appeared. From that moment, curiosity quietly became the loudest voice in my head.",
          ]}
          bg={g1}
          align="left"
        />
        <LiveAge />
        <Chapter
          number="02"
          title="Finding My Passion"
          quote="Discipline is what curiosity grows up to become."
          paragraphs={[
            "Self-taught means nobody hands you a roadmap. You stumble, you Google, you try again at 2 AM with tea going cold beside you.",
            "Python, FastAPI, async bots, Linux servers — each one started as a wall and slowly turned into a door. The wins were small, but they compounded.",
          ]}
          bg={g3}
          align="right"
        />
        <LearningMap />
        <Stack />
        <CodePhilosophy />
        <Projects />
        <CinematicQuote
          kicker="I Believe In"
          title="Progress, Not Perfection."
          body="Every day is a chance to ship a better version of myself. I don't chase perfection — I chase consistent, compounding progress."
          cta={{ label: "Work With Me", to: "contact" }}
          bg={progressImg}
          onNav={scrollTo}
        />
        <Achievements />
        <Education />
        <GitHubSection />
        <Values />
        <StatsStrip />
        <DreamSection />
        <FutureRoadmap />
        <Manifesto />
        <Thoughts />
        <LanguagesPersonality />
        <Resume />
      </main>
      <Footer onNav={scrollTo} />
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 grid h-10 w-10 place-items-center rounded-full border border-accent bg-bg-2 text-accent shadow-[0_0_24px_rgba(226,113,12,.35)] transition hover:scale-110 hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </div>
  );
}

function Header({ active, onNav, hidden, scrolled }: { active: string; onNav: (id: string) => void; hidden: boolean; scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"} ${scrolled ? "border-b border-accent/15 bg-bg/55 backdrop-blur-md shadow-[0_8px_24px_-18px_rgba(0,0,0,.6)]" : "border-b border-transparent bg-transparent"}`}
    >
      <div className="page-x mx-auto flex h-[3.85rem] max-w-[1500px] items-center gap-2 sm:h-[4.5rem] md:h-[5rem] lg:h-[5.25rem] lg:gap-3">
        <button
          onClick={() => onNav("home")}
          className="group mr-auto flex min-w-0 shrink items-baseline gap-1 whitespace-nowrap text-left text-script leading-none text-fg/90 transition-all duration-500 hover:text-accent text-[1.05rem] sm:text-[1.35rem] md:text-[1.65rem] lg:text-[1.55rem] xl:text-[1.95rem] 2xl:text-[2.25rem]"
        >
          <span className="truncate bg-gradient-to-r from-fg via-accent to-fg bg-[length:220%_100%] bg-clip-text text-transparent transition-all duration-700 group-hover:bg-[position:100%_0] motion-safe:animate-[shimmer_7s_ease-in-out_infinite]">
            Abir Arafat Chawdhury's Portfolio
          </span>
          <span className="text-accent">.</span>
        </button>
        <nav className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-[1.4rem]">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => onNav(item.id)}
              className={`relative pb-2 text-[0.7rem] font-extrabold uppercase leading-none tracking-[.07em] transition ${active === item.id ? "text-accent" : "text-fg/85 hover:text-accent"}`}
            >
              {item.label}
              <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-accent transition-all duration-300 ${active === item.id ? "w-full" : "w-0"}`} />
            </button>
          ))}
        </nav>
        <button
          onClick={() => onNav("contact")}
          className="hidden h-9 shrink-0 items-center gap-2 rounded-[5px] border border-accent/70 px-4 text-[0.75rem] font-semibold text-fg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:shadow-[0_10px_25px_-10px_var(--accent)] sm:inline-flex lg:hidden xl:inline-flex"
        >
          Let's Connect <ArrowUpRight size={15} />
        </button>
        <ThemeToggle />
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-9 w-9 place-items-center rounded-[5px] border border-border/70 text-fg lg:hidden"
        >
          <span className="relative flex h-3 w-4 flex-col justify-between">
            <span className={`block h-[2px] w-full bg-fg transition ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-full bg-fg transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-full bg-fg transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open && (
        <nav className="border-y border-border bg-bg/96 px-6 py-4 lg:hidden">
          <div className="grid gap-3">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNav(item.id); setOpen(false); }}
                className={`text-left text-xs font-bold uppercase tracking-wider transition ${active === item.id ? "text-accent" : "text-fg-muted hover:text-accent"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

type ThemeMode = "light" | "dark" | "system";

function applyTheme(mode: ThemeMode) {
  const prefersLight = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches;
  const light = mode === "light" || (mode === "system" && prefersLight);
  const r = document.documentElement;
  r.classList.toggle("light", light);
  r.classList.toggle("dark", !light);
  r.style.colorScheme = light ? "light" : "dark";
}

function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("system");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("theme") as ThemeMode)) || "system";
    setMode(saved);
    applyTheme(saved);
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      const s = (localStorage.getItem("theme") as ThemeMode) || "system";
      if (s === "system") applyTheme("system");
    };
    mq.addEventListener("change", onChange);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => { mq.removeEventListener("change", onChange); document.removeEventListener("click", onClick); };
  }, []);

  const pick = (m: ThemeMode) => {
    setMode(m);
    try { localStorage.setItem("theme", m); } catch {}
    applyTheme(m);
    setOpen(false);
  };

  const Icon = mode === "light" ? Sun : mode === "dark" ? Moon : Monitor;
  const options: { v: ThemeMode; label: string; Icon: typeof Sun }[] = [
    { v: "light", label: "Light", Icon: Sun },
    { v: "dark", label: "Dark", Icon: Moon },
    { v: "system", label: "System", Icon: Monitor },
  ];
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Theme"
        className="grid h-9 w-9 place-items-center rounded-[5px] border border-border/70 text-fg transition hover:border-accent hover:text-accent"
      >
        <Icon size={15} />
      </button>
      {open && (
        <div className="absolute right-0 top-[calc(100%+6px)] z-50 w-36 overflow-hidden rounded-[8px] border border-border bg-bg-2 shadow-[0_18px_40px_-20px_rgba(0,0,0,.6)]">
          {options.map(({ v, label, Icon: I }) => (
            <button
              key={v}
              onClick={() => pick(v)}
              className={`flex w-full items-center gap-2 px-3 py-2 text-left text-[0.78rem] font-semibold transition hover:bg-accent/15 ${mode === v ? "text-accent" : "text-fg"}`}
            >
              <I size={14} /> {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Hero({ onNav }: { onNav: (id: string) => void }) {
  return (
    <section
      id="home"
      className="relative min-h-[760px] overflow-hidden border-b border-accent/25 pt-[4.25rem] md:min-h-[680px]"
    >
      <img
        src={heroImg}
        alt="Abir Arafat Chawdhury portrait"
        className="absolute inset-0 h-full w-full object-cover object-[50%_12%] md:hidden"
        loading="eager"
        fetchPriority="high"
      />
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-[max(0rem,calc((100vw-1400px)/2))] hidden h-[calc(100%-4.25rem)] max-h-[680px] w-[min(44vw,560px)] object-contain object-bottom md:block"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--bg)_45%,transparent)_0%,color-mix(in_oklab,var(--bg)_18%,transparent)_28%,color-mix(in_oklab,var(--bg)_72%,transparent)_60%,var(--bg)_92%)] md:hidden" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,var(--bg)_0%,color-mix(in_oklab,var(--bg)_96%,transparent)_30%,color-mix(in_oklab,var(--bg)_50%,transparent)_55%,color-mix(in_oklab,var(--bg)_10%,transparent)_78%)] md:block" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_44%,rgba(0,134,148,.22),transparent_25%),radial-gradient(circle_at_84%_22%,rgba(224,77,24,.22),transparent_25%)]" />

      <div className="page-x relative mx-auto flex h-full max-w-[1400px] items-end pb-12 md:items-center md:pb-0">
        <div data-reveal className="reveal w-full max-w-[600px] pt-12 md:pt-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-bg/55 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-accent backdrop-blur-sm">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-accent" /></span>
            Available for Internship / Freelance
          </span>
          <p className="mt-4 text-[1.05rem] font-semibold text-accent">Hello, I'm</p>
          <h1 className="mt-2 max-w-[600px] text-[clamp(2.4rem,7.6vw,5.4rem)] font-black leading-[1.04] tracking-normal text-fg">
            Abir Arafat Chawdhury
          </h1>
          <p className="mt-3 text-[1rem] font-extrabold text-accent sm:text-[1.2rem]">Student Developer · Self-Taught Programmer · Aspiring Full Stack Engineer</p>
          <p className="mt-4 max-w-[460px] text-[0.95rem] italic leading-[1.7] text-fg-muted">
            "Turning ideas into reality through code."
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={() => onNav("projects")} className="btn-primary">
              View Projects <ArrowUpRight size={15} />
            </button>
            <button onClick={() => onNav("contact")} className="btn-ghost">
              Hire Me <Send size={14} />
            </button>
            <a href="#resume" onClick={(e) => { e.preventDefault(); onNav("resume"); }} className="btn-ghost">
              Resume <Download size={14} />
            </a>
          </div>
          <p className="mt-7 text-[0.78rem] font-semibold uppercase tracking-wider text-accent">Connect with me</p>
          <SocialRow />
        </div>
      </div>
    </section>
  );
}

function SocialRow() {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {SOCIALS.map(({ Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          className="icon-ring h-[34px] w-[34px] transition hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
        >
          <Icon size={15} />
        </a>
      ))}
    </div>
  );
}

function AvailabilityStrip() {
  return (
    <div className="border-b border-accent/15 bg-accent/10">
      <div className="page-x mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 text-[0.78rem] font-semibold text-fg/85 sm:text-[0.82rem]">
        <span className="flex items-center gap-2"><Zap size={14} className="text-accent" /> Open to Internships</span>
        <span className="hidden text-fg-dim sm:inline">•</span>
        <span className="flex items-center gap-2"><Code2 size={14} className="text-accent" /> Freelance Available</span>
        <span className="hidden text-fg-dim sm:inline">•</span>
        <span className="flex items-center gap-2"><MapPin size={14} className="text-accent" /> Khalilpur Bazar, Faridpur, Bangladesh</span>
      </div>
    </div>
  );
}

function QuickFacts() {
  const facts = [
    { k: "Name", v: "Abir Arafat Chawdhury" },
    { k: "Age", v: "17 years (live)" },
    { k: "Location", v: "Khalilpur Bazar, Faridpur, Bangladesh" },
    { k: "Education", v: "HSC 2027 — Govt. Yasin College" },
    { k: "Current Focus", v: "Full Stack & Backend Engineering" },
    { k: "Experience", v: "5+ years self-taught" },
    { k: "First Coding Year", v: "2020 (Class 6)" },
    { k: "Languages", v: "Bangla · English · Hindi" },
    { k: "Open Source Projects", v: "5+ public repositories" },
    { k: "Career Goal", v: "Full Stack Software Engineer in USA" },
  ];
  return (
    <section className="border-b border-accent/20 bg-bg-2/40 py-12 sm:py-14">
      <div className="page-x mx-auto max-w-[1400px]">
        <p className="section-kicker">Quick Facts</p>
        <h2 className="mt-1 text-[1.9rem] font-extrabold leading-tight sm:text-[2.3rem]">At a Glance</h2>
        <div className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {facts.map((f, i) => (
            <div key={f.k} data-reveal className="reveal flex items-center justify-between gap-4 border-b border-border/60 py-3" style={{ transitionDelay: `${i * 30}ms` }}>
              <span className="text-[0.78rem] font-bold uppercase tracking-wider text-accent">{f.k}</span>
              <span className="text-right text-[0.88rem] font-semibold text-fg">{f.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-accent/25 bg-bg-3">
      <div className="grid min-h-[340px] md:grid-cols-[42%_58%]">
        <div data-reveal className="reveal relative min-h-[360px] overflow-hidden sm:min-h-[420px]">
          <img src={aboutImg} alt="Abir portrait" className="absolute inset-0 h-full w-full object-cover object-[50%_4%]" loading="lazy" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_72%,var(--bg-3)_100%)]" />
          <Signature className="absolute bottom-8 left-[8%]" />
        </div>
        <div data-reveal className="reveal relative flex items-center bg-[radial-gradient(circle_at_100%_30%,rgba(24,54,59,.34),transparent_42%)] px-[clamp(1.2rem,5vw,4rem)] py-12">
          <div className="max-w-[620px]">
            <p className="section-kicker">About Me</p>
            <h2 className="mt-1 text-[2rem] font-extrabold leading-none text-fg sm:text-[2.4rem]">Who Am I?</h2>
            <AccentLine />
            <p className="mt-6 text-[0.95rem] leading-[1.75] text-fg-muted">
              I'm <span className="text-fg font-semibold">Abir Arafat Chawdhury</span>, a student developer and self-taught programmer from Faridpur, Bangladesh. I'm introverted, drawn to silence, deep thinking, technology, code and music.
            </p>
            <p className="mt-4 text-[0.95rem] leading-[1.75] text-fg-muted">
              My journey started in Class 6 on my father's laptop. Curiosity became passion, passion became purpose. Coming from a middle-class family taught me resilience and discipline — every challenge has sharpened my ambition to become a <span className="text-accent font-semibold">Full Stack Software Engineer</span> and build my career in the United States.
            </p>
            <div className="mt-7 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {aboutItems.map(({ Icon, title, text }) => (
                <div key={title} className="grid grid-cols-[44px_minmax(0,1fr)] gap-4">
                  <span className="icon-ring h-11 w-11"><Icon size={18} /></span>
                  <div className="min-w-0">
                    <h3 className="text-[0.95rem] font-extrabold text-fg">{title}</h3>
                    <p className="mt-1 text-[0.8rem] leading-[1.55] text-fg-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chapter({
  id,
  number,
  title,
  quote,
  paragraphs,
  bg,
  align,
}: {
  id?: string;
  number: string;
  title: string;
  quote: string;
  paragraphs: string[];
  bg: string;
  align: "left" | "right";
}) {
  const isRight = align === "right";
  return (
    <section id={id} className="relative min-h-[640px] overflow-hidden border-b border-accent/25 bg-bg-3 md:min-h-[720px]">
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
        loading="lazy"
      />
      <div
        className={`absolute inset-0 ${
          isRight
            ? "bg-[linear-gradient(270deg,var(--bg)_0%,color-mix(in_oklab,var(--bg)_92%,transparent)_32%,color-mix(in_oklab,var(--bg)_55%,transparent)_56%,color-mix(in_oklab,var(--bg)_10%,transparent)_100%)] md:bg-[linear-gradient(270deg,var(--bg)_0%,color-mix(in_oklab,var(--bg)_94%,transparent)_38%,color-mix(in_oklab,var(--bg)_50%,transparent)_62%,transparent_100%)]"
            : "bg-[linear-gradient(90deg,var(--bg)_0%,color-mix(in_oklab,var(--bg)_92%,transparent)_32%,color-mix(in_oklab,var(--bg)_55%,transparent)_56%,color-mix(in_oklab,var(--bg)_10%,transparent)_100%)] md:bg-[linear-gradient(90deg,var(--bg)_0%,color-mix(in_oklab,var(--bg)_94%,transparent)_38%,color-mix(in_oklab,var(--bg)_50%,transparent)_62%,transparent_100%)]"
        }`}
      />
      <div className="page-x relative mx-auto flex min-h-[640px] max-w-[1400px] items-center py-16 md:min-h-[720px]">
        <div data-reveal className={`reveal max-w-[600px] ${isRight ? "ml-auto text-left" : ""}`}>
          <p className="font-mono text-[0.78rem] font-bold uppercase tracking-[0.32em] text-accent">Chapter {number}</p>
          <h2 className="mt-3 text-[clamp(2.1rem,5.4vw,3.4rem)] font-black leading-[1.05] text-fg">{title}</h2>
          <AccentLine />
          <p className="mt-5 max-w-[560px] text-[1rem] italic leading-[1.55] text-fg/90 sm:text-[1.1rem]">
            "{quote}"
          </p>
          <div className="mt-6 space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="max-w-[560px] text-[0.95rem] leading-[1.75] text-fg-muted">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CinematicQuote({
  kicker,
  title,
  body,
  cta,
  bg,
  onNav,
}: {
  kicker: string;
  title: string;
  body: string;
  cta?: { label: string; to: string };
  bg: string;
  onNav: (id: string) => void;
}) {
  return (
    <section className="relative min-h-[520px] overflow-hidden border-b border-accent/25 bg-bg-3 md:min-h-[560px]">
      <img src={bg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-[55%_22%]" loading="lazy" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--bg)_0%,color-mix(in_oklab,var(--bg)_92%,transparent)_38%,color-mix(in_oklab,var(--bg)_50%,transparent)_60%,color-mix(in_oklab,var(--bg)_8%,transparent)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_60%,color-mix(in_oklab,var(--bg)_55%,transparent)_100%)]" />
      <div className="page-x relative mx-auto flex min-h-[520px] max-w-[1400px] items-center md:min-h-[560px]">
        <div data-reveal className="reveal max-w-[520px] py-16">
          <p className="section-kicker">{kicker}</p>
          <h2 className="mt-2 text-[clamp(2.1rem,5.4vw,3.2rem)] font-black leading-[1.04] text-fg">{title}</h2>
          <AccentLine />
          <p className="mt-5 max-w-[455px] text-[0.96rem] leading-[1.7] text-fg-muted">{body}</p>
          {cta && (
            <button onClick={() => onNav(cta.to)} className="btn-ghost mt-7">{cta.label} <ArrowUpRight size={15} /></button>
          )}
        </div>
      </div>
    </section>
  );
}

function LiveAge() {
  const birth = useMemo(() => new Date("2009-04-17T00:00:00+06:00"), []);
  const a = useLiveAge(birth);
  const cells = [
    { v: a.years, l: "Years" },
    { v: a.months, l: "Months" },
    { v: a.days, l: "Days" },
    { v: a.hours, l: "Hours" },
    { v: a.minutes, l: "Minutes" },
    { v: a.seconds, l: "Seconds" },
  ];
  return (
    <section className="border-b border-accent/20 bg-bg py-12">
      <div className="page-x mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-kicker">Live Age</p>
            <h2 className="mt-1 text-[1.7rem] font-extrabold leading-tight sm:text-[2rem]">Counting Every Second Since 17 April 2009</h2>
            <p className="mt-2 text-[0.85rem] text-fg-muted">Born Friday, 17 April 2009 — Faridpur, Bangladesh.</p>
          </div>
          <p className="text-[0.78rem] font-mono text-fg-dim">{a.totalSeconds.toLocaleString()} seconds alive</p>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
          {cells.map((c) => (
            <div key={c.l} className="rounded-[8px] border border-accent/25 bg-surface/60 p-3 text-center transition hover:border-accent/60">
              <div className="font-mono text-[1.5rem] font-extrabold leading-none text-accent tabular-nums sm:text-[2rem]">{String(c.v).padStart(2, "0")}</div>
              <div className="mt-2 text-[0.65rem] font-bold uppercase tracking-wider text-fg-muted sm:text-[0.7rem]">{c.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningMap() {
  return (
    <section id="skills" className="border-b border-accent/20 bg-bg-2/40 py-14">
      <div className="page-x mx-auto max-w-[1400px]">
        <p className="section-kicker">My Learning Map</p>
        <h2 className="mt-1 text-[1.9rem] font-extrabold leading-tight sm:text-[2.3rem]">Proficiency, Honestly Charted</h2>
        <AccentLine />
        <p className="mt-4 max-w-[640px] text-[0.9rem] leading-[1.65] text-fg-muted">
          No vanity numbers. This is where I actually stand — and where I'm still climbing.
        </p>
        <div className="mt-8 grid gap-x-12 gap-y-5 sm:grid-cols-2">
          {skills.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 60} />)}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }), { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-[0.85rem] font-semibold">
        <span className="text-fg">{name}</span>
        <span className="font-mono text-accent">{level}%</span>
      </div>
      <div className="mt-2 h-[8px] overflow-hidden rounded-full bg-bg-3 border border-border/60">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2 transition-[width] duration-1000 ease-out"
          style={{ width: shown ? `${level}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

function Stack() {
  return (
    <section id="stack" className="border-b border-accent/20 bg-bg py-14">
      <div className="page-x mx-auto max-w-[1400px]">
        <p className="section-kicker">Tech Stack</p>
        <h2 className="mt-1 text-[1.9rem] font-extrabold leading-tight sm:text-[2.3rem]">Tools I Build With</h2>
        <AccentLine />
        <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {techStack.map((t, i) => (
            <a
              key={t.name}
              href={`https://www.google.com/search?q=${encodeURIComponent(t.name)}`}
              target="_blank"
              rel="noreferrer"
              data-reveal
              className="reveal group flex flex-col items-center gap-3 rounded-[10px] border border-border/70 bg-surface/50 p-4 transition hover:-translate-y-1 hover:border-accent hover:bg-bg-2 hover:shadow-[0_18px_36px_-22px_rgba(226,113,12,.5)]"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <img
                src={t.src ?? `https://cdn.simpleicons.org/${t.slug}`}
                alt={t.name}
                loading="lazy"
                className="h-9 w-9 transition duration-300 group-hover:scale-110"
              />
              <span className="text-center text-[0.78rem] font-semibold text-fg-muted transition group-hover:text-fg">{t.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodePhilosophy() {
  return (
    <section className="relative overflow-hidden border-b border-accent/25 bg-bg py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, var(--accent) 0, transparent 45%), radial-gradient(circle at 75% 80%, var(--accent) 0, transparent 50%)" }} />
      <div className="page-x relative mx-auto max-w-[1400px]">
        <p className="section-kicker">Code Philosophy</p>
        <div data-reveal className="reveal mt-4 max-w-[1000px]">
          <p className="text-[clamp(2rem,6.5vw,4.5rem)] font-black leading-[1.05] tracking-tight text-fg">
            I don't code <span className="text-fg-dim">to impress people.</span>
          </p>
          <p className="mt-4 text-[clamp(2rem,6.5vw,4.5rem)] font-black leading-[1.05] tracking-tight text-fg">
            I build software <span className="text-accent">that solves problems.</span>
          </p>
        </div>
        <div className="mt-10 grid max-w-[820px] gap-2 text-[0.85rem] font-mono text-fg-muted">
          <p>$ ship_value &gt; show_off</p>
          <p>$ readable &gt; clever</p>
          <p>$ done &gt; perfect</p>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-b border-accent/20 bg-bg-2/30 py-14">
      <div className="page-x mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-kicker">Featured Work</p>
            <h2 className="mt-1 text-[1.9rem] font-extrabold leading-tight sm:text-[2.3rem]">Projects I'm Proud Of</h2>
          </div>
          <a href="https://github.com/abirxdhack" target="_blank" rel="noreferrer" className="btn-ghost">
            All Repositories <ExternalLink size={14} />
          </a>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              data-reveal
              className="reveal group relative flex flex-col gap-4 overflow-hidden rounded-[10px] border border-accent/25 bg-surface/55 p-5 transition hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_-24px_rgba(226,113,12,.55)]"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {p.flagship && <span className="absolute right-3 top-3 rounded-full border border-accent/60 bg-accent/15 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-accent">Flagship</span>}
              <div className="flex items-start gap-3">
                <span className="icon-ring h-11 w-11"><Code2 size={18} /></span>
                <div>
                  <h3 className="text-[1.05rem] font-extrabold text-fg transition group-hover:text-accent">{p.name}</h3>
                  <p className="mt-1 break-all text-[0.7rem] text-fg-dim">{p.href.replace("https://", "")}</p>
                </div>
              </div>
              <p className="text-[0.85rem] leading-[1.6] text-fg-muted">{p.text}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {p.tags.map((t) => <span key={t} className="rounded-[4px] border border-border bg-bg-3/60 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-fg-muted">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden border-b border-accent/20 bg-bg py-16">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 20% 10%, var(--accent) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--accent) 0, transparent 45%)" }} />
      <div className="page-x relative mx-auto max-w-[1400px]">
        <div className="flex flex-col items-start gap-2">
          <p className="section-kicker">Achievements</p>
          <h2 className="text-[1.9rem] font-extrabold leading-tight sm:text-[2.3rem]">Milestones Along the Way</h2>
          <p className="max-w-[640px] text-[0.9rem] leading-[1.6] text-fg-muted">A short timeline of the wins, scholarships, and shipped work that shaped the journey so far.</p>
          <AccentLine />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map(({ Icon, title, text, year }, i) => (
            <article
              key={title}
              data-reveal
              className="reveal group relative flex flex-col overflow-hidden rounded-[14px] border border-accent/20 bg-gradient-to-br from-surface/80 to-bg-2/40 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--accent)_45%,transparent)]"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/25" />
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-[10px] border border-accent/40 bg-accent/10 text-accent transition group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon size={20} />
                </span>
                <span className="rounded-full border border-accent/40 bg-bg-3/60 px-2.5 py-1 font-mono text-[0.65rem] font-bold tracking-wider text-accent">
                  {year}
                </span>
              </div>
              <h3 className="mt-4 text-[1.05rem] font-extrabold leading-snug text-fg transition group-hover:text-accent">{title}</h3>
              <p className="mt-2 text-[0.85rem] leading-[1.6] text-fg-muted">{text}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-accent/40 via-accent/10 to-transparent" />
              <div className="mt-3 flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-fg-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Milestone {String(i + 1).padStart(2, "0")}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="border-b border-accent/20 bg-bg-2/40 py-14">
      <div className="page-x mx-auto max-w-[1400px]">
        <p className="section-kicker">Education</p>
        <h2 className="mt-1 text-[1.9rem] font-extrabold leading-tight sm:text-[2.3rem]">Academic Journey</h2>
        <AccentLine />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {education.map((e, i) => (
            <div key={e.level} data-reveal className="reveal rounded-[10px] border border-accent/25 bg-surface/55 p-5 transition hover:-translate-y-1 hover:border-accent" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="flex items-center gap-2 text-accent"><GraduationCap size={18} /><span className="text-[0.78rem] font-bold uppercase tracking-wider">{e.level}</span></div>
              <h3 className="mt-3 text-[1rem] font-extrabold text-fg">{e.school}</h3>
              <p className="mt-2 text-[0.78rem] text-fg-muted">{e.year} · {e.result}</p>
              <p className="mt-2 text-[0.78rem] text-fg-dim">{e.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type GhUser = { followers: number; following: number; public_repos: number; public_gists: number; created_at: string; avatar_url: string; name: string | null; bio: string | null };
type GhRepo = { name: string; html_url: string; stargazers_count: number; forks_count: number; language: string | null; description: string | null; fork: boolean; updated_at: string };

function GitHubWidgetCard({ title, subtitle, src, alt, fallback, wide = false }: { title: string; subtitle: string; src: string; alt: string; fallback: ReactNode; wide?: boolean }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setFailed(false);
    setLoaded(false);
    const timer = window.setTimeout(() => setFailed(true), 7000);
    return () => window.clearTimeout(timer);
  }, [src]);

  return (
    <article className={`reveal overflow-hidden rounded-[14px] border border-accent/20 bg-surface/55 p-4 shadow-[0_20px_70px_-55px_rgba(0,0,0,.85)] transition hover:-translate-y-1 hover:border-accent/50 ${wide ? "lg:col-span-2" : ""}`} data-reveal>
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[0.95rem] font-extrabold text-fg">{title}</h3>
          <p className="mt-1 text-[0.72rem] uppercase tracking-[0.16em] text-fg-dim">{subtitle}</p>
        </div>
        <Github size={18} className="shrink-0 text-accent" />
      </div>
      {!failed || loaded ? (
        <div className="relative flex min-h-[190px] items-center justify-center overflow-hidden rounded-[10px] border border-border/70 bg-white p-2">
          {!loaded && <div className="absolute inset-0 z-10 bg-bg p-4">{fallback}</div>}
          <img src={src} alt={alt} loading="lazy" decoding="async" referrerPolicy="no-referrer" onLoad={() => setLoaded(true)} onError={() => setFailed(true)} className={`block max-h-[360px] w-full object-contain transition duration-500 ${loaded ? "opacity-100" : "opacity-0"}`} />
        </div>
      ) : (
        <div className="min-h-[190px] rounded-[10px] border border-accent/15 bg-bg/55 p-4">{fallback}</div>
      )}
    </article>
  );
}

function GitHubStatGrid({ profile, stars, forks }: { profile: GhUser | null; stars: number; forks: number }) {
  const cards = [
    { label: "Public Repos", value: profile?.public_repos ?? 67, Icon: Code2 },
    { label: "Followers", value: profile?.followers ?? 86, Icon: Users },
    { label: "Following", value: profile?.following ?? 1, Icon: ArrowUpRight },
    { label: "Total Stars", value: stars || 850, Icon: Star },
    { label: "Total Forks", value: forks || 149, Icon: Github },
    { label: "Since", value: profile ? new Date(profile.created_at).getFullYear() : 2024, Icon: Calendar },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {cards.map(({ label, value, Icon }) => (
        <div key={label} className="rounded-[9px] border border-accent/15 bg-surface/65 p-3">
          <div className="flex items-center justify-between gap-2 text-accent"><Icon size={15} /><span className="text-[1.35rem] font-black leading-none">{value}</span></div>
          <p className="mt-2 text-[0.64rem] font-bold uppercase tracking-[0.15em] text-fg-dim">{label}</p>
        </div>
      ))}
    </div>
  );
}

function GitHubLanguageFallback({ langs }: { langs: { name: string; pct: number }[] }) {
  const safeLangs = langs.length ? langs : [
    { name: "Python", pct: 74 },
    { name: "HTML", pct: 15 },
    { name: "PHP", pct: 7 },
    { name: "CSS", pct: 3 },
    { name: "TypeScript", pct: 2 },
  ];
  return (
    <div className="space-y-3">
      {safeLangs.map((l) => (
        <div key={l.name}>
          <div className="mb-1 flex items-center justify-between text-[0.78rem]"><span className="font-bold text-fg">{l.name}</span><span className="text-accent">{l.pct}%</span></div>
          <div className="h-2 overflow-hidden rounded-full bg-accent/10"><div className="h-full rounded-full bg-accent" style={{ width: `${Math.max(l.pct, 4)}%` }} /></div>
        </div>
      ))}
    </div>
  );
}

function GitHubSection() {
  const user = "abirxdhack";
  const [profile, setProfile] = useState<GhUser | null>(null);
  const [repos, setRepos] = useState<GhRepo[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [u, r] = await Promise.all([
          fetch(`https://api.github.com/users/${user}`).then((res) => res.ok ? res.json() : Promise.reject(res.status)),
          fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`).then((res) => res.ok ? res.json() : Promise.reject(res.status)),
        ]);
        if (!cancelled) { setProfile(u); setRepos(r); }
      } catch (e) {
        if (!cancelled) setErr(String(e));
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const stats = useMemo(() => {
    const nonFork = repos.filter((r) => !r.fork);
    const stars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
    const forks = repos.reduce((s, r) => s + (r.forks_count || 0), 0);
    const langCount = new Map<string, number>();
    for (const r of nonFork) if (r.language) langCount.set(r.language, (langCount.get(r.language) || 0) + 1);
    const total = Array.from(langCount.values()).reduce((a, b) => a + b, 0) || 1;
    const langs = Array.from(langCount.entries()).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([name, c]) => ({ name, pct: Math.round((c / total) * 100) }));
    const featured = [...nonFork].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4);
    return { stars, forks, langs, featured };
  }, [repos]);

  const urls = {
    views: `https://komarev.com/ghpvc/?username=${user}&label=Profile%20Views&color=000000&style=flat`,
    overview: `https://github-stats-alpha.vercel.app/api?username=${user}&theme=github-light`,
    languages: `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=github-light`,
    activity: `https://github-readme-activity-graph.vercel.app/graph?username=${user}&theme=github-compact&bg_color=FFFFFF&line=000000&point=000000&color=000000&title_color=000000&area=true`,
    streak: `https://github-readme-streak-stats.herokuapp.com/?user=${user}&theme=github-light`,
    trophies: `https://github-profile-trophy.vercel.app/?username=${user}&theme=white`,
  };

  return (
    <section id="github" className="border-b border-accent/20 bg-bg py-14">
      <div className="page-x mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-kicker">GitHub</p>
            <h2 className="mt-1 text-[1.9rem] font-extrabold leading-tight sm:text-[2.3rem]">Open Source Command Center</h2>
            <p className="mt-2 text-[0.85rem] text-fg-muted">README-powered widgets and live fallbacks from <a href={`https://github.com/${user}`} target="_blank" rel="noreferrer" className="text-accent hover:underline">@{user}</a></p>
          </div>
          <a href={`https://github.com/${user}`} target="_blank" rel="noreferrer" className="btn-primary"><Github size={15} /> Follow on GitHub</a>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <article data-reveal className="reveal rounded-[14px] border border-accent/20 bg-surface/55 p-5 shadow-[0_20px_70px_-55px_rgba(0,0,0,.85)]">
            <div className="flex items-center gap-4">
              <img src={profile?.avatar_url ?? `https://github.com/${user}.png`} alt="Abir Arafat Chawdhury GitHub avatar" loading="lazy" className="h-16 w-16 rounded-full border border-accent/30 object-cover" />
              <div className="min-w-0">
                <h3 className="truncate text-[1.05rem] font-black text-fg">{profile?.name ?? "Abir Arafat Chawdhury"}</h3>
                <p className="mt-1 text-[0.8rem] text-accent">@{user}</p>
              </div>
            </div>
            <p className="mt-4 text-[0.86rem] leading-[1.65] text-fg-muted">{profile?.bio ?? "Entrepreneur, programmer, web developer and open-source builder creating practical software for real users."}</p>
            <div className="mt-4 inline-flex overflow-hidden rounded-[4px] border border-border bg-white p-1">
              <img src={urls.views} alt="GitHub profile views for abirxdhack" loading="lazy" referrerPolicy="no-referrer" className="h-5" />
            </div>
            {err && <p className="mt-3 text-[0.75rem] text-fg-dim">Live API fallback is temporarily limited; README widgets remain active.</p>}
          </article>

          <article data-reveal className="reveal rounded-[14px] border border-accent/20 bg-surface/55 p-5 shadow-[0_20px_70px_-55px_rgba(0,0,0,.85)]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-[0.95rem] font-extrabold text-fg">Live Snapshot</h3>
                <p className="mt-1 text-[0.72rem] uppercase tracking-[0.16em] text-fg-dim">Repositories, audience, stars</p>
              </div>
              <TrendingUp size={18} className="text-accent" />
            </div>
            <GitHubStatGrid profile={profile} stars={stats.stars} forks={stats.forks} />
          </article>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <GitHubWidgetCard title="GitHub Overview" subtitle="github-stats-alpha" src={urls.overview} alt="GitHub overview stats for abirxdhack" fallback={<GitHubStatGrid profile={profile} stars={stats.stars} forks={stats.forks} />} />
          <GitHubWidgetCard title="Most Used Languages" subtitle="github-readme-stats" src={urls.languages} alt="Most used languages for abirxdhack" fallback={<GitHubLanguageFallback langs={stats.langs} />} />
          <GitHubWidgetCard title="Contribution Graph" subtitle="github-readme-activity-graph" src={urls.activity} alt="GitHub contribution activity graph for abirxdhack" fallback={<div className="flex h-full min-h-[160px] items-center justify-center rounded-[8px] bg-white p-2"><img src={`https://ghchart.rshah.org/e2710c/${user}`} alt="GitHub contribution calendar fallback" loading="lazy" className="w-full" /></div>} wide />
          <GitHubWidgetCard title="Coding Streak" subtitle="github-readme-streak-stats" src={urls.streak} alt="GitHub coding streak stats for abirxdhack" fallback={<div className="grid h-full content-center gap-3 text-center"><Flame className="mx-auto text-accent" size={34} /><p className="text-[1.35rem] font-black text-fg">Consistent Builder</p><p className="text-sm text-fg-muted">Public work, Telegram bots, APIs and open-source learning continue across the journey.</p></div>} />
          <GitHubWidgetCard title="GitHub Trophies" subtitle="github-profile-trophy" src={urls.trophies} alt="GitHub trophies for abirxdhack" fallback={<div className="grid grid-cols-2 gap-2 sm:grid-cols-4"><div className="rounded-[9px] border border-accent/15 bg-surface/65 p-3 text-center"><Trophy className="mx-auto text-accent" size={22} /><p className="mt-2 text-[0.7rem] font-bold uppercase text-fg-dim">Open Source</p></div><div className="rounded-[9px] border border-accent/15 bg-surface/65 p-3 text-center"><Star className="mx-auto text-accent" size={22} /><p className="mt-2 text-[0.7rem] font-bold uppercase text-fg-dim">Stars</p></div><div className="rounded-[9px] border border-accent/15 bg-surface/65 p-3 text-center"><Code2 className="mx-auto text-accent" size={22} /><p className="mt-2 text-[0.7rem] font-bold uppercase text-fg-dim">Repos</p></div><div className="rounded-[9px] border border-accent/15 bg-surface/65 p-3 text-center"><Award className="mx-auto text-accent" size={22} /><p className="mt-2 text-[0.7rem] font-bold uppercase text-fg-dim">Builder</p></div></div>} />
        </div>

        <div className="mt-4 rounded-[14px] border border-accent/20 bg-surface/55 p-5 shadow-[0_20px_70px_-55px_rgba(0,0,0,.85)]">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-[0.95rem] font-extrabold text-fg">Featured Repositories</h3>
              <p className="mt-1 text-[0.72rem] uppercase tracking-[0.16em] text-fg-dim">highest-impact public work</p>
            </div>
            <Star size={18} className="text-accent" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.featured.length === 0 && ["SmartNoteWeaver", "GithubBot", "SmartLiveGram", "A360API"].map((name) => <div key={name} className="rounded-[10px] border border-accent/15 bg-bg/45 p-4 text-[0.86rem] font-bold text-accent">{name}</div>)}
            {stats.featured.map((r) => (
              <a key={r.name} href={r.html_url} target="_blank" rel="noreferrer" className="group flex min-h-[172px] flex-col rounded-[10px] border border-accent/15 bg-bg/45 p-4 transition hover:-translate-y-1 hover:border-accent/55 hover:bg-bg/75">
                <div className="flex items-center justify-between gap-3">
                  <span className="min-w-0 truncate text-[0.92rem] font-extrabold text-accent group-hover:underline">{r.name}</span>
                  <span className="flex shrink-0 items-center gap-1 text-[0.72rem] text-fg-dim"><Star size={12} />{r.stargazers_count}</span>
                </div>
                <p className="mt-3 line-clamp-3 text-[0.77rem] leading-[1.55] text-fg-muted">{r.description ?? "Open-source repository by Abir Arafat Chawdhury."}</p>
                <div className="mt-auto flex items-center justify-between gap-2 pt-4 text-[0.68rem] uppercase tracking-[0.16em] text-fg-dim"><span>{r.language ?? "Code"}</span><span>{r.forks_count} forks</span></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-bg">
      {values.map((v, i) => (
        <div key={v.word} className="relative min-h-[440px] overflow-hidden border-b border-accent/25 md:min-h-[480px]">
          <img src={v.bg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-[50%_18%]" loading="lazy" />
          <div className={`absolute inset-0 ${i % 2 === 0
            ? "bg-[linear-gradient(90deg,var(--bg)_0%,color-mix(in_oklab,var(--bg)_88%,transparent)_36%,color-mix(in_oklab,var(--bg)_40%,transparent)_60%,color-mix(in_oklab,var(--bg)_8%,transparent)_100%)]"
            : "bg-[linear-gradient(270deg,var(--bg)_0%,color-mix(in_oklab,var(--bg)_88%,transparent)_36%,color-mix(in_oklab,var(--bg)_40%,transparent)_60%,color-mix(in_oklab,var(--bg)_8%,transparent)_100%)]"}`} />
          <div className="page-x relative mx-auto flex min-h-[440px] max-w-[1400px] items-center md:min-h-[480px]">
            <div data-reveal className={`reveal max-w-[640px] py-14 ${i % 2 === 0 ? "" : "ml-auto"}`}>
              <p className="font-mono text-[0.75rem] font-bold uppercase tracking-[0.3em] text-accent">Value {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-[clamp(3rem,9vw,6.5rem)] font-black leading-[0.95] tracking-tight text-fg">{v.word}</h3>
              <AccentLine />
              <p className="mt-6 max-w-[480px] text-[1.05rem] italic leading-[1.6] text-fg/90">{v.line}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function useCounter(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [start, target, duration]);
  return value;
}

function StatItem({ Icon, value, label, text, started }: { Icon: typeof BookOpen; value: string; label: string; text: string; started: boolean }) {
  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const animated = useCounter(isNaN(numeric) ? 0 : numeric, started);
  const display = isNaN(numeric) ? value : `${animated}${suffix}`;
  return (
    <div className="grid min-h-[112px] grid-cols-[48px_minmax(0,1fr)] items-center gap-5 px-7 py-5">
      <Icon className="text-accent" size={39} strokeWidth={1.45} />
      <div>
        <div className="text-[1.65rem] font-extrabold leading-none text-accent">{display}</div>
        <div className="mt-2 text-[0.86rem] font-extrabold text-fg">{label}</div>
        <p className="mt-1 text-[0.78rem] leading-[1.45] text-fg-muted">{text}</p>
      </div>
    </div>
  );
}

function StatsStrip() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref.current) { setStarted(true); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setStarted(true); io.disconnect(); } }), { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const stats = [
    { Icon: Code2, value: "5+", label: "Projects Shipped", text: "Production open-source projects." },
    { Icon: BookOpen, value: "6+", label: "Years Coding", text: "Self-taught since Class 6." },
    { Icon: Users, value: "3", label: "Languages Spoken", text: "Bangla, English, Hindi." },
    { Icon: TrendingUp, value: "∞", label: "Growth Mindset", text: "Always learning, always shipping." },
  ];
  return (
    <section className="bg-bg py-10">
      <div className="page-x mx-auto max-w-[1400px]">
        <div ref={ref} className="grid gap-0 overflow-hidden rounded-[5px] border border-accent/30 bg-surface/35 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <div key={s.label} className={idx ? "lg:border-l lg:border-border" : ""}>
              {s.value === "∞" ? (
                <div className="grid min-h-[112px] grid-cols-[48px_minmax(0,1fr)] items-center gap-5 px-7 py-5">
                  <InfinityIcon className="text-accent" size={39} strokeWidth={1.45} />
                  <div>
                    <div className="text-[1.65rem] font-extrabold leading-none text-accent">∞</div>
                    <div className="mt-2 text-[0.86rem] font-extrabold text-fg">{s.label}</div>
                    <p className="mt-1 text-[0.78rem] leading-[1.45] text-fg-muted">{s.text}</p>
                  </div>
                </div>
              ) : <StatItem {...s} started={started} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DreamSection() {
  const dreams = ["USA", "Software Engineer", "Open Source", "Impact", "Legacy"];
  return (
    <section className="relative min-h-[560px] overflow-hidden border-y border-accent/25 bg-bg-3">
      <img src={g5} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-[50%_18%] opacity-90" loading="lazy" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--bg)_55%,transparent)_0%,color-mix(in_oklab,var(--bg)_30%,transparent)_45%,var(--bg)_100%)]" />
      <div className="page-x relative mx-auto flex min-h-[560px] max-w-[1400px] flex-col items-center justify-center py-20 text-center">
        <p data-reveal className="reveal section-kicker">My Dream</p>
        <h2 data-reveal className="reveal mt-3 text-[clamp(2.5rem,7vw,5rem)] font-black leading-[1.02] tracking-tight text-fg">
          One life. One shot. <span className="text-accent">Make it count.</span>
        </h2>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {dreams.map((d, i) => (
            <li key={d} data-reveal className="reveal rounded-full border border-accent/50 bg-bg/60 px-5 py-2 text-[0.85rem] font-extrabold uppercase tracking-[0.18em] text-fg backdrop-blur-sm" style={{ transitionDelay: `${i * 80}ms` }}>{d}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FutureRoadmap() {
  return (
    <section className="border-b border-accent/20 bg-bg py-16">
      <div className="page-x mx-auto max-w-[1400px]">
        <p className="section-kicker">My Future</p>
        <h2 className="mt-1 text-[1.9rem] font-extrabold leading-tight sm:text-[2.3rem]">The Road Ahead</h2>
        <AccentLine />
        <div className="relative mt-12">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-accent/0 via-accent to-accent/0 md:left-1/2 md:-translate-x-px" />
          <ol className="space-y-8">
            {roadmap.map(({ Icon, title, text }, i) => (
              <li key={title} data-reveal className="reveal relative grid grid-cols-[40px_minmax(0,1fr)] gap-4 md:grid-cols-[1fr_40px_1fr] md:gap-6" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className={`hidden md:block ${i % 2 === 0 ? "" : "md:order-3"}`}>
                  {i % 2 === 0 && <RoadmapCard title={title} text={text} align="right" />}
                  {i % 2 === 1 && <RoadmapCard title={title} text={text} align="left" />}
                </div>
                <div className="relative grid h-10 w-10 place-items-center rounded-full border border-accent bg-bg-2 text-accent shadow-[0_0_24px_rgba(226,113,12,.35)] md:order-2 md:mx-auto">
                  <Icon size={18} />
                </div>
                <div className="md:hidden">
                  <RoadmapCard title={title} text={text} align="left" />
                </div>
                <div className={`hidden md:block ${i % 2 === 0 ? "md:order-3" : "md:order-1"}`} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function RoadmapCard({ title, text, align }: { title: string; text: string; align: "left" | "right" }) {
  return (
    <div className={`rounded-[10px] border border-accent/25 bg-surface/55 p-4 transition hover:border-accent ${align === "right" ? "md:text-right" : "md:text-left"}`}>
      <h3 className="text-[1rem] font-extrabold text-fg">{title}</h3>
      <p className="mt-1 text-[0.85rem] leading-[1.5] text-fg-muted">{text}</p>
    </div>
  );
}

function Manifesto() {
  return (
    <section className="border-b border-accent/25 bg-bg-3 py-20">
      <div className="page-x mx-auto max-w-[1400px]">
        <p className="section-kicker">Personal Manifesto</p>
        <h2 className="mt-2 text-[clamp(2rem,5vw,3rem)] font-black leading-[1.05] text-fg">I believe…</h2>
        <AccentLine />
        <ul className="mt-10 space-y-5">
          {manifesto.map((line, i) => (
            <li key={line} data-reveal className="reveal flex items-baseline gap-5 border-b border-border/60 pb-5" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="font-mono text-[0.75rem] font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-[clamp(1.15rem,2.6vw,1.8rem)] font-extrabold leading-[1.3] text-fg">{line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LanguagesPersonality() {
  return (
    <section className="border-b border-accent/20 bg-bg-2/40 py-14">
      <div className="page-x mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2">
        <div data-reveal className="reveal">
          <p className="section-kicker"><LanguagesIcon size={11} className="mr-1 inline" /> Languages</p>
          <h2 className="mt-1 text-[1.7rem] font-extrabold leading-tight sm:text-[2rem]">Words I Speak</h2>
          <div className="mt-6 space-y-3">
            {languages.map((l) => (
              <div key={l.name} className="flex items-center justify-between rounded-[8px] border border-border/70 bg-surface/55 px-4 py-3">
                <span className="text-[0.95rem] font-semibold text-fg">{l.name}</span>
                <span className="text-[0.78rem] font-bold uppercase tracking-wider text-accent">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
        <div data-reveal className="reveal">
          <p className="section-kicker"><Heart size={11} className="mr-1 inline" /> Personality</p>
          <h2 className="mt-1 text-[1.7rem] font-extrabold leading-tight sm:text-[2rem]">Who I Am, Quietly</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {personality.map((p) => (
              <span key={p} className="rounded-full border border-accent/30 bg-bg/60 px-3 py-1.5 text-[0.78rem] font-semibold text-fg-muted transition hover:border-accent hover:text-accent">{p}</span>
            ))}
          </div>
          <div className="mt-8 rounded-[10px] border border-accent/25 bg-bg/60 p-5">
            <Quote size={22} className="text-accent" />
            <p className="mt-3 text-[1rem] italic leading-[1.65] text-fg">
              "Progress comes from consistency, curiosity and continuous learning. Every line of code is another step toward meaningful impact."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  const file = resumePdf;
  const handlePrint = () => {
    const frame = document.createElement("iframe");
    frame.style.position = "fixed";
    frame.style.right = "0";
    frame.style.bottom = "0";
    frame.style.width = "0";
    frame.style.height = "0";
    frame.style.border = "0";
    frame.src = file;
    frame.onload = () => {
      try {
        frame.contentWindow?.focus();
        frame.contentWindow?.print();
      } catch {
        window.open(file, "_blank", "noopener,noreferrer");
      }
    };
    document.body.appendChild(frame);
  };
  return (
    <section id="resume" className="border-b border-accent/20 bg-bg py-14">
      <div className="page-x mx-auto max-w-[1400px]">
        <div className="grid items-center gap-8 rounded-[14px] border border-accent/25 bg-gradient-to-br from-surface/60 to-bg-2/40 p-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="section-kicker">Resume</p>
            <h2 className="mt-1 text-[1.9rem] font-extrabold leading-tight sm:text-[2.3rem]">Take My Story Anywhere</h2>
            <p className="mt-3 max-w-[560px] text-[0.9rem] leading-[1.65] text-fg-muted">
              A concise PDF version of this portfolio — perfect to share with recruiters, mentors and scholarship programs.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={file} download="Abir-Arafat-Chawdhury.pdf" className="btn-primary"><Download size={15} /> Download</a>
            <a href={file} target="_blank" rel="noreferrer" className="btn-ghost"><ExternalLink size={14} /> View</a>
            <button onClick={handlePrint} className="btn-ghost"><Printer size={14} /> Print</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Thoughts() {
  const featured = { tag: "Featured Story", title: "The Day I Decided To Become A Software Engineer", excerpt: "It wasn't a single moment — it was a thousand small ones stacked on top of each other until the choice felt obvious.", date: "Jun 02, 2026", read: "8 min read", img: g6 };
  const insight = { tag: "Insight", title: "What I've Learned From Failure", excerpt: "Every bug, every rejection, every late night that didn't work taught me how to keep showing up.", date: "Apr 25, 2026", read: "4 min read" };
  const latest = { tag: "Latest Journal", title: "Discipline Today, Freedom Tomorrow", excerpt: "Why I trade quick wins for compounding habits — and how it's shaping the engineer I'm becoming.", date: "May 12, 2026", read: "5 min read" };
  const stats = [
    { v: "24+", l: "Journal Entries" },
    { v: "6+", l: "Years Writing" },
    { v: "3", l: "Languages" },
  ];
  return (
    <section id="thoughts" className="bg-bg py-16">
      <div className="page-x mx-auto max-w-[1400px]">
        <p className="section-kicker">Thoughts</p>
        <h2 className="mt-1 text-[1.85rem] font-extrabold leading-tight sm:text-[2.3rem]">Words from My Journey</h2>
        <p className="mt-3 max-w-[640px] text-[0.9rem] leading-[1.65] text-fg-muted">A small editorial — featured story, sharp insight, latest entry and a quote I keep coming back to.</p>
        <AccentLine />

        <div className="mt-8 grid gap-5 lg:grid-cols-12">
          <article data-reveal className="reveal group relative col-span-12 overflow-hidden rounded-[14px] border border-accent/35 bg-surface/55 lg:col-span-8 lg:row-span-2">
            <div className="relative h-[260px] overflow-hidden sm:h-[340px] lg:h-[460px]">
              <img src={featured.img} alt={featured.title} className="h-full w-full object-cover object-[50%_18%] transition duration-700 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_45%,color-mix(in_oklab,var(--bg)_85%,transparent)_100%)]" />
              <span className="absolute left-5 top-5 rounded-full border border-accent/60 bg-bg/72 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-accent backdrop-blur-sm">{featured.tag}</span>
              <div className="absolute inset-x-5 bottom-5">
                <h3 className="max-w-[600px] text-[1.5rem] font-extrabold leading-[1.2] text-fg sm:text-[1.9rem]">{featured.title}</h3>
                <p className="mt-2 max-w-[560px] text-[0.9rem] leading-[1.55] text-fg-muted">{featured.excerpt}</p>
                <p className="mt-3 text-[0.72rem] font-mono text-fg-dim">{featured.date} · {featured.read}</p>
              </div>
            </div>
          </article>

          <article data-reveal className="reveal col-span-12 rounded-[14px] border border-accent/25 bg-surface/55 p-6 sm:col-span-6 lg:col-span-4">
            <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-accent">{insight.tag}</span>
            <h3 className="mt-3 text-[1.15rem] font-extrabold leading-snug text-fg">{insight.title}</h3>
            <p className="mt-2 text-[0.85rem] leading-[1.6] text-fg-muted">{insight.excerpt}</p>
            <p className="mt-3 text-[0.72rem] font-mono text-fg-dim">{insight.date} · {insight.read}</p>
          </article>

          <article data-reveal className="reveal col-span-12 flex flex-col justify-between rounded-[14px] bg-accent p-6 text-accent-foreground sm:col-span-6 lg:col-span-4">
            <Quote size={28} strokeWidth={2.6} />
            <p className="mt-3 text-[1.15rem] font-extrabold leading-[1.3]">Keep writing,<br />keep growing,<br />keep inspiring.</p>
            <p className="text-script mt-4 self-end text-[1.9rem] leading-none">Abir</p>
          </article>

          <article data-reveal className="reveal col-span-12 rounded-[14px] border border-accent/25 bg-surface/55 p-6 lg:col-span-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="rounded-full border border-accent/40 bg-bg/60 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-accent">{latest.tag}</span>
                <h3 className="mt-3 text-[1.15rem] font-extrabold leading-snug text-fg">{latest.title}</h3>
                <p className="mt-2 max-w-[560px] text-[0.85rem] leading-[1.6] text-fg-muted">{latest.excerpt}</p>
                <p className="mt-3 text-[0.72rem] font-mono text-fg-dim">{latest.date} · {latest.read}</p>
              </div>
              <Flame size={26} className="shrink-0 text-accent" />
            </div>
          </article>

          <article data-reveal className="reveal col-span-12 rounded-[14px] border border-accent/25 bg-bg-2/40 p-6 lg:col-span-4">
            <p className="text-[0.7rem] font-bold uppercase tracking-wider text-accent">Writing Stats</p>
            <ul className="mt-4 grid gap-3">
              {stats.map((s) => (
                <li key={s.l} className="flex items-baseline justify-between border-b border-border/60 pb-2">
                  <span className="text-[0.78rem] font-semibold uppercase tracking-wider text-fg-muted">{s.l}</span>
                  <span className="font-mono text-[1.2rem] font-extrabold text-accent">{s.v}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function Footer({ onNav }: { onNav: (id: string) => void }) {
  return (
    <footer id="contact" className="relative border-t border-accent/25 bg-bg-3">
      <div className="page-x mx-auto max-w-[1400px]">
        <div className="grid min-h-[86px] items-center gap-5 border-b border-accent/20 py-6 md:grid-cols-[90px_minmax(0,1fr)_400px]">
          <PaperPlane />
          <div className="min-w-0">
            <p className="text-script text-[1.95rem] leading-none text-accent">Let's build something together.</p>
            <p className="mt-1 text-[0.9rem] text-fg-muted">Open to internships, freelance work and collaboration.</p>
          </div>
          <form onSubmit={(event) => event.preventDefault()} className="grid h-10 grid-cols-[minmax(0,1fr)_112px] overflow-hidden rounded-[5px] border border-border bg-surface focus-within:border-accent">
            <input type="email" required placeholder="your@email.com" className="min-w-0 bg-transparent px-4 text-[0.82rem] text-fg outline-none placeholder:text-fg-dim" />
            <button className="bg-accent text-[0.82rem] font-semibold text-accent-foreground transition hover:brightness-110">Subscribe</button>
          </form>
        </div>
        <div className="grid gap-9 py-8 md:grid-cols-[1.2fr_.8fr_1.25fr_.75fr]">
          <div>
            <h3 className="text-[0.9rem] font-extrabold text-accent">Let's Connect</h3>
            <p className="mt-3 max-w-[260px] text-[0.82rem] leading-[1.55] text-fg-muted">Always open to connect, collaborate, or just have a friendly chat.</p>
            <SocialRow />
          </div>
          <div>
            <h3 className="text-[0.9rem] font-extrabold text-accent">Quick Links</h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-9 gap-y-1.5 text-[0.82rem] text-fg-muted">
              {NAV.map((item) => (
                <li key={item.id}><button onClick={() => onNav(item.id)} className="transition hover:text-accent">{item.label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[0.9rem] font-extrabold text-accent">Get In Touch</h3>
            <ul className="mt-3 space-y-2 text-[0.82rem] text-fg-muted">
              <li className="flex items-center gap-2"><Mail size={13} className="shrink-0 text-accent" /><a href="mailto:abirxdhackz.info.me@gmail.com" className="break-all transition hover:text-accent">abirxdhackz.info.me@gmail.com</a></li>
              <li className="flex items-center gap-2"><Phone size={13} className="shrink-0 text-accent" /><a href="tel:+8801963818285" className="transition hover:text-accent">+880 1963 818285</a></li>
              <li className="flex items-start gap-2"><MapPin size={13} className="mt-[3px] shrink-0 text-accent" /><span>Khalilpur Bazar, Faridpur Sadar,<br />Faridpur, Dhaka Division, Bangladesh</span></li>
              <li className="flex items-center gap-2"><Calendar size={13} className="shrink-0 text-accent" /><span>Born 17 April 2009</span></li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center md:items-end"><Signature /></div>
        </div>
        <p className="pb-5 text-center text-[0.78rem] text-fg-dim">© {new Date().getFullYear()} Abir Arafat Chawdhury. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

function Signature({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-label="Abir signature">
      <div className="text-script text-[3rem] leading-none text-fg sm:text-[3.35rem]">Abir</div>
      <div className="ml-1 mt-1 h-[2px] w-[112px] -rotate-[14deg] bg-accent" />
    </div>
  );
}

function AccentLine() { return <span className="mt-3 block h-[3px] w-12 bg-accent" />; }

function PaperPlane() {
  return (
    <div className="hidden md:block" aria-hidden="true">
      <svg width="74" height="46" viewBox="0 0 74 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 31L62 4L45 40L34 25L5 31Z" stroke="currentColor" strokeWidth="2" className="text-fg-dim" />
        <path d="M34 25L62 4" stroke="currentColor" strokeWidth="2" className="text-fg-dim" />
        <path d="M4 4C10 5 15 8 19 13" stroke="currentColor" strokeWidth="2" className="text-fg-dim" />
      </svg>
    </div>
  );
}
