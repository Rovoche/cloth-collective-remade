import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { StatNumber } from "@/components/site/StatNumber";
import { img } from "@/lib/images";


const stats = [
  { n: "12,000+", l: "Global Community" },
  { n: "48", l: "Countries Reached" },
  { n: "200+", l: "Educational Resources" },
  { n: "36", l: "Magazine Editions" },
  { n: "500+", l: "Workshops Hosted" },
  { n: "15", l: "Years of Impact" },
];

const courses = [
  {
    img: img.workshop1,
    eyebrow: "Foundations",
    title: "Beginner's Guide to Textile Upcycling",
    body: "A gentle introduction to repairing and transforming clothing with confidence.",
  },
  {
    img: img.workshop2,
    eyebrow: "Practice",
    title: "Creative Textile Techniques",
    body: "Hand-stitching, dyeing, patching and printing — practices that extend the life of what we wear.",
  },
  {
    img: img.melanieFriends,
    eyebrow: "Thinking",
    title: "Sustainable Design Thinking",
    body: "How creativity reframes waste — and changes the way we live with materials.",
  },
];

const testimonials = [
  {
    q: "It changed how I look at my wardrobe — and at my own creativity.",
    a: "Workshop participant, Cape Town",
  },
  {
    q: "The Collective is the most generous community of makers I've ever been part of.",
    a: "Educator, United Kingdom",
  },
  {
    q: "Melanie's teaching helped me see possibility where I used to see waste.",
    a: "Maker, Australia",
  },
];

