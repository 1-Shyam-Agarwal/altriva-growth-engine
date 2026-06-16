import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Code2, Palette, TrendingUp,
  Cpu, Layers, LineChart, Shield, Zap, Heart, Users, Award, Star,
  Check, Play,
} from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";
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
    <div id="top" className="relative min-h-screen bg-background text-ink">
      <Nav />
      <Hero />
      <TrustedBy />
      <Services />
      <Why />
      <Process />
      <Work />
      <Metrics />
      <Testimonials />
      <Values />
      <CTA />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setT({ x: (e.clientX / w - 0.5) * 14, y: (e.clientY / h - 0.5) * 14 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 grid-bg-dark opacity-60" />
      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.22 258 / 0.6), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -right-24 top-10 h-[360px] w-[360px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.20 280 / 0.5), transparent 70%)" }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[12px] font-medium text-white/80 backdrop-blur">
            <span className="relative grid h-1.5 w-1.5 place-items-center">
              <span className="absolute inset-0 rounded-full bg-electric animate-pulse-ring" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-electric" />
            </span>
            New — Now partnering with 2026 Q1 founders
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mx-auto mt-7 max-w-5xl text-balance text-center text-[44px] font-semibold leading-[1.02] tracking-[-0.035em] text-gradient-light sm:text-[64px] md:text-[78px]">
            Engineering Growth<br />Beyond Technology
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-center text-[17px] leading-relaxed text-white/65 sm:text-[18px]">
            We help ambitious businesses scale through cutting-edge technology,
            branding, and digital innovation — engineered for compounding impact.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-navy shadow-glow transition-transform duration-300 hover:scale-[1.03]"
            >
              Start Your Growth Journey
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-[14px] font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Play className="!size-3.5" /> View Our Work
            </a>
          </div>
        </Reveal>

        {/* Hero visual */}
        <Reveal delay={320}>
          <div
            className="relative mx-auto mt-20 max-w-6xl"
            style={{ transform: `translate3d(${t.x}px, ${t.y}px, 0)`, transition: "transform 0.4s cubic-bezier(.22,1,.36,1)" }}
          >
            <div className="absolute -inset-x-12 -top-12 h-64 rounded-[40px] bg-electric opacity-20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-elevated">
              <img
                src={heroVisual}
                alt="3D abstract visual of technology, growth and connection"
                width={1536}
                height={1024}
                className="block w-full"
              />
              {/* Floating UI cards */}
              <FloatingCard
                className="left-6 top-6 hidden sm:block"
                icon={<TrendingUp className="!size-3.5 text-electric" />}
                label="MRR Growth"
                value="+248%"
                sub="vs. last quarter"
              />
              <FloatingCard
                className="right-6 bottom-6 hidden sm:block"
                icon={<Zap className="!size-3.5 text-electric" />}
                label="Time to Ship"
                value="4.2 wks"
                sub="median delivery"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FloatingCard({
  className = "",
  icon, label, value, sub,
}: { className?: string; icon: React.ReactNode; label: string; value: string; sub: string }) {
  return (
    <div className={`absolute glass-dark animate-float rounded-2xl px-4 py-3 ${className}`}>
      <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-white/60">
        {icon}{label}
      </div>
      <div className="mt-1 text-xl font-semibold text-white">{value}</div>
      <div className="text-[11px] text-white/50">{sub}</div>
    </div>
  );
}

/* ---------------- TRUSTED ---------------- */

const LOGOS = ["Northwind", "Lumen", "Vertex", "Quanta", "Helios", "Orbital", "Parallax", "Atlas"];

