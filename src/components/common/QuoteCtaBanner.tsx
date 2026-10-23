import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

interface QuoteCtaBannerProps {
  title?: string;
  description?: string;
  defaultProcess?: string;
}

export const QuoteCtaBanner: React.FC<QuoteCtaBannerProps> = ({
  title = "Ready to Discuss Your Manufacturing Requirement?",
  description = "Share your component requirements, Google Drive CAD folder link, 2D drawings, or project specifications. Our engineering team will evaluate tooling feasibility and provide a structured technical review.",
  defaultProcess,
}) => {
  const quoteUrl = defaultProcess
    ? `/quote?process=${encodeURIComponent(defaultProcess)}`
    : '/quote';

  return (
    <section className="bg-brand-navy text-white py-14 px-4 sm:px-6 lg:px-8 border-y border-brand-graphite relative overflow-hidden bg-tech-grid-dark">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="space-y-3 max-w-3xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-blue/30 border border-brand-blueLight/30 text-brand-silverLight text-xs font-mono uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            B2B RFQ &amp; CAD Review
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display tracking-tight text-white">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-brand-silver leading-relaxed">
            {description}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-brand-silverLight">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-blueLight" />
              Drive / CAD Link &amp; NDA confidentiality
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-blueLight" />
              Tooling &amp; material optimization
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-blueLight" />
              Navi Mumbai manufacturing hub
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
          <Link
            to={quoteUrl}
            className="inline-flex items-center gap-2.5 bg-brand-accent hover:bg-brand-accentHover text-white px-7 py-3.5 rounded font-semibold text-sm shadow-md hover:shadow-lg transition-all group border border-brand-accent"
          >
            <FileText className="w-4 h-4" />
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="mailto:japec.engineering@yahoo.com"
            className="inline-flex items-center gap-2 border border-brand-silver/30 hover:border-white text-white px-6 py-3.5 rounded font-semibold text-sm transition-all"
          >
            <span>japec.engineering@yahoo.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};
