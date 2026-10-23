export interface Capability {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  slug: string;
  headline: string;
  description: string;
  metaDescription: string;
  image: string;
  secondaryImage: string;
  materials: string[];
  materialCaveat?: string;
  applications: string[];
  keyHighlights: string[];
  processOverview: string;
  processSteps: { title: string; description: string }[];
  technicalConsiderations: string[];
  relatedCapabilities: { title: string; slug: string }[];
}

export const CAPABILITIES: Capability[] = [
  {
    id: 'plastic-injection-molding',
    number: '01',
    title: 'Plastic Injection Molding',
    shortTitle: 'Injection Molding',
    slug: 'plastic-injection-molding',
    headline: 'Customized Plastic Components Engineered to Exact Specifications',
    description:
      'Manufacturing customized plastic components through injection molding using suitable engineering polymers based on customer drawings, samples, specifications, and application requirements.',
    metaDescription:
      'Precision plastic injection molding for industrial components, housings, and custom enclosures using engineering polymers in Rabale MIDC, Navi Mumbai.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80',
    materials: [
      'PP — Polypropylene',
      'ABS',
      'Nylon',
      'Nylon 6 GF (Glass Filled)',
      'Nylon 66 GF (Glass Filled)',
      'Polycarbonate (PC)',
      'PPA',
      'PPS',
      'SAN',
      'PS',
      'PMMA (Acrylic)',
      'POM (Delrin / Acetal)',
      'PBT',
      'PVC',
      'TPR',
      'TPE',
      'TPV',
      'PU (Polyurethane)',
      'Other suitable polymers, subject to processing capabilities',
    ],
    materialCaveat:
      'Final polymer suitability depends on product geometry, tooling design, actual manufacturing capabilities, and specific customer requirements. Material selection is coordinated per agreed specifications.',
    applications: [
      'Industrial housings and covers',
      'Customized plastic enclosures',
      'Engineered plastic fittings',
      'Electrical and industrial components',
      'Plastic parts incorporating metal inserts',
      'Protective caps and functional shrouds',
    ],
    keyHighlights: [
      'Processing of commodity and specialized engineering polymers',
      'Tooling coordination for single-cavity and multi-cavity production',
      'Precision insert molding with pre-manufactured metal inserts',
      'Rigorous visual and dimensional inspection against drawings',
      'Component optimization based on draft, wall thickness, and shrinkage',
    ],
    processOverview:
      'Plastic injection molding involves feeding polymer granules through a heated barrel where they melt and are forced under high pressure into a precision-machined mold cavity. The molten polymer solidifies within the water-cooled mold to form the finished part with consistent dimensional repeatibility.',
    processSteps: [
      {
        title: 'Drawing & Specification Review',
        description:
          'Analysis of part geometry, wall thickness consistency, draft angles, rib structures, and target tolerance requirements.',
      },
      {
        title: 'Material Evaluation & Grade Selection',
        description:
          'Selecting the appropriate engineering polymer (e.g., Nylon GF, PC, POM, ABS) according to mechanical, thermal, and electrical performance needs.',
      },
      {
        title: 'Tooling Alignment & Setup',
        description:
          'Mounting and clamping the precision injection mold, calibrating nozzle alignment, core-pull actions, and ejection stroke.',
      },
      {
        title: 'Molding Process Execution',
        description:
          'Controlled plasticizing, injection pressure, holding phase, cooling cycle, and automatic or semi-automatic part ejection.',
      },
      {
        title: 'Dimensional & Visual Inspection',
        description:
          'Verification of critical dimensions, gate trim quality, absence of sink marks, flash, or voiding, followed by protective packaging.',
      },
    ],
    technicalConsiderations: [
      'Shrinkage compensation calculated for specific resin grades (e.g., higher for semi-crystalline Nylon vs. amorphous PC)',
      'Gate location and runner balancing for uniform cavity fill and minimal weld-line weakness',
      'Draft angles (typically 1° to 2°) incorporated for clean, scratch-free part ejection',
      'Pre-heating and moisture control for hygroscopic materials like Nylon and Polycarbonate',
    ],
    relatedCapabilities: [
      { title: 'Precision Dies & Mold Development', slug: 'mold-die-development' },
      { title: 'Precision Turned Components & Metal Inserts', slug: 'precision-turned-components' },
      { title: 'Thermoset & Hydraulic Compression Molding', slug: 'compression-molding' },
    ],
  },
  {
    id: 'mold-die-development',
    number: '02',
    title: 'Precision Dies & Mold Development',
    shortTitle: 'Dies & Mold Development',
    slug: 'mold-die-development',
    headline: 'Application-Specific Tooling Engineered for Industrial Manufacturing',
    description:
      'Developing application-specific dies and molds for plastic, thermoset, and extrusion-related manufacturing requirements.',
    metaDescription:
      'Precision mold and die development for injection molding, thermoset compression, and plastic extrusion tooling in Navi Mumbai.',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=80',
    materials: [
      'Pre-hardened Mold Steels',
      'Alloy Tool Steels (P20, H13, D2 equivalents where applicable)',
      'Die Steel Blocks & Core Plates',
      'Hardened Guide Pins, Bushings & Ejector Elements',
      'Beryllium Copper Inserts for specialized heat dissipation (upon review)',
    ],
    materialCaveat:
      'Tooling steel grade selection is determined by anticipated production volume, polymer abrasiveness (such as glass-filled resins), surface finish requirements, and client specifications.',
    applications: [
      'Thermoplastic injection mold cavities and cores',
      'Thermoset compression molding dies',
      'Continuous plastic extrusion die heads and calibrators',
      'Multi-slide and insert-molding tooling assemblies',
      'Prototype and low-to-medium volume production dies',
    ],
    keyHighlights: [
      'Thermoplastic mold development',
      'Thermoset tooling',
      'Extrusion die development',
      'Customized tooling solutions',
      'Tooling based on product geometry and technical requirements',
      'Engineering coordination from product specification to manufacturing',
    ],
    processOverview:
      'Tooling is the foundational pillar of precision manufacturing. Our die and mold development services focus on translating component drawings and part geometry into robust, durable tooling blocks engineered for repeatable component production, smooth ejection, and optimal thermal regulation.',
    processSteps: [
      {
        title: 'Component Geometry Analysis',
        description:
          'Reviewing part geometry, parting line placement, undercuts, required core-pulls, and shrinkage parameters.',
      },
      {
        title: 'Tool Architecture & Die Layout',
        description:
          'Designing cavity count, runner systems, gate design, cooling channel layout, and ejector pin positions.',
      },
      {
        title: 'Precision Machining & Die Assembly',
        description:
          'Machining core, cavity, bolster plates, guide pillars, and ejector plates with meticulous dimensional accuracy.',
      },
      {
        title: 'Fitting & Alignment Verification',
        description:
          'Bench fitting, spotting, cavity polish, slide alignment, and verify seal contact along parting lines.',
      },
      {
        title: 'Sampling, Trial & Parameter Tuning',
        description:
          'Running trial shots, inspecting initial component samples, and conducting dimensional fine-tuning prior to production sign-off.',
      },
    ],
    technicalConsiderations: [
      'Parting line optimization to minimize visible witness lines and prevent flash formation',
      'Thermal circuit design to achieve balanced mold temperature distribution and cycle time efficiency',
      'Ejection force calculations to prevent component distortion during release',
      'Wear resistance considerations when designing tools for abrasive glass-filled resins',
    ],
    relatedCapabilities: [
      { title: 'Plastic Injection Molding', slug: 'plastic-injection-molding' },
      { title: 'Plastic Extrusion Dies & Products', slug: 'plastic-extrusion' },
      { title: 'Thermoset & Hydraulic Compression Molding', slug: 'compression-molding' },
    ],
  },
  {
    id: 'plastic-extrusion',
    number: '03',
    title: 'Plastic Extrusion Dies & Products',
    shortTitle: 'Plastic Extrusion',
    slug: 'plastic-extrusion',
    headline: 'Continuous Profile Extrusion Dies & Application-Specific Sections',
    description:
      'Extrusion die solutions for manufacturing customized continuous plastic profiles and other application-specific extruded products.',
    metaDescription:
      'Custom plastic extrusion dies and profile manufacturing for industrial strips, trims, and sections in Rabale MIDC, Navi Mumbai.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    materials: [
      'PP (Polypropylene)',
      'Flexible PVC',
      'Rigid PVC',
      'PC (Polycarbonate)',
      'PMMA (Acrylic)',
      'Other suitable extrusion materials, subject to actual capabilities',
    ],
    materialCaveat:
      'Processing capabilities and profile cross-sections are evaluated against compound rheology, die flow balance, and customer dimensional specifications.',
    applications: [
      'Customized plastic profiles',
      'Industrial strips and sections',
      'Application-specific extruded components',
      'Protective edging and edge trims',
      'Continuous wiring raceway and channel covers',
      'Flexible and rigid sealing profiles',
    ],
    keyHighlights: [
      'Extrusion die design tailored to polymer melt flow',
      'Continuous profile manufacturing across rigid and flexible thermoplastics',
      'Precision calibration and sizing fixtures for consistent cross-section',
      'Cut-to-length custom finishing based on client specifications',
      'Support for industrial OEMs needing specialized trim and channel profiles',
    ],
    processOverview:
      'Extrusion is a continuous manufacturing process in which raw thermoplastic granules are plasticized inside a heated barrel via a rotating Archimedean screw and forced through a precisely shaped orifice (the extrusion die). The continuous profile is drawn through sizing calibrators and cooling water baths before being cut to length.',
    processSteps: [
      {
        title: 'Profile Cross-Section Review',
        description:
          'Evaluating wall thickness uniformity, hollow chambers, hinge points, and post-extrusion shrinkage behavior.',
      },
      {
        title: 'Extrusion Die & Calibrator Development',
        description:
          'Manufacturing the profile die head and matching vacuum calibrators or sizing plates to control outer geometry.',
      },
      {
        title: 'Material Plasticization & Extrusion',
        description:
          'Feeding controlled polymers through calibrated temperature zones for homogenous, bubble-free melt flow.',
      },
      {
        title: 'Cooling, Drawing & Sizing',
        description:
          'Guiding the hot extrudate through water-cooling channels while maintaining continuous haul-off tension.',
      },
      {
        title: 'In-Line Cut-to-Length & Packaging',
        description:
          'Cutting to specified lengths with square ends, bundle packaging, and dimensional cross-section sampling.',
      },
    ],
    technicalConsiderations: [
      'Flow balancing inside the die to ensure uniform exit velocity across thick and thin wall sections',
      'Die swell compensation tailored to the specific polymer grade being extruded',
      'Vacuum calibration control for maintaining tight exterior tolerances and surface finish',
      'Uniform cooling to prevent warping, twisting, or longitudinal bow in long profiles',
    ],
    relatedCapabilities: [
      { title: 'Precision Dies & Mold Development', slug: 'mold-die-development' },
      { title: 'Plastic Injection Molding', slug: 'plastic-injection-molding' },
      { title: 'Rubber & Elastomer Molding', slug: 'rubber-elastomer-molding' },
    ],
  },
  {
    id: 'compression-molding',
    number: '04',
    title: 'Thermoset & Hydraulic Compression Molding',
    shortTitle: 'Compression Molding',
    slug: 'compression-molding',
    headline: 'High-Integrity Thermoset Molding for Electrical & Industrial Applications',
    description:
      'Manufacturing molded components using suitable thermosetting materials and compression molding processes.',
    metaDescription:
      'Industrial compression molding for DMC, SMC, Bakelite, and thermosetting compounds in Rabale MIDC, Navi Mumbai.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    materials: [
      'DMC (Dough Molding Compound)',
      'SMC (Sheet Molding Compound)',
      'Bakelite (Phenolic Molding Compound)',
      'Urea molding compounds',
      'Melamine molding compounds',
    ],
    materialCaveat:
      'Products are developed to agreed customer drawings and material properties. JAPEC ENGINEERING does not claim that products are certified for flameproof or electrical safety applications unless confirmed by verified customer certifications.',
    applications: [
      'Industrial molded components',
      'Electrical insulation-related parts',
      'Terminal blocks and busbar supports',
      'Heat-resistant industrial covers and brackets',
      'Heavy-duty switchgear insulation parts',
    ],
    keyHighlights: [
      'Hydraulic compression molding presses with calibrated platen heating',
      'Processing of fiber-reinforced thermosets (DMC, SMC) and phenolic resins',
      'High structural rigidity, thermal stability, and electrical insulation properties',
      'Precise charge weight control to ensure complete cavity fill without excessive flash',
      'Deflashing and secondary de-burring of cured components',
    ],
    processOverview:
      'Compression molding is a process where a pre-weighed charge of thermoset material is placed into an open, heated mold cavity. The hydraulic press closes with high tonnage, forcing the material to liquefy, fill the cavity contours, and undergo an irreversible chemical cross-linking (curing) reaction under sustained heat and pressure.',
    processSteps: [
      {
        title: 'Formulation & Charge Preparation',
        description:
          'Weighing exact charges of DMC, SMC, or phenolic compound to achieve proper cavity packing and density.',
      },
      {
        title: 'Heated Mold Pre-conditioning',
        description:
          'Regulating mold platen temperatures to the exact activation range required for polymer cross-linking.',
      },
      {
        title: 'Hydraulic Press Tonnage Application',
        description:
          'Closing the hydraulic ram with programmed breathing cycles to release internal volatiles before full clamp pressure.',
      },
      {
        title: 'Thermoset Curing Cycle',
        description:
          'Maintaining temperature and pressure for the specified duration until complete structural curing is achieved.',
      },
      {
        title: 'Part Ejection & Finishing',
        description:
          'Demolding hot parts, deflashing parting line witness edges, and verifying electrical insulation surfaces.',
      },
    ],
    technicalConsiderations: [
      'Gas venting cycles ("bumping" the press) to evacuate trapped air and moisture during initial compression',
      'Uniform platen heating to prevent uneven cure rates and internal stress pockets',
      'Shrinkage control for DMC/SMC parts incorporating threaded inserts or metal studs',
      'High wear resistance required on mold surfaces due to abrasive glass fibers in DMC/SMC',
    ],
    relatedCapabilities: [
      { title: 'Precision Dies & Mold Development', slug: 'mold-die-development' },
      { title: 'Plastic Injection Molding', slug: 'plastic-injection-molding' },
      { title: 'Precision Turned Components & Metal Inserts', slug: 'precision-turned-components' },
    ],
  },
  {
    id: 'rubber-elastomer-molding',
    number: '05',
    title: 'Rubber & Elastomer Molding',
    shortTitle: 'Rubber Molding',
    slug: 'rubber-elastomer-molding',
    headline: 'Customized Elastomer Moldings, Seals, Gaskets & Flexible Components',
    description:
      'Customized rubber and elastomer molded components designed around application requirements, material properties, and product specifications.',
    metaDescription:
      'Custom rubber and elastomer molding for seals, gaskets, and flexible industrial components in Navi Mumbai.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80',
    materials: [
      'Natural Rubber (NR)',
      'Silicone Elastomers',
      'NBR / Nitrile Rubber (Buna-N)',
      'Other suitable elastomers, subject to actual capabilities',
    ],
    materialCaveat:
      'Material processing capabilities are confirmed based on compound formulation, hardness (Shore A), oil/chemical resistance, and customer drawings. Specialized grades like Viton are evaluated only upon specific company confirmation.',
    applications: [
      'Rubber seals and o-rings',
      'Industrial gaskets and packings',
      'Sealing components for enclosures and housings',
      'Flexible molded dampers and anti-vibration mounts',
      'Application-specific elastomer components',
      'Dust boots and protective diaphragms',
    ],
    keyHighlights: [
      'Compression and transfer molding of engineered elastomers',
      'Hardness customization from soft flexible grades to dense industrial shore ratings',
      'Oil, fuel, and chemical resistance using tailored Nitrile (NBR) compounds',
      'High and low temperature performance using industrial silicone formulations',
      'Precision tooling design for flash-free rubber parting lines',
    ],
    processOverview:
      'Elastomer molding shapes uncured rubber compounds inside precision steel tooling under heat and pressure. The thermal vulcanization process establishes sulfur or peroxide cross-links between polymer chains, transforming raw rubber into an elastic, resilient, dimensionally stable seal or functional part.',
    processSteps: [
      {
        title: 'Compound & Hardness Selection',
        description:
          'Determining Shore A durometer, chemical exposure resistance (oil, grease, water), and operating temperature range.',
      },
      {
        title: 'Preform Preparation',
        description:
          'Cutting pre-weighed rubber blanks or slugs to match cavity geometry and avoid excessive tool overflow.',
      },
      {
        title: 'Vulcanization Under Heat & Pressure',
        description:
          'Closing the heated vulcanizing press to activate curing cross-links across the rubber compound.',
      },
      {
        title: 'De-molding & Deflashing',
        description:
          'Extracting cured elastomer components, followed by precision cryogenic or manual deflashing.',
      },
      {
        title: 'Dimensional & Elasticity Inspection',
        description:
          'Measuring cross-section dimensions, checking flash lines, and verifying compression recovery.',
      },
    ],
    technicalConsiderations: [
      'Rubber thermal shrinkage compensation (typically 1.5% to 3.5% depending on elastomer type and filler loading)',
      'Tear trim groove design in tooling for clean separation of excess flash',
      'Control of vulcanization kinetics to avoid under-curing core or scorching outer layers',
      'Compression set resistance testing for dynamic and static sealing applications',
    ],
    relatedCapabilities: [
      { title: 'Plastic Injection Molding', slug: 'plastic-injection-molding' },
      { title: 'Precision Dies & Mold Development', slug: 'mold-die-development' },
      { title: 'Sheet Metal Pressing & Stamping', slug: 'sheet-metal-stamping' },
    ],
  },
  {
    id: 'sheet-metal-stamping',
    number: '06',
    title: 'Sheet Metal Pressing & Stamping',
    shortTitle: 'Sheet Metal Stamping',
    slug: 'sheet-metal-stamping',
    headline: 'Precision Stamped Metal Components, Press Parts & Industrial Brackets',
    description:
      'Manufacturing sheet metal press parts and stamped metal components according to customer drawings and dimensional requirements.',
    metaDescription:
      'Custom sheet metal press parts and stamped metal components for industrial applications in Rabale MIDC, Navi Mumbai.',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    materials: [
      'Mild Steel (CRCA / HR sheets)',
      'Stainless Steel (SS 304, SS 316, SS 202 grades)',
      'Brass & Copper Alloys',
      'Aluminum Sheets',
      'Spring Steel & Specialized Alloys (upon drawing review)',
    ],
    materialCaveat:
      'Material thickness, gauge tolerances, and stamping tooling complexity are agreed per customer engineering drawings and specified requirements.',
    applications: [
      'Custom sheet metal parts',
      'Pressed and stamped components',
      'Component manufacturing for industrial applications',
      'Mounting brackets, clips, and earthing clamps',
      'Electrical enclosure brackets and chassis components',
      'Metal parts developed to agreed specifications',
    ],
    keyHighlights: [
      'Custom sheet metal parts',
      'Pressed and stamped components',
      'Component manufacturing for industrial applications',
      'Metal parts developed to agreed specifications',
      'Precision punch and die tooling coordination',
      'Deburring, hole punching, bending, and forming capabilities',
    ],
    processOverview:
      'Sheet metal stamping converts flat metal strip or sheet stock into specified structural shapes using mechanical or hydraulic press tooling. Operations include blanking, piercing, bending, forming, and coining to deliver rigid, high-strength metal components for mechanical and electrical assemblies.',
    processSteps: [
      {
        title: 'Drawing & Blank Layout Review',
        description:
          'Optimizing strip utilization, grain direction, bend radii, and hole-to-edge clearances.',
      },
      {
        title: 'Press Tooling Setup',
        description:
          'Aligning upper punch blocks and lower die plates, setting stroke length and shut height.',
      },
      {
        title: 'Stamping & Forming Operation',
        description:
          'Executing progressive or stage blanking, piercing, and precision bending across press strokes.',
      },
      {
        title: 'Deburring & Edge Conditioning',
        description:
          'Removing stamping burrs through vibratory finishing, tumbling, or manual edge conditioning.',
      },
      {
        title: 'Dimensional Inspection & Quality Check',
        description:
          'Verifying hole center distances, bend angles, flatness, and critical interface dimensions.',
      },
    ],
    technicalConsiderations: [
      'Springback compensation calculated into forming die angles based on material yield strength',
      'Minimum bend radius control to prevent outer fiber cracking in high-strength steels or aluminum',
      'Die clearance calibration (typically 5% to 10% of material thickness per side) for clean shear cuts and minimal burr',
      'Proper grain direction orientation relative to major bend lines to maximize mechanical fatigue life',
    ],
    relatedCapabilities: [
      { title: 'Precision Turned Components & Metal Inserts', slug: 'precision-turned-components' },
      { title: 'Precision Dies & Mold Development', slug: 'mold-die-development' },
      { title: 'Plastic Injection Molding', slug: 'plastic-injection-molding' },
    ],
  },
  {
    id: 'precision-turned-components',
    number: '07',
    title: 'Precision Turned Components & Metal Inserts',
    shortTitle: 'Turned Metal & Inserts',
    slug: 'precision-turned-components',
    headline: 'Engineered Turned Metal Parts & Threaded Inserts for Molded Assemblies',
    description:
      'Manufacturing turned metal components that can serve as inserts and functional elements in plastic injection-molded products.',
    metaDescription:
      'Precision turned metal components and threaded inserts for plastic injection molding and industrial assemblies in Navi Mumbai.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
    materials: [
      'Brass (Free Cutting Brass grades, CW614N / IS 319)',
      'Mild Steel & Carbon Steels',
      'Stainless Steel (SS 303, SS 304)',
      'Aluminum Alloys',
      'Copper alloys for electrical conductivity',
    ],
    materialCaveat:
      'Component tolerances, thread standards (Metric, Imperial, UNC, UNF), and surface finishes are manufactured according to customer-approved specifications and drawings.',
    applications: [
      'Threaded metal inserts for plastic molding (knurled / diamond knurl)',
      'Precision-turned components',
      'Metal parts used in insert molding',
      'Customized cylindrical components',
      'Application-specific metal fittings',
      'Spacers, standoffs, bushings, and guide pins',
    ],
    keyHighlights: [
      'Specialized manufacturing of threaded brass and steel inserts for plastic molding',
      'Helical, diamond, and straight knurling for strong mechanical pull-out and torque resistance',
      'Precision external and internal threading to exact gauge standards',
      'Seamless integration into JAPEC ENGINEERING’s plastic injection molding process',
      'Turned bushings, studs, shafts, and customized cylindrical fittings',
    ],
    processOverview:
      'Turned metal components are produced by rotating metal bar stock on precision lathes while cutting tools shave away excess material to create symmetrical cylindrical profiles, steps, grooves, knurls, and threads. These parts frequently serve as robust metallic inserts molded directly into plastic housings to deliver durable threaded fastening points.',
    processSteps: [
      {
        title: 'Drawing & Bar Stock Selection',
        description:
          'Verifying dimensions, tolerance bands (e.g. h7, h8), knurl pitch, and material machinability ratings.',
      },
      {
        title: 'Turning & Profiling Setup',
        description:
          'Setting cutting tools, collets, turning speeds, and feed rates to achieve required surface finishes.',
      },
      {
        title: 'Knurling & Threading Operation',
        description:
          'Applying precision knurling for insert retention and single-point or tap threading for standard pitch screws.',
      },
      {
        title: 'Parting-Off & Degreasing',
        description:
          'Parting components from bar stock, washing away cutting coolants, and chip cleaning.',
      },
      {
        title: 'Thread & Dimension Inspection',
        description:
          'Checking pitch diameter using GO/NO-GO thread plug gauges, caliper checks, and concentricity verification.',
      },
    ],
    technicalConsiderations: [
      'Knurl design: Diamond knurling provides high resistance against both rotational torque and axial pull-out forces',
      'Undercuts and retention grooves designed into inserts prevent plastic creep and pull-out under load',
      'Lead-in chamfers ensure effortless positioning of inserts onto mold core pins during injection molding',
      'Tight concentricity and OD control to prevent mold cavity damage during insert closure',
    ],
    relatedCapabilities: [
      { title: 'Plastic Injection Molding', slug: 'plastic-injection-molding' },
      { title: 'Sheet Metal Pressing & Stamping', slug: 'sheet-metal-stamping' },
      { title: 'Precision Dies & Mold Development', slug: 'mold-die-development' },
    ],
  },
];
