import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";


const tiers = [
  { amount: "$25", label: "Maker", body: "Supports learning materials for one new member." },
  { amount: "$75", label: "Mentor", body: "Helps fund a workshop in an underserved community." },
  { amount: "$200", label: "Patron", body: "Sustains a season of magazine production and outreach." },
];

function DonatePage() {
  return (
    <SiteLayout transparentHeader>
      <section className="relative h-[70svh] min-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0 kenburns bg-cover bg-center" style={{ backgroundImage: `url(${img.melanieGroup})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/15 to-ink/55" />
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 pt-32 text-ivory lg:px-12 lg:pb-28">
          <div className="max-w-3xl fade-up">
            <p className="eyebrow text-ivory/80"><span className="rule bg-ivory/60" />Support the movement</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.04] text-ivory">
              Help us teach the next <em className="italic font-normal">thousand makers.</em>
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow"><span className="rule" />Choose a gift</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              Every contribution <em className="italic font-normal">extends a life.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
              Your support keeps the library free, the workshops accessible and the
              community thriving across continents.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.label} delay={i * 100}>
                <div className="flex h-full flex-col rounded-sm border border-border bg-card p-10">
                  <p className="eyebrow">{t.label}</p>
                  <p className="mt-6 font-display text-6xl text-forest">{t.amount}</p>
                  <p className="mt-6 flex-1 text-[15px] leading-relaxed text-charcoal/75">{t.body}</p>
                  <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-sm text-ivory hover:bg-olive">
                    <Heart className="h-4 w-4" /> Give {t.amount}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/contact" className="text-sm text-charcoal/70 underline-offset-4 hover:text-forest hover:underline">
              Or get in touch about a larger gift or partnership →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default DonatePage;
