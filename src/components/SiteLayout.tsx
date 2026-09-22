import { useEffect, useState } from "react";
import { ArrowUpRight, Facebook, Mail, Menu, Radio, X } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { contactEmail, facebookUrl } from "@/data/site";

const links = [
  { to: "/#uvod", hash: "#uvod", label: "Úvod" },
  { to: "/#sluzby", hash: "#sluzby", label: "Naše služby" },
  { to: "/#projekty", hash: "#projekty", label: "Projekty" },
  { to: "/kontakt", hash: "", label: "Kontakt" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const activeHash = location.pathname === "/" ? location.hash || "#uvod" : "";

  useEffect(() => setOpen(false), [location.pathname, location.hash]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#eadff2]/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:h-[88px] md:px-10 lg:px-14">
        <Link to="/#uvod" className="relative z-50 flex items-center" aria-label="Events CZ/SK – úvod">
          <img src="/assets/events-logo.png" alt="Events CZ/SK" className="brand-logo -my-4 h-16 w-auto translate-y-1 object-contain md:h-20" />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hlavní navigace">
          {links.map((link) => {
            const isActive = link.to === "/kontakt" ? location.pathname === "/kontakt" : activeHash === link.hash;
            return <Link key={link.to} to={link.to} className={`relative py-3 text-[13px] font-extrabold uppercase tracking-[0.14em] transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-gradient-to-r after:from-[#6d1ae4] after:to-[#c208eb] after:transition-transform ${isActive ? "text-[#791cdd] after:scale-x-100" : "text-[#4f4c58] after:scale-x-0 hover:text-[#791cdd] hover:after:scale-x-100"}`}>{link.label}</Link>;
          })}
          <Link to="/kontakt" className="brand-gradient inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(109,26,228,.22)] transition-all hover:-translate-y-0.5">Kontaktujte nás <ArrowUpRight className="h-4 w-4" /></Link>
        </nav>
        <button type="button" onClick={() => setOpen((value) => !value)} className="relative z-50 grid h-11 w-11 place-items-center rounded-full bg-[#f5ecfb] text-[#721bdc] lg:hidden" aria-label={open ? "Zavřít menu" : "Otevřít menu"} aria-expanded={open}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      <div className={`fixed inset-0 z-40 flex min-h-dvh flex-col bg-[#fcfaff] px-6 pb-8 pt-28 transition-all duration-300 lg:hidden ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"}`}>
        <div aria-hidden="true" className="brand-gradient absolute right-[-5rem] top-24 h-56 w-56 rounded-full opacity-10 blur-3xl" />
        <nav className="relative flex flex-col" aria-label="Mobilní navigace">
          {links.map((link, index) => {
            const isActive = link.to === "/kontakt" ? location.pathname === "/kontakt" : activeHash === link.hash;
            return <Link key={link.to} to={link.to} className={`flex items-center justify-between border-b border-[#eadff2] py-5 text-3xl font-black tracking-tight ${isActive ? "brand-text" : "text-[#292832]"}`}><span>{link.label}</span><span className="text-xs font-bold text-[#a49cab]">0{index + 1}</span></Link>;
          })}
        </nav>
        <a href={`mailto:${contactEmail}`} className="relative mt-auto inline-flex items-center gap-3 font-bold text-[#791cdd]"><Mail className="h-5 w-5" /> {contactEmail}</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#eee5f3] bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-20 lg:px-14">
        <div className="grid gap-12 border-b border-[#eee5f3] pb-14 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div><img src="/assets/events-header.png" alt="Events CZ/SK" className="brand-logo -my-8 h-28 w-auto translate-y-2 object-contain" /><p className="mt-5 max-w-sm text-lg leading-relaxed text-[#666371]">Eventy vyladěné do posledního detailu.</p><div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-[#8a24df]"><Radio className="h-4 w-4" /> Event · Festival · Produkce</div></div>
          <div><p className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#8a24df]">Navigace</p><div className="flex flex-col gap-3">{links.map((link) => <Link key={link.to} to={link.to} className="w-fit font-semibold text-[#4f4c58] transition-colors hover:text-[#b10ae9]">{link.label}</Link>)}</div></div>
          <div><p className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#8a24df]">Kontakt</p><a href={`mailto:${contactEmail}`} className="block text-lg font-bold text-[#292832] hover:text-[#a50ce8]">{contactEmail}</a><a href={facebookUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#666371] hover:text-[#8a24df]"><Facebook className="h-4 w-4" /> Facebook</a></div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-[#827d89] sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Events CZ/SK s.r.o. Všechna práva vyhrazena.</p><p>Produkce eventů · festivalů · veřejných akcí</p></div>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" }));
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname, location.hash, location.key]);
  return <div className="min-h-screen bg-white"><Header /><main className="pt-[76px] md:pt-[88px]"><Outlet /></main><Footer /></div>;
}
