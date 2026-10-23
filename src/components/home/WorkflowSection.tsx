import React from 'react';
import { WORKFLOW_STEPS } from '../../data/workflow';
import { GitBranch, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WorkflowSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-lightBg border-b border-brand-silver/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-brand-silver/50 text-brand-blue text-xs font-mono font-semibold uppercase tracking-wider">
            <GitBranch className="w-3.5 h-3.5 text-brand-navy" />
            Engineering Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-brand-navy">
            From Engineering Requirement to Manufactured Component
          </h2>
          <p className="text-sm sm:text-base text-brand-graphite leading-relaxed">
            A disciplined, step-by-step engineering collaboration ensuring component geometry, tooling architecture, and materials align precisely with technical specifications.
          </p>
        </div>

        {/* 7-Step Horizontal / Vertical Timeline */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {WORKFLOW_STEPS.slice(0, 4).map((stage) => (
              <div
                key={stage.step}
                className="bg-white rounded-lg p-5 border border-brand-silver/50 hover:border-brand-blue hover:shadow-industrial transition-all duration-200 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-extrabold text-brand-blue bg-brand-lightBg px-2 py-0.5 rounded border border-brand-silver/30">
                      STAGE {stage.stageNumber}
                    </span>
                    <span className="text-[11px] font-mono text-brand-graphite/60">
                      Step {stage.step} of 7
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-brand-navy mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-brand-graphite leading-relaxed mb-3">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-silver/20">
                  <span className="text-[10px] font-mono uppercase text-brand-graphite/60 block mb-1">
                    Key Outcomes:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {stage.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[10px] bg-brand-lightBg text-brand-graphite px-1.5 py-0.5 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WORKFLOW_STEPS.slice(4, 7).map((stage) => (
              <div
                key={stage.step}
                className="bg-white rounded-lg p-5 border border-brand-silver/50 hover:border-brand-blue hover:shadow-industrial transition-all duration-200 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-extrabold text-brand-blue bg-brand-lightBg px-2 py-0.5 rounded border border-brand-silver/30">
                      STAGE {stage.stageNumber}
                    </span>
                    <span className="text-[11px] font-mono text-brand-graphite/60">
                      Step {stage.step} of 7
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-brand-navy mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-brand-graphite leading-relaxed mb-3">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-silver/20">
                  <span className="text-[10px] font-mono uppercase text-brand-graphite/60 block mb-1">
                    Key Outcomes:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {stage.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[10px] bg-brand-lightBg text-brand-graphite px-1.5 py-0.5 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Illustrative Process Disclaimer */}
        <div className="mt-8 text-center text-xs text-brand-graphite/80 italic">
          * Note: This represents an illustrative engineering workflow, adjusted according to specific customer agreements, drawing complexity, and production batch parameters.
        </div>
      </div>
    </section>
  );
};
