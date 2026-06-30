import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { img } from "@/lib/images";

export function Footer() {
  return (
    <footer className="relative bg-ink text-ivory">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0, transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 0, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 pt-24 pb-10 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={img.logo} alt="" className="h-12 w-12 object-contain" />
              <span className="font-display text-xl leading-tight">
                The Up-Cycled
                <br />
                <span className="italic">Cloth Collective</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
              A global community transforming textile waste into creativity, learning and
              lasting environmental impact.
            </p>
            <div className="mt-8 flex items-center gap-4">
              {[Instagram, Facebook, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-ivory/15 text-ivory/80 transition-colors hover:border-ivory/40 hover:text-ivory"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="eyebrow text-ivory/60">Community</h4>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              <li><Link to="/about" className="hover:text-ivory">About</Link></li>
              <li><Link to="/learning" className="hover:text-ivory">Learning Library</Link></li>
              <li><Link to="/magazine" className="hover:text-ivory">Magazine</Link></li>
              <li><Link to="/blog" className="hover:text-ivory">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-ivory">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-ivory/60">Support</h4>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              <li><Link to="/donate" className="hover:text-ivory">Donate</Link></li>
              <li><Link to="/contact" className="hover:text-ivory">Partnerships</Link></li>
              <li><Link to="/contact" className="hover:text-ivory">Speaking</Link></li>
              <li><Link to="/contact" className="hover:text-ivory">Press & Media</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-ivory/60">Newsletter</h4>
            <p className="mt-5 text-sm text-ivory/70">
              Inspiring stories, magazine updates and creative practice — once a month.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex items-center gap-2 border-b border-ivory/20 pb-2"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
              />
              <button type="submit" className="text-xs uppercase tracking-widest text-ivory/80 hover:text-ivory">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} The Up-Cycled Cloth Collective. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <a href="#" className="hover:text-ivory/80">Privacy</a>
            <a href="#" className="hover:text-ivory/80">Terms</a>
          </p>
        </div>

        <div className="mt-6 border-t border-ivory/10 pt-6 text-center">
          <p className="text-[11px] tracking-[0.28em] uppercase text-ivory/40">
            Built on Rock by{" "}
            <a
              href="https://rovoche.github.io/homepage/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/70 transition-colors hover:text-ivory"
            >
              ROVOCHÉ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
