export interface ValueProposition {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    number: '01',
    title: 'Integrated Tooling and Manufacturing',
    description:
      'Support for mold and die development alongside component manufacturing where available, streamlining the transition from part geometry to finished production.',
    iconName: 'Layers',
  },
  {
    number: '02',
    title: 'Multiple Material Categories',
    description:
      'Experience-oriented positioning across engineering plastics, thermosets, rubber, elastomers, and metals, based on actual process capabilities and customer specs.',
    iconName: 'Box',
  },
  {
    number: '03',
    title: 'Customized Industrial Components',
    description:
      'Solutions engineered specifically around customer drawings, physical samples, product specifications, and defined industrial application requirements.',
    iconName: 'Sliders',
  },
  {
    number: '04',
    title: 'Process-Specific Engineering',
    description:
      'Careful selection of suitable tooling architecture and manufacturing processes according to product geometry, wall thicknesses, draft, and chosen material behavior.',
    iconName: 'Cpu',
  },
  {
    number: '05',
    title: 'Cross-Material Manufacturing Support',
    description:
      'Plastic, rubber, and metal component capabilities presented in one coordinated industrial offering, especially advantageous for insert-molded assemblies.',
    iconName: 'Combine',
  },
  {
    number: '06',
    title: 'Customer-Focused Communication',
    description:
      'A clear, collaborative enquiry and engineering review process for discussing technical drawings, raw materials, batch quantities, and manufacturing requirements.',
    iconName: 'MessagesSquare',
  },
];
