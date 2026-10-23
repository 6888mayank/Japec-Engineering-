import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { JapecEmblem } from '../components/common/Logo';
import {
  MapPin,
  Mail,
  UserCheck,
  Building2,
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
  Compass,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitted(true);
  };

  const getDirectMailto = () => {
    const subj = encodeURIComponent(`[Contact Inquiry] ${formData.subject || 'General Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    return `mailto:japec.engineering@yahoo.com?subject=${subj}&body=${body}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Direct Communications"
        title="Connect With JAPEC ENGINEERING"
        subtitle="Discuss precision tooling development, molding services, extrusion dies, and turned component manufacturing directly with our technical team in Rabale MIDC, Navi Mumbai."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-16 bg-white border-b border-brand-silver/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Confirmed Company Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-brand-lightBg border border-brand-silver/60 rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg border border-brand-silver/40 shadow-sm">
                  <JapecEmblem width={210} height={63} />
                </div>

                <div className="space-y-1 border-b border-brand-silver/30 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                    Confirmed Enterprise Details
                  </span>
                  <h2 className="text-2xl font-bold font-display text-brand-navy">
                    JAPEC ENGINEERING
                  </h2>
                  <p className="text-xs text-brand-graphite italic">
                    Precision Dies &middot; Tooling &middot; Molding Services
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Proprietor */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-white border border-brand-silver/40 text-brand-blue flex-shrink-0">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-brand-graphite/70 block uppercase">
                        Proprietor
                      </span>
                      <strong className="text-brand-navy text-sm font-semibold">
                        Mrs. Chonyoso Shaiza
                      </strong>
                    </div>
                  </div>

                  {/* Manufacturing Location */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-white border border-brand-silver/40 text-brand-blue flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-brand-graphite/70 block uppercase">
                        Manufacturing Location
                      </span>
                      <strong className="text-brand-navy text-sm font-semibold">
                        Rabale MIDC, Navi Mumbai, Maharashtra, India
                      </strong>
                      <p className="text-xs text-brand-graphite/80 mt-0.5">
                        Established industrial manufacturing zone with multi-process precision engineering infrastructure.
                      </p>
                    </div>
                  </div>

                  {/* Official Email */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-white border border-brand-silver/40 text-brand-accent flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-brand-graphite/70 block uppercase">
                        Official Correspondence Email
                      </span>
                      <a
                        href="mailto:japec.engineering@yahoo.com"
                        className="font-mono text-brand-blue font-bold text-sm hover:underline"
                      >
                        japec.engineering@yahoo.com
                      </a>
                      <p className="text-[11px] text-brand-graphite/70 mt-0.5">
                        Clickable link for direct technical correspondence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* RFQ Callout */}
                <div className="pt-4 border-t border-brand-silver/30 space-y-3">
                  <div className="text-xs font-semibold text-brand-navy">
                    Have Technical Drawings or CAD Models?
                  </div>
                  <Link
                    to="/quote"
                    className="w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white py-2.5 rounded font-semibold text-xs shadow transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Submit Detailed B2B RFQ &rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Location Map Placeholder Card */}
              <div className="bg-brand-navy text-white rounded-xl p-6 border border-brand-graphite space-y-3 shadow-sm bg-tech-grid-dark">
                <div className="flex items-center gap-2 text-brand-blueLight text-xs font-mono uppercase tracking-wider font-bold">
                  <Compass className="w-4 h-4" />
                  <span>Rabale MIDC Industrial Corridor</span>
                </div>
                <h3 className="font-bold text-base">
                  Manufacturing Hub &middot; Navi Mumbai
                </h3>
                <p className="text-xs text-brand-silver leading-relaxed">
                  Located in the prime industrial manufacturing zone of Rabale MIDC, Navi Mumbai, connecting to major OEM equipment builders across Mumbai, Pune, and western India.
                </p>
                <div className="p-3 rounded bg-brand-navyDark/80 border border-brand-graphite text-[11px] text-brand-silver/80">
                  <span className="font-mono text-white block mb-0.5">Exact Address Notice:</span>
                  Full physical street address and gate dispatch directions are coordinated directly on purchase orders and verified quotation schedules.
                </div>
              </div>
            </div>

            {/* Right Column: Contact Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-brand-silver/50 rounded-xl p-6 sm:p-8 shadow-industrial space-y-6">
                <div className="space-y-1 border-b border-brand-silver/30 pb-4">
                  <h3 className="text-xl font-bold font-display text-brand-navy">
                    Send a General Message
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-graphite">
                    For technical drawing submissions and formal quotations, please use our{' '}
                    <Link to="/quote" className="text-brand-blue underline font-semibold">
                      Request a Quote form
                    </Link>
                    .
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 space-y-4 animate-in fade-in">
                    <div className="flex items-center gap-3 text-emerald-800">
                      <CheckCircle2 className="w-6 h-6" />
                      <h4 className="font-bold text-base">Message Prepared</h4>
                    </div>
                    <p className="text-xs text-emerald-950 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Your message has been prepared for dispatch to{' '}
                      <strong>japec.engineering@yahoo.com</strong>.
                    </p>
                    <a
                      href={getDirectMailto()}
                      className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-navy text-white text-xs font-semibold px-4 py-2.5 rounded shadow transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Direct Email to japec.engineering@yahoo.com</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="block text-xs text-brand-graphite hover:underline pt-2"
                    >
                      Write another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    {error && (
                      <div className="p-3 rounded bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div>
                      <label htmlFor="contact_name" className="block text-xs font-semibold text-brand-navy mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact_name"
                        name="name"
                        type="text"
                        placeholder="Rajesh Patil"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-brand-silver/60 focus:border-brand-blue outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact_email" className="block text-xs font-semibold text-brand-navy mb-1">
                        Your Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact_email"
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-brand-silver/60 focus:border-brand-blue outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact_subject" className="block text-xs font-semibold text-brand-navy mb-1">
                        Subject
                      </label>
                      <input
                        id="contact_subject"
                        name="subject"
                        type="text"
                        placeholder="Inquiry regarding tooling and component manufacturing"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-brand-silver/60 focus:border-brand-blue outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact_message" className="block text-xs font-semibold text-brand-navy mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="contact_message"
                        name="message"
                        rows={5}
                        placeholder="Please write your questions or general message here..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm p-3.5 rounded border border-brand-silver/60 focus:border-brand-blue outline-none transition-colors resize-y"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[11px] text-brand-graphite/70">
                        Direct Inbox: japec.engineering@yahoo.com
                      </span>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-blue text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded shadow transition-colors"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
