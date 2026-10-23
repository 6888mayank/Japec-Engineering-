import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, PRODUCT_CATEGORIES, ProductCategory } from '../../data/products';
import { Filter, ArrowRight, MessageSquare, Info } from 'lucide-react';

export const ProductGallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products-gallery" className="py-16 md:py-24 bg-white border-b border-brand-silver/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-lightBg border border-brand-silver/50 text-brand-blue text-xs font-mono font-semibold uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-brand-navy" />
            Component Portfolio &amp; Applications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-brand-navy">
            Products &amp; Applications Gallery
          </h2>
          <p className="text-sm sm:text-base text-brand-graphite leading-relaxed">
            Illustrative examples of precision tooling, molded polymers, continuous extrusions, thermoset insulation parts, rubber seals, and precision turned metal inserts.
          </p>
        </div>

        {/* Representative Image Notice */}
        <div className="mb-8 p-3 rounded bg-brand-lightBg/80 border border-brand-silver/50 flex items-center gap-3 text-xs text-brand-graphite max-w-2xl mx-auto">
          <Info className="w-4 h-4 text-brand-blue flex-shrink-0" />
          <span>
            <strong>Manufacturing Notice:</strong> Photographs represent typical industrial component geometries and tooling configurations. Components are manufactured to approved customer drawings and specifications.
          </span>
        </div>

        {/* Category Filters (Horizontal scrolling on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin no-scrollbar justify-start lg:justify-center">
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-brand-silver/40 overflow-hidden shadow-sm hover:shadow-industrial transition-all duration-300 flex flex-col group"
            >
              {/* Product Image */}
              <div className="relative h-52 overflow-hidden bg-brand-navy">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';
                  }}
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

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-base text-brand-navy group-hover:text-brand-blue transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-brand-graphite leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Applications Chips */}
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

                {/* Card CTA */}
                <div className="pt-3 border-t border-brand-silver/30 flex items-center justify-between">
                  <Link
                    to={`/capabilities/${item.processSlug}`}
                    className="text-xs font-semibold text-brand-blue hover:text-brand-navy inline-flex items-center gap-1"
                  >
                    <span>Process Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <Link
                    to={`/quote?product=${encodeURIComponent(item.name)}&process=${encodeURIComponent(item.categoryLabel)}`}
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

        {/* View all products link */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-brand-lightBg hover:bg-white text-brand-navy font-semibold px-6 py-3 rounded border border-brand-silver/60 hover:border-brand-blue transition-all text-sm shadow-sm"
          >
            <span>View Full Products &amp; Applications Portfolio</span>
            <ArrowRight className="w-4 h-4 text-brand-blue" />
          </Link>
        </div>
      </div>
    </section>
  );
};
