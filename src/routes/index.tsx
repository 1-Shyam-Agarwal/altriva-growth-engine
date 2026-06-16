import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, ArrowUpRight,
  Shield, Heart, Users, Award, Star, Check, Sparkles,
} from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { Reveal } from "@/components/landing/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALTRIVA — Engineering Growth Beyond Technology" },
      {
        name: "description",
        content:
          "ALTRIVA helps ambitious businesses scale through cutting-edge technology, branding, and digital innovation.",
      },
      { property: "og:title", content: "ALTRIVA — Engineering Growth Beyond Technology" },
      {
        property: "og:description",
        content:
          "Technology, branding and growth consulting for ambitious teams. Built by ALTRIVA.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden bg-white text-ink">
      <Nav />
      <Hero />
      <Services />
      <Why />
      <Process />
      <Work />
      <Testimonials />
      <Values />
      <CTA />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */

const HERO_SERVICES = [
  "Technology Solutions",
  "Branding & Identity",
  "Automation Systems",
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 grid-bg-hero" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-8 pt-4 sm:px-6 sm:pb-10 sm:pt-8">
        <Reveal>
          <div className="mx-auto flex w-full max-w-full flex-wrap items-center justify-center gap-2 px-1">
            {HERO_SERVICES.map((label) => (
              <a
                key={label}
                href="#services"
                className="rounded-full border border-black/20 bg-white px-3 py-1.5 text-center text-[11.5px] font-normal text-black transition-colors hover:border-black hover:bg-black hover:text-white sm:px-3.5 sm:text-[13px]"
              >
                {label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mx-auto mt-6 max-w-5xl text-balance text-center text-[32px] font-normal leading-[1.08] text-black sm:mt-8 sm:text-[44px] md:text-[50px]">
            Built for compounding impact.
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-center text-[15px] leading-relaxed text-black/60 sm:mt-6 sm:text-[16px]">
            We help ambitious businesses scale through cutting-edge technology,
            branding, and digital innovation — engineering growth beyond technology.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-[14px] font-normal text-white transition-colors hover:bg-black/85 sm:w-auto sm:min-w-[148px] sm:py-2.5"
            >
              Scale your business
            </a>
            <a
              href="mailto:hello@altriva.co"
              className="inline-flex w-full items-center justify-center rounded-lg border border-black/20 bg-white px-5 py-3 text-[14px] font-normal text-black transition-colors hover:bg-black hover:text-white sm:w-auto sm:min-w-[148px] sm:py-2.5"
            >
              Contact Us
            </a>
          </div>
        </Reveal>
      </div>

      <Metrics />
      <TrustedBy />
    </section>
  );
}

/* ---------------- TRUSTED ---------------- */

function TrustedBy() {
  return (
    <div className="relative border-t border-border/70 bg-secondary/40 py-6 sm:py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-[11px] font-normal uppercase tracking-[0.14em] text-muted-foreground sm:text-[12.5px] sm:tracking-[0.18em]">
            Trusted by ambitious businesses worldwide
          </p>
        </Reveal>
      </div>
    </div>
  );
}

/* ---------------- SERVICES ---------------- */

const SERVICES = [
  {
    id: "technology",
    tabLabel: "Technology",
    kicker: "Build",
    title: "Technology Solutions",
    meta: "Custom software, AI systems, automation and cloud platforms engineered for scale.",
    highlights: [
      "Custom software and product platforms engineered for scale and long-term velocity.",
      "AI systems, automation pipelines, and intelligent workflows that reduce operational drag.",
      "Cloud architecture, integrations, and infrastructure built to grow with the business.",
      "Technical discovery, roadmapping, and delivery in tight, outcome-focused cycles.",
    ],
  },
  {
    id: "branding",
    tabLabel: "Branding",
    kicker: "Brand",
    title: "Branding & Identity",
    meta: "Strategy, visual identity and product experiences that turn a name into a brand.",
    highlights: [
      "Brand strategy and positioning that turns a name into a differentiated point of view.",
      "Visual identity systems, design language, and creative direction across touchpoints.",
      "UI/UX and product experiences shaped for clarity, trust, and conversion.",
      "Guidelines and component systems teams can actually use after launch.",
    ],
  },
  {
    id: "automation",
    tabLabel: "Automation",
    kicker: "Automate",
    title: "Automation Systems",
    meta: "Workflow automation, integrations, and intelligent systems that reduce manual work.",
    highlights: [
      "End-to-end workflow automation that connects tools, teams, and data across the business.",
      "Custom integrations and orchestration layers built for reliability at scale.",
      "AI-powered automations that handle repetitive tasks and accelerate decision-making.",
      "Monitoring, maintenance, and iteration so systems keep delivering as you grow.",
    ],
  },
];

function Services() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];

  return (
    <section id="services" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="What we do"
          title="Three disciplines. One operating system for growth."
          sub="Tightly integrated capabilities, built to compound — not stacked like vendors."
        />

        <Reveal delay={160}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-soft sm:mt-16 sm:rounded-3xl">
            <div className="flex flex-col md:min-h-[360px] md:flex-row">
              <ul
                role="tablist"
                aria-label="Services"
                className="flex shrink-0 flex-col border-b border-border md:w-56 md:border-b-0 md:border-r lg:w-64"
              >
                {SERVICES.map((s, i) => {
                  const isActive = active === i;
                  return (
                    <li key={s.id}>
                      <button
                        id={`tab-${s.id}`}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`panel-${s.id}`}
                        onClick={() => setActive(i)}
                        className={`relative w-full px-4 py-3.5 text-left text-[14px] font-normal transition-colors sm:px-5 sm:py-4 md:px-6 ${
                          isActive
                            ? "bg-secondary/50 text-ink"
                            : "text-muted-foreground hover:bg-secondary/30 hover:text-ink"
                        }`}
                      >
                        {isActive && (
                          <span className="absolute bottom-0 left-0 top-0 w-0.5 bg-ink" />
                        )}
                        {s.tabLabel}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div
                id={`panel-${service.id}`}
                role="tabpanel"
                className="relative min-w-0 flex-1 p-5 sm:p-7 md:p-9"
                aria-labelledby={`tab-${service.id}`}
              >
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-electric/10 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-normal uppercase tracking-[0.14em] text-electric">
                    {service.kicker}
                  </div>
                  <h3 className="mt-5 text-[22px] font-normal tracking-tight text-ink sm:mt-6 sm:text-[26px]">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-muted-foreground">
                    {service.meta}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-ink/85 sm:text-[14.5px]">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-electric/10 text-electric">
                          <Check className="!size-2.5" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-1.5 text-[13.5px] font-normal text-ink transition-colors hover:text-muted-foreground"
                  >
                    Learn more
                    <ArrowUpRight className="!size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- WHY ---------------- */

function Why() {
  const items = [
    { kicker: "Build", title: "Technology that scales.", desc: "Architecture, AI and engineering rigor that holds up at any stage of growth." },
    { kicker: "Brand", title: "Identity that differentiates.", desc: "A point of view, expressed through systems — never templates or trends." },
    { kicker: "Automate", title: "Systems that scale themselves.", desc: "Workflow automation, integrations, and intelligent pipelines that reduce manual work and compound efficiency." },
  ];
  return (
    <section id="why" className="relative bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why ALTRIVA"
          title="Build. Brand. Automate."
          sub="Three disciplines working as one — for teams who don't want a vendor, they want a partner."
        />
        <div className="mt-10 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.kicker} delay={i * 80}>
              <div className="relative h-full overflow-hidden rounded-sm border border-border bg-card p-6 shadow-soft sm:p-8">
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-electric/10 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-normal uppercase tracking-[0.14em] text-electric">
                    {it.kicker}
                  </div>
                  <h3 className="mt-5 text-[22px] font-normal tracking-tight text-ink sm:mt-6 sm:text-[26px]">{it.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">{it.desc}</p>
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-border to-transparent" />
                  <div className="mt-6 flex items-center justify-between text-[12.5px] text-muted-foreground">
                    <span>Outcome-driven</span>
                    <span className="font-normal text-ink">0{i + 1}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */

const PROCESS = [
  { step: "01", title: "Discover", desc: "Deep audit of business, brand and tech foundations." },
  { step: "02", title: "Design", desc: "Strategy, identity systems and product blueprints." },
  { step: "03", title: "Build", desc: "Engineering, AI and creative — shipped in tight cycles." },
  { step: "04", title: "Launch", desc: "GTM, narrative and product launches that land." },
  { step: "05", title: "Scale", desc: "Operating systems for compounding, durable growth." },
];

function Process() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineActive, setTimelineActive] = useState(false);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimelineActive(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="process" className="relative py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="How we work"
          title="A process engineered for momentum."
          sub="Five stages — designed for clarity, speed and compounding outcomes."
        />
        <div
          ref={timelineRef}
          className={`relative mt-12 sm:mt-20 ${timelineActive ? "process-timeline-active" : ""}`}
        >
          {/* Desktop: horizontal timeline */}
          <div className="absolute left-[8%] right-[8%] top-7 hidden h-px md:block">
            <div className="absolute inset-0 bg-border/80" />
            <div className="process-timeline-fill absolute inset-0 bg-ink" />
          </div>

          {/* Mobile: vertical timeline */}
          <div className="absolute bottom-2 left-[79px] top-2 w-px md:hidden">
            <div className="absolute inset-0 bg-border/80" />
            <div className="process-timeline-fill-vertical absolute inset-0 bg-ink" />
          </div>

          <div className="flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="process-step group relative flex flex-row items-start gap-5 pl-14 text-left md:flex-col md:items-center md:gap-0 md:pl-0 md:text-center">
                  <div className="process-step-marker relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border bg-background text-muted-foreground shadow-soft transition-colors duration-500 group-hover:border-ink/30 sm:h-14 sm:w-14">
                    <span className="text-[12px] font-normal tracking-tight sm:text-[13px]">{p.step}</span>
                  </div>
                  <div className="min-w-0 pt-1 md:pt-0">
                    <h4 className="text-[16px] font-normal tracking-tight text-ink sm:text-[17px]">{p.title}</h4>
                    <p className="mt-1.5 max-w-none text-[13px] leading-relaxed text-muted-foreground sm:mt-2 sm:max-w-[200px] sm:text-[13.5px] md:mx-auto">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WORK / CASE STUDIES ---------------- */

const PROJECTS = [
  {
    tag: "Fintech",
    title: "Velmora",
    desc: "Re-platformed a $4B AUM fintech with a unified product OS and brand system.",
    metric: "+250% growth",
    grad: "from-[oklch(0.20_0.05_258)] to-[oklch(0.30_0.10_260)]",
  },
  {
    tag: "Healthcare AI",
    title: "Synaptiq",
    desc: "Designed an AI triage platform now deployed across 1,200 clinics.",
    metric: "10M+ users",
    grad: "from-[oklch(0.22_0.05_220)] to-[oklch(0.30_0.10_240)]",
  },
  {
    tag: "E-commerce",
    title: "Carthelm",
    desc: "Rebrand and storefront overhaul that doubled repeat purchase rate.",
    metric: "+2.1× LTV",
    grad: "from-[oklch(0.22_0.05_280)] to-[oklch(0.30_0.10_265)]",
  },
  {
    tag: "Enterprise SaaS",
    title: "Opsera",
    desc: "Operations dashboard collapsing 12 tools into one for global teams.",
    metric: "40% faster ops",
    grad: "from-[oklch(0.20_0.04_255)] to-[oklch(0.28_0.08_270)]",
  },
];

function Work() {
  return (
    <section id="work" className="relative bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Selected work"
          title="Featured case studies."
          sub="A few of the teams we've helped build, brand and grow."
        />
        <div className="mt-10 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-sm border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated sm:rounded-sm">
                <div className={`relative h-48 overflow-hidden bg-gradient-to-br sm:h-60 ${p.grad}`}>
                  <div className="absolute inset-0 grid-bg-dark opacity-60" />
                  <div className="absolute inset-0 shimmer opacity-50" />
                  <div className="absolute bottom-[-16px] left-4 right-4 rounded-t-2xl border border-white/15 bg-navy/80 p-3 shadow-elevated backdrop-blur sm:bottom-[-20px] sm:left-8 sm:right-8">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="h-2 rounded bg-white/15" />
                      <div className="h-2 rounded bg-white/25" />
                      <div className="h-2 rounded bg-electric/70" />
                      <div className="col-span-3 h-12 rounded bg-white/[0.06]" />
                    </div>
                  </div>
                  <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-normal uppercase tracking-wider text-white backdrop-blur sm:left-6 sm:top-6 sm:text-[11px]">
                    {p.tag}
                  </div>
                </div>
                <div className="p-5 sm:p-7">
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <h3 className="text-[20px] font-normal tracking-tight text-ink sm:text-[22px]">{p.title}</h3>
                    <span className="shrink-0 rounded-full bg-electric/10 px-3 py-1 text-[11px] font-normal text-electric sm:text-[12px]">
                      {p.metric}
                    </span>
                  </div>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-normal text-ink">
                    Read case study
                    <ArrowUpRight className="!size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- METRICS ---------------- */

function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 2400,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function Metrics() {
  const m = [
    { value: 250, prefix: "+", suffix: "%", l: "Average revenue growth" },
    { value: 10, prefix: "", suffix: "M+", l: "Users reached" },
    { value: 40, prefix: "", suffix: "%", l: "Faster operations" },
    { value: 98, prefix: "", suffix: "", l: "NPS across partners" },
  ];
  return (
    <div className="relative border-t border-border/70 bg-secondary/40 px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {m.map((it) => (
              <div key={it.l} className="text-center">
                <div className="text-[22px] font-normal tracking-[-0.04em] text-gradient-electric sm:text-[28px] md:text-[32px]">
                  <CountUp value={it.value} prefix={it.prefix} suffix={it.suffix} />
                </div>
                <div className="mt-1 text-[10px] text-muted-foreground sm:text-[11px]">{it.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

const TESTIMONIALS = [
  {
    quote:
      "ALTRIVA rebuilt our product and brand from first principles. The work compounds — every quarter feels like a step-function.",
    name: "Mara Linden",
    role: "CEO, Velmora",
    initials: "ML",
  },
  {
    quote:
      "They operate like an internal team — strategic, fast, and obsessed with the outcome. The best partner we've ever hired.",
    name: "Daniel Osei",
    role: "Co-founder, Synaptiq",
    initials: "DO",
  },
  {
    quote:
      "A rare blend of taste, engineering and growth instinct. We launched in a quarter what would have taken us a year.",
    name: "Yuki Tanaka",
    role: "VP Product, Opsera",
    initials: "YT",
  },
];

function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="What partners say"
          title="Built on trust, shipped with rigor."
        />
        <div className="mt-10 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-sm border border-border bg-card p-5 shadow-soft sm:rounded-sm sm:p-7">
                <div className="flex items-center gap-1 text-electric">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="!size-3.5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-5 text-[14.5px] leading-relaxed text-ink sm:text-[15.5px]">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-navy to-ink text-[12px] font-normal text-white">
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-[14px] font-normal text-ink">{t.name}</div>
                    <div className="truncate text-[12.5px] text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- VALUES ---------------- */

function Values() {
  const v = [
    { icon: Shield, t: "Trust", d: "The foundation of every relationship." },
    { icon: Sparkles, t: "Innovation", d: "Always pushing what's possible." },
    { icon: Heart, t: "Generosity", d: "We give more than we take." },
    { icon: Users, t: "Collaboration", d: "Built together, owned together." },
    { icon: Award, t: "Excellence", d: "The standard, never the ceiling." },
  ];
  return (
    <section className="relative bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Our values"
          title="The principles behind the work."
        />
        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
          {v.map((it, i) => (
            <Reveal key={it.t} delay={i * 70}>
              <div className="group flex h-full flex-col items-start rounded-sm border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-white transition-transform duration-500 group-hover:scale-105">
                  <it.icon className="!size-4.5" />
                </div>
                <h4 className="mt-5 text-[16px] font-normal tracking-tight text-ink">{it.t}</h4>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CTA() {
  return (
    <section id="contact" className="relative py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-cta p-6 sm:rounded-[32px] sm:p-12 md:p-20">
          <div className="absolute inset-0 grid-bg-dark opacity-50" />
          <Particles />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-[28px] font-normal leading-[1.08] tracking-[-0.03em] text-gradient-light sm:text-[40px] md:text-[56px]">
              Ready to Build What's Next?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/65 sm:mt-5 sm:text-[16px]">
              We partner with a small number of ambitious teams each quarter. Let's see if we're a fit.
            </p>
            <div className="mt-7 flex w-full flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="mailto:hello@altriva.co"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-normal text-navy shadow-glow transition-transform duration-300 hover:scale-[1.03] sm:w-auto sm:px-7 sm:py-4 sm:text-[14.5px]"
              >
                Let's Grow Together
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#work" className="text-[13.5px] font-normal text-white/70 hover:text-white">
                Or explore our work →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Particles() {
  // deterministic positions
  const dots = Array.from({ length: 28 }, (_, i) => ({
    top: (i * 37) % 100,
    left: (i * 53) % 100,
    delay: (i % 6) * 0.4,
    size: 2 + (i % 3),
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/40 animate-float"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: d.size, height: d.size,
            animationDelay: `${d.delay}s`,
            opacity: 0.35,
          }}
        />
      ))}
    </div>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="relative bg-black text-white/70">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-4 py-6 sm:flex-row sm:items-center sm:px-6">
        <div className="text-[12px] font-normal sm:text-[12.5px]">
          © {new Date().getFullYear()} ALTRIVA. All rights reserved.
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] sm:text-[12.5px]">
          <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
          <a href="#" className="transition-colors hover:text-white">Terms</a>
          <a href="#" className="transition-colors hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- SHARED ---------------- */

function SectionHeader({
  eyebrow, title, sub,
}: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <div className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-[11.5px] font-normal uppercase tracking-[0.16em] text-electric">
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-balance text-[28px] font-normal leading-[1.08] tracking-[-0.03em] text-ink sm:mt-5 sm:text-[36px] md:text-[48px]">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={140}>
          <p className="mx-auto mt-4 max-w-xl text-balance text-[14.5px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-[15.5px]">
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
