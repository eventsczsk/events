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
      <section className="soft-festival-bg relative overflow-hidden py-20 md:py-28 lg:py-36">
        <div aria-hidden="true" className="brand-gradient absolute -right-20 top-10 h-80 w-80 rounded-full opacity-10 blur-3xl" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <p className="mb-6 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.24em] text-[#7b1cdb]"><Sparkles className="h-4 w-4" /> Naše služby</p>
          <h1 className="max-w-6xl text-balance text-6xl font-black leading-[0.88] tracking-[-0.06em] text-[#292832] sm:text-7xl lg:text-[9rem]">Od nápadu po <span className="brand-text">čistý areál.</span></h1>
          <p className="mt-9 max-w-2xl text-lg leading-relaxed text-[#666371] md:text-xl">Kompletní realizace akcí i jednotlivé služby podle toho, co právě potřebujete zajistit.</p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40">
        <div aria-hidden="true" className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#f4d8ff] opacity-50 blur-3xl" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <Reveal><SectionHeading eyebrow="Zařídíme pro vás" title="Vyladěný celek stojí na detailech" description="Každou část produkce dokážeme zajistit samostatně, nebo je spojit do kompletní akce na klíč." /></Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const card = <article className={`group card-glow relative h-full min-h-[360px] overflow-hidden rounded-[2rem] border border-[#eee5f3] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#d8a7ed] ${index === 1 ? "lg:row-span-2 lg:min-h-full" : ""}`}><div aria-hidden="true" className="brand-gradient absolute -right-20 -top-20 h-52 w-52 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-[.10]" /><div className="relative flex items-center justify-between"><span className="brand-gradient grid h-16 w-16 place-items-center rounded-[1.25rem] text-white shadow-[0_12px_28px_rgba(109,26,228,.22)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"><Icon className="h-7 w-7" /></span><span className="text-xs font-bold text-[#aaa2b1]">0{index + 1}</span></div><h2 className="relative mt-11 text-3xl font-black tracking-[-0.035em] text-[#302d36]">{service.title}</h2><p className="relative mt-5 leading-relaxed text-[#696571]">{service.description}</p><span className="absolute bottom-8 right-8 grid h-10 w-10 place-items-center rounded-full bg-[#f5eafa] text-[#9916e4] transition-all group-hover:bg-[#8b18df] group-hover:text-white">{service.link ? <ArrowUpRight className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}</span></article>;
              return <Reveal key={service.title} delay={(index % 3) * 90}>{service.link ? <a href={service.link} target="_blank" rel="noreferrer" className="block h-full">{card}</a> : card}</Reveal>;
            })}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