function Home() {
  return (
    <SiteLayout transparentHeader>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <div
          className="absolute inset-0 kenburns bg-cover bg-center"
          style={{ backgroundImage: `url(${img.homepageCover})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/10 to-ink/60" />
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 pt-20 text-ivory lg:px-12 lg:pb-28">
          <div className="max-w-3xl fade-up">
            <p className="eyebrow text-ivory/80">
              <span className="rule bg-ivory/60" />A Global Textile Movement
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.75rem)] leading-[1.02] text-ivory">
              Every garment has<br />
              <em className="font-normal italic">another story</em> to tell.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/85 md:text-lg">
              The Up-Cycled Cloth Collective is a global community transforming textile
              waste into creativity, learning and lasting environmental impact through
              education, collaboration and the power of making.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ivory px-7 py-3.5 text-sm font-medium text-ink transition-all hover:bg-cream"
              >
                Join the Community
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/learning"
                className="inline-flex items-center gap-2 rounded-full border border-ivory/40 px-7 py-3.5 text-sm font-medium text-ivory backdrop-blur-sm transition-all hover:bg-ivory/10"
              >
                Explore the Learning Library
              </Link>
            </div>
          </div>
          <div className="mt-16 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ivory/60">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            Scroll to begin
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            <div>
              <p className="eyebrow"><span className="rule" />Our Impact</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
                Creating change,<br /><em className="italic font-normal">one thread</em> at a time.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-charcoal/80 lg:pt-10">
              Every repaired garment, every shared skill and every creative project
              contributes to a more sustainable future. Together, our community is
              proving that creativity can reduce waste while bringing people together.
            </p>
          </Reveal>

          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 60} className="bg-ivory p-5 md:p-8 lg:p-10">
                <p className="font-display text-[clamp(1.75rem,5vw,3.5rem)] leading-none text-forest">
                  <StatNumber raw={s.n} />
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-charcoal/70 md:text-xs md:tracking-[0.22em]">
                  {s.l}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-cream px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal className="overflow-hidden rounded-sm">
            <img
              src={img.workshop1}
              alt="A community workshop in progress"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] hover:scale-[1.03]"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow"><span className="rule" />Our Mission</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              A community built around <em className="italic font-normal">creativity</em> and sustainability.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal/80">
              <p>
                The Up-Cycled Cloth Collective exists to inspire a different way of
                thinking about clothing. Instead of seeing worn textiles as waste, we
                see possibility.
              </p>
              <p>
                Through education, creative practice and meaningful connection, we help
                people rediscover the value hidden inside every piece of fabric.
              </p>
            </div>
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-2 border-b border-forest pb-1 text-sm font-medium tracking-wide text-forest"
            >
              Discover our story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* LEARNING */}
      <section className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="eyebrow"><span className="rule" />Featured Learning</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
                Learn skills that create <em className="italic font-normal">lasting change.</em>
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-charcoal/80 lg:pt-10">
              Explore practical learning experiences designed to help makers, educators
              and beginners transform discarded textiles into meaningful creations.
              Whether you're picking up a needle for the first time or expanding years
              of experience, you'll find inspiration here.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {courses.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <article className="group">
                  <div className="overflow-hidden rounded-sm bg-cream">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                  </div>
                  <p className="eyebrow mt-6">{c.eyebrow}</p>
                  <h3 className="mt-3 font-display text-2xl leading-snug md:text-[1.7rem]">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal/70">
                    {c.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/learning"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3.5 text-sm font-medium text-ink transition-all hover:bg-ink hover:text-ivory"
            >
              Explore Learning Library
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAGAZINE */}
      <section className="bg-linen px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <Reveal className="relative">
            <div className="relative grid grid-cols-2 gap-6">
              <img
                src={img.magazineMay}
                alt="UK Magazine May 2026"
                className="aspect-[3/4] w-full object-cover shadow-2xl shadow-ink/20"
              />
              <img
                src={img.magazineArchive}
                alt="Magazine archive cover"
                className="mt-12 aspect-[3/4] w-full object-cover shadow-2xl shadow-ink/20"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow"><span className="rule" />The Magazine</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              Stories that inspire <em className="italic font-normal">sustainable living.</em>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
              Our digital magazines celebrate creativity, practical techniques, inspiring
              makers and innovative ideas that help build a more sustainable future —
              one story at a time.
            </p>
            <Link
              to="/magazine"
              className="group mt-10 inline-flex items-center gap-2 border-b border-forest pb-1 text-sm font-medium tracking-wide text-forest"
            >
              Browse the magazine
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow"><span className="rule" />The Founder</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              Meet <em className="italic font-normal">Melanie Brummer.</em>
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal/80">
              <p>
                What began as a passion for creativity and sustainability has grown into
                an international community dedicated to reimagining textile waste.
              </p>
              <p>
                Through teaching, speaking, writing and collaboration, Melanie continues
                to inspire thousands of people to see possibility where others see waste.
              </p>
            </div>
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-2 border-b border-forest pb-1 text-sm font-medium tracking-wide text-forest"
            >
              Read Melanie's story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={120} className="overflow-hidden rounded-sm">
            <img
              src={img.melaniePortrait}
              alt="Melanie Brummer, founder"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="bg-cream px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Our Community</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              You're not joining a website.<br />
              <em className="italic font-normal">You're joining a movement.</em>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
              Around the world, people are discovering that small creative actions can
              make a meaningful environmental difference. Together we learn, share,
              encourage one another and prove that creativity has the power to build
              stronger communities.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-6 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <img src={img.melanieGroup} alt="" className="aspect-[4/3] w-full rounded-sm object-cover" />
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <img src={img.workshop1} alt="" className="aspect-[4/3] w-full rounded-sm object-cover" />
            </Reveal>
            <Reveal delay={150} className="md:col-span-5">
              <img src={img.melanieFriends} alt="" className="aspect-[4/3] w-full rounded-sm object-cover" />
            </Reveal>
            <Reveal delay={200} className="md:col-span-7">
              <img src={img.workshop2} alt="" className="aspect-[4/3] w-full rounded-sm object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow"><span className="rule" />Voices</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              From makers across the <em className="italic font-normal">collective.</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <figure className="flex h-full flex-col justify-between rounded-sm bg-card p-10 shadow-[0_1px_0_rgba(0,0,0,0.04),0_18px_50px_-30px_rgba(0,0,0,0.18)]">
                  <blockquote className="font-display text-2xl leading-snug text-ink">
                    &ldquo;{t.q}&rdquo;
                  </blockquote>
                  <figcaption className="mt-10 text-xs uppercase tracking-[0.22em] text-charcoal/60">
                    — {t.a}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-ink">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${img.melanieFriends})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
        <div className="relative mx-auto max-w-[1100px] px-6 py-36 text-center text-ivory lg:px-12 lg:py-44">
          <Reveal>
            <p className="eyebrow justify-center text-ivory/70">Begin</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ivory md:text-6xl lg:text-7xl">
              Ready to create<br />
              <em className="italic font-normal">something meaningful?</em>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ivory/80">
              Whether you're looking to learn, collaborate, teach or simply become part
              of a welcoming global community, there's a place for you here.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-ivory px-8 py-4 text-sm font-medium text-ink transition-all hover:bg-cream"
              >
                Join the Community
              </Link>
              <Link
                to="/donate"
                className="rounded-full border border-ivory/40 px-8 py-4 text-sm font-medium text-ivory hover:bg-ivory/10"
              >
                Support Our Mission
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

export default Home;
