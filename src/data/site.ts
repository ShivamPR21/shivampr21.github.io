export const researchThemes = [
  {
    index: '01',
    accent: 'sun',
    title: 'Objectives → behaviour',
    status: 'Active direction',
    description: 'How reward, preference, and verifiable feedback shape what a policy actually learns—and where intended behaviour separates from observed action.',
    topics: ['Reinforcement learning', 'Preference learning', 'Policy optimisation', 'Behavioural evaluation'],
  },
  {
    index: '02',
    accent: 'coral',
    title: 'Representations → futures',
    status: 'Active direction',
    description: 'How latent world-action models encode possible futures, and whether a policy’s decisions depend on information that survives intervention and distribution shift.',
    topics: ['World models', 'VLA policies', 'JEPA-style learning', 'Interpretability'],
  },
  {
    index: '03',
    accent: 'lime',
    title: 'Compute → evidence',
    status: 'Established practice',
    description: 'The kernels, distributed systems, and evaluation infrastructure that shorten the distance between a mathematical question and a trustworthy empirical answer.',
    topics: ['GPU kernels', 'Distributed training', 'Efficient inference', 'Scalable evaluation'],
  },
] as const;
