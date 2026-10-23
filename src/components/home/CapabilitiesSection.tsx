import React from 'react';
import { Link } from 'react-router-dom';
import { CAPABILITIES } from '../../data/capabilities';
import { ArrowRight, ChevronRight, Layers, FileText } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-16 md:py-24 bg-brand-lightBg border-b border-brand-silver/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-brand-silver/50 text-brand-blue text-xs font-mono font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-brand-navy" />
              Core Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-brand-navy">
              Manufacturing Capabilities
            </h2>
            <p className="text-base text-brand-graphite leading-relaxed">
              Seven integrated precision manufacturing disciplines tailored for industrial OEMs, component manufacturers, and equipment developers.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-navy transition-colors group"
            >
              <span>Explore All Capabilities In Depth</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 7-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CAPABILITIES.map((cap, index) => {
            const isFeatured = index === 0; // First card can span or have special prominence

            return (
              <div
                key={cap.id}
                className={`bg-white rounded-lg border border-brand-silver/50 overflow-hidden shadow-sm hover:shadow-industrial-lg transition-all duration-300 flex flex-col group ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 border-t-4 border-t-brand-blue' : 'hover:border-brand-blue/50'
                }`}
              >
                {/* Image Container with Representative Image Tag */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-brand-navy">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/80 via-transparent to-black/20" />

                  {/* Capability Number Tag */}
                  <div className="absolute top-3 left-3 bg-brand-navy/90 text-white font-mono text-xs font-bold px-2.5 py-1 rounded border border-white/20">
                    CAPABILITY {cap.number}
                  </div>

                  {/* Representative Tag */}
                  <div className="absolute bottom-2.5 right-3 text-[10px] text-white/80 font-mono tracking-tight bg-black/50 px-2 py-0.5 rounded">
                    Representative Process Imagery
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-display text-brand-navy group-hover:text-brand-blue transition-colors">
                      <Link to={`/capabilities/${cap.slug}`}>
                        {cap.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-graphite line-clamp-3 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  {/* Materials Preview Chips */}
                  <div className="space-y-1.5 pt-2 border-t border-brand-silver/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-graphite/60 block">
                      Common Materials:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.materials.slice(0, 3).map((mat, mIdx) => (
                        <span
                          key={mIdx}
                          className="text-[11px] bg-brand-lightBg text-brand-graphite font-medium px-2 py-0.5 rounded border border-brand-silver/30"
                        >
                          {mat.split('—')[0].trim()}
                        </span>
                      ))}
                      {cap.materials.length > 3 && (
                        <span className="text-[11px] text-brand-blue font-mono font-medium px-1.5 py-0.5">
                          +{cap.materials.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-brand-silver/30 flex items-center justify-between">
                    <Link
                      to={`/capabilities/${cap.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy group-hover:text-brand-blue transition-colors"
                    >
                      <span>Explore Technical Specs</span>
                      <ChevronRight className="w-3.5 h-3.5 text-brand-accent transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      to={`/quote?process=${encodeURIComponent(cap.title)}`}
                      className="text-[11px] text-brand-graphite/70 hover:text-brand-accent font-medium inline-flex items-center gap-1"
                      title={`Request Quote for ${cap.title}`}
                    >
                      <FileText className="w-3 h-3" />
                      <span>RFQ</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Capability Note */}
        <div className="mt-10 p-4 rounded-lg bg-white border border-brand-silver/40 text-xs text-brand-graphite/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <p>
            <strong className="text-brand-navy">Engineering Note:</strong> Material processing and tooling feasibility depend on component geometry, volume requirements, and agreed specifications. All capabilities are coordinated from Rabale MIDC, Navi Mumbai.
          </p>
          <Link
            to="/quote"
            className="text-xs font-bold text-brand-blue hover:underline whitespace-nowrap"
          >
            Discuss Custom Tooling &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};
