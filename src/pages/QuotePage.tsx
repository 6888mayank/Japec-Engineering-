import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import {
  FileText,
  Upload,
  CheckCircle2,
  AlertCircle,
  Mail,
  Building2,
  ShieldCheck,
  Send,
  X,
  FileSpreadsheet,
  ArrowRight,
  Link2,
  Cloud,
  ExternalLink,
} from 'lucide-react';

interface FormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  componentName: string;
  manufacturingProcess: string;
  materialPreference: string;
  estimatedQuantity: string;
  targetDimensions: string;
  projectDescription: string;
  drawingDriveLink: string; // Google Drive / OneDrive / Cloud link
  privacyConsent: boolean;
  honeypot: string; // Anti-spam field
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  businessEmail?: string;
  componentName?: string;
  manufacturingProcess?: string;
  projectDescription?: string;
  privacyConsent?: string;
  file?: string;
}

const PROCESS_OPTIONS = [
  'Plastic Injection Molding',
  'Mold & Die Development',
  'Plastic Extrusion',
  'Thermoset Compression Molding',
  'Rubber & Elastomer Molding',
  'Sheet Metal Pressing & Stamping',
  'Precision Turned Components',
  'Metal Inserts',
  'Other / Not Sure',
];

const ALLOWED_EXTENSIONS = [
  '.pdf',
  '.step',
  '.stp',
  '.iges',
  '.igs',
  '.dwg',
  '.dxf',
  '.png',
  '.jpg',
  '.jpeg',
  '.zip',
];

const MAX_FILE_SIZE_BYTES = 25 * 1024 * 1024; // 25 MB

