import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";

export const Route = createFileRoute("/magazine")({
  head: () => ({
    meta: [
      { title: "Magazine — The Up-Cycled Cloth Collective" },
      {
        name: "description",
        content:
          "Premium digital publications celebrating creativity, sustainable making and inspiring people transforming textile waste.",
      },
      { property: "og:image", content: img.magazineMay },
    ],
  }),
  component: MagazinePage,
});

const archive = [
  { cover: img.magazineMay, title: "Volume IX · May 2026", tag: "Latest" },
  { cover: img.magazineArchive, title: "Volume VIII · Autumn 2025", tag: "Archive" },
  { cover: img.magazineMay, title: "Volume VII · Spring 2025", tag: "Archive" },
  { cover: img.magazineArchive, title: "Volume VI · Winter 2024", tag: "Archive" },
  { cover: img.magazineMay, title: "Volume V · Summer 2024", tag: "Archive" },
  { cover: img.magazineArchive, title: "Volume IV · Spring 2024", tag: "Archive" },
];

const sections = [
  "Editor's Note",
  "Featured Stories",
  "Creative Projects",
  "Sustainability Articles",
  "Interviews",
  "Practical Tutorials",
];

function MagazinePage() {
  return (
    <SiteLayout transparentHeader>
      {/* HERO */}
      <section className="relative bg-cream pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
          <Reveal>
            <p className="eyebrow"><span className="rule" />The Magazine</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5.25rem)] leading-[1.02]">
              Stories worth <em className="italic font-normal">sharing.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal/80">
              Discover beautifully curated publications celebrating creativity,
              sustainable making and inspiring people transforming textile waste into
              opportunity.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#featured" className="rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-ivory hover:bg-olive">Read Latest Issue</a>
              <a href="#archive" className="rounded-full border border-ink px-7 py-3.5 text-sm font-medium text-ink hover:bg-ink hover:text-ivory">Browse Archive</a>
            </div>
          </Reveal>
          <Reveal delay={150} className="relative">
            <div className="absolute -inset-8 rounded-full bg-linen blur-3xl opacity-70" />
            <img
              src={img.magazineMay}
              alt="UK Magazine May 2026"
              className="relative mx-auto aspect-[3/4] w-full max-w-md object-cover shadow-2xl shadow-ink/30"
            />
          </Reveal>
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured" className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
            <div className="overflow-hidden rounded-sm">
              <img src={img.magazineMay} alt="" className="aspect-[3/4] w-full object-cover" />
            </div>
            <div>
              <p className="eyebrow"><span className="rule" />Featured Issue · Volume IX</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
                Inside the <em className="italic font-normal">May 2026 edition.</em>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
                A new chapter of conversations, projects and ideas — gathered from
                makers across the global Collective.
              </p>
              <ul className="mt-10 divide-y divide-border border-y border-border">
                {sections.map((s, i) => (
                  <li key={s} className="flex items-center justify-between py-5">
                    <span className="font-display text-xl text-ink">{s}</span>
                    <span className="text-xs uppercase tracking-[0.22em] text-charcoal/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="group mt-10 inline-flex items-center gap-2 border-b border-forest pb-1 text-sm font-medium text-forest">
                Read the issue <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ARCHIVE */}
      <section id="archive" className="bg-linen px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow"><span className="rule" />The Archive</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              Every issue, <em className="italic font-normal">preserved.</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((a, i) => (
              <Reveal key={a.title + i} delay={i * 60}>
                <article className="group">
                  <div className="overflow-hidden rounded-sm bg-cream shadow-xl shadow-ink/10">
                    <img src={a.cover} alt={a.title} className="aspect-[3/4] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <h3 className="font-display text-xl">{a.title}</h3>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-charcoal/50">{a.tag}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <p className="eyebrow justify-center">More than a magazine</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">
              A quiet record of <em className="italic font-normal">a movement.</em>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/80">
              Each edition celebrates creativity through inspiring stories, practical
              projects, thoughtful conversations and innovative approaches to textile
              sustainability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1000px] text-center">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
              Never miss <em className="italic font-normal">an issue.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-charcoal/80">
              Join our growing community and receive access to inspiring publications,
              creative ideas and practical resources throughout the year.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="rounded-full bg-forest px-8 py-4 text-sm font-medium text-ivory hover:bg-olive">Become a Member</Link>
              <Link to="/blog" className="rounded-full border border-ink px-8 py-4 text-sm font-medium text-ink hover:bg-ink hover:text-ivory">Browse Publications</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
