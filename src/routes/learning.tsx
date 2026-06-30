import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";


const featured = [
  {
    img: img.workshop1,
    eyebrow: "Course · 6 lessons",
    title: "Beginner's Guide to Textile Upcycling",
    body: "Learn the foundations of repairing and transforming clothing — from mending to mindful redesign.",
  },
  {
    img: img.workshop2,
    eyebrow: "Practice · 8 lessons",
    title: "Creative Textile Techniques",
    body: "Explore practical techniques for extending the life of garments through stitching, dye and surface design.",
  },
  {
    img: img.melanieFriends,
    eyebrow: "Theory · 5 lessons",
    title: "Sustainable Design Thinking",
    body: "Discover how creativity can reduce waste and inspire a more thoughtful relationship with what we wear.",
  },
];

const paths = ["Beginner", "Intermediate", "Advanced", "Community Projects", "Teaching Resources"];

const benefits = [
  "Access learning resources",
  "Exclusive workshops",
  "Magazine archive",
  "Community discussions",
  "Member-only content",
  "Early event registration",
];

function LearningPage() {
  return (
    <SiteLayout transparentHeader>
      {/* HERO */}
      <section className="relative h-[90svh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 kenburns bg-cover bg-center" style={{ backgroundImage: `url(${img.workshop2})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/20 to-ink/60" />
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 pt-32 text-ivory lg:px-12 lg:pb-28">
          <div className="max-w-3xl fade-up">
            <p className="eyebrow text-ivory/80"><span className="rule bg-ivory/60" />Learning Library</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.02] text-ivory">
              Learn. Create.<br /><em className="italic font-normal">Transform.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/85">
              Discover practical learning experiences designed to help you repair,
              redesign and reimagine textiles through creativity, craftsmanship and
              sustainable thinking.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#courses" className="rounded-full bg-ivory px-7 py-3.5 text-sm font-medium text-ink hover:bg-cream">Browse Courses</a>
              <Link to="/contact" className="rounded-full border border-ivory/40 px-7 py-3.5 text-sm text-ivory hover:bg-ivory/10">Become a Member</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section id="courses" className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="eyebrow"><span className="rule" />Featured</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
                Practical lessons in <em className="italic font-normal">mindful making.</em>
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-charcoal/80 lg:pt-10">
              Each lesson is taught by an experienced maker and designed for real
              practice — at your own pace, in your own space, with the tools you
              already have.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {featured.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <article className="group">
                  <div className="overflow-hidden rounded-sm bg-cream">
                    <img src={c.img} alt={c.title} className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                  </div>
                  <p className="eyebrow mt-6">{c.eyebrow}</p>
                  <h3 className="mt-3 font-display text-2xl leading-snug md:text-[1.75rem]">{c.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal/70">{c.body}</p>
                  <button className="group/btn mt-5 inline-flex items-center gap-2 text-sm font-medium text-forest">
                    Start lesson <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PATHS */}
      <section className="bg-cream px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow"><span className="rule" />Learning Paths</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              Choose your <em className="italic font-normal">journey.</em>
            </h2>
          </Reveal>
          <div className="mt-16 space-y-4">
            {paths.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 rounded-sm bg-card p-8 transition-all hover:shadow-[0_18px_50px_-30px_rgba(0,0,0,0.18)]">
                  <span className="font-display text-2xl text-forest">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl">{p}</h3>
                  <ArrowRight className="h-5 w-5 text-charcoal/60 transition-all group-hover:translate-x-1 group-hover:text-forest" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal className="overflow-hidden rounded-sm">
            <img src={img.workshop1} alt="" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow"><span className="rule" />Why learn here</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              Learning that creates <em className="italic font-normal">lasting impact.</em>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
              Every lesson is designed to inspire confidence, encourage creativity and
              empower people to make more sustainable choices through practical skills.
              You'll learn alongside a global community of makers who care about both
              craft and consequence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="bg-linen px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow"><span className="rule" />Membership</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl">
                Everything inside the <em className="italic font-normal">collective.</em>
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-charcoal/80">
              One membership unlocks the library, the magazine archive, member
              workshops and a global community of makers.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={i * 60}>
                <div className="flex items-center gap-5 rounded-sm bg-card p-6">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest text-ivory">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="font-display text-xl">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
              Continue your <em className="italic font-normal">creative journey.</em>
            </h2>
            <div className="mt-10">
              <Link to="/contact" className="rounded-full bg-forest px-8 py-4 text-sm font-medium text-ivory hover:bg-olive">
                Join the Learning Community
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

export default LearningPage;
