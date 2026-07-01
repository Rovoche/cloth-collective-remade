import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { img } from "@/lib/images";

const nav: { to: string; label: string; end?: boolean }[] = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/learning", label: "Learning Library" },
  { to: "/magazine", label: "Magazine" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  { to: "/donate", label: "Donate" },
];

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = !transparent || scrolled || open;

  return (
    <>
      <header
        ref={menuRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-border/40"
            : "bg-transparent"
        }`}
      >
        {/* Main bar */}
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 lg:px-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <img
              src={img.logo}
              alt="The Up-Cycled Cloth Collective"
              className="h-12 w-12 flex-shrink-0 object-contain drop-shadow-sm lg:h-14 lg:w-14"
            />
            <span
              style={!solid ? { textShadow: "0 1px 8px rgba(0,0,0,0.7)" } : {}}
            className={`font-display text-sm leading-snug transition-colors lg:text-base ${
                solid ? "text-ink" : "text-ivory"
              }`}
            >
              The Up-Cycled
              <br />
              <span className="italic">Cloth Collective</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  `text-[13px] tracking-wide transition-colors hover:text-olive ${
                    isActive ? "text-olive font-medium" : solid ? "text-charcoal" : "text-ivory"
                  }`}
                style={!solid ? { textShadow: "0 1px 6px rgba(0,0,0,0.65)" } : {}
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden rounded-full bg-forest px-5 py-2.5 text-[13px] font-medium tracking-wide text-ivory shadow-sm transition-all hover:bg-olive hover:shadow-md lg:inline-block"
            >
              Join the Community
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden ${
                solid
                  ? "text-ink hover:bg-ink/8"
                  : "text-ivory hover:bg-ivory/15"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span
                style={{
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  display: "block",
                  position: "relative",
                  width: 20,
                  height: 20,
                }}
              >
                <Menu
                  className="absolute inset-0 h-5 w-5"
                  style={{ opacity: open ? 0 : 1, transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "all 0.3s ease" }}
                />
                <X
                  className="absolute inset-0 h-5 w-5"
                  style={{ opacity: open ? 1 : 0, transform: open ? "rotate(0deg)" : "rotate(-90deg)", transition: "all 0.3s ease" }}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile drawer — slides down from header */}
        <div
          className="overflow-hidden lg:hidden"
          style={{
            maxHeight: open ? "100vh" : "0",
            transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div className="border-t border-border/40 bg-ivory/98 backdrop-blur-md">
            <nav className="flex flex-col px-5 pt-4 pb-6">
              {nav.map((n, i) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.end}
                  onClick={() => setOpen(false)}
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(-8px)",
                    transition: `opacity 0.35s ease ${i * 45}ms, transform 0.35s ease ${i * 45}ms`,
                  }}
                  className={({ isActive }) =>
                    `border-b border-border/30 py-4 font-display text-xl transition-colors ${
                      isActive ? "text-olive" : "text-ink hover:text-olive"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(-8px)",
                  transition: `opacity 0.35s ease ${nav.length * 45}ms, transform 0.35s ease ${nav.length * 45}ms`,
                }}
                className="mt-5 rounded-full bg-forest py-3.5 text-center text-sm font-medium text-ivory transition-colors hover:bg-olive"
              >
                Join the Community
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Backdrop overlay when open */}
      <div
        className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-[2px] lg:hidden"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        onClick={() => setOpen(false)}
        aria-hidden
      />
    </>
  );
}
