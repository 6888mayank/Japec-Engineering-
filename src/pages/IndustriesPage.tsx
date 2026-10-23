import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { QuoteCtaBanner } from '../components/common/QuoteCtaBanner';
import { INDUSTRIES } from '../data/industries';
import { Link } from 'react-router-dom';
import {
  Factory,
  Zap,
  Cpu,
  Cog,
  Layers,
  Radio,
  Wrench,
  ShieldAlert,
  ShieldCheck,
  ArrowRight,
  FileText,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-brand-accent" />,
  Zap: <Zap className="w-6 h-6 text-brand-blue" />,
  Cpu: <Cpu className="w-6 h-6 text-brand-blue" />,
  Cog: <Cog className="w-6 h-6 text-brand-blue" />,
  Layers: <Layers className="w-6 h-6 text-brand-blue" />,
  Radio: <Radio className="w-6 h-6 text-brand-blue" />,
  Wrench: <Wrench className="w-6 h-6 text-brand-blue" />,
  Factory: <Factory className="w-6 h-6 text-brand-blue" />,
};

export const IndustriesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Sector Solutions"
        title="Industries Served"
        subtitle="Supporting industrial equipment OEMs, electrical manufacturers, and engineering enterprises with customized tooling, precision molding, and metal components."
        breadcrumbs={[{ label: 'Industries Served' }]}
      />

      {/* Main Grid Section */}
      <section className="py-16 bg-white border-b border-brand-silver/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Flameproof Equipment Section Highlight */}
          <div className="p-4 sm:p-5 bg-amber-50/70 border border-amber-300/80 rounded-xl flex items-start gap-3.5 text-xs sm:text-sm text-amber-950">
            <ShieldCheck className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-brand-navy font-bold">
                B2B Notice for Flameproof Equipment Manufacturers:
              </strong>
              <p className="leading-relaxed">
                JAPEC ENGINEERING specializes in tooling development, customized plastic and thermoset molding, and precision turned metal inserts used within flameproof and heavy-duty enclosures. We do not manufacture complete certified flameproof equipment assemblies, nor do we claim independent explosion-proof or fire ratings without verified customer test specifications.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {INDUSTRIES.map((ind, idx) => (
              <div
                key={ind.id}
                id={ind.id}
                className="bg-brand-lightBg/50 rounded-xl border border-brand-silver/50 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-brand-silver/40">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-lg bg-white border border-brand-silver/50 shadow-sm">
                      {iconMap[ind.iconName] || <Factory className="w-6 h-6 text-brand-blue" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-brand-graphite/70 block">
                        Sector 0{idx + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-navy">
                        {ind.title}
                      </h3>
                    </div>
                  </div>

                  <Link
                    to={`/quote?industry=${encodeURIComponent(ind.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold bg-brand-navy hover:bg-brand-blue text-white px-4 py-2 rounded transition-colors self-start md:self-auto"
                  >
                    <FileText className="w-4 h-4 text-brand-accent" />
                    <span>Inquire for {ind.title}</span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-sm font-semibold text-brand-blue leading-snug">
                      {ind.subtitle}
                    </p>
                    <p className="text-sm text-brand-graphite leading-relaxed">
                      {ind.description}
                    </p>

                    {ind.disclaimer && (
                      <div className="p-3 rounded bg-white border border-brand-silver/60 text-xs text-brand-graphite italic">
                        {ind.disclaimer}
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-5 space-y-4 bg-white p-5 rounded-lg border border-brand-silver/40">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-brand-navy font-bold block pb-1 border-b border-brand-silver/30">
                      Component &amp; Tooling Support Capabilities:
                    </span>
                    <ul className="space-y-2 text-xs text-brand-graphite">
                      {ind.componentCapabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <span className="text-brand-blue font-bold mt-0.5">&bull;</span>
                          <span className="leading-relaxed">{cap}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 border-t border-brand-silver/30">
                      <span className="text-[10px] font-mono uppercase text-brand-graphite/70 block mb-1">
                        Relevant Materials:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {ind.materialsSupported.map((m, mIdx) => (
                          <span
                            key={mIdx}
                            className="text-[10px] bg-brand-lightBg text-brand-navy px-2 py-0.5 rounded border border-brand-silver/30"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <QuoteCtaBanner
        title="Discuss Custom Components for Your Industry Sector"
        description="Connect with our precision engineering facility in Rabale MIDC, Navi Mumbai. Send your drawing files or project specifications for engineering review."
      />
    </div>
  );
};
