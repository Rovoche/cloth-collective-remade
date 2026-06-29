import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Up-Cycled Cloth Collective" },
      {
        name: "description",
        content:
          "For more than a decade, the Collective has helped people rethink waste through textile upcycling, education and collaboration.",
      },
      { property: "og:image", content: img.melanieProfile },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Creativity", b: "Creating new possibilities from forgotten materials." },
  { t: "Sustainability", b: "Reducing waste through thoughtful design." },
  { t: "Education", b: "Sharing knowledge that empowers others." },
  { t: "Community", b: "Growing stronger by learning together." },
];

const mission = [
  { t: "Inspire", b: "Helping people see possibility where others see waste." },
  { t: "Educate", b: "Providing practical skills that encourage sustainable living." },
  { t: "Connect", b: "Building a welcoming global community united through creativity." },
];

function AboutPage() {
  return (
    <SiteLayout transparentHeader>
      {/* HERO */}
      <section className="relative h-[90svh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 kenburns bg-cover bg-center" style={{ backgroundImage: `url(${img.melanieProfile})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/15 to-ink/55" />
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 pt-32 text-ivory lg:px-12 lg:pb-28">
          <div className="max-w-3xl fade-up">
            <p className="eyebrow text-ivory/80"><span className="rule bg-ivory/60" />About the Collective</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.04] text-ivory">
              Creating change<br /><em className="italic font-normal">through creativity.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/85">
              For more than a decade, The Up-Cycled Cloth Collective has been helping
              people rethink waste, rediscover creativity and build community through
              textile upcycling, education and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal className="overflow-hidden rounded-sm">
            <img src={img.melaniePortrait} alt="" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow"><span className="rule" />Our Story</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              Every movement begins with <em className="italic font-normal">one idea.</em>
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal/80">
              <p>
                The Up-Cycled Cloth Collective began with a simple belief: that
                discarded textiles still have value, and that creativity has the power
                to transform both materials and lives.
              </p>
              <p>
                What started as a passion for sustainable making has grown into an
                international community of educators, artists, makers and changemakers
                who believe that every garment deserves another opportunity to become
                something meaningful.
              </p>
              <p>
                Today, through workshops, publications, learning resources and global
                collaborations, the community continues inspiring people to reduce
                waste while embracing creativity.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-cream px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow"><span className="rule" />Our Mission</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              Three commitments,<br /><em className="italic font-normal">one shared purpose.</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {mission.map((m, i) => (
              <Reveal key={m.t} delay={i * 100}>
                <div className="h-full rounded-sm bg-card p-10 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.18)]">
                  <p className="font-display text-5xl text-forest">0{i + 1}</p>
                  <h3 className="mt-6 font-display text-2xl">{m.t}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">{m.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MELANIE */}
      <section className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow"><span className="rule" />The Founder</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              Meet <em className="italic font-normal">Melanie.</em>
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal/80">
              <p>
                Melanie Brummer is the founder of The Up-Cycled Cloth Collective and an
                internationally recognised educator, speaker and advocate for textile
                upcycling.
              </p>
              <p>
                Through years of teaching, writing, mentoring and creative practice, she
                has inspired thousands of people to approach clothing with curiosity
                instead of consumption.
              </p>
              <p>
                Her work demonstrates that creativity isn't simply about making
                beautiful things — it's about changing the way we think about the world
                around us.
              </p>
            </div>
            <Link
              to="/blog"
              className="group mt-10 inline-flex items-center gap-2 border-b border-forest pb-1 text-sm font-medium text-forest"
            >
              Read Melanie's articles <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={120} className="overflow-hidden rounded-sm">
            <img src={img.melanieProfile} alt="Melanie Brummer" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="bg-linen px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow"><span className="rule" />Our Community</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
                A global community of <em className="italic font-normal">makers.</em>
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-charcoal/80">
              The Collective brings together people from different backgrounds, cultures
              and skill levels through a shared commitment to sustainability and
              creativity. Every member contributes to a growing movement that
              celebrates making, repairing and learning together.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-6 md:grid-cols-12">
            <Reveal className="md:col-span-8">
              <img src={img.melanieGroup} alt="" className="aspect-[16/10] w-full rounded-sm object-cover" />
            </Reveal>
            <Reveal delay={100} className="md:col-span-4">
              <img src={img.workshop2} alt="" className="aspect-[4/5] w-full rounded-sm object-cover" />
            </Reveal>
            <Reveal delay={150} className="md:col-span-4">
              <img src={img.workshop1} alt="" className="aspect-[4/5] w-full rounded-sm object-cover" />
            </Reveal>
            <Reveal delay={200} className="md:col-span-8">
              <img src={img.melanieFriends} alt="" className="aspect-[16/10] w-full rounded-sm object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow"><span className="rule" />Our Values</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              The principles that <em className="italic font-normal">guide us.</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 80} className="bg-ivory p-10 lg:p-14">
                <p className="font-display text-7xl text-forest/80 md:text-8xl">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-6 font-display text-3xl">{v.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">{v.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1000px] text-center">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
              Become part of <em className="italic font-normal">the story.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-charcoal/80">
              Join thousands of makers who believe creativity can create a more
              sustainable future.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="rounded-full bg-forest px-8 py-4 text-sm font-medium text-ivory hover:bg-olive">Join Community</Link>
              <Link to="/learning" className="rounded-full border border-ink px-8 py-4 text-sm font-medium text-ink hover:bg-ink hover:text-ivory">Explore Resources</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
