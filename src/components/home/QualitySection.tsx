import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  CheckCircle,
  ShieldCheck,
  FileSpreadsheet,
  Layers,
  ArrowRight,
  Maximize2,
} from 'lucide-react';

export const QualitySection: React.FC = () => {
  const themes = [
    {
      title: 'Material Suitability & Rheology',
      desc: 'Evaluating polymer, thermoset, rubber, or metal alloy properties against thermal, mechanical, and electrical environmental stresses.',
      icon: <Layers className="w-5 h-5 text-brand-blue" />,
    },
    {
      title: 'Tooling & Die Design Geometry',
      desc: 'Designing mold cavities, runners, cooling lines, and ejection points with appropriate draft angles and shrinkage factors.',
      icon: <Compass className="w-5 h-5 text-brand-blue" />,
    },
    {
      title: 'Product-Specific Manufacturing',
      desc: 'Configuring machine parameters, clamping tonnages, injection pressures, and cure times tailored to component geometry.',
      icon: <Maximize2 className="w-5 h-5 text-brand-blue" />,
    },
    {
      title: 'Dimensional & Visual Inspection',
      desc: 'Conducting visual checks, surface finish assessment, and dimensional verification against agreed customer drawing tolerances.',
      icon: <CheckCircle className="w-5 h-5 text-brand-blue" />,
    },
    {
      title: 'Engineering Coordination',
      desc: 'Active technical dialogue reviewing CAD models, parting lines, wall thickness variations, and insert fitment prior to tool build.',
      icon: <FileSpreadsheet className="w-5 h-5 text-brand-blue" />,
    },
    {
      title: 'Customer-Approved Specifications',
      desc: 'Manufacturing strictly to agreed drawings, physical golden samples, and defined material specifications without unilateral deviations.',
      icon: <ShieldCheck className="w-5 h-5 text-brand-blue" />,
    },
  ];

  return (
    <section id="quality" className="py-16 md:py-24 bg-white border-b border-brand-silver/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-lightBg border border-brand-silver/50 text-brand-blue text-xs font-mono font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-brand-navy" />
              Engineering Discipline
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-brand-navy leading-tight">
              Precision Begins With the Right Engineering Approach
            </h2>

            <p className="text-sm sm:text-base text-brand-graphite leading-relaxed">
              In precision manufacturing, quality is not a retroactive check—it is engineered directly into the tooling architecture, polymer selection, process controls, and dimensional reviews.
            </p>

            <p className="text-xs sm:text-sm text-brand-graphite/80 leading-relaxed">
              Whether producing multi-cavity injection molds, compression-molded thermosets, vulcanized rubber seals, or precision-turned brass inserts, JAPEC ENGINEERING emphasizes technical rigor at every interface.
            </p>

            <div className="pt-2">
              <Link
                to="/quality"
                className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-blue text-white px-5 py-2.5 rounded font-semibold text-xs sm:text-sm shadow transition-all group"
              >
                <span>Read Detailed Engineering Philosophy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 6 Themed Quality Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {themes.map((item, idx) => (
              <div
                key={idx}
                className="bg-brand-lightBg/60 border border-brand-silver/50 rounded-lg p-5 hover:bg-white hover:border-brand-blue/50 hover:shadow-industrial transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 rounded bg-white border border-brand-silver/40">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-sm text-brand-navy">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-brand-graphite leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
