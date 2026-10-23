export interface Industry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  componentCapabilities: string[];
  materialsSupported: string[];
  disclaimer?: string;
  iconName: string;
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'flameproof-equipment',
    title: 'Flameproof Equipment Manufacturing',
    subtitle: 'Custom Tooling & Precision Component Support for Flameproof OEMs',
    description:
      'Providing customized component manufacturing, precision tooling, and insert-molded components that support manufacturers of flameproof and industrial enclosure equipment. JAPEC ENGINEERING works to customer drawings and specifications to supply dimensional parts, specialized gaskets, and metallic inserts.',
    componentCapabilities: [
      'Customized plastic and thermoset component manufacturing to OEM drawings',
      'Threaded brass inserts and precision metal fittings for enclosure mounting',
      'Elastomer sealing gaskets and protective grommets for enclosure perimeters',
      'Precision tooling development for specialized component geometries',
    ],
    materialsSupported: ['Thermoset DMC/SMC', 'Glass-Filled Nylon', 'Polycarbonate', 'Brass Inserts', 'NBR Seals'],
    disclaimer:
      'Notice: JAPEC ENGINEERING supplies customized components and tooling support based strictly on client specifications. We do not represent ourselves as a manufacturer of complete certified flameproof equipment, nor do we claim explosion-proof or fire ratings without verified customer certifications.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'industrial-electrical',
    title: 'Industrial Electrical Equipment',
    subtitle: 'Insulation Components, Terminal Blocks & Metering Enclosures',
    description:
      'Manufacturing robust dielectric components, insulating bases, terminal barriers, and structural housings for switchgear, transformers, motor control centers, and power distribution apparatus.',
    componentCapabilities: [
      'High-dielectric DMC and Bakelite terminal boards and phase barriers',
      'Customized electrical housings, junction boxes, and transparent meter covers',
      'Copper and brass turned terminal studs and grounding inserts',
      'Sheet metal brackets, din-rail clips, and chassis earthing plates',
    ],
    materialsSupported: ['DMC / SMC', 'Phenolic Bakelite', 'Polycarbonate (PC)', 'Polyamide (Nylon)', 'Brass'],
    iconName: 'Zap',
  },
  {
    id: 'electronics-mfg',
    title: 'Electrical and Electronics Manufacturing',
    subtitle: 'Precision Enclosures, Connectors & Micro-Tolerance Housings',
    description:
      'Delivering dimensionally stable plastic housings, internal PCB mounting bosses, coil bobbins, and precision-turned pins for electronic sub-assemblies and industrial instrumentation.',
    componentCapabilities: [
      'Tight-tolerance polymer housings with snap-fit joints and sonic-weld ribs',
      'Over-molded and insert-molded multi-pin connector headers',
      'Flexible elastomer keypads, cable strain relief boots, and wire grommets',
      'Thin-gauge stamped shielding cans and internal grounding clips',
    ],
    materialsSupported: ['ABS', 'Polycarbonate', 'PBT', 'POM (Acetal)', 'Silicone', 'SS 304'],
    iconName: 'Cpu',
  },
  {
    id: 'industrial-machinery',
    title: 'Industrial Machinery and Equipment',
    subtitle: 'Wear-Resistant Components, Bushings & Machine Tooling',
    description:
      'Supporting capital equipment builders and machinery manufacturers with low-friction engineering polymer components, turned guide shafts, damping pads, and stamped structural brackets.',
    componentCapabilities: [
      'Engineering plastic wear pads, roller bushings, and sliding guides',
      'Vibration-dampening molded rubber pads and mounting isolators',
      'Heavy-duty turned steel shafts, spacers, and locating dowels',
      'Stamping press brackets, belt guards, and mechanical shroud covers',
    ],
    materialsSupported: ['Nylon 6 / 66 GF', 'POM', 'NBR / Natural Rubber', 'CRCA / Mild Steel', 'Stainless Steel'],
    iconName: 'Cog',
  },
  {
    id: 'plastic-polymer-products',
    title: 'Plastic and Polymer Products',
    subtitle: 'Tooling Development & Extended Molding Capacity for Processors',
    description:
      'Partnering with plastic processing businesses, product converters, and assemblers requiring specialized mold development, extrusion die design, or outsourced injection molding production.',
    componentCapabilities: [
      'Complete die and mold development from 3D CAD models to trial parts',
      'Continuous profile extrusion die heads and profile calibration units',
      'Multi-cavity production of high-volume technical polymer items',
      'Insert molding solutions incorporating supplied or turned metal inserts',
    ],
    materialsSupported: ['PP', 'ABS', 'Nylon', 'PVC (Rigid & Flex)', 'PMMA', 'TPE / TPV / PU'],
    iconName: 'Layers',
  },
  {
    id: 'rubber-elastomer-products',
    title: 'Rubber and Elastomer Products',
    subtitle: 'Vulcanized Sealing Solutions, Diaphragms & Custom Packings',
    description:
      'Engineering resilient elastomeric components for equipment fluid containment, environmental weatherproofing, and vibration isolation across challenging operating environments.',
    componentCapabilities: [
      'Custom-profile compression molded rubber gaskets and o-rings',
      'Oil and hydrocarbon resistant NBR sealing washers and diaphragms',
      'High-temperature silicone seals and food/industrial grade elastomer parts',
      'Elastomer-bonded metal washers and hybrid damping elements',
    ],
    materialsSupported: ['Nitrile (NBR)', 'Natural Rubber (NR)', 'Silicone Elastomers'],
    iconName: 'Radio',
  },
  {
    id: 'metal-fabrication',
    title: 'Metal Fabrication and Engineering',
    subtitle: 'Turned Inserts, Stamped Formings & Secondary Assemblies',
    description:
      'Supplying metal fabrication shops and engineering contractors with precision turned elements, threaded bushings, press-formed brackets, and punched mounting hardware.',
    componentCapabilities: [
      'Turned threaded inserts, weld studs, and alignment pins',
      'Punched, pierced, and formed sheet metal brackets and gussets',
      'Deburred and surface-finished sub-assembly hardware',
      'Cross-material assemblies joining stamped sheet metal with turned inserts',
    ],
    materialsSupported: ['Mild Steel CRCA / HR', 'Stainless Steel 304 / 316', 'Free-Cutting Brass', 'Aluminum'],
    iconName: 'Wrench',
  },
  {
    id: 'industrial-oems',
    title: 'Industrial OEMs & Component Suppliers',
    subtitle: 'Integrated Multi-Material Sourcing for Tier-1 & Tier-2 Suppliers',
    description:
      'Acting as a coordinated manufacturing partner capable of delivering plastic, thermoset, rubber, and metal parts under a unified quality inspection and communication framework.',
    componentCapabilities: [
      'Unified development for assemblies requiring both plastic housings and metal inserts',
      'Strict adherence to customer drawing dimensional tolerances and material specs',
      'Scheduled batch manufacturing aligned with OEM procurement cycles',
      'Dedicated technical discussions for component optimization and cost-effective tooling',
    ],
    materialsSupported: ['All Engineering Polymers', 'Thermosets', 'Elastomers', 'Ferrous & Non-Ferrous Metals'],
    iconName: 'Factory',
  },
];
