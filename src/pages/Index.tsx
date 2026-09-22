import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ContactBand from "@/components/ContactBand";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { eventPhotos, projects, services } from "@/data/site";

export default function Index() {
  return (
    <>
      <PageMeta title="Events CZ/SK – Vyladěné eventy" description="Produkce a organizace eventů, festivalů a veřejných akcí. Events CZ/SK zajistí váš event do posledního detailu." />

      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#f8f3fb] lg:h-[calc(100svh-88px)] lg:max-h-[820px] lg:min-h-[650px]">
        <img src={eventPhotos[0]} alt="Atmosféra akce produkované Events CZ/SK" className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/5 lg:via-white/65 lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/70 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 py-14 md:px-10 lg:px-14">
          <div className="max-w-[680px] animate-rise">
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#781adb]"><span className="brand-gradient h-2.5 w-2.5 rounded-full" /> Eventová & festivalová produkce</p>
            <h1 className="text-[clamp(3.1rem,6vw,6.5rem)] font-black leading-[0.87] tracking-[-0.065em] text-[#292832]">Eventy <span className="brand-text">vyladěné</span><br />do posledního<br />detailu.</h1>
            <p className="mt-6 max-w-lg text-base font-medium leading-relaxed text-[#514e58] md:text-lg">Produkce a organizace eventů, festivalů a veřejných akcí. Od prvního nápadu po poslední detail realizace.</p>
            <div className="mt-7 flex flex-wrap gap-3"><Link to="/kontakt" className="brand-gradient group inline-flex items-center gap-3 rounded-full px-6 py-3.5 font-bold text-white shadow-[0_12px_28px_rgba(109,26,228,.28)] transition-all hover:-translate-y-1">Kontaktujte nás <ArrowRight className="h-5 w-5 group-hover:translate-x-1" /></Link><Link to="/projekty" className="rounded-full border border-white bg-white/90 px-6 py-3.5 font-bold text-[#423e48] shadow-[0_8px_24px_rgba(64,39,78,.12)] backdrop-blur-md hover:text-[#8219df]">Naše akce</Link></div>
          </div>
        </div>
      </section>

      <section className="bg-[#faf7fc] py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="mb-8 flex items-end justify-between gap-6"><div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#8219df]">Nabízené služby</p><h2 className="mt-2 text-3xl font-black tracking-[-.04em] text-[#302d36] md:text-4xl">Zařídíme pro vás</h2></div><Link to="/sluzby" className="hidden items-center gap-2 font-bold text-[#8319df] sm:flex">Detail služeb <ArrowRight className="h-5 w-5" /></Link></div>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return <Reveal key={service.title} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]" delay={(index % 4) * 55}><article className="group relative h-[250px] overflow-hidden rounded-3xl border border-[#e9ddef] bg-white p-6 shadow-[0_10px_35px_rgba(68,28,91,.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c983e8] hover:shadow-[0_18px_42px_rgba(98,25,132,.13)]"><div className="flex items-start justify-between"><span className="brand-gradient grid h-12 w-12 place-items-center rounded-2xl text-white shadow-[0_8px_20px_rgba(109,26,228,.22)] transition-transform group-hover:-rotate-6"><Icon className="h-5 w-5" /></span><span className="text-[11px] font-extrabold text-[#b0a7b5]">0{index + 1}</span></div><h3 className="mt-6 pr-6 text-xl font-black leading-tight tracking-[-.025em] text-[#302d36]">{service.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#6d6873]">{service.description}</p><ArrowRight className="absolute bottom-5 right-6 h-5 w-5 text-[#a50ce8] transition-transform group-hover:translate-x-1" /></article></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-14">
          <Reveal className="relative min-h-[420px]">
            <div className="absolute left-0 top-0 h-[78%] w-[72%] overflow-hidden rounded-[2rem] shadow-[0_20px_55px_rgba(73,35,95,.15)]"><img src={eventPhotos[1]} alt="Atmosféra eventu – publikum a program" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" /></div>
            <div className="absolute bottom-0 right-0 h-[58%] w-[56%] overflow-hidden rounded-[1.7rem] border-[6px] border-white shadow-[0_18px_44px_rgba(73,35,95,.17)]"><img src={eventPhotos[2]} alt="Moment z produkované veřejné akce" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" /></div>
          </Reveal>
          <Reveal delay={80}><p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-[#841add]">O Events CZ/SK</p><h2 className="text-balance text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#302d36] md:text-5xl lg:text-6xl">Od stavby pódia až po <span className="brand-text">poslední světlo.</span></h2><p className="mt-6 text-lg leading-relaxed text-[#66616c]">Vše zařídíme podle vašich představ – občerstvení, program, výzdobu, vybavení, zvuk, interprety, moderátory i úklid.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{["Produkce na klíč", "Technické vybavení", "Program a interpreti", "Bezpečný průběh"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-[#eadff0] bg-[#fcf9fe] px-4 py-3 text-sm font-semibold text-[#514d58]"><span className="brand-gradient grid h-6 w-6 place-items-center rounded-full text-white"><Check className="h-3.5 w-3.5" /></span>{item}</div>)}</div></Reveal>
        </div>
      </section>

      <section className="soft-festival-bg py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <Reveal><SectionHeading eyebrow="Naše akce" title="Projekty, které žijí s publikem" description="Festivaly a veřejné akce prezentované v portfoliu Events CZ/SK." /></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => <Reveal key={project.name} delay={index * 70}><a href={project.href} target="_blank" rel="noreferrer" className="group flex h-[330px] flex-col rounded-3xl border border-[#e8dbee] bg-white p-6 shadow-[0_12px_38px_rgba(72,28,94,.08)] transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_46px_rgba(95,24,128,.13)]"><div className="flex items-center justify-between"><span className="text-[10px] font-extrabold uppercase tracking-[.17em] text-[#841add]">{project.label}</span><ArrowUpRight className="h-5 w-5 text-[#9a14e5]" /></div><div className="my-auto flex h-40 items-center justify-center px-5"><img src={project.image} alt={`Logo projektu ${project.name}`} className={`max-h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-105 ${project.imageClass}`} loading="lazy" /></div><div className="border-t border-[#eadff0] pt-4"><span className="text-[10px] font-bold text-[#aaa2b1]">0{index + 1}</span><h3 className="mt-1 text-2xl font-black tracking-[-.035em] text-[#302d36]">{project.name}</h3></div></a></Reveal>)}
          </div>
          <div className="mt-8 text-right"><Link to="/projekty" className="inline-flex items-center gap-2 font-bold text-[#8319df]">Prohlédnout projekty <ArrowRight className="h-5 w-5" /></Link></div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <Reveal><div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="Atmosféra" title="Světla. Hudba. Lidé." /><p className="max-w-sm text-base leading-relaxed text-[#69646f]">Skutečné momenty ze skutečných akcí Events CZ/SK.</p></div></Reveal>
          <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[190px] md:grid-cols-4 lg:auto-rows-[220px]">
            {eventPhotos.slice(3, 11).map((photo, index) => { const shape = index === 0 || index === 5 ? "col-span-2 row-span-2" : index === 3 ? "row-span-2" : ""; return <Reveal key={photo} className={shape} delay={(index % 4) * 45}><figure className="group h-full overflow-hidden rounded-2xl bg-[#f3edf6]"><img src={photo} alt={`Atmosféra akce Events CZ/SK ${index + 1}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" /></figure></Reveal>; })}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
