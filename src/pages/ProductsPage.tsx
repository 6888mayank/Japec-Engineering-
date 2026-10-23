import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { QuoteCtaBanner } from '../components/common/QuoteCtaBanner';
import { PRODUCTS, PRODUCT_CATEGORIES, ProductCategory, ProductItem } from '../data/products';
import { Link } from 'react-router-dom';
import { Filter, ArrowRight, MessageSquare, Info, X, ExternalLink } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Product Gallery"
        title="Products &amp; Applications Portfolio"
        subtitle="Explore our engineering portfolio spanning customized injection-molded components, precision tooling, extruded profiles, thermoset insulation boards, rubber seals, and turned metal inserts."
        breadcrumbs={[{ label: 'Products & Applications' }]}
      />

      <section className="py-12 bg-white border-b border-brand-silver/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Engineering Notice */}
          <div className="p-4 rounded-lg bg-brand-lightBg border border-brand-silver/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-brand-graphite shadow-sm">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-brand-blue flex-shrink-0" />
              <span>
                <strong>Representative Industrial Imagery:</strong> All components pictured represent typical geometry and material categories. JAPEC ENGINEERING manufactures customized components tailored strictly to client engineering drawings and agreed specifications.
              </span>
            </div>
            <Link
              to="/quote"
              className="text-xs font-bold text-brand-blue hover:underline whitespace-nowrap"
            >
              Submit Custom Drawing &rarr;
            </Link>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {PRODUCT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                    isActive
                      ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                      : 'bg-brand-lightBg text-brand-graphite border-brand-silver/40 hover:border-brand-blue hover:text-brand-navy'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-brand-silver/40 overflow-hidden shadow-sm hover:shadow-industrial transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => setSelectedProduct(item)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-brand-navy">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 bg-brand-navy/90 text-white text-[10px] font-mono px-2 py-0.5 rounded border border-white/20">
                    {item.categoryLabel}
                  </div>
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-brand-silver font-mono">
                    <span>Mat: {item.materialHighlight}</span>
                    <span className="bg-black/60 px-1.5 py-0.5 rounded text-white/80">Representative</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-base text-brand-navy group-hover:text-brand-blue transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-graphite leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-brand-silver/20">
                    <span className="text-[10px] font-mono uppercase text-brand-graphite/60 block">
                      Target Applications:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {item.applications.map((app, aIdx) => (
                        <span
                          key={aIdx}
                          className="text-[10px] bg-brand-lightBg text-brand-graphite px-2 py-0.5 rounded"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-brand-silver/30 flex items-center justify-between">
                    <span className="text-xs font-semibold text-brand-blue group-hover:underline inline-flex items-center gap-1">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>

                    <Link
                      to={`/quote?product=${encodeURIComponent(item.name)}&process=${encodeURIComponent(item.categoryLabel)}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:text-brand-accentHover"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Discuss Requirement</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-brand-navyDark/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-brand-silver shadow-industrial-lg p-6 space-y-6 relative animate-in fade-in zoom-in-95 duration-150">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-brand-graphite hover:text-brand-navy hover:bg-brand-lightBg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1 pr-8">
              <span className="text-xs font-mono font-bold uppercase text-brand-blue">
                {selectedProduct.categoryLabel}
              </span>
              <h3 className="text-2xl font-bold font-display text-brand-navy">
                {selectedProduct.name}
              </h3>
            </div>

            {/* Modal Image */}
            <div className="relative rounded-lg overflow-hidden h-64 bg-brand-navy">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 text-[10px] text-white/90 bg-black/60 px-2 py-0.5 rounded font-mono">
                Representative Industrial Component
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4 text-xs sm:text-sm text-brand-graphite">
              <div>
                <strong className="text-brand-navy block mb-1">Process &amp; Description:</strong>
                <p className="leading-relaxed">{selectedProduct.description}</p>
              </div>

              <div>
                <strong className="text-brand-navy block mb-1">Material Specification:</strong>
                <span className="font-mono bg-brand-lightBg px-2 py-1 rounded text-brand-navy font-semibold inline-block border border-brand-silver/40">
                  {selectedProduct.materialHighlight}
                </span>
              </div>

              <div>
                <strong className="text-brand-navy block mb-1.5">Illustrative Applications:</strong>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="bg-brand-lightBg text-brand-navy px-2.5 py-1 rounded text-xs font-medium border border-brand-silver/30"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-brand-silver/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <Link
                to={`/capabilities/${selectedProduct.processSlug}`}
                className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1.5"
              >
                <span>Read About Manufacturing Capability</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>

              <Link
                to={`/quote?product=${encodeURIComponent(selectedProduct.name)}&process=${encodeURIComponent(selectedProduct.categoryLabel)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-5 py-2.5 rounded font-semibold text-xs shadow transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit RFQ for this Item</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Quote Banner */}
      <QuoteCtaBanner
        title="Looking for a Custom Molded or Machined Component?"
        description="Share your 2D/3D component drawings, batch requirements, or sample parts. Our engineering team in Rabale MIDC will review feasibility and coordinate with you."
      />
    </div>
  );
};
