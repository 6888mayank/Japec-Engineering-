import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MapPin, Building2 } from 'lucide-react';
import { JapecEmblem } from '../common/Logo';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-brand-silver/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-lightBg border border-brand-silver/50 text-brand-blue text-xs font-mono font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-brand-navy" />
              Company Overview &middot; Rabale MIDC
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-brand-navy leading-tight">
              Precision Engineering for Industrial Applications
            </h2>

            <p className="text-base sm:text-lg text-brand-graphite leading-relaxed">
              JAPEC ENGINEERING provides engineering and manufacturing solutions for industrial businesses requiring customized plastic, thermoset, rubber, and metal components. Our capabilities cover precision dies and tooling, molding processes, extrusion applications, sheet metal parts, and turned metal inserts.
            </p>

            <p className="text-sm sm:text-base text-brand-graphite/90 leading-relaxed">
              We work around customer requirements, product specifications, drawings, and material selection to support the development and manufacture of application-specific components.
            </p>

            {/* Five Key Highlights as bullet points */}
            <div className="space-y-3 pt-2">
              {[
                'Precision tooling and die development',
                'Multiple molding and manufacturing processes',
                'Broad engineering polymer expertise',
                'Customized component manufacturing',
                'Solutions for industrial OEMs and equipment manufacturers',
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full p-1 bg-brand-lightBg text-brand-blue flex-shrink-0 border border-brand-silver/50">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-brand-navy">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-navy text-white px-6 py-3 rounded font-semibold text-sm shadow transition-all group"
              >
                <span>Discover Our Capabilities</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-brand-graphite hover:text-brand-navy font-semibold text-sm px-4 py-3"
              >
                <span>Learn More About JAPEC &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Industrial Card with Official SVG Emblem */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative background block */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-blue to-brand-navy rounded-xl transform -rotate-1 opacity-20 filter blur-sm" />

              <div className="relative bg-brand-lightBg border border-brand-silver/60 rounded-xl overflow-hidden shadow-industrial">
                {/* Photo container with Official JAPEC SVG Emblem placed in center */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-brand-navyDark flex flex-col items-center justify-center p-6">
                  {/* Background industrial machine photograph */}
                  <img
                    src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
                    alt="Precision tooling and industrial component manufacturing"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark via-brand-navyDark/70 to-brand-navyDark/50 pointer-events-none" />
                  <div className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none" />

                  {/* Official JAPEC Logo SVG inside the photo card */}
                  <div className="relative z-10 flex flex-col items-center space-y-3">
                    <div className="p-2 sm:p-2.5 bg-white rounded shadow-industrial-lg border border-black/80 transform transition-transform hover:scale-105 duration-200">
                      <JapecEmblem width={220} height={66} />
                    </div>
                    <div className="text-center">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-silverLight bg-brand-navy/90 border border-brand-silver/30 px-3 py-1 rounded-full inline-block">
                        Official Brand Mark &middot; Rabale MIDC
                      </span>
                      <h3 className="text-base font-bold text-white mt-1.5 font-display tracking-wide">
                        JAPEC ENGINEERING
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-brand-silver/40">
                    <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <div>
                      <div className="text-xs uppercase font-mono text-brand-graphite/70">
                        Manufacturing Hub
                      </div>
                      <div className="text-sm font-bold text-brand-navy">
                        Rabale MIDC, Navi Mumbai, India
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-brand-graphite">
                    <div className="flex justify-between py-1 border-b border-brand-silver/20">
                      <span className="text-brand-graphite/70">Company</span>
                      <strong className="text-brand-navy">JAPEC ENGINEERING</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-brand-silver/20">
                      <span className="text-brand-graphite/70">Proprietor</span>
                      <strong className="text-brand-navy">Mrs. Chonyoso Shaiza</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-brand-silver/20">
                      <span className="text-brand-graphite/70">Core Specialization</span>
                      <strong className="text-brand-navy">Dies, Tooling &amp; Molding</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-brand-graphite/70">Official Enquiry</span>
                      <a
                        href="mailto:japec.engineering@yahoo.com"
                        className="font-mono text-brand-blue font-semibold hover:underline"
                      >
                        japec.engineering@yahoo.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
