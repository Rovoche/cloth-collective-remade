import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Up-Cycled Cloth Collective" },
      {
        name: "description",
        content:
          "Reach out about community membership, workshops, partnerships, speaking engagements or media — or just say hello.",
      },
      { property: "og:image", content: img.workshop1 },
    ],
  }),
  component: ContactPage,
});

const options = [
  { t: "General Enquiries", b: "Questions, ideas or anything in between." },
  { t: "Community Membership", b: "Become part of the global Collective." },
  { t: "Workshop Enquiries", b: "Hosting, attending or collaborating on workshops." },
  { t: "Partnerships", b: "Brands, organisations and creative collaborations." },
  { t: "Speaking Engagements", b: "Invite Melanie to speak, teach or contribute." },
  { t: "Media", b: "Press, features and interviews." },
];

function ContactPage() {
  return (
    <SiteLayout transparentHeader>
      {/* HERO */}
      <section className="relative h-[80svh] min-h-[560px] w-full overflow-hidden">
        <div className="absolute inset-0 kenburns bg-cover bg-center" style={{ backgroundImage: `url(${img.workshop1})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/15 to-ink/55" />
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 pt-32 text-ivory lg:px-12 lg:pb-28">
          <div className="max-w-3xl fade-up">
            <p className="eyebrow text-ivory/80"><span className="rule bg-ivory/60" />Get in touch</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.04] text-ivory">
              We'd love to <em className="italic font-normal">hear from you.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/85">
              Whether you're interested in joining the community, collaborating,
              speaking opportunities, workshops or simply saying hello, we'd love to
              connect.
            </p>
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow"><span className="rule" />Ways to connect</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              Tell us a little about <em className="italic font-normal">what brings you here.</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-3">
            {options.map((o, i) => (
              <Reveal key={o.t} delay={i * 60} className="group bg-ivory p-8 lg:p-10">
                <p className="font-display text-3xl text-forest/80">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 font-display text-2xl">{o.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal/70">{o.b}</p>
                <ArrowRight className="mt-6 h-4 w-4 text-forest transition-transform group-hover:translate-x-1" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-cream px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] items-start gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow"><span className="rule" />Write to us</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              Begin a <em className="italic font-normal">conversation.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
              We read every message. Expect a thoughtful reply within a few days.
            </p>
            <div className="mt-10 space-y-4 text-sm">
              <a href="mailto:hello@upcycledclothcollective.org" className="flex items-center gap-3 text-charcoal hover:text-forest">
                <Mail className="h-4 w-4" />
                hello@upcycledclothcollective.org
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border text-charcoal hover:border-ink hover:text-ink">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 rounded-sm bg-card p-8 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.18)] md:p-12">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Your name" placeholder="First and last" />
                <Field label="Email" type="email" placeholder="you@email.com" />
              </div>
              <Field label="Subject" placeholder="What is this about?" />
              <div>
                <label className="eyebrow block">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell us what's on your mind…"
                  className="mt-3 w-full rounded-sm border-b border-border bg-transparent py-3 text-base focus:border-forest focus:outline-none"
                />
              </div>
              <button className="group inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-medium text-ivory hover:bg-olive">
                Send message <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* COMMUNITY INVITE */}
      <section className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal className="overflow-hidden rounded-sm">
            <img src={img.melanieFriends} alt="" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow"><span className="rule" />The invitation</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              Join a community that believes creativity can <em className="italic font-normal">change the world.</em>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
              The Up-Cycled Cloth Collective is more than an organisation. It's a
              welcoming global network of people choosing creativity over waste.
              Join us.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-linen px-6 pb-28 lg:px-12 lg:pb-36">
        <div className="mx-auto max-w-[1280px]">
          <div className="overflow-hidden rounded-2xl border border-border bg-cream">
            <div
              className="aspect-[16/7] w-full opacity-90"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 40%, rgba(60,90,60,0.18), transparent 40%), radial-gradient(circle at 70% 60%, rgba(120,60,120,0.12), transparent 45%), linear-gradient(180deg, #f1ece1, #e8e0cf)",
              }}
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="eyebrow block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-base focus:border-forest focus:outline-none"
      />
    </div>
  );
}
