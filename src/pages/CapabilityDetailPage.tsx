import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CAPABILITIES } from '../data/capabilities';
import { PageHeader } from '../components/common/PageHeader';
import { QuoteCtaBanner } from '../components/common/QuoteCtaBanner';
import {
  CheckCircle2,
  Layers,
  ArrowRight,
  FileText,
  AlertTriangle,
  Cog,
  Compass,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

export const CapabilityDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const capability = CAPABILITIES.find((c) => c.slug === slug);

  if (!capability) {
    return <Navigate to="/capabilities" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge={`Manufacturing Capability ${capability.number}`}
        title={capability.title}
        subtitle={capability.headline}
        breadcrumbs={[
          { label: 'Capabilities', href: '/capabilities' },
          { label: capability.shortTitle },
        ]}
      />

      {/* Main Process Overview Section */}
      <section className="py-16 bg-white border-b border-brand-silver/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-lightBg border border-brand-silver/50 text-brand-blue text-xs font-mono font-semibold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-brand-navy" />
                Process Overview &middot; Specification-Driven
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-navy">
                Engineering Approach &amp; Capabilities
              </h2>

              <p className="text-base sm:text-lg text-brand-graphite leading-relaxed">
                {capability.description}
              </p>

              <p className="text-sm sm:text-base text-brand-graphite/90 leading-relaxed">
                {capability.processOverview}
              </p>

              {/* Key Highlights Grid */}
              <div className="bg-brand-lightBg/70 p-6 rounded-lg border border-brand-silver/50 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy font-mono">
                  Core Highlights
                </h3>
                <ul className="space-y-2.5">
                  {capability.keyHighlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-graphite">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material Caveat */}
              {capability.materialCaveat && (
                <div className="p-4 rounded-lg bg-amber-50/60 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="font-semibold text-brand-navy">Process Suitability Note:</strong>
                    <p className="leading-relaxed">{capability.materialCaveat}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side: Industrial Imagery & RFQ Widget */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Image */}
              <div className="relative rounded-lg overflow-hidden bg-brand-navy shadow-industrial">
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-mono flex justify-between items-center bg-black/60 px-3 py-1.5 rounded">
                  <span>{capability.shortTitle} Setup</span>
                  <span>Representative Process</span>
                </div>
              </div>

              {/* Quick RFQ Box */}
              <div className="bg-brand-navy text-white p-6 rounded-lg border border-brand-graphite shadow-industrial space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-accent font-bold">
                    Direct RFQ Channel
                  </span>
                  <h3 className="text-lg font-bold">
                    Need a Quote for {capability.shortTitle}?
                  </h3>
                  <p className="text-xs text-brand-silver">
                    Submit your drawing files and annual requirement. We will review feasibility and coordinate directly with you.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to={`/quote?process=${encodeURIComponent(capability.title)}`}
                    className="w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white py-2.5 rounded font-semibold text-xs transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request a Quote for this Capability</span>
                  </Link>
                </div>
              </div>

              {/* Secondary Detail Image */}
              <div className="relative rounded-lg overflow-hidden bg-brand-navy shadow-sm border border-brand-silver/40">
                <img
                  src={capability.secondaryImage}
                  alt={`${capability.title} detailed tooling`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=80';
                  }}
                />
                <div className="absolute bottom-2 left-2 text-[10px] text-white/90 bg-black/60 px-2 py-0.5 rounded font-mono">
                  Component Detail (Representative)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Applications Detailed Grid */}
      <section className="py-16 bg-brand-lightBg border-b border-brand-silver/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Materials Column */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-brand-silver/50 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-brand-silver/30">
                <div className="p-2.5 rounded bg-brand-lightBg text-brand-blue">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy">
                    Supported Materials
                  </h3>
                  <p className="text-xs text-brand-graphite/70">
                    Subject to tooling and actual processing capability
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {capability.materials.map((mat, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-2 rounded bg-brand-lightBg/70 border border-brand-silver/30 text-brand-navy font-medium flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    <span className="line-clamp-1">{mat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications Column */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-brand-silver/50 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-brand-silver/30">
                <div className="p-2.5 rounded bg-brand-lightBg text-brand-blue">
                  <Cog className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy">
                    Typical Component Applications
                  </h3>
                  <p className="text-xs text-brand-graphite/70">
                    Engineered to customer drawings and operational parameters
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {capability.applications.map((app, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-2 rounded bg-brand-lightBg/70 border border-brand-silver/30 text-brand-navy font-medium flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    <span className="line-clamp-1">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Process Steps */}
      <section className="py-16 bg-white border-b border-brand-silver/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
              Technical Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-navy">
              Manufacturing Process Steps for {capability.shortTitle}
            </h2>
            <p className="text-xs sm:text-sm text-brand-graphite">
              From technical drawing evaluation through parameter tuning and final dimensional check.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {capability.processSteps.map((step, sIdx) => (
              <div
                key={sIdx}
                className="bg-brand-lightBg/60 p-4 rounded-lg border border-brand-silver/40 flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-brand-blue block mb-1">
                    STEP 0{sIdx + 1}
                  </span>
                  <h4 className="font-bold text-sm text-brand-navy mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-brand-graphite leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Considerations */}
          <div className="bg-brand-navy text-white p-6 sm:p-8 rounded-xl border border-brand-graphite space-y-4">
            <h3 className="text-base sm:text-lg font-bold font-display text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-accent" />
              <span>Key Technical &amp; Tooling Considerations</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-brand-silver">
              {capability.technicalConsiderations.map((item, tIdx) => (
                <div key={tIdx} className="flex items-start gap-2">
                  <span className="text-brand-accent font-bold mt-0.5">&bull;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Capabilities */}
      <section className="py-12 bg-brand-lightBg border-b border-brand-silver/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold font-display text-brand-navy">
              Related Manufacturing Capabilities
            </h3>
            <Link
              to="/capabilities"
              className="text-xs font-semibold text-brand-blue hover:underline"
            >
              View All 7 Capabilities &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {capability.relatedCapabilities.map((rel, rIdx) => (
              <Link
                key={rIdx}
                to={`/capabilities/${rel.slug}`}
                className="bg-white p-4 rounded-lg border border-brand-silver/50 hover:border-brand-blue hover:shadow-sm transition-all flex items-center justify-between group"
              >
                <span className="text-xs sm:text-sm font-semibold text-brand-navy group-hover:text-brand-blue">
                  {rel.title}
                </span>
                <ChevronRight className="w-4 h-4 text-brand-silver group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <QuoteCtaBanner
        title={`Request a Quote for ${capability.title}`}
        description={`Send your CAD models, technical drawings, or target specifications for ${capability.shortTitle}. Our engineering team in Rabale MIDC will coordinate review and quotation.`}
        defaultProcess={capability.title}
      />
    </div>
  );
};
