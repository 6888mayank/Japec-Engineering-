import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { CAPABILITIES } from '../../data/capabilities';
import { Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navyDark text-brand-silverLight border-t border-brand-graphite/40">
      {/* Upper Pre-Footer Callout */}
      <div className="border-b border-brand-graphite/50 bg-brand-navy/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider font-mono text-brand-blueLight font-semibold">
              B2B Precision Manufacturing &middot; Tooling &amp; Mold Development
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Have an Engineering Drawing or Component Requirement?
            </h3>
            <p className="text-sm text-brand-silver max-w-2xl">
              Discuss drawings, materials, quantities, and tooling feasibility directly with our technical team in Rabale MIDC, Navi Mumbai.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-6 py-3 rounded font-semibold text-sm shadow-md transition-all group"
            >
              <span>Submit RFQ &amp; Drawings</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="mailto:japec.engineering@yahoo.com"
              className="inline-flex items-center gap-2 border border-brand-silver/30 hover:border-white text-white px-5 py-3 rounded font-semibold text-sm transition-all"
            >
              <Mail className="w-4 h-4 text-brand-blueLight" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1 & 2: Company Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" showTagline={false} />
            <div className="pt-2">
              <p className="text-sm font-semibold text-brand-silver italic border-l-2 border-brand-blue pl-3 py-1">
                &ldquo;World-class Precision Engineering Company. Built on Precision Dies &amp; Tooling. Driven by Quality Molding Services.&rdquo;
              </p>
            </div>
            <p className="text-xs sm:text-sm text-brand-silver/90 leading-relaxed max-w-md pt-2">
              Precision engineering and manufacturing company specializing in precision dies, injection tooling, compression molding, continuous profile extrusion, elastomer seals, stamped sheet metal parts, and turned metal inserts.
            </p>
            <div className="pt-3 space-y-2">
              <div className="flex items-start gap-2.5 text-xs text-brand-silver">
                <MapPin className="w-4 h-4 text-brand-blueLight flex-shrink-0 mt-0.5" />
                <span>Rabale MIDC, Navi Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-brand-silver">
                <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <a
                  href="mailto:japec.engineering@yahoo.com"
                  className="font-mono text-white hover:text-brand-blueLight hover:underline"
                >
                  japec.engineering@yahoo.com
                </a>
              </div>
              <div className="text-[11px] text-brand-silver/70 pt-1 font-mono">
                Proprietor: Mrs. Chonyoso Shaiza
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono border-b border-brand-graphite pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-brand-silver hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-silver hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="text-brand-silver hover:text-white transition-colors">
                  Capabilities Overview
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-brand-silver hover:text-white transition-colors">
                  Products &amp; Applications
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-brand-silver hover:text-white transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-brand-silver hover:text-white transition-colors">
                  Quality &amp; Engineering
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-silver hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/quote"
                  className="text-brand-accent font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Request a Quote &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Manufacturing Capabilities */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono border-b border-brand-graphite pb-2">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {CAPABILITIES.map((cap) => (
                <li key={cap.id}>
                  <Link
                    to={`/capabilities/${cap.slug}`}
                    className="text-brand-silver hover:text-white transition-colors block line-clamp-1"
                  >
                    {cap.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Engineering Assurance */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono border-b border-brand-graphite pb-2">
              Manufacturing Notice
            </h4>
            <div className="bg-brand-graphite/40 border border-brand-graphite/60 rounded p-3 text-xs text-brand-silver/90 space-y-2">
              <div className="flex items-center gap-1.5 text-brand-blueLight font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>B2B OEM Specifications</span>
              </div>
              <p className="text-[11px] leading-relaxed text-brand-silver/80">
                All manufacturing, tooling, material selection, and tolerances are executed to agreed customer drawings, physical samples, and technical specifications.
              </p>
              <div className="pt-1 text-[10px] text-brand-silver/60">
                Non-disclosure &amp; drawing confidentiality respected for all custom tooling projects.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-brand-graphite/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-silver/70">
          <div>
            &copy; {currentYear} <strong className="text-white">JAPEC ENGINEERING</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-brand-graphite">&bull;</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-brand-graphite">&bull;</span>
            <span className="font-mono text-[11px]">Rabale MIDC &middot; Navi Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
