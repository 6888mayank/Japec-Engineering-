import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES } from '../../data/industries';
import {
  Factory,
  Zap,
  Cpu,
  Cog,
  Layers,
  Radio,
  Wrench,
  ShieldAlert,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-brand-accent" />,
  Zap: <Zap className="w-5 h-5 text-brand-blue" />,
  Cpu: <Cpu className="w-5 h-5 text-brand-blue" />,
  Cog: <Cog className="w-5 h-5 text-brand-blue" />,
  Layers: <Layers className="w-5 h-5 text-brand-blue" />,
  Radio: <Radio className="w-5 h-5 text-brand-blue" />,
  Wrench: <Wrench className="w-5 h-5 text-brand-blue" />,
  Factory: <Factory className="w-5 h-5 text-brand-blue" />,
};

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="py-16 md:py-24 bg-brand-lightBg border-b border-brand-silver/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-brand-silver/50 text-brand-blue text-xs font-mono font-semibold uppercase tracking-wider">
            <Factory className="w-3.5 h-3.5 text-brand-navy" />
            Industrial Applications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-brand-navy">
            Engineering Solutions Across Industrial Sectors
          </h2>
          <p className="text-sm sm:text-base text-brand-graphite leading-relaxed">
            Supporting industrial OEMs, flameproof equipment manufacturers, and equipment builders with precision tooling, custom moldings, and metal inserts engineered to drawing specifications.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className={`bg-white rounded-lg border border-brand-silver/50 p-6 flex flex-col justify-between hover:shadow-industrial-lg hover:border-brand-blue transition-all duration-200 group ${
                ind.id === 'flameproof-equipment' ? 'border-t-4 border-t-brand-accent' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded bg-brand-lightBg group-hover:bg-brand-blue/10 transition-colors">
                    {iconMap[ind.iconName] || <Factory className="w-5 h-5 text-brand-blue" />}
                  </div>
                  {ind.id === 'flameproof-equipment' && (
                    <span className="text-[10px] font-mono uppercase bg-amber-50 text-brand-accent px-2 py-0.5 rounded border border-amber-200 font-semibold">
                      Tooling &amp; Components
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold font-display text-brand-navy group-hover:text-brand-blue transition-colors">
                  {ind.title}
                </h3>

                <p className="text-xs text-brand-graphite leading-relaxed">
                  {ind.description}
                </p>

                {/* Key components supported */}
                <div className="space-y-1 pt-2 border-t border-brand-silver/20">
                  <span className="text-[10px] font-mono uppercase text-brand-graphite/60 block">
                    Supported Solutions:
                  </span>
                  <ul className="space-y-1">
                    {ind.componentCapabilities.slice(0, 2).map((cap, cIdx) => (
                      <li key={cIdx} className="text-[11px] text-brand-graphite flex items-start gap-1.5">
                        <span className="text-brand-blue font-bold">&bull;</span>
                        <span className="line-clamp-2">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-3 border-t border-brand-silver/30 flex items-center justify-between">
                <Link
                  to={`/industries#${ind.id}`}
                  className="text-xs font-semibold text-brand-blue group-hover:text-brand-navy inline-flex items-center gap-1"
                >
                  <span>Industry Profile</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to={`/quote?industry=${encodeURIComponent(ind.title)}`}
                  className="text-[11px] text-brand-accent hover:underline font-medium"
                >
                  Inquire
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Notice Box for Flameproof Equipment */}
        <div className="mt-8 p-4 bg-white border border-brand-silver/60 rounded-lg flex items-start gap-3 text-xs text-brand-graphite shadow-sm">
          <ShieldCheck className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-brand-navy">Clarification on Flameproof Equipment Support:</strong>
            <p className="leading-relaxed">
              JAPEC ENGINEERING supports flameproof equipment manufacturers through precision mold tooling development, customized plastic and thermoset molding, and precision turned metal inserts. We do not manufacture complete certified flameproof assemblies nor claim explosion-proof certification without verified customer test specifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
