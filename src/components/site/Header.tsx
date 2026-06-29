import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { img } from "@/lib/images";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/learning", label: "Learning Library" },
  { to: "/magazine", label: "Magazine" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  { to: "/donate", label: "Donate" },
] as const;

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-ivory/90 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-4 lg:px-12">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={img.logo} alt="The Up-Cycled Cloth Collective" className="h-10 w-10 object-contain" />
          <span
            className={`hidden font-display text-base leading-tight md:block transition-colors ${
              solid ? "text-ink" : "text-ivory"
            }`}
          >
            The Up-Cycled
            <br />
            <span className="italic">Cloth Collective</span>
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`text-[13px] tracking-wide transition-colors hover:text-olive ${
                solid ? "text-charcoal" : "text-ivory/90"
              }`}
              activeProps={{ className: "text-olive" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 justify-self-end">
          <Link
            to="/contact"
            className="hidden rounded-full bg-forest px-5 py-2.5 text-[13px] font-medium tracking-wide text-ivory shadow-sm transition-all hover:bg-olive hover:shadow-md md:inline-block"
          >
            Join the Community
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-10 w-10 place-items-center rounded-full lg:hidden ${
              solid ? "text-ink" : "text-ivory"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-ivory lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-2xl text-ink"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-forest px-5 py-3 text-center text-sm text-ivory"
            >
              Join the Community
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
