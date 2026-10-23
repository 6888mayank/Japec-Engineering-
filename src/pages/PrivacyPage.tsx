import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { ShieldCheck, Mail, Lock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Legal &amp; Compliance"
        title="Privacy Policy"
        subtitle="How JAPEC ENGINEERING protects your commercial information, project specifications, and proprietary technical drawings."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-16 bg-white border-b border-brand-silver/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-brand-graphite leading-relaxed">
          <div className="p-4 bg-brand-lightBg border border-brand-silver/50 rounded-lg flex items-start gap-3">
            <Lock className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
            <p className="text-xs text-brand-graphite">
              <strong>Notice:</strong> This policy governs data collected through the JAPEC ENGINEERING website and RFQ portal. Technical drawings and CAD models submitted for quotation purposes are treated with strict confidentiality.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-brand-navy">
              1. Information We Collect
            </h2>
            <p>
              When you submit an RFQ, quotation request, or general inquiry to JAPEC ENGINEERING, we collect information required to evaluate manufacturing feasibility and provide formal quotations. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Contact details: Name, business email address, phone number, and company name.</li>
              <li>Component specifications: Part dimensions, intended materials, quantities, and application parameters.</li>
              <li>Technical reference files: 2D drawings (PDF, DWG, DXF) and 3D CAD files (STEP, IGES, STP) uploaded via our RFQ form or emailed directly.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-brand-navy">
              2. Use of Technical Drawings and Intellectual Property
            </h2>
            <p>
              We recognize that technical drawings, tooling designs, and part geometries represent proprietary customer intellectual property. JAPEC ENGINEERING uses submitted CAD models and drawings exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Conducting design-for-manufacturing (DFM) reviews and tooling feasibility evaluations.</li>
              <li>Calculating cycle times, material requirements, press tonnage, and manufacturing pricing.</li>
              <li>Executing tooling manufacture and component production upon mutually signed purchase orders.</li>
            </ul>
            <p>
              We do not distribute, sell, or publicly showcase customer proprietary drawings or component tooling without explicit written authorization.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-brand-navy">
              3. Non-Disclosure Agreements (NDAs)
            </h2>
            <p>
              For proprietary industrial tooling and custom molded products, JAPEC ENGINEERING welcomes bilateral Non-Disclosure Agreements prior to the transmission of detailed CAD geometry. Please contact us at{' '}
              <a href="mailto:japec.engineering@yahoo.com" className="font-mono text-brand-blue font-bold hover:underline">
                japec.engineering@yahoo.com
              </a>{' '}
              to initiate NDA coordination.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-brand-navy">
              4. Data Retention &amp; Security
            </h2>
            <p>
              Commercial inquiries and quotation records are retained in accordance with standard industrial business recordkeeping practices. We apply reasonable technical safeguards to protect information received via email and online forms against unauthorized access.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-brand-navy">
              5. Contact Us Regarding Your Data
            </h2>
            <p>
              For questions concerning this Privacy Policy or to request deletion of non-contractual inquiry information, please contact:
            </p>
            <div className="bg-brand-lightBg p-4 rounded border border-brand-silver/40 text-xs font-mono space-y-1">
              <div><strong>Company:</strong> JAPEC ENGINEERING</div>
              <div><strong>Proprietor:</strong> Mrs. Chonyoso Shaiza</div>
              <div><strong>Location:</strong> Rabale MIDC, Navi Mumbai, Maharashtra, India</div>
              <div><strong>Email:</strong> <a href="mailto:japec.engineering@yahoo.com" className="text-brand-blue hover:underline">japec.engineering@yahoo.com</a></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
