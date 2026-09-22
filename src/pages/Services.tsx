import { ArrowUpRight } from "lucide-react";
import ContactBand from "@/components/ContactBand";
import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/site";

export default function Services() {
  return (
    <>
      <PageMeta title="Naše služby | Events CZ/SK" description="Akce na klíč, vybavení, catering, booking interpretů, security, bezkontaktní placení a úklid pro vaše eventy." />
      <section className="bg-blue-600 py-20 text-white md:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-blue-100">Naše služby</p>
          <h1 className="max-w-6xl text-balance text-6xl font-black leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-[9rem]">Od nápadu po čistý areál.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-blue-50 md:text-xl">Kompletní realizace akcí i jednotlivé služby podle toho, co právě potřebujete zajistit.</p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <SectionHeading eyebrow="Zařídíme pro vás" title="Vyladěný celek stojí na detailech" description="Každou část produkce dokážeme zajistit samostatně, nebo je spojit do kompletní akce na klíč." />
          <div className="mt-16 border-t border-slate-300">
            {services.map((service, index) => {
              const Icon = service.icon;
              const content = (
                <div className="group grid gap-6 border-b border-slate-300 py-9 transition-colors hover:bg-slate-50 md:grid-cols-[80px_1fr_1.5fr_48px] md:items-start md:px-6 lg:py-12">
                  <span className="text-xs font-bold text-blue-600">0{index + 1}</span>
                  <div className="flex items-center gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-100 text-blue-700"><Icon className="h-5 w-5" /></span><h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">{service.title}</h2></div>
                  <p className="max-w-2xl leading-relaxed text-slate-600 md:text-lg">{service.description}</p>
                  {service.link ? <ArrowUpRight className="h-6 w-6 text-blue-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> : <span />}
                </div>
              );
              return service.link ? <a key={service.title} href={service.link} target="_blank" rel="noreferrer">{content}</a> : <div key={service.title}>{content}</div>;
            })}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