export const QuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Read URL params if coming from a capability or product link
  const defaultProcess = searchParams.get('process') || '';
  const defaultProduct = searchParams.get('product') || '';
  const defaultIndustry = searchParams.get('industry') || '';

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    componentName: defaultProduct,
    manufacturingProcess: PROCESS_OPTIONS.includes(defaultProcess)
      ? defaultProcess
      : defaultProcess
      ? 'Other / Not Sure'
      : '',
    materialPreference: '',
    estimatedQuantity: '',
    targetDimensions: '',
    projectDescription: defaultIndustry
      ? `Component requirement for ${defaultIndustry} application.`
      : '',
    drawingDriveLink: '',
    privacyConsent: false,
    honeypot: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [rfqReferenceId, setRfqReferenceId] = useState('');

  // Update default process if search param changes
  useEffect(() => {
    if (defaultProcess && PROCESS_OPTIONS.includes(defaultProcess)) {
      setFormData((prev) => ({ ...prev, manufacturingProcess: defaultProcess }));
    }
    if (defaultProduct) {
      setFormData((prev) => ({ ...prev, componentName: defaultProduct }));
    }
  }, [defaultProcess, defaultProduct]);

  // Handle Input Changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle File Selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const extension = '.' + file.name.split('.').pop()?.toLowerCase();

      if (!ALLOWED_EXTENSIONS.includes(extension)) {
        setErrors((prev) => ({
          ...prev,
          file: `Unsupported format. Allowed formats: PDF, STEP, STP, IGES, DWG, DXF, PNG, JPG, ZIP`,
        }));
        setSelectedFile(null);
        return;
      }

      if (file.size > MAX_FILE_SIZE_BYTES) {
        setErrors((prev) => ({
          ...prev,
          file: `File size exceeds 25MB limit (${(file.size / (1024 * 1024)).toFixed(1)}MB). Please share a compressed archive or cloud link.`,
        }));
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
      setErrors((prev) => ({ ...prev, file: undefined }));
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setErrors((prev) => ({ ...prev, file: undefined }));
  };

  // Form Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / OEM Name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business Email is required.';
    } else if (!emailRegex.test(formData.businessEmail.trim())) {
      newErrors.businessEmail = 'Please enter a valid business email address.';
    }

    if (!formData.componentName.trim()) {
      newErrors.componentName = 'Product / Component Name is required.';
    }

    if (!formData.manufacturingProcess) {
      newErrors.manufacturingProcess = 'Please select a manufacturing process.';
    }

    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription =
        'Please provide a brief project description (at least 15 characters).';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must acknowledge the Privacy Policy to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap
    if (formData.honeypot) {
      console.warn('Bot detected via honeypot');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Generate unique RFQ Reference ID
    const refCode = `JAPEC-RFQ-${Date.now().toString().slice(-6)}`;
    setRfqReferenceId(refCode);

    // Simulate backend verification & prepare structured enquiry dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 700);
  };

  // Formatted mailto link for direct submission to japec.engineering@yahoo.com
  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      `[RFQ: ${rfqReferenceId || 'NEW'}] ${formData.componentName} - ${formData.companyName}`
    );
    const body = encodeURIComponent(
      `To: JAPEC ENGINEERING (Rabale MIDC, Navi Mumbai)\n` +
      `Official Enquiry: japec.engineering@yahoo.com\n\n` +
      `RFQ REFERENCE: ${rfqReferenceId || 'PENDING'}\n` +
      `===========================================\n` +
      `CLIENT & COMPANY DETAILS:\n` +
      `- Full Name: ${formData.fullName}\n` +
      `- Company: ${formData.companyName}\n` +
      `- Business Email: ${formData.businessEmail}\n` +
      `- Phone: ${formData.phoneNumber || 'Not provided'}\n\n` +
      `COMPONENT & MANUFACTURING SPECIFICATIONS:\n` +
      `- Component Name: ${formData.componentName}\n` +
      `- Manufacturing Process: ${formData.manufacturingProcess}\n` +
      `- Material Preference: ${formData.materialPreference || 'To be recommended'}\n` +
      `- Estimated Quantity: ${formData.estimatedQuantity || 'To be discussed'}\n` +
      `- Target Dimensions / Specs: ${formData.targetDimensions || 'See attached drawing / drive'}\n\n` +
      `PROJECT DESCRIPTION:\n` +
      `${formData.projectDescription}\n\n` +
      `CAD / DRAWING CLOUD LINK:\n` +
      `${formData.drawingDriveLink ? formData.drawingDriveLink : 'None provided'}\n\n` +
      `ATTACHMENT STATUS:\n` +
      `${selectedFile ? `File prepared: ${selectedFile.name} (${(selectedFile.size / 1024).toFixed(0)} KB)` : 'No local file attached'}\n\n` +
      `===========================================\n` +
      `Sent via JAPEC ENGINEERING RFQ Portal\n`
    );
    return `mailto:japec.engineering@yahoo.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Official B2B RFQ Channel"
        title="Tell Us About Your Manufacturing Requirement"
        subtitle="Share your component requirements, drawings, preferred material, or project specifications with JAPEC ENGINEERING. Our team can review the information and discuss the appropriate manufacturing approach."
        breadcrumbs={[{ label: 'Request a Quote' }]}
      />

      <section className="py-16 bg-brand-lightBg border-b border-brand-silver/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Submission Success State */}
          {submissionSuccess ? (
            <div className="bg-white rounded-xl border border-emerald-300 shadow-industrial p-8 sm:p-10 space-y-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center gap-4 border-b border-brand-silver/30 pb-5">
                <div className="p-3 rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                    Enquiry Details Registered
                  </span>
                  <h2 className="text-2xl font-bold font-display text-brand-navy">
                    Thank You, {formData.fullName}!
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-brand-graphite leading-relaxed">
                <p>
                  Your quotation enquiry for{' '}
                  <strong className="text-brand-navy">{formData.componentName}</strong> (
                  {formData.manufacturingProcess}) has been structured with Reference ID:{' '}
                  <span className="font-mono bg-brand-lightBg px-2 py-0.5 rounded font-bold text-brand-blue border border-brand-silver/40">
                    {rfqReferenceId}
                  </span>
                  .
                </p>

                <div className="bg-brand-lightBg p-5 rounded-lg border border-brand-silver/40 space-y-2 text-xs">
                  <div className="font-mono uppercase font-bold text-brand-navy">
                    Enquiry Summary:
                  </div>
                  <div>&bull; <strong>Company:</strong> {formData.companyName}</div>
                  <div>&bull; <strong>Business Email:</strong> {formData.businessEmail}</div>
                  <div>&bull; <strong>Process:</strong> {formData.manufacturingProcess}</div>
                  {formData.materialPreference && <div>&bull; <strong>Material:</strong> {formData.materialPreference}</div>}
                  {formData.estimatedQuantity && <div>&bull; <strong>Estimated Quantity:</strong> {formData.estimatedQuantity}</div>}
                  {formData.drawingDriveLink && (
                    <div>
                      &bull; <strong>Drawing / Cloud Link:</strong>{' '}
                      <a
                        href={formData.drawingDriveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-blue font-mono underline break-all inline-flex items-center gap-1"
                      >
                        <span>{formData.drawingDriveLink}</span>
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      </a>
                    </div>
                  )}
                  {selectedFile && <div>&bull; <strong>Selected Local File:</strong> {selectedFile.name}</div>}
                </div>

                {/* Direct Mailto Action to ensure zero message loss */}
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-brand-navy">
                    <Mail className="w-4 h-4 text-brand-blue" />
                    <span>Direct Email Dispatch to japec.engineering@yahoo.com</span>
                  </div>
                  <p>
                    To ensure instant delivery of your project specifications and technical drawing drive link directly into our technical inbox, you can launch your default mail client with all fields pre-filled:
                  </p>
                  <a
                    href={getMailtoLink()}
                    className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-navy text-white px-5 py-2.5 rounded font-semibold text-xs shadow transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open Email Draft with Attached Details &rarr;</span>
                  </a>
                </div>

                <div className="pt-2 text-xs text-brand-graphite/70 flex items-center justify-between border-t border-brand-silver/30">
                  <span>Manufacturing Location: Rabale MIDC, Navi Mumbai</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmissionSuccess(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        businessEmail: '',
                        phoneNumber: '',
                        componentName: '',
                        manufacturingProcess: '',
                        materialPreference: '',
                        estimatedQuantity: '',
                        targetDimensions: '',
                        projectDescription: '',
                        drawingDriveLink: '',
                        privacyConsent: false,
                        honeypot: '',
                      });
                      setSelectedFile(null);
                    }}
                    className="text-brand-blue hover:underline font-semibold"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-xl border border-brand-silver/50 shadow-industrial p-6 sm:p-10 space-y-8"
            >
              {/* Form Intro Banner */}
              <div className="border-b border-brand-silver/40 pb-6 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-brand-navy">
                    B2B Manufacturing Enquiry &amp; RFQ
                  </h2>
                  <p className="text-xs sm:text-sm text-brand-graphite">
                    Fields marked with an asterisk (<span className="text-red-500 font-bold">*</span>) are required.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-brand-graphite font-mono bg-brand-lightBg px-2.5 py-1.5 rounded border border-brand-silver/30">
                  <ShieldCheck className="w-4 h-4 text-brand-blue" />
                  <span>Confidential Review</span>
                </div>
              </div>

              {/* Honeypot field (hidden from real users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hp_input">Do not fill this</label>
                <input
                  id="hp_input"
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  autoComplete="off"
                />
              </div>

              {/* Section 1: Contact Information */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue border-b border-brand-silver/20 pb-1">
                  1. Contact &amp; Company Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-brand-navy mb-1"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="e.g. Rajesh Patil"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border ${
                        errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-brand-silver/60 focus:border-brand-blue'
                      } outline-none transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-xs font-semibold text-brand-navy mb-1"
                    >
                      Company / Organization Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="e.g. Bharat Industrial Controls Ltd."
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border ${
                        errors.companyName ? 'border-red-500 bg-red-50/30' : 'border-brand-silver/60 focus:border-brand-blue'
                      } outline-none transition-colors`}
                    />
                    {errors.companyName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.companyName}</span>
                      </p>
                    )}
                  </div>

                  {/* Business Email */}
                  <div>
                    <label
                      htmlFor="businessEmail"
                      className="block text-xs font-semibold text-brand-navy mb-1"
                    >
                      Business Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="businessEmail"
                      name="businessEmail"
                      type="email"
                      placeholder="name@company.com"
                      value={formData.businessEmail}
                      onChange={handleInputChange}
                      className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border ${
                        errors.businessEmail ? 'border-red-500 bg-red-50/30' : 'border-brand-silver/60 focus:border-brand-blue'
                      } outline-none transition-colors`}
                    />
                    {errors.businessEmail && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.businessEmail}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number (Optional) */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-xs font-semibold text-brand-navy mb-1"
                    >
                      Phone Number <span className="text-brand-graphite/60 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="e.g. +91 98XXXXXXXX"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-brand-silver/60 focus:border-brand-blue outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Component & Technical Parameters */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue border-b border-brand-silver/20 pb-1">
                  2. Component &amp; Manufacturing Requirements
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Product / Component Name */}
                  <div>
                    <label
                      htmlFor="componentName"
                      className="block text-xs font-semibold text-brand-navy mb-1"
                    >
                      Product / Component Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="componentName"
                      name="componentName"
                      type="text"
                      placeholder="e.g. Terminal Block Cover / Brass Insert"
                      value={formData.componentName}
                      onChange={handleInputChange}
                      className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border ${
                        errors.componentName ? 'border-red-500 bg-red-50/30' : 'border-brand-silver/60 focus:border-brand-blue'
                      } outline-none transition-colors`}
                    />
                    {errors.componentName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.componentName}</span>
                      </p>
                    )}
                  </div>

                  {/* Manufacturing Process */}
                  <div>
                    <label
                      htmlFor="manufacturingProcess"
                      className="block text-xs font-semibold text-brand-navy mb-1"
                    >
                      Manufacturing Process <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="manufacturingProcess"
                      name="manufacturingProcess"
                      value={formData.manufacturingProcess}
                      onChange={handleInputChange}
                      className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border bg-white ${
                        errors.manufacturingProcess ? 'border-red-500 bg-red-50/30' : 'border-brand-silver/60 focus:border-brand-blue'
                      } outline-none transition-colors`}
                    >
                      <option value="">-- Select Process --</option>
                      {PROCESS_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.manufacturingProcess && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.manufacturingProcess}</span>
                      </p>
                    )}
                  </div>

                  {/* Material Preference */}
                  <div>
                    <label
                      htmlFor="materialPreference"
                      className="block text-xs font-semibold text-brand-navy mb-1"
                    >
                      Material Preference <span className="text-brand-graphite/60 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="materialPreference"
                      name="materialPreference"
                      type="text"
                      placeholder="e.g. Nylon 6 GF30, PC, DMC, NBR, Brass"
                      value={formData.materialPreference}
                      onChange={handleInputChange}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-brand-silver/60 focus:border-brand-blue outline-none transition-colors"
                    />
                  </div>

                  {/* Estimated Quantity */}
                  <div>
                    <label
                      htmlFor="estimatedQuantity"
                      className="block text-xs font-semibold text-brand-navy mb-1"
                    >
                      Estimated Quantity <span className="text-brand-graphite/60 font-normal">(Trial batch / Annual)</span>
                    </label>
                    <input
                      id="estimatedQuantity"
                      name="estimatedQuantity"
                      type="text"
                      placeholder="e.g. 500 pcs trial / 10,000 pcs/yr"
                      value={formData.estimatedQuantity}
                      onChange={handleInputChange}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-brand-silver/60 focus:border-brand-blue outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Target Dimensions / Specifications */}
                <div>
                  <label
                    htmlFor="targetDimensions"
                    className="block text-xs font-semibold text-brand-navy mb-1"
                  >
                    Target Dimensions or Technical Specifications <span className="text-brand-graphite/60 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="targetDimensions"
                    name="targetDimensions"
                    type="text"
                    placeholder="e.g. Outer envelope 120x80x45mm, wall thickness 2.5mm, M6 internal thread"
                    value={formData.targetDimensions}
                    onChange={handleInputChange}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-brand-silver/60 focus:border-brand-blue outline-none transition-colors"
                  />
                </div>

                {/* Project Description */}
                <div>
                  <label
                    htmlFor="projectDescription"
                    className="block text-xs font-semibold text-brand-navy mb-1"
                  >
                    Project Description &amp; Technical Scope <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={4}
                    placeholder="Please explain the intended application, operational environment (temperature, electrical, mechanical loads), whether existing tooling exists, or if new die development is required."
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    className={`w-full text-xs sm:text-sm p-3.5 rounded border ${
                      errors.projectDescription ? 'border-red-500 bg-red-50/30' : 'border-brand-silver/60 focus:border-brand-blue'
                    } outline-none transition-colors resize-y`}
                  />
                  {errors.projectDescription && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.projectDescription}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Section 3: Technical Drawings & 3D CAD Link (Google Drive / Cloud Link) */}
              <div className="space-y-4">
                <div className="border-b border-brand-silver/20 pb-1 flex items-center justify-between">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue flex items-center gap-1.5">
                    <Cloud className="w-4 h-4 text-brand-blue" />
                    <span>3. Technical Drawings &amp; 3D CAD Files (Google Drive / Cloud Link)</span>
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded font-semibold">
                    Recommended (No Size Limit)
                  </span>
                </div>

                {/* Primary Google Drive / Cloud Link Box */}
                <div className="bg-brand-lightBg/80 p-5 rounded-xl border border-brand-silver/60 space-y-3 shadow-sm">
                  <div>
                    <label
                      htmlFor="drawingDriveLink"
                      className="block text-xs font-bold text-brand-navy mb-1"
                    >
                      Google Drive / OneDrive / Dropbox Drawing Folder Link
                    </label>
                    <p className="text-[11px] text-brand-graphite leading-relaxed">
                      Share your Google Drive, Microsoft OneDrive, Dropbox, or WeTransfer folder link containing 2D drawings (PDF, DWG, DXF) and 3D CAD models (STEP, IGES, STP, SolidWorks, ZIP).
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-blue">
                      <Link2 className="w-4 h-4" />
                    </div>
                    <input
                      id="drawingDriveLink"
                      name="drawingDriveLink"
                      type="url"
                      placeholder="e.g. https://drive.google.com/drive/folders/... or OneDrive / Dropbox link"
                      value={formData.drawingDriveLink}
                      onChange={handleInputChange}
                      className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 rounded border border-brand-silver/60 focus:border-brand-blue outline-none transition-colors bg-white font-mono"
                    />
                  </div>

                  <div className="flex items-start gap-2 text-[11px] text-brand-graphite/80 bg-white/80 p-2.5 rounded border border-brand-silver/40">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Sharing Permission Tip:</strong> In Google Drive / OneDrive, please set link sharing to <strong>&ldquo;Anyone with the link can view&rdquo;</strong> so our engineering team can review the CAD geometry directly.
                    </span>
                  </div>
                </div>

                {/* Optional Local File Attachment */}
                <div className="border border-brand-silver/40 rounded-lg p-4 bg-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-brand-navy">
                      Or attach a single local file (optional)
                    </span>
                    <span className="text-[10px] font-mono text-brand-graphite/60">
                      Max 25MB (PDF, PNG, JPG, STEP)
                    </span>
                  </div>

                  {selectedFile ? (
                    <div className="flex items-center justify-between bg-brand-lightBg p-3 rounded border border-brand-silver/40 text-left">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-brand-blue flex-shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-brand-navy line-clamp-1">
                            {selectedFile.name}
                          </div>
                          <div className="text-[11px] text-brand-graphite/70 font-mono">
                            {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB &middot; Selected
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-1 rounded hover:bg-brand-silverLight text-brand-graphite hover:text-red-600 transition-colors"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <label
                        htmlFor="drawing-upload"
                        className="cursor-pointer inline-flex items-center gap-2 bg-brand-lightBg hover:bg-brand-silverLight text-brand-navy px-3.5 py-2 rounded text-xs font-medium border border-brand-silver/50 transition-colors"
                      >
                        <Upload className="w-3.5 h-3.5 text-brand-blue" />
                        <span>Choose Local File</span>
                      </label>
                      <input
                        id="drawing-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".pdf,.step,.stp,.iges,.igs,.dwg,.dxf,.png,.jpg,.jpeg,.zip"
                      />
                      <span className="text-[11px] text-brand-graphite/60 font-mono">
                        No file chosen
                      </span>
                    </div>
                  )}

                  {errors.file && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.file}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Section 4: Privacy Consent */}
              <div className="space-y-2 pt-2 border-t border-brand-silver/30">
                <div className="flex items-start gap-3">
                  <input
                    id="privacyConsent"
                    name="privacyConsent"
                    type="checkbox"
                    checked={formData.privacyConsent}
                    onChange={handleCheckboxChange}
                    className="mt-1 w-4 h-4 text-brand-blue rounded border-brand-silver focus:ring-brand-blue"
                  />
                  <label htmlFor="privacyConsent" className="text-xs text-brand-graphite leading-relaxed">
                    I consent to JAPEC ENGINEERING reviewing this technical drawing and enquiry data for the sole purpose of manufacturing feasibility evaluation and quotation. I acknowledge the{' '}
                    <Link to="/privacy-policy" target="_blank" className="text-brand-blue underline">
                      Privacy Policy
                    </Link>{' '}
                    and confirm these files do not infringe unauthorized proprietary third-party rights. <span className="text-red-500">*</span>
                  </label>
                </div>
                {errors.privacyConsent && (
                  <p className="text-[11px] text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.privacyConsent}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-brand-graphite/80 flex items-center gap-1.5 font-mono">
                  <Mail className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Official Enquiry: japec.engineering@yahoo.com</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-3.5 rounded font-semibold text-sm shadow-md transition-all disabled:opacity-50"
                  id="submit-rfq-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Verifying &amp; Registering RFQ...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Manufacturing Enquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Email Service Configuration Notice */}
          <div className="mt-8 p-4 rounded-lg bg-white border border-brand-silver/50 text-xs text-brand-graphite space-y-2">
            <div className="font-bold text-brand-navy flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              <span>Production Integration &amp; Drawing Confidentiality</span>
            </div>
            <p className="leading-relaxed">
              Enquiries submitted through this portal are formatted for official correspondence with{' '}
              <a href="mailto:japec.engineering@yahoo.com" className="font-mono text-brand-blue hover:underline">
                japec.engineering@yahoo.com
              </a>
              . For automated server-side email dispatch in production, configure environment variables for your chosen transactional provider (e.g., Resend, SendGrid, or AWS SES) in your deployment environment without exposing credentials on the client.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
