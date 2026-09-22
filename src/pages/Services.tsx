import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import ContactBand from "@/components/ContactBand";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/site";

export default function Services() {
  return (
    <>
      <PageMeta title="Naše služby | Events CZ/SK" description="Akce na klíč, vybavení, catering, booking interpretů, security, bezkontaktní placení a úklid pro vaše eventy." />
      <section className="soft-festival-bg relative overflow-hidden py-16 md:py-20 lg:py-24"><div aria-hidden="true" className="brand-gradient absolute -right-20 top-10 h-64 w-64 rounded-full opacity-10 blur-3xl" /><div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14"><p className="mb-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#7b1cdb]"><Sparkles className="h-4 w-4" /> Naše služby</p><h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.92] tracking-[-0.055em] text-[#292832] sm:text-6xl lg:text-7xl">Od nápadu po <span className="brand-text">čistý areál.</span></h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#666371]">Kompletní realizace akcí i jednotlivé služby podle toho, co právě potřebujete zajistit.</p></div></section>

      <section className="bg-white py-16 md:py-20 lg:py-24"><div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14"><Reveal><SectionHeading eyebrow="Zařídíme pro vás" title="Vyladěný celek stojí na detailech" description="Každou část produkce dokážeme zajistit samostatně, nebo je spojit do kompletní akce na klíč." /></Reveal><div className="mt-10 flex flex-wrap justify-center gap-4">{services.map((service, index) => { const Icon = service.icon; const card = <article className="group relative h-[290px] overflow-hidden rounded-3xl border border-[#e9ddef] bg-white p-6 shadow-[0_10px_35px_rgba(68,28,91,.08)] transition-all hover:-translate-y-1.5 hover:border-[#c983e8]"><div className="flex items-start justify-between"><span className="brand-gradient grid h-14 w-14 place-items-center rounded-2xl p-3.5 text-white"><Icon className="h-6 w-6" /></span><span className="text-[11px] font-bold text-[#aaa2b1]">0{index + 1}</span></div><h2 className="mt-7 text-2xl font-black tracking-[-0.03em] text-[#302d36]">{service.title}</h2><p className="mt-3 line-clamp-4 text-sm leading-relaxed text-[#696571]">{service.description}</p><span className="absolute bottom-5 right-6 text-[#9916e4]">{service.link ? <ArrowUpRight className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}</span></article>; return <Reveal key={service.title} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]" delay={(index % 4) * 55}>{service.link ? <a href={service.link} target="_blank" rel="noreferrer" className="block h-full">{card}</a> : card}</Reveal>; })}</div></div></section>
      <ContactBand />
    </>
  );
}
