import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Layers, ShieldCheck, FileCheck, CheckCircle } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-brand-navyDark text-white overflow-hidden border-b border-brand-graphite">
      {/* Background Industrial Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85"
          alt="Precision mold tooling and industrial injection molding machinery"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000"
        />
        {/* Gradients to ensure pristine contrast and technical aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navyDark via-brand-navyDark/90 to-brand-navy/80" />
        <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28 relative z-10">
        <div className="max-w-3xl">
          {/* Brand Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/30 border border-brand-blueLight/40 text-brand-silverLight text-xs font-mono font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span>JAPEC ENGINEERING | PRECISION MANUFACTURING</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.1] mb-4">
            World-class Precision <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-silverLight to-brand-silver">
              Engineering Company.
            </span>
          </h1>

          {/* Supporting Headline */}
          <h2 className="text-xl sm:text-2xl font-bold text-brand-silverLight font-display mb-6 tracking-normal">
            Built on Precision Dies &amp; Tooling.{' '}
            <span className="text-brand-blueLight">Driven by Quality Molding Services.</span>
          </h2>

          {/* Supporting Description */}
          <p className="text-sm sm:text-base md:text-lg text-brand-silver leading-relaxed mb-8 max-w-2xl font-normal">
            Engineering customized tooling and manufacturing solutions for industrial plastic, thermoset, rubber, and metal components. From mold and die development to precision component production, JAPEC ENGINEERING supports demanding industrial applications with application-focused engineering solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2.5 bg-brand-accent hover:bg-brand-accentHover text-white px-7 py-3.5 rounded font-semibold text-sm shadow-md hover:shadow-xl transition-all group border border-brand-accent"
              id="hero-primary-cta"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/capabilities"
              className="inline-flex items-center justify-center gap-2 bg-brand-navy/80 hover:bg-brand-graphite text-white hover:text-white px-6 py-3.5 rounded font-semibold text-sm border border-brand-silver/40 hover:border-brand-silver transition-all backdrop-blur-sm"
              id="hero-secondary-cta"
            >
              <Layers className="w-4 h-4 text-brand-blueLight" />
              <span>Explore Our Capabilities</span>
            </Link>
          </div>

          {/* Trust points for procurement */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-brand-silver/80 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-brand-blueLight" />
              Drawing-to-Part Precision
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-brand-blueLight" />
              Rabale MIDC, Navi Mumbai
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-brand-blueLight" />
              Direct OEM Specification
            </span>
          </div>
        </div>

        {/* Below Hero: Three Concise Capability Highlights */}
        <div className="mt-14 pt-8 border-t border-brand-graphite/60 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-brand-navy/70 border border-brand-graphite/70 rounded-lg p-5 backdrop-blur-sm hover:border-brand-blue/60 transition-colors group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded bg-brand-blue/20 text-brand-blueLight group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-silver/70">Pillar 01</span>
                <h3 className="font-bold text-base text-white">Precision Dies &amp; Tooling</h3>
              </div>
            </div>
            <p className="text-xs text-brand-silver/80 leading-relaxed">
              Application-specific injection molds, compression tooling, and profile extrusion dies engineered to exact part geometry and shrinkage standards.
            </p>
          </div>

          <div className="bg-brand-navy/70 border border-brand-graphite/70 rounded-lg p-5 backdrop-blur-sm hover:border-brand-blue/60 transition-colors group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded bg-brand-blue/20 text-brand-blueLight group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-silver/70">Pillar 02</span>
                <h3 className="font-bold text-base text-white">Advanced Molding Solutions</h3>
              </div>
            </div>
            <p className="text-xs text-brand-silver/80 leading-relaxed">
              High-repeatability thermoplastic injection molding, thermoset compression (DMC/SMC/Bakelite), and vulcanized elastomer rubber seals.
            </p>
          </div>

          <div className="bg-brand-navy/70 border border-brand-graphite/70 rounded-lg p-5 backdrop-blur-sm hover:border-brand-blue/60 transition-colors group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded bg-brand-blue/20 text-brand-blueLight group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-silver/70">Pillar 03</span>
                <h3 className="font-bold text-base text-white">Multi-Material Manufacturing</h3>
              </div>
            </div>
            <p className="text-xs text-brand-silver/80 leading-relaxed">
              Coordinated cross-material production uniting stamped sheet metal parts, precision turned threaded inserts, and technical polymers under one roof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
