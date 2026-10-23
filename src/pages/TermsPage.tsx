import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { FileText, ShieldCheck, Layers, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Terms &amp; Conditions"
        title="Terms of Service &amp; Quotation Standards"
        subtitle="Standard commercial and manufacturing terms governing quotations, tooling development, and component supply by JAPEC ENGINEERING."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />

      <section className="py-16 bg-white border-b border-brand-silver/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-brand-graphite leading-relaxed">
          <div className="p-4 bg-brand-lightBg border border-brand-silver/50 rounded-lg flex items-start gap-3">
            <Scale className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
            <p className="text-xs text-brand-graphite">
              <strong>Commercial Note:</strong> These general terms provide an overview of standard B2B quotation protocols. Individual commercial contracts, formal quotations, and purchase orders supersede general website text.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-brand-navy">
              1. Quotations and Commercial Estimates
            </h2>
            <p>
              Quotations provided by JAPEC ENGINEERING are based upon technical drawings, material specifications, and batch quantities supplied by the customer. Estimates remain valid for the period specified in formal quotation documents, subject to prevailing raw material polymer, alloy, and energy costs.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-brand-navy">
              2. Tooling and Mold Development
            </h2>
            <p>
              Custom molds, compression dies, extrusion heads, and stamping dies developed for customer components are engineered according to agreed drawings. Tooling ownership, maintenance obligations, tool trial approval protocols, and storage terms are formalized in specific purchase agreements.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-brand-navy">
              3. Specifications and Inspection Standards
            </h2>
            <p>
              Components are manufactured to the drawing tolerances, surface finishes, and material grades explicitly acknowledged on the purchase order. Customer inspection and acceptance criteria must be agreed prior to production release. JAPEC ENGINEERING does not guarantee suitability for end-use safety certifications (such as flameproof or explosion-proof assemblies) unless verified by verified customer compliance testing.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-brand-navy">
              4. Governing Law and Jurisdiction
            </h2>
            <p>
              Commercial transactions, purchase orders, and supply contracts entered into with JAPEC ENGINEERING are governed by the laws of India, with legal jurisdiction situated in Navi Mumbai / Thane / Mumbai, Maharashtra.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-brand-navy">
              5. Official Inquiries
            </h2>
            <p>
              For commercial discussions regarding purchase agreements or terms, please contact:
            </p>
            <div className="bg-brand-lightBg p-4 rounded border border-brand-silver/40 text-xs font-mono space-y-1">
              <div><strong>Company:</strong> JAPEC ENGINEERING</div>
              <div><strong>Proprietor:</strong> Mrs. Chonyoso Shaiza</div>
              <div><strong>Manufacturing Location:</strong> Rabale MIDC, Navi Mumbai, Maharashtra, India</div>
              <div><strong>Official Email:</strong> <a href="mailto:japec.engineering@yahoo.com" className="text-brand-blue hover:underline">japec.engineering@yahoo.com</a></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
