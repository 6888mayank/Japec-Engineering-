export interface WorkflowStep {
  step: number;
  stageNumber: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    stageNumber: '01',
    title: 'Requirement Discussion',
    description:
      'Understand the customer’s application, product requirement, operational environment, and expected mechanical, thermal, or electrical use.',
    deliverables: ['Application parameters', 'Operating conditions review', 'Initial feasibility check'],
  },
  {
    step: 2,
    stageNumber: '02',
    title: 'Drawing & Specification Review',
    description:
      'Review available technical 2D/3D drawings, physical samples, critical dimensions, tolerance expectations, material preferences, and estimated quantity requirements.',
    deliverables: ['Tolerance feasibility check', 'Sample / drawing cross-examination', 'Material suitability assessment'],
  },
  {
    step: 3,
    stageNumber: '03',
    title: 'Tooling & Process Planning',
    description:
      'Determine whether new mold development, extrusion die development, press stamping dies, or precision turning setups are required to manufacture the component.',
    deliverables: ['Tooling configuration layout', 'Cavity and parting line plan', 'Manufacturing route definition'],
  },
  {
    step: 4,
    stageNumber: '04',
    title: 'Material & Manufacturing Selection',
    description:
      'Evaluate the most suitable polymer resin, thermoset compound, elastomer, or metal alloy along with the optimal production process based on agreed specifications.',
    deliverables: ['Grade specification confirmation', 'Processing parameter agreement', 'Shrinkage & allowance validation'],
  },
  {
    step: 5,
    stageNumber: '05',
    title: 'Component Manufacturing',
    description:
      'Manufacture components using the applicable molding, extrusion, pressing, stamping, or turning process available, under controlled machine parameters.',
    deliverables: ['Production run execution', 'Cycle time & parameter monitoring', 'Component lot control'],
  },
  {
    step: 6,
    stageNumber: '06',
    title: 'Inspection Against Requirements',
    description:
      'Check the relevant product dimensions, visual quality, gate or flash conditions, and functional interfaces according to the agreed customer inspection criteria.',
    deliverables: ['Dimensional check against drawings', 'Visual surface review', 'Fitment verification with mating parts'],
  },
  {
    step: 7,
    stageNumber: '07',
    title: 'Dispatch & Coordination',
    description:
      'Coordinate secure industrial packing, dispatch logistics, delivery documentation, and follow-up communication for further component requirements.',
    deliverables: ['Protective industrial packing', 'Despatch documentation', 'Customer feedback & reorder coordination'],
  },
];
