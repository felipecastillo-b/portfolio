import Navbar from "./Navbar";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef(null);

  const languages = {
    es: { label: "ES", flag: "🇪🇸" },
    en: { label: "EN", flag: "🇺🇸" },
    pt: { label: "PT", flag: "🇧🇷" },
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = languages[i18n.language] || languages.en;

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* Logo */}
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/logo.jpg"
              width={40}
              height={40}
              alt="Felipe Castillo logo"
            />
          </a>
        </h1>

        {/* Navbar */}
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4 md:justify-self-end">
          {/* Language Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
            >
              <span>{currentLang.flag}</span>
              <span className="text-sm font-medium">{currentLang.label}</span>
              <span className="material-symbols-rounded text-sm">
                expand_more
              </span>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-zinc-800 rounded-lg shadow-lg overflow-hidden animate-in fade-in zoom-in-95">
                {Object.entries(languages).map(([code, lang]) => (
                  <button
                    key={code}
                    onClick={() => changeLanguage(code)}
                    className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-zinc-700 transition"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact Button */}
          <a href="#contact" className="btn btn-secondary">
            {t("nav.contact")}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
