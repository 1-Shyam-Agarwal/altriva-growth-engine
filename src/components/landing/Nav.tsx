import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/landing/Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why us" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div
            className={`flex items-center justify-between rounded-full border px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-500 ${
              scrolled || menuOpen
                ? "border-border/80 bg-background/80 shadow-soft backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }`}
          >
            <a href="#top" className="flex shrink-0 items-center" onClick={closeMenu}>
              <Logo className="h-[20px] w-auto sm:h-[23px]" />
            </a>

            <nav className="hidden items-center gap-7 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[13.5px] font-normal text-muted-foreground transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <a
                href="#contact"
                className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-normal text-white transition-transform duration-300 hover:scale-[1.03] sm:inline-flex"
              >
                Get in touch
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>

              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-ink transition-colors hover:bg-secondary md:hidden"
              >
                {menuOpen ? <X className="!size-5" /> : <Menu className="!size-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMenu}
          />
          <nav className="absolute inset-x-0 top-[72px] mx-4 rounded-2xl border border-border bg-background p-4 shadow-elevated">
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-3 text-[15px] font-normal text-ink transition-colors hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-3 text-[14px] font-normal text-white"
            >
              Get in touch
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
