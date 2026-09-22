import { ArrowUpRight, Facebook, Handshake, Mail } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import { contactEmail, facebookUrl } from "@/data/site";

export default function Contact() {
  return (
    <section className="soft-festival-bg relative min-h-[calc(100svh-76px)] overflow-hidden md:min-h-[calc(100svh-88px)]">
      <PageMeta title="Kontakt | Events CZ/SK" description="Kontaktujte Events CZ/SK ohledně produkce a organizace vaší akce." />
      <div aria-hidden="true" className="brand-gradient absolute -right-24 top-6 h-96 w-96 rounded-full opacity-10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#f1b5ff] opacity-25 blur-3xl" />
      <div className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-[1440px] gap-12 px-5 py-14 md:min-h-[calc(100svh-88px)] md:px-10 md:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-14">
        <Reveal>
          <p className="mb-5 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#7b1cdb]"><Handshake className="h-4 w-4" /> Kontakt</p>
          <h1 className="max-w-3xl text-balance text-5xl font-black leading-[0.92] tracking-[-0.055em] text-[#292832] sm:text-6xl lg:text-7xl">Pojďme vytvořit váš <span className="brand-text">event.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#666371]">Napište nám. Rádi s vámi probereme možnosti realizace vaší akce.</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-glow relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-7 md:p-11">
            <div aria-hidden="true" className="brand-gradient absolute -right-20 -top-24 h-64 w-64 rounded-full opacity-[.09] blur-2xl" />
            <p className="relative text-xs font-extrabold uppercase tracking-[0.2em] text-[#841bdd]">Kontaktujte nás</p>
            <h2 className="relative mt-5 text-3xl font-black tracking-tight text-[#302d36]">Events CZ/SK s.r.o.</h2>
            <a href={`mailto:${contactEmail}`} className="group relative mt-10 flex items-center justify-between gap-4 rounded-2xl border border-[#e8daef] bg-[#fcfaff] p-5 transition-all hover:-translate-y-1 hover:border-[#cc8be8] hover:shadow-[0_12px_30px_rgba(94,33,124,.10)]"><span className="flex min-w-0 items-center gap-4"><span className="brand-gradient grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white"><Mail className="h-5 w-5" /></span><span className="truncate text-base font-bold text-[#3a3740] sm:text-lg">{contactEmail}</span></span><ArrowUpRight className="h-5 w-5 shrink-0 text-[#9916e4] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
            <a href={facebookUrl} target="_blank" rel="noreferrer" className="relative mt-5 flex items-center justify-between rounded-2xl border border-[#e8daef] bg-white p-5 font-bold text-[#514d59] transition-all hover:-translate-y-1 hover:border-[#cc8be8] hover:text-[#841bdd]"><span className="flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f2e8f9] text-[#8b18df]"><Facebook className="h-5 w-5" /></span>Events CZ/SK na Facebooku</span><ArrowUpRight className="h-5 w-5" /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
