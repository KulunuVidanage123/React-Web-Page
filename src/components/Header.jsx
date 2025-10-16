import React, { useState, useEffect } from "react";

function Header() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (elementId, tabName) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(tabName);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const sectionIds = [
      "slider-section",
      "iconbar-section",
      "homepage-section",
      "cards-section",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const id = visibleEntry.target.id;
          if (id === "slider-section") setActiveTab("home");
          else if (id === "iconbar-section") setActiveTab("about");
          else if (id === "homepage-section") setActiveTab("services");
          else if (id === "cards-section") setActiveTab("blog");
        }
      },
      {
        root: null,
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const getTabClasses = (tabName) => {
    const baseClasses =
      "text-sm sm:text-base font-medium relative cursor-pointer font-poppins transition-colors duration-200";
    const activeClasses =
      "text-[#1090CB] after:content-[''] after:absolute after:top-[-8px] after:left-3 after:-translate-x-5 after:w-2 after:h-2 after:bg-green-500 after:rounded-full";
    const inactiveClasses = "text-gray-700 hover:text-[#1090CB]";
    return `${baseClasses} ${
      activeTab === tabName ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <>
      
      <style>{`
        html, body {
          overflow-x: hidden !important;
          width: 100%;
        }
        * {
          box-sizing: border-box;
          max-width: 100vw;
        }
      `}</style>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

    
      <div className="overflow-x-hidden max-w-full">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-blue-100 w-screen max-w-full overflow-visible">
          <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-8 h-16 relative">
            {/* Left: Logo */}
            <div className="text-xl sm:text-2xl font-bold text-[#1090CB] font-poppins xl:ml-100 flex-shrink-0 align-left">
              LOGO
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-[#1090CB] z-[60]"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Navigation Menu */}
            <div
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } md:flex absolute md:relative top-16 md:top-0 left-0 right-0 md:right-auto bg-white md:bg-transparent flex-col md:flex-row items-center gap-4 md:gap-8 py-4 md:py-0 border-b md:border-none shadow-lg md:shadow-none transition-all duration-300 z-[55] w-full md:w-auto max-w-full overflow-visible`}
            >
              {/* Navigation Links */}
              <nav className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16 w-full md:w-auto items-center justify-center">
                <a
                  onClick={() => scrollToSection("slider-section", "home")}
                  href="#slider-section"
                  className={getTabClasses("home")}
                >
                  Home
                </a>
                <a
                  onClick={() => scrollToSection("iconbar-section", "about")}
                  href="#iconbar-section"
                  className={getTabClasses("about")}
                >
                  About us
                </a>
                <a
                  onClick={() => scrollToSection("homepage-section", "services")}
                  href="#homepage-section"
                  className={getTabClasses("services")}
                >
                  Services
                </a>
                <a
                  onClick={() => scrollToSection("cards-section", "blog")}
                  href="#cards-section"
                  className={getTabClasses("blog")}
                >
                  Blog
                </a>
              </nav>

              <a
                href="#"
                className="text-sm font-medium text-white bg-[#1090CB] px-6 sm:px-9 py-2.5 rounded-lg hover:bg-[#0e7db6] font-poppins transition-colors duration-200 w-[130px] sm:w-[150px] md:w-auto text-center md:ml-12 h-[41px] whitespace-nowrap"
              >
                Contact us
              </a>



            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
