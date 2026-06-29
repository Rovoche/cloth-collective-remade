import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — The Up-Cycled Cloth Collective" },
      {
        name: "description",
        content:
          "Thoughtful articles, practical ideas, creative projects and inspiring stories from a global community transforming textile waste.",
      },
      { property: "og:image", content: img.blog1 },
    ],
  }),
  component: BlogPage,
});

const categories = [
  "All",
  "Creative Projects",
  "Sustainability",
  "Workshops",
  "Community Stories",
  "Education",
  "Magazine",
  "News",
];

const featured = {
  img: img.blog1,
  category: "Featured Story",
  read: "8 min read",
  title: "The quiet revolution happening at the seam.",
  excerpt:
    "How a generation of makers is rediscovering the radical possibility of mending — and changing what we expect from our clothes.",
  author: "Melanie Brummer",
  date: "May 2026",
};

const posts = [
  {
    img: img.blog2,
    category: "Community Stories",
    read: "5 min read",
    title: "Notes from a community workshop in Cape Town.",
    excerpt:
      "Twelve makers, one room, and a quiet afternoon of patching, dyeing and listening.",
  },
  {
    img: img.blog3,
    category: "Creative Projects",
    read: "6 min read",
    title: "What a worn shirt taught me about patience.",
    excerpt:
      "On slowing down, learning to repair, and finding meaning in the work of small repeated stitches.",
  },
  {
    img: img.workshop1,
    category: "Workshops",
    read: "4 min read",
    title: "Five upcoming workshops across the Collective.",
    excerpt:
      "Where you can meet, make and learn alongside the wider community this season.",
  },
  {
    img: img.workshop2,
    category: "Education",
    read: "7 min read",
    title: "Why we teach mending before design.",
    excerpt:
      "Repair is a conversation with a garment. It's also the foundation of every creative practice we share.",
  },
];

function BlogPage() {
  return (
    <SiteLayout transparentHeader>
      {/* HERO */}
      <section className="relative h-[80svh] min-h-[560px] w-full overflow-hidden">
        <div className="absolute inset-0 kenburns bg-cover bg-center" style={{ backgroundImage: `url(${img.blog1})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/15 to-ink/55" />
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 pt-32 text-ivory lg:px-12 lg:pb-28">
          <div className="max-w-3xl fade-up">
            <p className="eyebrow text-ivory/80"><span className="rule bg-ivory/60" />The Journal</p>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1.04] text-ivory">
              Stories that inspire <em className="italic font-normal">sustainable change.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/85">
              Thoughtful articles, practical ideas, creative projects and inspiring
              stories from a global community transforming textile waste into
              opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-b border-border bg-ivory px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-3 overflow-x-auto">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`whitespace-nowrap rounded-full border px-5 py-2 text-xs tracking-wide transition-all ${
                i === 0
                  ? "border-ink bg-ink text-ivory"
                  : "border-border text-charcoal hover:border-ink hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="bg-ivory px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
            <div className="overflow-hidden rounded-sm">
              <img src={featured.img} alt={featured.title} className="aspect-[4/3] w-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-charcoal/60">
                <span className="text-olive">{featured.category}</span>
                <span className="h-1 w-1 rounded-full bg-charcoal/40" />
                <span>{featured.read}</span>
              </div>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-5xl lg:text-[3.5rem]">
                {featured.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
                {featured.excerpt}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img src={img.melanieProfile} alt="" className="h-12 w-12 rounded-full object-cover" />
                <div className="text-sm">
                  <p className="font-medium text-ink">{featured.author}</p>
                  <p className="text-charcoal/60">{featured.date}</p>
                </div>
              </div>
              <button className="group mt-10 inline-flex items-center gap-2 border-b border-forest pb-1 text-sm font-medium text-forest">
                Read the story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LATEST */}
      <section className="bg-cream px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow"><span className="rule" />Latest stories</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              Recent from <em className="italic font-normal">the journal.</em>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="group cursor-pointer">
                  <div className="overflow-hidden rounded-sm">
                    <img src={p.img} alt={p.title} className="aspect-[5/4] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-charcoal/60">
                    <span className="text-olive">{p.category}</span>
                    <span className="h-1 w-1 rounded-full bg-charcoal/40" />
                    <span>{p.read}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl leading-snug md:text-3xl">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-forest">
                    Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1000px] text-center">
          <Reveal>
            <p className="eyebrow justify-center">Newsletter</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">
              Inspiration delivered <em className="italic font-normal">monthly.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-charcoal/80">
              Receive inspiring stories, practical tutorials, magazine updates and
              community news directly in your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-12 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full border border-border bg-card px-6 py-4 text-sm focus:border-forest focus:outline-none"
              />
              <button className="rounded-full bg-forest px-8 py-4 text-sm font-medium text-ivory hover:bg-olive">
                Subscribe
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
