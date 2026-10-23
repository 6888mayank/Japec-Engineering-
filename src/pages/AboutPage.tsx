import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { QuoteCtaBanner } from '../components/common/QuoteCtaBanner';
import { JapecEmblem } from '../components/common/Logo';
import { Link } from 'react-router-dom';
import {
  Building2,
  MapPin,
  Mail,
  UserCheck,
  CheckCircle2,
  Compass,
  Layers,
  Wrench,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="About The Company"
        title="About JAPEC ENGINEERING"
        subtitle="World-class precision engineering company built on precision dies & tooling, driven by quality molding services."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Main Company Profile Section */}
      <section className="py-16 md:py-20 bg-white border-b border-brand-silver/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Story & Introduction */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-lightBg border border-brand-silver/50 text-brand-blue text-xs font-mono font-semibold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-brand-navy" />
                Precision Engineering &middot; Rabale MIDC
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-brand-navy">
                Dedicated to Precision Tooling &amp; Customized Component Manufacturing
              </h2>

              <p className="text-base sm:text-lg text-brand-graphite leading-relaxed">
                JAPEC ENGINEERING is a precision engineering and manufacturing company based in Rabale MIDC, Navi Mumbai. The company focuses on tooling development and customized industrial components across plastic, thermoset, rubber, and metal manufacturing processes. Its capabilities are intended to support industrial customers seeking application-specific engineering solutions and component manufacturing.
              </p>

              <p className="text-sm sm:text-base text-brand-graphite/90 leading-relaxed">
                We believe that robust, dependable manufacturing begins with sound engineering fundamentals: evaluating component geometry, choosing suitable materials, designing durable tooling blocks, and maintaining consistent machine processing.
              </p>

              <div className="pt-2 border-l-4 border-brand-blue pl-4 py-1 italic text-brand-navy font-medium text-sm sm:text-base">
                &ldquo;Our focus is working around customer requirements, product specifications, drawings, and material selection to support the development and manufacture of application-specific components.&rdquo;
              </div>

              <p className="text-xs sm:text-sm text-brand-graphite/80 leading-relaxed">
                By maintaining integrated capabilities covering precision dies, thermoplastic injection molding, continuous profiles, hydraulic thermoset compression, vulcanized elastomers, and turned metal inserts, JAPEC ENGINEERING provides industrial procurement teams with a unified partner for multi-material assemblies.
              </p>
            </div>

            {/* Confirmed Company Facts Box with Official SVG Emblem */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-brand-lightBg border border-brand-silver/60 rounded-xl p-6 shadow-industrial space-y-5">
                <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg border border-brand-silver/40 shadow-sm">
                  <JapecEmblem width={200} height={60} />
                </div>

                <div className="flex items-center gap-3 border-b border-brand-silver/40 pb-3">
                  <div className="p-2 rounded bg-brand-navy text-white">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-graphite/70">
                      Confirmed Business Details
                    </span>
                    <h3 className="text-base font-bold font-display text-brand-navy">
                      JAPEC ENGINEERING
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-3 py-1.5 border-b border-brand-silver/30">
                    <UserCheck className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-brand-graphite/70 block text-[11px] font-mono">
                        Proprietor
                      </span>
                      <strong className="text-brand-navy text-sm">
                        Mrs. Chonyoso Shaiza
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 py-1.5 border-b border-brand-silver/30">
                    <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-brand-graphite/70 block text-[11px] font-mono">
                        Manufacturing Hub
                      </span>
                      <strong className="text-brand-navy text-sm">
                        Rabale MIDC, Navi Mumbai, Maharashtra, India
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 py-1.5 border-b border-brand-silver/30">
                    <Mail className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-brand-graphite/70 block text-[11px] font-mono">
                        Official B2B Enquiry Email
                      </span>
                      <a
                        href="mailto:japec.engineering@yahoo.com"
                        className="font-mono text-brand-blue font-bold hover:underline"
                      >
                        japec.engineering@yahoo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 py-1.5">
                    <Compass className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-brand-graphite/70 block text-[11px] font-mono">
                        Business Classification
                      </span>
                      <span className="text-brand-navy font-medium">
                        B2B Precision Engineering, Tooling, and Industrial Component Manufacturing
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/quote"
                    className="w-full flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-blue text-white py-2.5 rounded font-semibold text-xs shadow transition-colors"
                  >
                    <span>Send Engineering Drawings &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Pillars & Manufacturing Disciplines */}
      <section className="py-16 md:py-20 bg-brand-lightBg border-b border-brand-silver/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-brand-navy">
              Core Engineering Focus Areas
            </h2>
            <p className="text-sm sm:text-base text-brand-graphite leading-relaxed">
              Our operational capabilities span tooling, molding, stamping, and turning to deliver reliable industrial components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-brand-silver/50 shadow-sm space-y-3">
              <div className="p-3 rounded bg-brand-lightBg text-brand-blue w-fit">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">
                Precision Tooling &amp; Mold Development
              </h3>
              <p className="text-xs sm:text-sm text-brand-graphite leading-relaxed">
                Development of application-specific injection mold cavities, compression molds, and extrusion die heads designed around part geometry and shrinkage behavior.
              </p>
              <Link
                to="/capabilities/mold-die-development"
                className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1 pt-1"
              >
                <span>Tooling Details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-brand-silver/50 shadow-sm space-y-3">
              <div className="p-3 rounded bg-brand-lightBg text-brand-blue w-fit">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">
                Polymer &amp; Thermoset Molding
              </h3>
              <p className="text-xs sm:text-sm text-brand-graphite leading-relaxed">
                Processing engineering polymers (Nylon GF, Polycarbonate, POM, ABS) and thermoset compounds (DMC, SMC, Bakelite) for high-integrity structural and electrical parts.
              </p>
              <Link
                to="/capabilities/plastic-injection-molding"
                className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1 pt-1"
              >
                <span>Molding Details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-brand-silver/50 shadow-sm space-y-3">
              <div className="p-3 rounded bg-brand-lightBg text-brand-blue w-fit">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">
                Rubber, Metal Stamping &amp; Turned Inserts
              </h3>
              <p className="text-xs sm:text-sm text-brand-graphite leading-relaxed">
                Vulcanized elastomer gaskets, stamped sheet metal brackets, and precision turned brass inserts that deliver durable threaded fastening within molded plastics.
              </p>
              <Link
                to="/capabilities/precision-turned-components"
                className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1 pt-1"
              >
                <span>Metal &amp; Rubber Details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <QuoteCtaBanner
        title="Collaborate With JAPEC ENGINEERING on Your Next Component"
        description="Share your 2D/3D component drawings, batch requirements, or sample parts. Our engineering team in Rabale MIDC will review feasibility and coordinate with you."
      />
    </div>
  );
};
