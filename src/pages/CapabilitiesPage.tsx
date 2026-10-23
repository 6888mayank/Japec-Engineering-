import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { QuoteCtaBanner } from '../components/common/QuoteCtaBanner';
import { CAPABILITIES } from '../data/capabilities';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2, Layers, FileText } from 'lucide-react';

export const CapabilitiesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Manufacturing Capabilities"
        title="Precision Tooling &amp; Component Manufacturing"
        subtitle="Explore our seven core industrial manufacturing capabilities across plastic injection molding, tooling development, extrusion, thermosets, elastomers, sheet metal, and turned metal inserts."
        breadcrumbs={[{ label: 'Capabilities' }]}
      />

      {/* Overview Intro */}
      <section className="py-12 bg-white border-b border-brand-silver/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-navy">
              Integrated Manufacturing Disciplines Under One Roof
            </h2>
            <p className="text-sm sm:text-base text-brand-graphite leading-relaxed">
              JAPEC ENGINEERING provides multi-process manufacturing solutions tailored to OEM drawings and specifications. Whether you require a single custom die, a full multi-cavity injection mold, or regular batch production of multi-material sub-assemblies, our facility in Rabale MIDC supports your engineering needs.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed List of all 7 Capabilities */}
      <section className="py-16 bg-brand-lightBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {CAPABILITIES.map((cap, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={cap.id}
                id={cap.slug}
                className="bg-white rounded-xl border border-brand-silver/50 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10 transition-all hover:shadow-industrial"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Imagery Side */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-lg overflow-hidden bg-brand-navy shadow-md">
                      <img
                        src={cap.image}
                        alt={cap.title}
                        className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 bg-brand-navy/90 text-white font-mono text-xs font-bold px-3 py-1 rounded border border-white/20">
                        CAPABILITY {cap.number}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-mono flex justify-between items-center bg-black/60 px-3 py-1.5 rounded">
                        <span>{cap.shortTitle}</span>
                        <span>Representative Imagery</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="space-y-2">
                      <span className="font-mono text-xs font-bold text-brand-blue tracking-wider uppercase">
                        Process Category {cap.number}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-navy">
                        {cap.title}
                      </h3>
                      <p className="text-sm font-semibold text-brand-blue leading-snug">
                        {cap.headline}
                      </p>
                    </div>

                    <p className="text-sm text-brand-graphite leading-relaxed">
                      {cap.description}
                    </p>

                    {/* Applications & Materials Preview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="bg-brand-lightBg p-3.5 rounded border border-brand-silver/40">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-brand-navy font-bold block mb-1.5">
                          Common Materials:
                        </span>
                        <ul className="text-xs text-brand-graphite space-y-1">
                          {cap.materials.slice(0, 4).map((m, mIdx) => (
                            <li key={mIdx} className="line-clamp-1">
                              &bull; {m}
                            </li>
                          ))}
                          {cap.materials.length > 4 && (
                            <li className="text-[11px] text-brand-blue font-semibold">
                              +{cap.materials.length - 4} more materials
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="bg-brand-lightBg p-3.5 rounded border border-brand-silver/40">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-brand-navy font-bold block mb-1.5">
                          Typical Applications:
                        </span>
                        <ul className="text-xs text-brand-graphite space-y-1">
                          {cap.applications.slice(0, 4).map((a, aIdx) => (
                            <li key={aIdx} className="line-clamp-1">
                              &bull; {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="pt-3 border-t border-brand-silver/30 flex flex-wrap items-center gap-4">
                      <Link
                        to={`/capabilities/${cap.slug}`}
                        className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-blue text-white px-5 py-2.5 rounded font-semibold text-xs sm:text-sm shadow transition-all group"
                      >
                        <span>View Technical Capability Page</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <Link
                        to={`/quote?process=${encodeURIComponent(cap.title)}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-accent hover:text-brand-accentHover"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Request a Quote for {cap.shortTitle}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quote Banner */}
      <QuoteCtaBanner
        title="Need Technical Feedback on an Engineering Drawing?"
        description="Submit your drawing files (PDF, STEP, IGES, DWG) and technical parameters. We will review the tooling layout and recommend manufacturing approaches."
      />
    </div>
  );
};
