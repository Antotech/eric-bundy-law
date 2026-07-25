"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  FileSignature,
  Globe2,
  LockKeyhole,
  MessageSquareText,
  Scale,
  ShieldCheck,
  Star,
  UsersRound
} from "lucide-react";
import Image from "next/image";
import SiteHeader from "./SiteHeader";
import WhatsAppButton from "./WhatsAppButton";

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Business & Corporate Law",
    text: "Entity formation, contracts, governance, compliance, and practical business guidance."
  },
  {
    icon: Scale,
    title: "Litigation Support",
    text: "Pleadings, motion practice, discovery, case assessment, and litigation strategy."
  },
  {
    icon: FileSignature,
    title: "Contract Drafting & Review",
    text: "Clear, enforceable agreements designed to reduce risk and protect your interests."
  },
  {
    icon: UsersRound,
    title: "Employment Law",
    text: "Workplace policies, severance matters, disputes, and compliance guidance."
  },
  {
    icon: LockKeyhole,
    title: "Privacy, AI & SaaS",
    text: "Privacy policies, terms of service, technology agreements, and data-risk guidance."
  },
  {
    icon: Globe2,
    title: "Cross-Border Matters",
    text: "Research, contracts, and regulatory guidance for international business matters."
  }
];

const reviews = [
  {
    title: "Contract Drafting & Review",
    text: "Fantastic work, quick turnaround, and very easy to communicate with. Highly recommended."
  },
  {
    title: "Business Agreement Review",
    text: "Great work. The matter was handled quickly, carefully, and professionally."
  },
  {
    title: "Legal Research & Advisory",
    text: "Clear legal guidance, strong attention to detail, and excellent responsiveness."
  },
  {
    title: "Independent Contractor Agreement",
    text: "Worked quickly, answered our questions, and delivered a strong final document."
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 }
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="hero-background hero-pattern relative overflow-hidden text-white">
          <div className="section-shell grid min-h-[690px] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr]">
            <motion.div {...fadeUp}>
              <p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-goldLight">
                Strategic. Responsive. Results-Driven.
              </p>
              <h1 className="text-balance max-w-4xl font-serif text-5xl leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
                Practical Legal Solutions.
                <span className="mt-2 block text-goldLight">Real Results.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
                Thoughtful legal counsel for businesses and individuals navigating complex legal matters with clarity and confidence.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="gold-gradient inline-flex min-h-12 items-center justify-center rounded-md px-6 text-xs font-bold uppercase tracking-wide text-navy shadow-xl transition hover:-translate-y-0.5"
                >
                  Schedule a Consultation
                </a>
                <WhatsAppButton />
              </div>

              <div className="mt-8 flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:gap-8">
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-goldLight" /> Licensed in Pennsylvania</span>
                <span className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-goldLight" /> Serving Clients Nationwide</span>
              </div>
            </motion.div>

            <motion.aside {...fadeUp} className="glass rounded-2xl p-6 shadow-premium sm:p-8">
              {[
                [Scale, "Strategic Counsel", "Thoughtful advice tailored to your objectives and legal needs."],
                [MessageSquareText, "Clear Communication", "Responsive, transparent, and focused on what matters."],
                [Building2, "Dedicated Advocacy", "Professional, prepared, and committed to your interests."]
              ].map(([Icon, title, text], index) => {
                const C = Icon as typeof Scale;
                return (
                  <article key={String(title)} className={`grid grid-cols-[44px_1fr] gap-5 py-6 ${index ? "border-t border-white/15" : ""}`}>
                    <C className="h-8 w-8 text-goldLight" />
                    <div>
                      <h2 className="font-serif text-xl">{String(title)}</h2>
                      <p className="mt-2 text-sm leading-6 text-white/68">{String(text)}</p>
                    </div>
                  </article>
                );
              })}
            </motion.aside>
          </div>
        </section>

        <section id="services" className="bg-ivory py-24">
          <div className="section-shell">
            <motion.div {...fadeUp} className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-gold">How I Can Help</p>
              <h2 className="mt-3 text-balance font-serif text-4xl leading-tight text-navy sm:text-5xl">
                Focused Legal Services
              </h2>
              <p className="mt-4 text-slate-600">Practical guidance built around your goals, risks, and timeline.</p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, text }) => (
                <motion.article
                  key={title}
                  {...fadeUp}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-premium"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-navy transition group-hover:bg-gold/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl text-navy">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <motion.div {...fadeUp} className="relative min-h-[500px] overflow-hidden rounded-3xl bg-navy shadow-premium">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_20%,rgba(217,164,65,.28),transparent_30%),linear-gradient(135deg,#061a2f,#0b2c4b)]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center text-white">
                  <div className="mx-auto grid h-36 w-36 place-items-center rounded-full border border-gold/70 bg-white/5 font-serif text-6xl">
                    EB
                  </div>
                  <p className="mt-6 font-serif text-2xl">Eric Bundy, Esq.</p>
                  <p className="mt-2 text-xs uppercase tracking-[.24em] text-goldLight">Attorney at Law</p>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-navy/80 p-5 text-white backdrop-blur">
                <p className="font-semibold">Professional headshot placeholder</p>
                <p className="mt-1 text-sm text-white/65">Replace this area with your approved attorney photograph.</p>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-gold">About Eric Bundy, Esq.</p>
              <h2 className="mt-3 text-balance font-serif text-4xl leading-tight text-navy sm:text-5xl">
                Experienced. Dedicated. On Your Side.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                I provide practical, attorney-level support to businesses and individuals. Every engagement begins with understanding your objectives, identifying risk, and building a clear path forward.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Clear and responsive communication",
                  "Careful legal research and drafting",
                  "Practical guidance focused on your goals",
                  "Nationwide remote service, subject to applicable rules"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <blockquote className="mt-9 rounded-2xl border-l-4 border-gold bg-ivory p-7 text-xl italic leading-8 text-navy">
                “My goal is simple: protect your interests, solve problems, and help you move forward with confidence.”
                <footer className="mt-4 font-sans text-sm font-bold not-italic">— Eric Bundy, Esq.</footer>
              </blockquote>
            </motion.div>
          </div>
        </section>

        <section id="reviews" className="review-glow py-24">
          <div className="section-shell">
            <motion.div {...fadeUp} className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-gold">Client Feedback</p>
              <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">Top Rated on Upwork</h2>
              <p className="mt-4 text-slate-600">Selected feedback from completed legal projects.</p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {reviews.map((review) => (
                <motion.article key={review.title} {...fadeUp} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-1 text-[#f4b400]">
                    {[0,1,2,3,4].map((n) => <Star key={n} className="h-4 w-4 fill-current" />)}
                    <span className="ml-1 text-xs text-slate-500">5.00</span>
                  </div>
                  <h3 className="mt-5 font-sans text-base font-bold text-[#218838]">{review.title}</h3>
                  <p className="mt-2 text-xs text-slate-500">Verified Upwork Client</p>
                  <blockquote className="mt-5 text-sm italic leading-6 text-slate-700">“{review.text}”</blockquote>
                </motion.article>
              ))}
            </div>

            <motion.div {...fadeUp} className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-premium">
              <div className="grid lg:grid-cols-[.75fr_1.25fr]">
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <div className="flex items-center gap-2 text-gold">
                    <BadgeCheck className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-[.18em]">Upwork Reputation</span>
                  </div>
                  <h3 className="mt-5 text-balance font-serif text-3xl leading-tight text-navy">
                    Real client feedback, displayed prominently.
                  </h3>
                  <p className="mt-5 leading-7 text-slate-600">
                    Your review screenshot is presented as a high-impact trust section rather than a small image buried near the footer.
                  </p>
                  <a href="#contact" className="mt-7 inline-flex items-center gap-2 font-bold text-navy">
                    Start a conversation <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="relative min-h-[420px] bg-slate-100 p-4 sm:p-8">
                  <Image
                    src="/upwork-reviews.png"
                    alt="Selected Upwork client reviews"
                    width={1388}
                    height={1088}
                    className="h-full w-full rounded-2xl object-contain"
                    priority={false}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-navy py-16 text-white">
          <div className="section-shell flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-goldLight">Let’s Work Together</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Ready to discuss your legal matter?</h2>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href="#contact" className="gold-gradient inline-flex min-h-12 items-center justify-center rounded-md px-6 text-xs font-bold uppercase tracking-wide text-navy">
                Schedule a Consultation
              </a>
              <WhatsAppButton />
            </div>
          </div>
        </section>

        <section id="contact" className="bg-ivory py-24">
          <div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <motion.div {...fadeUp}>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-gold">Contact</p>
              <h2 className="mt-3 text-balance font-serif text-4xl leading-tight text-navy sm:text-5xl">
                Tell Me How I Can Help
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Share a brief description of your matter. Please do not include confidential or sensitive information until an attorney-client relationship has been confirmed in writing.
              </p>
              <div className="mt-8 grid gap-3 text-sm">
                <a className="font-bold text-navy" href="mailto:eric@ericbundylaw.com">eric@ericbundylaw.com</a>
                <span>Philadelphia, Pennsylvania</span>
                <span>Licensed in Pennsylvania</span>
              </div>
            </motion.div>

            <motion.form
              {...fadeUp}
              action="mailto:eric@ericbundylaw.com"
              method="post"
              encType="text/plain"
              className="rounded-3xl bg-white p-6 shadow-premium sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold">
                  Full Name
                  <input className="rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" name="name" required />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Email Address
                  <input className="rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" type="email" name="email" required />
                </label>
              </div>

              <label className="mt-5 grid gap-2 text-sm font-bold">
                Legal Service
                <select className="rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" name="service" required>
                  <option value="">Select a service</option>
                  {services.map((service) => <option key={service.title}>{service.title}</option>)}
                </select>
              </label>

              <label className="mt-5 grid gap-2 text-sm font-bold">
                Brief Description
                <textarea className="min-h-40 rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" name="message" required />
              </label>

              <button className="gold-gradient mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md px-6 text-xs font-bold uppercase tracking-wide text-navy" type="submit">
                Send Consultation Request
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="bg-[#041426] py-14 text-white/70">
        <div className="section-shell grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 text-white">
              <span className="grid h-11 w-11 place-items-center border border-gold font-serif text-xl">EB</span>
              <div>
                <p className="font-serif text-lg">Eric Bundy, Esq.</p>
                <p className="text-[9px] uppercase tracking-[.22em] text-goldLight">Attorney at Law</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6">Practical legal solutions. Clear guidance. Responsive service.</p>
          </div>

          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-[.16em] text-white">Practice Areas</h3>
            <div className="mt-5 grid gap-2 text-sm">
              <a href="#services">Business & Corporate</a>
              <a href="#services">Litigation Support</a>
              <a href="#services">Contracts</a>
              <a href="#services">Privacy, AI & SaaS</a>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-[.16em] text-white">Quick Links</h3>
            <div className="mt-5 grid gap-2 text-sm">
              <a href="#about">About</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-[.16em] text-white">Contact</h3>
            <div className="mt-5 grid gap-2 text-sm">
              <a href="mailto:eric@ericbundylaw.com">eric@ericbundylaw.com</a>
              <span>Philadelphia, Pennsylvania</span>
              <span>Licensed in Pennsylvania</span>
            </div>
          </div>
        </div>

        <div className="section-shell mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs md:flex-row md:justify-between">
          <p>© 2026 Eric Bundy, Esq. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">
            Attorney advertising. Viewing this website or contacting the attorney does not create an attorney-client relationship.
          </p>
        </div>
      </footer>

      <WhatsAppButton floating />
    </>
  );
}
