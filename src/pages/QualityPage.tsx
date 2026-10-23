import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { QuoteCtaBanner } from '../components/common/QuoteCtaBanner';
import {
  Compass,
  Layers,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Maximize2,
  Sliders,
  AlertCircle,
  FileText,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const QualityPage: React.FC = () => {
  const qualityPillars = [
    {
      title: '1. Material Suitability & Rheology Analysis',
      description:
        'Every polymer, elastomer, thermoset, and metal alloy possesses distinct shrinkage rates, melting behaviors, and environmental resistance profiles. Before machining tooling or initiating a production run, we evaluate the material specification against the functional demands of the final component.',
      points: [
        'Resin shrinkage factor calculated for mold cavity dimensioning',
        'Evaluation of glass-fiber reinforcement wear impact on mold surfaces',
        'Moisture sensitivity pre-drying protocols for Nylons and Polycarbonate',
        'Compound durometer and chemical resistance matching for rubber seals',
      ],
    },
    {
      title: '2. Tooling & Die Design Considerations',
      description:
        'A manufactured part is only as precise as the tooling cavity in which it is formed. Tooling design balances thermal dissipation, venting of volatile gases, parting line integrity, and mechanical ejection force.',
      points: [
        'Balanced runner systems and strategic gate positioning to prevent flow hesitation',
        'Sufficient draft angles (typically 1°–2°) ensuring clean part demolding without scuffing',
        'Hardened tool steel blocks (P20, H13 equivalents) for high-wear longevity',
        'Precision guide pins and bushings maintaining micron-accurate cavity alignment',
      ],
    },
    {
      title: '3. Product-Specific Manufacturing Controls',
      description:
        'Machine parameters are tailored specifically to the component geometry and material grade rather than relying on generic presets.',
      points: [
        'Calibrated hydraulic clamping tonnage preventing flash along parting lines',
        'Multi-stage injection pressure and hold time preventing sink marks and internal voids',
        'Controlled platen heating cycles for complete thermoset DMC/SMC chemical cross-linking',
        'Continuous profile extrusion vacuum sizing for uniform continuous wall thickness',
      ],
    },
    {
      title: '4. Dimensional & Visual Inspection Protocols',
      description:
        'During and after production, components undergo verification against agreed engineering drawings and critical tolerance criteria.',
      points: [
        'Caliper, micrometer, and optical checks against drawing tolerances',
        'GO / NO-GO thread gauge verification for internal and external turned metal threads',
        'Visual examination for sink marks, weld-lines, burrs, or gate vestige',
        'Parting line flash inspection and controlled mechanical deflashing',
      ],
    },
    {
      title: '5. Application-Focused Engineering Coordination',
      description:
        'Close technical dialogue with OEM engineering and procurement teams to clarify ambiguities in 2D drawings or CAD files before committing to steel.',
      points: [
        'Early design-for-manufacturing (DFM) feedback on parting line placement',
        'Recommendation on wall thickness transitions to minimize internal stress',
        'Insert molding fitment verification for turned brass inserts in plastic bosses',
        'Trial sampling and dimensional feedback prior to batch production sign-off',
      ],
    },
    {
      title: '6. Strict Alignment with Customer Specifications',
      description:
        'All manufacturing operates strictly around approved client specifications and agreed golden samples. No unilateral material substitutions or dimensional modifications are made without prior customer sign-off.',
      points: [
        'Material batch consistency verification against approved datasheets',
        'Drawing revision control ensuring production matches the latest drawing index',
        'Controlled packaging to protect machined threads, seals, and visual cosmetic faces',
        'Traceable lot coordination for recurring B2B purchase orders',
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Quality &amp; Engineering"
        title="Precision Begins With the Right Engineering Approach"
        subtitle="How tooling architecture, material behavior, component geometry, process parameters, and dimensional reviews combine to produce dependable industrial components."
        breadcrumbs={[{ label: 'Quality & Engineering' }]}
      />

      {/* Main Philosophy Section */}
      <section className="py-16 bg-white border-b border-brand-silver/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-lightBg border border-brand-silver/50 text-brand-blue text-xs font-mono font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-brand-navy" />
              Engineering Philosophy
            </div>
            <h2 className="text-3xl font-extrabold font-display text-brand-navy">
              Quality Engineered at the Source
            </h2>
            <p className="text-base text-brand-graphite leading-relaxed">
              At JAPEC ENGINEERING, we approach quality not as an afterthought or a final sorting exercise, but as an engineering discipline established before the first chip is cut or the first resin granule is melted.
            </p>
            <p className="text-sm text-brand-graphite/90 leading-relaxed">
              Serving industrial equipment manufacturers, flameproof equipment OEMs, and electrical equipment builders requires consistent dimensional accuracy, durable tooling, and dependable material performance.
            </p>
          </div>

          {/* Six Detailed Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-brand-lightBg/60 border border-brand-silver/50 rounded-xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold font-display text-brand-navy border-b border-brand-silver/30 pb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-graphite leading-relaxed">
                  {pillar.description}
                </p>
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-mono uppercase text-brand-navy font-bold block">
                    Engineering Controls:
                  </span>
                  <ul className="space-y-1.5 text-xs text-brand-graphite">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Quality Notice Box */}
          <div className="p-5 rounded-xl bg-white border border-brand-silver/60 flex items-start gap-3.5 text-xs text-brand-graphite shadow-sm">
            <ShieldCheck className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-brand-navy font-bold">
                Quality Assurance Notice:
              </strong>
              <p className="leading-relaxed">
                JAPEC ENGINEERING manufactures to agreed customer specifications, physical samples, and technical drawings. Component inspection criteria, dimensional tolerances, and acceptance thresholds are agreed with each client prior to tool release and batch manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <QuoteCtaBanner
        title="Discuss Quality &amp; Tolerance Requirements for Your Part"
        description="Submit your 2D drawings with target tolerance callouts. Our engineering team in Rabale MIDC will review feasibility and coordinate with you."
      />
    </div>
  );
};