function TrustedBy() {
  return (
    <section className="relative border-y border-border/70 bg-secondary/40 py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-[12.5px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Trusted by ambitious businesses worldwide
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
            {LOGOS.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center text-center text-[15px] font-semibold tracking-tight text-muted-foreground/70 grayscale transition hover:text-ink hover:grayscale-0"
              >
                <span className="opacity-80">{name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */

const SERVICES = [
  {
    icon: Code2,
    title: "Technology Solutions",
    desc: "Custom software, AI systems, automation and cloud platforms engineered for scale.",
    items: ["Custom software", "AI solutions", "Automation", "Cloud systems"],
    accent: "from-electric/20 to-transparent",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    desc: "Strategy, visual identity and product experiences that turn a name into a brand.",
    items: ["Brand strategy", "Visual identity", "UI / UX", "Creative systems"],
    accent: "from-electric-soft/20 to-transparent",
  },
  {
    icon: TrendingUp,
    title: "Growth Consulting",
    desc: "Operating systems for compounding growth — transformation, positioning and product.",
    items: ["Digital transformation", "Market positioning", "Product strategy", "GTM systems"],
    accent: "from-electric/20 to-transparent",
  },
];

function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="What we do"
          title="Three disciplines. One operating system for growth."
          sub="Tightly integrated capabilities, built to compound — not stacked like vendors."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-ink/20 hover:shadow-elevated">
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${s.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white transition-transform duration-500 group-hover:scale-105">
                    <s.icon className="!size-5" />
                  </div>
                  <h3 className="mt-6 text-[22px] font-semibold tracking-tight text-ink">{s.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-6 space-y-2.5">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 text-[14px] text-ink/85">
                        <span className="grid h-4 w-4 place-items-center rounded-full bg-electric/10 text-electric">
                          <Check className="!size-2.5" strokeWidth={3} />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink">
                    Learn more
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

/* ---------------- WHY ---------------- */

function Why() {
  const items = [
    { kicker: "Build", title: "Technology that scales.", desc: "Architecture, AI and engineering rigor that holds up at any stage of growth.", icon: Cpu },
    { kicker: "Brand", title: "Identity that differentiates.", desc: "A point of view, expressed through systems — never templates or trends.", icon: Layers },
    { kicker: "Grow", title: "Strategies that compound.", desc: "Operating models, GTM and product loops engineered for non-linear returns.", icon: LineChart },
  ];
  return (
    <section id="why" className="relative bg-secondary/40 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why ALTRIVA"
          title="Build. Brand. Grow."
          sub="Three disciplines working as one — for teams who don't want a vendor, they want a partner."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.kicker} delay={i * 80}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft">
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-electric/10 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-electric">
                    <it.icon className="!size-3" /> {it.kicker}
                  </div>
                  <h3 className="mt-6 text-[26px] font-semibold tracking-tight text-ink">{it.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">{it.desc}</p>
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-border to-transparent" />
                  <div className="mt-6 flex items-center justify-between text-[12.5px] text-muted-foreground">
                    <span>Outcome-driven</span>
                    <span className="font-medium text-ink">0{i + 1}</span>
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
  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="How we work"
          title="A process engineered for momentum."
          sub="Five stages — designed for clarity, speed and compounding outcomes."
        />
        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          <div className="grid gap-10 md:grid-cols-5 md:gap-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="group relative flex flex-col items-center text-center">
                  <div className="relative grid h-14 w-14 place-items-center rounded-full border border-border bg-background shadow-soft transition-all duration-500 group-hover:border-electric/40 group-hover:shadow-glow">
                    <span className="text-[13px] font-semibold tracking-tight text-ink">{p.step}</span>
                    <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-electric/0 transition-all duration-500 group-hover:ring-electric/30" />
                  </div>
                  <h4 className="mt-6 text-[17px] font-semibold tracking-tight text-ink">{p.title}</h4>
                  <p className="mt-2 max-w-[200px] text-[13.5px] leading-relaxed text-muted-foreground">{p.desc}</p>
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
    title: "Lumen Capital",
    desc: "Re-platformed a $4B AUM fintech with a unified product OS and brand system.",
    metric: "+250% growth",
    grad: "from-[oklch(0.20_0.05_258)] to-[oklch(0.30_0.10_260)]",
  },
  {
    tag: "Healthcare AI",
    title: "Helios Health",
    desc: "Designed an AI triage platform now deployed across 1,200 clinics.",
    metric: "10M+ users",
    grad: "from-[oklch(0.22_0.05_220)] to-[oklch(0.30_0.10_240)]",
  },
  {
    tag: "E-commerce",
    title: "Northwind Goods",
    desc: "Rebrand and storefront overhaul that doubled repeat purchase rate.",
    metric: "+2.1× LTV",
    grad: "from-[oklch(0.22_0.05_280)] to-[oklch(0.30_0.10_265)]",
  },
  {
    tag: "Enterprise SaaS",
    title: "Vertex Operations",
    desc: "Operations dashboard collapsing 12 tools into one for global teams.",
    metric: "40% faster ops",
    grad: "from-[oklch(0.20_0.04_255)] to-[oklch(0.28_0.08_270)]",
  },
];

function Work() {
  return (
    <section id="work" className="relative bg-secondary/40 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Selected work"
          title="Featured case studies."
          sub="A few of the teams we've helped build, brand and grow."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
                <div className={`relative h-60 overflow-hidden bg-gradient-to-br ${p.grad}`}>
                  <div className="absolute inset-0 grid-bg-dark opacity-60" />
                  <div className="absolute inset-0 shimmer opacity-50" />
                  {/* Mock UI window */}
                  <div className="absolute left-8 right-8 bottom-[-20px] rounded-t-2xl border border-white/15 bg-navy/80 p-3 shadow-elevated backdrop-blur">
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
                  <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur">
                    {p.tag}
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[22px] font-semibold tracking-tight text-ink">{p.title}</h3>
                    <span className="rounded-full bg-electric/10 px-3 py-1 text-[12px] font-semibold text-electric">
                      {p.metric}
                    </span>
                  </div>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink">
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

function Metrics() {
  const m = [
    { v: "+250%", l: "Average revenue growth" },
    { v: "10M+", l: "Users reached" },
    { v: "40%", l: "Faster operations" },
    { v: "98", l: "NPS across partners" },
  ];
  return (
    <section className="relative py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-2 gap-6 rounded-3xl border border-border bg-card p-10 shadow-soft md:grid-cols-4">
            {m.map((it) => (
              <div key={it.l} className="text-center">
                <div className="text-[40px] font-semibold tracking-[-0.04em] text-gradient-electric sm:text-[48px]">{it.v}</div>
                <div className="mt-1 text-[13px] text-muted-foreground">{it.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

const TESTIMONIALS = [
  {
    quote:
      "ALTRIVA rebuilt our product and brand from first principles. The work compounds — every quarter feels like a step-function.",
    name: "Mara Linden",
    role: "CEO, Lumen Capital",
    initials: "ML",
  },
  {
    quote:
      "They operate like an internal team — strategic, fast, and obsessed with the outcome. The best partner we've ever hired.",
    name: "Daniel Osei",
    role: "Co-founder, Helios Health",
    initials: "DO",
  },
  {
    quote:
      "A rare blend of taste, engineering and growth instinct. We launched in a quarter what would have taken us a year.",
    name: "Yuki Tanaka",
    role: "VP Product, Vertex",
    initials: "YT",
  },
];

function Testimonials() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="What partners say"
          title="Built on trust, shipped with rigor."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="flex items-center gap-1 text-electric">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="!size-3.5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-5 text-[15.5px] leading-relaxed text-ink">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-navy to-ink text-[12px] font-semibold text-white">
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-[14px] font-semibold text-ink">{t.name}</div>
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
    <section className="relative bg-secondary/40 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Our values"
          title="The principles behind the work."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {v.map((it, i) => (
            <Reveal key={it.t} delay={i * 70}>
              <div className="group flex h-full flex-col items-start rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-white transition-transform duration-500 group-hover:scale-105">
                  <it.icon className="!size-4.5" />
                </div>
                <h4 className="mt-5 text-[16px] font-semibold tracking-tight text-ink">{it.t}</h4>
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
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-cta p-12 sm:p-20">
          <div className="absolute inset-0 grid-bg-dark opacity-50" />
          <Particles />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-gradient-light sm:text-[56px]">
              Ready to Build What's Next?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/65">
              We partner with a small number of ambitious teams each quarter. Let's see if we're a fit.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:hello@altriva.co"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[14.5px] font-semibold text-navy shadow-glow transition-transform duration-300 hover:scale-[1.03]"
              >
                Let's Grow Together
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#work" className="text-[13.5px] font-medium text-white/70 hover:text-white">
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
  const cols = [
    { h: "Services", l: ["Technology", "Branding", "Growth", "AI Solutions"] },
    { h: "Company", l: ["About", "Values", "Careers", "Press"] },
    { h: "Contact", l: ["hello@altriva.co", "LinkedIn", "Twitter", "Book a call"] },
  ];
  return (
    <footer className="relative bg-navy text-white/80">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-white text-[10px] font-bold tracking-tight text-navy">
                A
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-white">ALTRIVA</span>
            </div>
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-white/55">
              Technology • Branding • Beyond. Empowering businesses to grow through technology, creativity and innovation.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/50">{c.h}</div>
              <ul className="mt-4 space-y-2.5">
                {c.l.map((x) => (
                  <li key={x}>
                    <a href="#" className="text-[13.5px] text-white/75 transition-colors hover:text-white">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[12.5px] text-white/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} ALTRIVA. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
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
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-electric">
          <Sparkles className="!size-3" /> {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 text-balance text-[36px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[48px]">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={140}>
          <p className="mx-auto mt-5 max-w-xl text-balance text-[15.5px] leading-relaxed text-muted-foreground">
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
