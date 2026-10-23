import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { CAPABILITIES } from '../../data/capabilities';
import {
  ChevronDown,
  Menu,
  X,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [capabilitiesDropdownOpen, setCapabilitiesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Scroll detection for sticky styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCapabilitiesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCapabilitiesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold tracking-wide transition-colors py-1.5 px-1 relative ${
      isActive
        ? 'text-brand-blue after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-blue'
        : 'text-brand-graphite hover:text-brand-navy'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Industrial Announcement / Contact Bar */}
      <div className="bg-brand-navyDark text-brand-silverLight text-[11px] font-medium py-1.5 px-4 sm:px-6 lg:px-8 border-b border-brand-graphite/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="hidden md:inline-flex items-center gap-1.5 text-brand-silver">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              World-class Precision Engineering &middot; Built on Precision Dies &amp; Tooling
            </span>
            <span className="inline-flex items-center gap-1.5 text-brand-silverLight">
              <MapPin className="w-3.5 h-3.5 text-brand-blueLight flex-shrink-0" />
              Rabale MIDC, Navi Mumbai, Maharashtra, India
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:japec.engineering@yahoo.com"
              className="inline-flex items-center gap-1.5 text-brand-silverLight hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
              <span className="font-mono text-xs">japec.engineering@yahoo.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${
          isScrolled
            ? 'shadow-industrial border-brand-silver/40 py-2.5'
            : 'border-brand-silver/30 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            <NavLink to="/" end className={navLinkClasses}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClasses}>
              About Us
            </NavLink>

            {/* Capabilities Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setCapabilitiesDropdownOpen(true)}
              onMouseLeave={() => setCapabilitiesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCapabilitiesDropdownOpen(!capabilitiesDropdownOpen)}
                className={`text-sm font-semibold tracking-wide transition-colors py-1.5 px-1 flex items-center gap-1 ${
                  location.pathname.startsWith('/capabilities')
                    ? 'text-brand-blue after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-blue'
                    : 'text-brand-graphite hover:text-brand-navy'
                }`}
                aria-expanded={capabilitiesDropdownOpen}
              >
                <span>Capabilities</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    capabilitiesDropdownOpen ? 'rotate-180 text-brand-blue' : 'text-brand-graphite/70'
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {capabilitiesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 bg-white rounded-lg shadow-industrial-lg border border-brand-silver/40 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-4 py-2 border-b border-brand-silver/20 bg-brand-lightBg/60 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-graphite">
                      Manufacturing Capabilities
                    </span>
                    <Link
                      to="/capabilities"
                      className="text-[11px] font-semibold text-brand-blue hover:underline"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="py-1">
                    {CAPABILITIES.map((cap) => (
                      <Link
                        key={cap.id}
                        to={`/capabilities/${cap.slug}`}
                        className="flex items-start gap-2.5 px-4 py-2 text-xs hover:bg-brand-lightBg transition-colors group"
                      >
                        <span className="font-mono text-[10px] text-brand-blue font-bold mt-0.5 group-hover:text-brand-accent">
                          {cap.number}
                        </span>
                        <div>
                          <div className="font-semibold text-brand-navy group-hover:text-brand-blue">
                            {cap.title}
                          </div>
                          <p className="text-[11px] text-brand-graphite/70 line-clamp-1">
                            {cap.headline}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/products" className={navLinkClasses}>
              Products &amp; Applications
            </NavLink>

            <NavLink to="/industries" className={navLinkClasses}>
              Industries Served
            </NavLink>

            <NavLink to="/quality" className={navLinkClasses}>
              Quality &amp; Engineering
            </NavLink>

            <NavLink to="/contact" className={navLinkClasses}>
              Contact Us
            </NavLink>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-blue text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded shadow-sm hover:shadow-md transition-all group border border-brand-navy hover:border-brand-blue"
              id="nav-quote-cta"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-brand-accent" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded text-brand-navy hover:bg-brand-lightBg focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-silver/30 bg-white px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-lightBg rounded"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-lightBg rounded"
              >
                About Us
              </Link>

              {/* Mobile Capabilities Accordion */}
              <div className="py-1">
                <Link
                  to="/capabilities"
                  className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-brand-blue hover:bg-brand-lightBg rounded"
                >
                  <span>Manufacturing Capabilities</span>
                  <span className="text-xs font-mono text-brand-graphite">View Overview &rarr;</span>
                </Link>
                <div className="pl-4 border-l-2 border-brand-silver/40 ml-4 space-y-1 my-1">
                  {CAPABILITIES.map((cap) => (
                    <Link
                      key={cap.id}
                      to={`/capabilities/${cap.slug}`}
                      className="block px-3 py-1.5 text-xs text-brand-graphite hover:text-brand-blue font-medium"
                    >
                      <span className="font-mono text-brand-blue mr-1.5">{cap.number}</span>
                      {cap.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/products"
                className="block px-3 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-lightBg rounded"
              >
                Products &amp; Applications
              </Link>
              <Link
                to="/industries"
                className="block px-3 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-lightBg rounded"
              >
                Industries Served
              </Link>
              <Link
                to="/quality"
                className="block px-3 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-lightBg rounded"
              >
                Quality &amp; Engineering
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-lightBg rounded"
              >
                Contact Us
              </Link>

              <div className="pt-4 border-t border-brand-silver/30 mt-4 space-y-3">
                <Link
                  to="/quote"
                  className="w-full flex items-center justify-center gap-2 bg-brand-navy text-white text-sm font-semibold py-2.5 rounded shadow"
                >
                  <Sparkles className="w-4 h-4 text-brand-accent" />
                  <span>Request a Quotation</span>
                </Link>
                <div className="text-center pt-2">
                  <a
                    href="mailto:japec.engineering@yahoo.com"
                    className="text-xs font-mono text-brand-blue hover:underline"
                  >
                    japec.engineering@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
