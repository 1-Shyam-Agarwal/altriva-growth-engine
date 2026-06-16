import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Shield, c as Check, d as ArrowRight, i as Sparkles, l as Award, n as Users, o as Menu, r as Star, s as Heart, t as X, u as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CJ4Gn9fT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var altriva_default = "/assets/altriva-Bd8vF-0x.png";
function Logo({ className = "h-10 w-auto" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: altriva_default,
		alt: "ALTRIVA",
		className
	});
}
var links = [
	{
		href: "#services",
		label: "Services"
	},
	{
		href: "#why",
		label: "Why us"
	},
	{
		href: "#process",
		label: "Process"
	},
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);
	const closeMenu = () => setMenuOpen(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center justify-between rounded-full border px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-500 ${scrolled || menuOpen ? "border-border/80 bg-background/80 shadow-soft backdrop-blur-xl" : "border-transparent bg-transparent"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "flex shrink-0 items-center",
						onClick: closeMenu,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-[20px] w-auto sm:h-[23px]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-7 md:flex",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-[13.5px] font-normal text-muted-foreground transition-colors hover:text-ink",
							children: l.label
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-normal text-white transition-transform duration-300 hover:scale-[1.03] sm:inline-flex",
							children: ["Get in touch", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "12",
								height: "12",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M13 5l7 7-7 7" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": menuOpen ? "Close menu" : "Open menu",
							"aria-expanded": menuOpen,
							onClick: () => setMenuOpen((open) => !open),
							className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-ink transition-colors hover:bg-secondary md:hidden",
							children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "!size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "!size-5" })
						})]
					})
				]
			})
		})
	}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-40 md:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Close menu",
			className: "absolute inset-0 bg-black/20 backdrop-blur-sm",
			onClick: closeMenu
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "absolute inset-x-0 top-[72px] mx-4 rounded-2xl border border-border bg-background p-4 shadow-elevated",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: closeMenu,
					className: "block rounded-xl px-4 py-3 text-[15px] font-normal text-ink transition-colors hover:bg-secondary",
					children: l.label
				}) }, l.href))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#contact",
				onClick: closeMenu,
				className: "mt-3 flex w-full items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-3 text-[14px] font-normal text-white",
				children: ["Get in touch", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					width: "12",
					height: "12",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2.2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M13 5l7 7-7 7" })
				})]
			})]
		})]
	})] });
}
function Reveal({ children, delay = 0, className = "", as: As = "div" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.style.transitionDelay = `${delay}ms`;
					e.target.classList.add("is-visible");
					io.unobserve(e.target);
				}
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -40px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, [delay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
		ref,
		className: `reveal ${className}`,
		children
	});
}
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "relative min-h-screen overflow-x-hidden bg-white text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Values, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var HERO_SERVICES = [
	"Technology Solutions",
	"Branding & Identity",
	"Automation Systems"
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-white pt-24 sm:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-bg-hero" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-6xl px-4 pb-8 pt-4 sm:px-6 sm:pb-10 sm:pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex w-full max-w-full flex-wrap items-center justify-center gap-2 px-1",
						children: HERO_SERVICES.map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#services",
							className: "rounded-full border border-black/20 bg-white px-3 py-1.5 text-center text-[11.5px] font-normal text-black transition-colors hover:border-black hover:bg-black hover:text-white sm:px-3.5 sm:text-[13px]",
							children: label
						}, label))
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mx-auto mt-6 max-w-5xl text-balance text-center text-[32px] font-normal leading-[1.08] text-black sm:mt-8 sm:text-[44px] md:text-[50px]",
							children: "Built for compounding impact."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 140,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-2xl text-balance text-center text-[15px] leading-relaxed text-black/60 sm:mt-6 sm:text-[16px]",
							children: "We help ambitious businesses scale through cutting-edge technology, branding, and digital innovation — engineering growth beyond technology."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-[14px] font-normal text-white transition-colors hover:bg-black/85 sm:w-auto sm:min-w-[148px] sm:py-2.5",
								children: "Scale your business"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:hello@altriva.co",
								className: "inline-flex w-full items-center justify-center rounded-lg border border-black/20 bg-white px-5 py-3 text-[14px] font-normal text-black transition-colors hover:bg-black hover:text-white sm:w-auto sm:min-w-[148px] sm:py-2.5",
								children: "Contact Us"
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metrics, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustedBy, {})
		]
	});
}
function TrustedBy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative border-t border-border/70 bg-secondary/40 py-6 sm:py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-[11px] font-normal uppercase tracking-[0.14em] text-muted-foreground sm:text-[12.5px] sm:tracking-[0.18em]",
				children: "Trusted by ambitious businesses worldwide"
			}) })
		})
	});
}
var SERVICES = [
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
			"Technical discovery, roadmapping, and delivery in tight, outcome-focused cycles."
		]
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
			"Guidelines and component systems teams can actually use after launch."
		]
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
			"Monitoring, maintenance, and iteration so systems keep delivering as you grow."
		]
	}
];
function Services() {
	const [active, setActive] = (0, import_react.useState)(0);
	const service = SERVICES[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "relative py-16 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "What we do",
				title: "Three disciplines. One operating system for growth.",
				sub: "Tightly integrated capabilities, built to compound — not stacked like vendors."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 160,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-soft sm:mt-16 sm:rounded-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:min-h-[360px] md:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							role: "tablist",
							"aria-label": "Services",
							className: "flex shrink-0 flex-col border-b border-border md:w-56 md:border-b-0 md:border-r lg:w-64",
							children: SERVICES.map((s, i) => {
								const isActive = active === i;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									id: `tab-${s.id}`,
									role: "tab",
									"aria-selected": isActive,
									"aria-controls": `panel-${s.id}`,
									onClick: () => setActive(i),
									className: `relative w-full px-4 py-3.5 text-left text-[14px] font-normal transition-colors sm:px-5 sm:py-4 md:px-6 ${isActive ? "bg-secondary/50 text-ink" : "text-muted-foreground hover:bg-secondary/30 hover:text-ink"}`,
									children: [isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-0 top-0 w-0.5 bg-ink" }), s.tabLabel]
								}) }, s.id);
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							id: `panel-${service.id}`,
							role: "tabpanel",
							className: "relative min-w-0 flex-1 p-5 sm:p-7 md:p-9",
							"aria-labelledby": `tab-${service.id}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-12 -top-12 h-44 w-44 rounded-full bg-electric/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-normal uppercase tracking-[0.14em] text-electric",
										children: service.kicker
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 text-[22px] font-normal tracking-tight text-ink sm:mt-6 sm:text-[26px]",
										children: service.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-2xl text-[14.5px] leading-relaxed text-muted-foreground",
										children: service.meta
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-8 space-y-3",
										children: service.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3 text-[14px] leading-relaxed text-ink/85 sm:text-[14.5px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-electric/10 text-electric",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
													className: "!size-2.5",
													strokeWidth: 3
												})
											}), item]
										}, item))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contact",
										className: "mt-8 inline-flex items-center gap-1.5 text-[13.5px] font-normal text-ink transition-colors hover:text-muted-foreground",
										children: ["Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "!size-3.5" })]
									})
								]
							})]
						})]
					})
				})
			})]
		})]
	});
}
function Why() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why",
		className: "relative bg-secondary/40 py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Why ALTRIVA",
				title: "Build. Brand. Automate.",
				sub: "Three disciplines working as one — for teams who don't want a vendor, they want a partner."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3",
				children: [
					{
						kicker: "Build",
						title: "Technology that scales.",
						desc: "Architecture, AI and engineering rigor that holds up at any stage of growth."
					},
					{
						kicker: "Brand",
						title: "Identity that differentiates.",
						desc: "A point of view, expressed through systems — never templates or trends."
					},
					{
						kicker: "Automate",
						title: "Systems that scale themselves.",
						desc: "Workflow automation, integrations, and intelligent pipelines that reduce manual work and compound efficiency."
					}
				].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-full overflow-hidden rounded-sm border border-border bg-card p-6 shadow-soft sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-12 -top-12 h-44 w-44 rounded-full bg-electric/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-normal uppercase tracking-[0.14em] text-electric",
									children: it.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-[22px] font-normal tracking-tight text-ink sm:mt-6 sm:text-[26px]",
									children: it.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[14.5px] leading-relaxed text-muted-foreground",
									children: it.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-px w-full bg-gradient-to-r from-border to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center justify-between text-[12.5px] text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Outcome-driven" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-normal text-ink",
										children: ["0", i + 1]
									})]
								})
							]
						})]
					})
				}, it.kicker))
			})]
		})
	});
}
var PROCESS = [
	{
		step: "01",
		title: "Discover",
		desc: "Deep audit of business, brand and tech foundations."
	},
	{
		step: "02",
		title: "Design",
		desc: "Strategy, identity systems and product blueprints."
	},
	{
		step: "03",
		title: "Build",
		desc: "Engineering, AI and creative — shipped in tight cycles."
	},
	{
		step: "04",
		title: "Launch",
		desc: "GTM, narrative and product launches that land."
	},
	{
		step: "05",
		title: "Scale",
		desc: "Operating systems for compounding, durable growth."
	}
];
function Process() {
	const timelineRef = (0, import_react.useRef)(null);
	const [timelineActive, setTimelineActive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = timelineRef.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setTimelineActive(true);
					io.unobserve(e.target);
				}
			});
		}, {
			threshold: .25,
			rootMargin: "0px 0px -60px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "relative py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "How we work",
				title: "A process engineered for momentum.",
				sub: "Five stages — designed for clarity, speed and compounding outcomes."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: timelineRef,
				className: `relative mt-12 sm:mt-20 ${timelineActive ? "process-timeline-active" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute left-[8%] right-[8%] top-7 hidden h-px md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-border/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "process-timeline-fill absolute inset-0 bg-ink" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-2 left-[79px] top-2 w-px md:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-border/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "process-timeline-fill-vertical absolute inset-0 bg-ink" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-4",
						children: PROCESS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 90,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "process-step group relative flex flex-row items-start gap-5 pl-14 text-left md:flex-col md:items-center md:gap-0 md:pl-0 md:text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "process-step-marker relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border bg-background text-muted-foreground shadow-soft transition-colors duration-500 group-hover:border-ink/30 sm:h-14 sm:w-14",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[12px] font-normal tracking-tight sm:text-[13px]",
										children: p.step
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 pt-1 md:pt-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-[16px] font-normal tracking-tight text-ink sm:text-[17px]",
										children: p.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 max-w-none text-[13px] leading-relaxed text-muted-foreground sm:mt-2 sm:max-w-[200px] sm:text-[13.5px] md:mx-auto",
										children: p.desc
									})]
								})]
							})
						}, p.step))
					})
				]
			})]
		})
	});
}
var PROJECTS = [
	{
		tag: "Fintech",
		title: "Velmora",
		desc: "Re-platformed a $4B AUM fintech with a unified product OS and brand system.",
		metric: "+250% growth",
		grad: "from-[oklch(0.20_0.05_258)] to-[oklch(0.30_0.10_260)]"
	},
	{
		tag: "Healthcare AI",
		title: "Synaptiq",
		desc: "Designed an AI triage platform now deployed across 1,200 clinics.",
		metric: "10M+ users",
		grad: "from-[oklch(0.22_0.05_220)] to-[oklch(0.30_0.10_240)]"
	},
	{
		tag: "E-commerce",
		title: "Carthelm",
		desc: "Rebrand and storefront overhaul that doubled repeat purchase rate.",
		metric: "+2.1× LTV",
		grad: "from-[oklch(0.22_0.05_280)] to-[oklch(0.30_0.10_265)]"
	},
	{
		tag: "Enterprise SaaS",
		title: "Opsera",
		desc: "Operations dashboard collapsing 12 tools into one for global teams.",
		metric: "40% faster ops",
		grad: "from-[oklch(0.20_0.04_255)] to-[oklch(0.28_0.08_270)]"
	}
];
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "relative bg-secondary/40 py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Selected work",
				title: "Featured case studies.",
				sub: "A few of the teams we've helped build, brand and grow."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2",
				children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group relative h-full overflow-hidden rounded-sm border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated sm:rounded-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative h-48 overflow-hidden bg-gradient-to-br sm:h-60 ${p.grad}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg-dark opacity-60" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 shimmer opacity-50" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-[-16px] left-4 right-4 rounded-t-2xl border border-white/15 bg-navy/80 p-3 shadow-elevated backdrop-blur sm:bottom-[-20px] sm:left-8 sm:right-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-white/30" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-white/30" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-white/30" })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 grid grid-cols-3 gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 rounded bg-white/15" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 rounded bg-white/25" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 rounded bg-electric/70" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col-span-3 h-12 rounded bg-white/[0.06]" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-4 top-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-normal uppercase tracking-wider text-white backdrop-blur sm:left-6 sm:top-6 sm:text-[11px]",
									children: p.tag
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 sm:p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-start gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-[20px] font-normal tracking-tight text-ink sm:text-[22px]",
										children: p.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 rounded-full bg-electric/10 px-3 py-1 text-[11px] font-normal text-electric sm:text-[12px]",
										children: p.metric
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[14.5px] leading-relaxed text-muted-foreground",
									children: p.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-normal text-ink",
									children: ["Read case study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "!size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								})
							]
						})]
					})
				}, p.title))
			})]
		})
	});
}
function CountUp({ value, prefix = "", suffix = "", duration = 2400 }) {
	const ref = (0, import_react.useRef)(null);
	const [display, setDisplay] = (0, import_react.useState)(0);
	const [started, setStarted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setStarted(true);
				io.disconnect();
			}
		}, { threshold: .35 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!started) return;
		let frame = 0;
		const start = performance.now();
		const tick = (now) => {
			const progress = Math.min((now - start) / duration, 1);
			const eased = 1 - (1 - progress) ** 3;
			setDisplay(Math.round(value * eased));
			if (progress < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [
		started,
		value,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [
			prefix,
			display,
			suffix
		]
	});
}
function Metrics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative border-t border-border/70 bg-secondary/40 px-4 py-6 sm:px-6 sm:py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4",
				children: [
					{
						value: 250,
						prefix: "+",
						suffix: "%",
						l: "Average revenue growth"
					},
					{
						value: 10,
						prefix: "",
						suffix: "M+",
						l: "Users reached"
					},
					{
						value: 40,
						prefix: "",
						suffix: "%",
						l: "Faster operations"
					},
					{
						value: 98,
						prefix: "",
						suffix: "",
						l: "NPS across partners"
					}
				].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[22px] font-normal tracking-[-0.04em] text-gradient-electric sm:text-[28px] md:text-[32px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							value: it.value,
							prefix: it.prefix,
							suffix: it.suffix
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-[10px] text-muted-foreground sm:text-[11px]",
						children: it.l
					})]
				}, it.l))
			}) })
		})
	});
}
var TESTIMONIALS = [
	{
		quote: "ALTRIVA rebuilt our product and brand from first principles. The work compounds — every quarter feels like a step-function.",
		name: "Mara Linden",
		role: "CEO, Velmora",
		initials: "ML"
	},
	{
		quote: "They operate like an internal team — strategic, fast, and obsessed with the outcome. The best partner we've ever hired.",
		name: "Daniel Osei",
		role: "Co-founder, Synaptiq",
		initials: "DO"
	},
	{
		quote: "A rare blend of taste, engineering and growth instinct. We launched in a quarter what would have taken us a year.",
		name: "Yuki Tanaka",
		role: "VP Product, Opsera",
		initials: "YT"
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "What partners say",
				title: "Built on trust, shipped with rigor."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3",
				children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "flex h-full flex-col rounded-sm border border-border bg-card p-5 shadow-soft sm:rounded-sm sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 text-electric",
								children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									className: "!size-3.5 fill-current",
									strokeWidth: 0
								}, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-5 text-[14.5px] leading-relaxed text-ink sm:text-[15.5px]",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-7 flex items-center gap-3 border-t border-border pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-navy to-ink text-[12px] font-normal text-white",
									children: t.initials
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-[14px] font-normal text-ink",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-[12.5px] text-muted-foreground",
										children: t.role
									})]
								})]
							})
						]
					})
				}, t.name))
			})]
		})
	});
}
function Values() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-secondary/40 py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Our values",
				title: "The principles behind the work."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5",
				children: [
					{
						icon: Shield,
						t: "Trust",
						d: "The foundation of every relationship."
					},
					{
						icon: Sparkles,
						t: "Innovation",
						d: "Always pushing what's possible."
					},
					{
						icon: Heart,
						t: "Generosity",
						d: "We give more than we take."
					},
					{
						icon: Users,
						t: "Collaboration",
						d: "Built together, owned together."
					},
					{
						icon: Award,
						t: "Excellence",
						d: "The standard, never the ceiling."
					}
				].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex h-full flex-col items-start rounded-sm border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-ink text-white transition-transform duration-500 group-hover:scale-105",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "!size-4.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-5 text-[16px] font-normal tracking-tight text-ink",
								children: it.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground",
								children: it.d
							})
						]
					})
				}, it.t))
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-2xl bg-cta p-6 sm:rounded-[32px] sm:p-12 md:p-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg-dark opacity-50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Particles, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-balance text-[28px] font-normal leading-[1.08] tracking-[-0.03em] text-gradient-light sm:text-[40px] md:text-[56px]",
								children: "Ready to Build What's Next?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/65 sm:mt-5 sm:text-[16px]",
								children: "We partner with a small number of ambitious teams each quarter. Let's see if we're a fit."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex w-full flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center sm:justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:hello@altriva.co",
									className: "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-normal text-navy shadow-glow transition-transform duration-300 hover:scale-[1.03] sm:w-auto sm:px-7 sm:py-4 sm:text-[14.5px]",
									children: ["Let's Grow Together", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "transition-transform group-hover:translate-x-0.5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#work",
									className: "text-[13.5px] font-normal text-white/70 hover:text-white",
									children: "Or explore our work →"
								})]
							})
						]
					})
				]
			})
		})
	});
}
function Particles() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: Array.from({ length: 28 }, (_, i) => ({
			top: i * 37 % 100,
			left: i * 53 % 100,
			delay: i % 6 * .4,
			size: 2 + i % 3
		})).map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute rounded-full bg-white/40 animate-float",
			style: {
				top: `${d.top}%`,
				left: `${d.left}%`,
				width: d.size,
				height: d.size,
				animationDelay: `${d.delay}s`,
				opacity: .35
			}
		}, i))
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative bg-black text-white/70",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-4 py-6 sm:flex-row sm:items-center sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-[12px] font-normal sm:text-[12.5px]",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ALTRIVA. All rights reserved."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] sm:text-[12.5px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "transition-colors hover:text-white",
						children: "Privacy Policy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "transition-colors hover:text-white",
						children: "Terms"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "transition-colors hover:text-white",
						children: "Cookies"
					})
				]
			})]
		})
	});
}
function SectionHeader({ eyebrow, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-[11.5px] font-normal uppercase tracking-[0.16em] text-electric",
				children: eyebrow
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-balance text-[28px] font-normal leading-[1.08] tracking-[-0.03em] text-ink sm:mt-5 sm:text-[36px] md:text-[48px]",
					children: title
				})
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 140,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-balance text-[14.5px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-[15.5px]",
					children: sub
				})
			})
		]
	});
}
//#endregion
export { Landing as component };
