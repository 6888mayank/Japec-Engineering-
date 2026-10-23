export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  materialHighlight: string;
  applications: string[];
  image: string;
  processSlug: string;
}

export type ProductCategory =
  | 'all'
  | 'plastic-molding'
  | 'housings-covers'
  | 'tooling-dies'
  | 'extruded-profiles'
  | 'thermoset'
  | 'rubber-elastomer'
  | 'sheet-metal'
  | 'turned-metal'
  | 'metal-inserts';

export interface CategoryFilter {
  id: ProductCategory;
  label: string;
}

export const PRODUCT_CATEGORIES: CategoryFilter[] = [
  { id: 'all', label: 'All Products & Applications' },
  { id: 'plastic-molding', label: 'Plastic Injection-Molded Components' },
  { id: 'housings-covers', label: 'Industrial Plastic Housings & Covers' },
  { id: 'tooling-dies', label: 'Precision Mold & Die Tooling' },
  { id: 'extruded-profiles', label: 'Extruded Plastic Profiles' },
  { id: 'thermoset', label: 'Thermoset Molded Components' },
  { id: 'rubber-elastomer', label: 'Rubber & Elastomer Parts' },
  { id: 'sheet-metal', label: 'Sheet Metal Press Parts' },
  { id: 'turned-metal', label: 'Turned Metal Components' },
  { id: 'metal-inserts', label: 'Metal Inserts for Plastic Molding' },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Engineered Polymer Brackets & Bushings',
    category: 'plastic-molding',
    categoryLabel: 'Plastic Injection-Molded Components',
    description:
      'Precision injection-molded structural components manufactured in glass-filled nylon (PA6 GF / PA66 GF) and POM for mechanical stability, low friction, and dimensional rigidity.',
    materialHighlight: 'Nylon 6 GF30 / POM / PBT',
    applications: ['Mechanical pivots', 'Industrial gear housings', 'Conveyor chain guides', 'Apparatus supports'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    processSlug: 'plastic-injection-molding',
  },
  {
    id: 'prod-2',
    name: 'Heavy-Duty Industrial Equipment Enclosures',
    category: 'housings-covers',
    categoryLabel: 'Industrial Plastic Housings & Covers',
    description:
      'Robust external enclosures and protective terminal covers molded in impact-resistant ABS and Polycarbonate (PC) featuring integrated sealing grooves and molded bosses.',
    materialHighlight: 'Polycarbonate (PC) / ABS Alloy',
    applications: ['Electrical junction enclosures', 'Instrumentation covers', 'Control panel bezels', 'Industrial display surrounds'],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    processSlug: 'plastic-injection-molding',
  },
  {
    id: 'prod-3',
    name: 'Multi-Cavity Precision Injection Tooling Block',
    category: 'tooling-dies',
    categoryLabel: 'Precision Mold & Die Tooling',
    description:
      'Engineered mold core and cavity sets manufactured from pre-hardened alloy tool steel, featuring balanced cooling channels and hardened guide pin bushings for high-volume repeat runs.',
    materialHighlight: 'P20 / H13 Equivalent Die Steels',
    applications: ['Thermoplastic production molds', 'Multi-impression die assemblies', 'Interchangeable insert cassettes'],
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    processSlug: 'mold-die-development',
  },
  {
    id: 'prod-4',
    name: 'Continuous Rigid & Flexible PVC Edge Profiles',
    category: 'extruded-profiles',
    categoryLabel: 'Extruded Plastic Profiles',
    description:
      'Application-specific continuous profile sections extruded through custom dies with tight cross-sectional tolerance control and consistent wall thickness.',
    materialHighlight: 'Rigid & Plasticized PVC / Polypropylene (PP)',
    applications: ['Panel edge trims', 'Wiring raceway covers', 'Conduit guide sections', 'Equipment perimeter sealing'],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    processSlug: 'plastic-extrusion',
  },
  {
    id: 'prod-5',
    name: 'DMC / SMC Electrical Insulation Terminal Boards',
    category: 'thermoset',
    categoryLabel: 'Thermoset Molded Components',
    description:
      'High-rigidity compression-molded components utilizing Dough Molding Compound (DMC) and Sheet Molding Compound (SMC) for applications requiring high dielectric strength and heat deflection.',
    materialHighlight: 'DMC / SMC / Bakelite (Phenolic)',
    applications: ['Terminal insulator boards', 'Switchgear busbar supports', 'Arc chute barriers', 'Heavy transformer spacers'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    processSlug: 'compression-molding',
  },
  {
    id: 'prod-6',
    name: 'Oil-Resistant Nitrile (NBR) Gaskets & O-Rings',
    category: 'rubber-elastomer',
    categoryLabel: 'Rubber & Elastomer Parts',
    description:
      'Custom vulcanized elastomer sealing gaskets molded from NBR and silicone compounds, engineered for resilience, low compression set, and fluid barrier performance.',
    materialHighlight: 'Nitrile (NBR) / Silicone / Natural Rubber',
    applications: ['Enclosure flange seals', 'Hydraulic fluid gaskets', 'Vibration damping grommets', 'Dust ingress barriers'],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
    processSlug: 'rubber-elastomer-molding',
  },
  {
    id: 'prod-7',
    name: 'Formed Stainless Steel & CRCA Mounting Brackets',
    category: 'sheet-metal',
    categoryLabel: 'Sheet Metal Press Parts',
    description:
      'Precision punched, pierced, and formed sheet metal press parts produced to customer drawings with burr-free edges and accurate hole-center distances.',
    materialHighlight: 'SS 304 / CRCA Mild Steel / Brass',
    applications: ['Equipment mounting clips', 'Internal chassis framing', 'Earthing clamps', 'Structural support brackets'],
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    processSlug: 'sheet-metal-stamping',
  },
  {
    id: 'prod-8',
    name: 'Precision Turned Cylindrical Shafts & Bushings',
    category: 'turned-metal',
    categoryLabel: 'Turned Metal Components',
    description:
      'Symmetrical cylindrical metal parts manufactured with tight diametrical tolerances, precision chamfers, and smooth bearing surface finishes.',
    materialHighlight: 'Free-Cutting Brass / Mild Steel / SS 303',
    applications: ['Guide shafts', 'Spacing collars', 'Hinge pins', 'Custom mechanical couplings'],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    processSlug: 'precision-turned-components',
  },
  {
    id: 'prod-9',
    name: 'Diamond-Knurled Brass Threaded Inserts',
    category: 'metal-inserts',
    categoryLabel: 'Metal Inserts for Plastic Molding',
    description:
      'Turned brass inserts featuring aggressive diamond knurls and undercut retention grooves specifically designed to be positioned in plastic injection molds for high pull-out strength.',
    materialHighlight: 'IS 319 / CW614N Brass Grade',
    applications: ['Injection mold core inserts', 'Molded-in fastener anchors', 'Terminal post inserts', 'Threaded bosses'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    processSlug: 'precision-turned-components',
  },
];
