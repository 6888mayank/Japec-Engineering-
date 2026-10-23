import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { ArrowRight, Home, Compass, FileText } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="404 Error"
        title="Page Not Found"
        subtitle="The page or technical resource you are looking for could not be found or has moved."
        breadcrumbs={[{ label: '404' }]}
      />

      <section className="py-20 bg-white border-b border-brand-silver/30 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <div className="font-mono text-6xl font-black text-brand-navy">
            404
          </div>
          <h2 className="text-2xl font-bold font-display text-brand-navy">
            Component Not Located in Archive
          </h2>
          <p className="text-sm text-brand-graphite leading-relaxed">
            Please verify the URL or navigate to one of the primary manufacturing sections below:
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-blue text-white px-5 py-2.5 rounded font-semibold text-xs shadow transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 bg-brand-lightBg hover:bg-brand-silverLight text-brand-navy px-5 py-2.5 rounded font-semibold text-xs border border-brand-silver/50 transition-colors"
            >
              <Compass className="w-4 h-4 text-brand-blue" />
              <span>Explore Capabilities</span>
            </Link>

            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-5 py-2.5 rounded font-semibold text-xs shadow transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
