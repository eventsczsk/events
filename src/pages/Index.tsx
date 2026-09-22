import { ArrowRight, Check, Music2, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ContactBand from "@/components/ContactBand";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects, services } from "@/data/site";

const heroImage = "https://img.youtube.com/vi/ZD8akF_81oE/maxresdefault.jpg";

export default function Index() {
  return (
    <>
      <PageMeta title="Events CZ/SK – Vyladěné eventy" description="Produkce a organizace eventů, festivalů a veřejných akcí. Events CZ/SK zajistí váš event do posledního detailu." />

      <section className="soft-festival-bg relative min-h-[calc(100svh-76px)] overflow-hidden md:min-h-[calc(100svh-88px)]">
        <div aria-hidden="true" className="brand-gradient animate-float absolute -left-24 top-[18%] h-52 w-52 rounded-[38%] opacity-[.10] blur-2xl" />
        <div aria-hidden="true" className="absolute right-[42%] top-12 h-24 w-24 rounded-full border-[18px] border-[#c208eb]/10" />
        <div className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-[1440px] items-center gap-10 px-5 py-12 md:min-h-[calc(100svh-88px)] md:px-10 md:py-16 lg:grid-cols-[.88fr_1.12fr] lg:px-14">
          <div className="relative z-10 animate-rise lg:py-14">
            <p className="mb-6 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#7b1cdb]"><span className="brand-gradient h-2 w-2 rounded-full shadow-[0_0_18px_rgba(194,8,235,.55)]" /> Events CZ/SK s.r.o.</p>
            <h1 className="text-[clamp(3.35rem,7.3vw,8.2rem)] font-black leading-[0.83] tracking-[-0.07em] text-[#292832]">
              Eventy <span className="brand-text">vyladěné</span><br />do posledního<br />detailu.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#625f6b] md:text-xl">Produkce a organizace eventů, festivalů a veřejných akcí. Od prvního nápadu po poslední detail realizace.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/kontakt" className="brand-gradient group inline-flex items-center gap-4 rounded-full px-7 py-4 font-bold text-white shadow-[0_14px_30px_rgba(109,26,228,.24)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(194,8,235,.3)]">Kontaktujte nás <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
              <Link to="/projekty" className="inline-flex items-center gap-3 rounded-full border border-[#dacbe5] bg-white/80 px-6 py-4 font-bold text-[#5d5865] transition-all hover:-translate-y-1 hover:border-[#a64bdf] hover:text-[#7b1cdb]">Naše projekty</Link>
            </div>
          </div>

          <div className="relative min-h-[430px] sm:min-h-[560px] lg:min-h-[680px]">
            <div aria-hidden="true" className="brand-gradient absolute inset-x-[4%] bottom-[4%] top-[8%] rotate-3 rounded-[3rem] opacity-90" />
            <div className="absolute inset-x-0 bottom-[8%] top-0 -rotate-2 overflow-hidden rounded-[2.8rem] border-[8px] border-white bg-white shadow-[0_30px_80px_rgba(82,28,111,.20)] transition-transform duration-700 hover:rotate-0">
              <img src={heroImage} alt="Atmosféra festivalového eventu produkovaného Events CZ/SK" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" fetchPriority="high" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/85 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full bg-white/90 px-4 py-3 text-sm font-bold text-[#4e4956] shadow-lg backdrop-blur-md"><span className="brand-gradient grid h-8 w-8 place-items-center rounded-full text-white"><Music2 className="h-4 w-4" /></span> Energie, která spojuje</div>
            </div>
            <div className="absolute right-[-.5rem] top-[4%] rotate-6 rounded-2xl bg-white px-5 py-4 shadow-[0_16px_45px_rgba(86,26,117,.16)] md:right-[-1rem]"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#8d21df]">Live moments</p><p className="mt-1 text-lg font-black text-[#302d36]">Music · People · Energy</p></div>
            <div aria-hidden="true" className="brand-gradient absolute -bottom-2 left-[9%] h-20 w-20 rounded-full opacity-80 shadow-[0_12px_30px_rgba(194,8,235,.3)]" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40">
        <div aria-hidden="true" className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#f6d9ff] opacity-60 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 md:px-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-24 lg:px-14">
          <Reveal className="relative mx-auto w-full max-w-xl">
            <div className="overflow-hidden rounded-[2.5rem] shadow-[0_26px_70px_rgba(73,35,95,.16)]"><img src={heroImage} alt="Publikum a pódium během akce" className="aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-105" loading="lazy" /></div>
            <div className="card-glow absolute -bottom-8 -right-2 max-w-[250px] rounded-3xl border border-[#eadff2] bg-white p-6 sm:-right-10"><Sparkles className="h-6 w-6 text-[#b40ae9]" /><p className="mt-4 text-xl font-black leading-tight text-[#302d36]">Vše na jednom místě. Jeden sehraný tým.</p></div>
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-[#8a24df]">O Events CZ/SK</p>
            <h2 className="text-balance text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#292832] sm:text-5xl lg:text-7xl">Kompletní event od stavby pódia až po <span className="brand-text">catering.</span></h2>
            <p className="mt-8 text-lg leading-relaxed text-[#666371]">Vše zařídíme podle vašich představ – občerstvení, program, výzdobu, vybavení, zvuk, interprety, moderátory i úklid.</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">{["Produkce na klíč", "Technické vybavení", "Program a interpreti", "Bezpečný průběh"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#eee5f3] bg-[#fcfaff] px-4 py-3 font-semibold text-[#514d59]"><span className="brand-gradient grid h-7 w-7 place-items-center rounded-full text-white"><Check className="h-4 w-4" /></span>{item}</div>)}</div>
          </Reveal>
        </div>
      </section>

      <section className="soft-festival-bg relative overflow-hidden py-24 md:py-32 lg:py-40">
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <Reveal><div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><SectionHeading eyebrow="Nabízené služby" title="Zařídíme pro vás všechno, co dobrý event potřebuje" /><Link to="/sluzby" className="group inline-flex w-fit items-center gap-3 font-extrabold text-[#7b1cdb]">Všechny služby <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" /></Link></div></Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            {services.slice(0, 6).map((service, index) => {
              const Icon = service.icon;
              const spans = ["lg:col-span-5", "lg:col-span-7", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4", "lg:col-span-12"];
              return <Reveal key={service.title} className={spans[index]} delay={(index % 3) * 90}><article className="group card-glow relative h-full min-h-[310px] overflow-hidden rounded-[2rem] border border-white bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#d9b6ef] md:p-9"><div aria-hidden="true" className="brand-gradient absolute -right-16 -top-20 h-44 w-44 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[.10]" /><div className="flex items-start justify-between"><span className="brand-gradient grid h-14 w-14 place-items-center rounded-2xl text-white shadow-[0_10px_24px_rgba(109,26,228,.22)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"><Icon className="h-6 w-6" /></span><span className="text-xs font-bold text-[#aaa2b1]">0{index + 1}</span></div><h3 className="mt-10 text-2xl font-black tracking-[-0.025em] text-[#302d36] md:text-3xl">{service.title}</h3><p className="mt-4 max-w-2xl leading-relaxed text-[#6b6772]">{service.description}</p><ArrowRight className="absolute bottom-8 right-8 h-5 w-5 text-[#a50ce8] transition-transform group-hover:translate-x-1" /></article></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40">
        <div aria-hidden="true" className="absolute left-[-8rem] top-1/3 h-72 w-72 rounded-full bg-[#efd5ff] opacity-50 blur-3xl" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <Reveal><SectionHeading eyebrow="Naše akce" title="Projekty, které žijí s publikem" description="Festivaly a veřejné akce prezentované v portfoliu Events CZ/SK." /></Reveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            {projects.map((project, index) => {
              const layout = index === 0 ? "lg:col-span-7 lg:min-h-[520px]" : index === 1 ? "lg:col-span-5 lg:min-h-[520px]" : "lg:col-span-12 lg:min-h-[400px]";
              return <Reveal key={project.name} className={layout} delay={index * 90}><a href={project.href} target="_blank" rel="noreferrer" className="group card-glow relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[2.5rem] border border-[#eee5f3] bg-[#fcfaff] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#d59aec] md:p-10"><div aria-hidden="true" className="brand-gradient absolute -right-20 -top-24 h-64 w-64 rounded-full opacity-[.08] blur-2xl transition-transform duration-700 group-hover:scale-125" /><div className="relative flex items-center justify-between"><span className="rounded-full border border-[#dfc8ed] bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.17em] text-[#7c1cdb]">{project.label}</span><span className="brand-gradient grid h-12 w-12 place-items-center rounded-full text-white shadow-[0_10px_24px_rgba(109,26,228,.2)]"><ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" /></span></div><div className="relative my-auto flex min-h-48 items-center justify-center px-6 py-10"><span aria-hidden="true" className="absolute text-[10rem] font-black leading-none text-[#6d1ae4]/[.045] sm:text-[14rem]">0{index + 1}</span><img src={project.image} alt={`Logo projektu ${project.name}`} className={`relative max-h-44 w-auto object-contain transition-transform duration-700 group-hover:scale-105 ${project.imageClass}`} loading="lazy" /></div><div className="relative border-t border-[#e9dff0] pt-7"><span className="text-xs font-bold text-[#aaa2b1]">0{index + 1}</span><h3 className="mt-2 text-4xl font-black tracking-[-0.04em] text-[#302d36] md:text-5xl">{project.name}</h3></div></a></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8fd] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <Reveal><div className="relative overflow-hidden rounded-[2.8rem] bg-white p-3 shadow-[0_24px_70px_rgba(73,35,95,.14)] md:p-4"><div className="relative min-h-[60svh] overflow-hidden rounded-[2.2rem]"><img src={heroImage} alt="Pódium a návštěvníci během eventu" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105" loading="lazy" /><div className="absolute left-5 top-5 max-w-[280px] rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur-md md:left-8 md:top-8 md:max-w-sm md:p-7"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#8a24df]">Atmosféra našich akcí</p><p className="mt-3 text-2xl font-black leading-tight text-[#302d36] md:text-3xl">Světla, hudba, lidé. Moment, který zůstane.</p></div><a href="https://youtu.be/ZD8akF_81oE" target="_blank" rel="noreferrer" className="absolute inset-0 grid place-items-center" aria-label="Přehrát video z akce"><span className="brand-gradient grid h-24 w-24 place-items-center rounded-full text-white shadow-[0_18px_40px_rgba(109,26,228,.35)] transition-transform hover:scale-110 md:h-28 md:w-28"><Play className="ml-1 h-8 w-8 fill-current" /></span></a></div></div></Reveal>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
