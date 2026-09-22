import { useEffect, useState } from "react";
import { ArrowUpRight, Facebook, Mail, Menu, X } from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { contactEmail, facebookUrl } from "@/data/site";

const links = [
  { to: "/", label: "Úvod" },
  { to: "/sluzby", label: "Naše služby" },
  { to: "/projekty", label: "Projekty" },
  { to: "/kontakt", label: "Kontakt" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-lg">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:h-[88px] md:px-10 lg:px-14">
        <Link to="/" className="relative z-50 flex items-center" aria-label="Events CZ/SK – úvod">
          <img src="/assets/events-logo.png" alt="Events CZ/SK" className="h-11 w-auto object-contain md:h-13" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Hlavní navigace">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-[13px] font-bold uppercase tracking-[0.15em] transition-colors ${
                  isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Kontaktujte nás <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="relative z-50 grid h-11 w-11 place-items-center rounded-full bg-slate-100 text-slate-900 lg:hidden"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex min-h-dvh flex-col bg-white px-6 pb-8 pt-28 transition-all duration-300 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <nav className="flex flex-col" aria-label="Mobilní navigace">
          {links.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `flex items-center justify-between border-b border-slate-200 py-5 text-3xl font-black tracking-tight ${
                  isActive ? "text-blue-600" : "text-slate-900"
                }`
              }
            >
              <span>{link.label}</span>
              <span className="text-xs font-bold text-slate-400">0{index + 1}</span>
            </NavLink>
          ))}
        </nav>
        <a href={`mailto:${contactEmail}`} className="mt-auto inline-flex items-center gap-3 text-base font-bold text-blue-600">
          <Mail className="h-5 w-5" /> {contactEmail}
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-20 lg:px-14">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <img src="/assets/events-header.png" alt="Events CZ/SK" className="h-20 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-slate-300">Eventy vyladěné do posledního detailu.</p>
          </div>
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Navigace</p>
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link key={link.to} to={link.to} className="w-fit text-base font-semibold text-white/85 hover:text-blue-400">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Kontakt</p>
            <a href={`mailto:${contactEmail}`} className="block text-lg font-bold hover:text-blue-400">{contactEmail}</a>
            <a href={facebookUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white">
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Events CZ/SK s.r.o. Všechna práva vyhrazena.</p>
          <p>Produkce eventů · festivalů · veřejných akcí</p>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-[76px] md:pt-[88px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
