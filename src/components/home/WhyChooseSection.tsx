import React from 'react';
import { VALUE_PROPOSITIONS } from '../../data/whyChooseUs';
import {
  Layers,
  Box,
  Sliders,
  Cpu,
  Combine,
  MessagesSquare,
  CheckCircle2,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-5 h-5 text-brand-blue" />,
  Box: <Box className="w-5 h-5 text-brand-blue" />,
  Sliders: <Sliders className="w-5 h-5 text-brand-blue" />,
  Cpu: <Cpu className="w-5 h-5 text-brand-blue" />,
  Combine: <Combine className="w-5 h-5 text-brand-blue" />,
  MessagesSquare: <MessagesSquare className="w-5 h-5 text-brand-blue" />,
};

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-brand-silver/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-lightBg border border-brand-silver/50 text-brand-blue text-xs font-mono font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-navy" />
            Engineering Value
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-brand-navy">
            One Engineering Partner. Multiple Manufacturing Capabilities.
          </h2>
          <p className="text-sm sm:text-base text-brand-graphite leading-relaxed">
            Delivering engineering coordination, multi-material flexibility, and customized component production tailored to industrial OEM requirements.
          </p>
        </div>

        {/* 6 Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUE_PROPOSITIONS.map((prop) => (
            <div
              key={prop.number}
              className="p-6 rounded-lg bg-brand-lightBg/50 border border-brand-silver/50 hover:bg-white hover:border-brand-blue/50 hover:shadow-industrial transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded bg-white border border-brand-silver/40 group-hover:border-brand-blue/30 transition-colors">
                  {iconMap[prop.iconName] || <Layers className="w-5 h-5 text-brand-blue" />}
                </div>
                <span className="font-mono text-xs font-bold text-brand-blueLight bg-brand-navy/5 px-2.5 py-1 rounded">
                  {prop.number}
                </span>
              </div>

              <h3 className="text-lg font-bold font-display text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                {prop.title}
              </h3>

              <p className="text-xs sm:text-sm text-brand-graphite leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
