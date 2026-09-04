export type Category = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  accent: string;
  image: string;
};

export type PreferenceOption = {
  id: string;
  label: string;
};

export const userProfile = {
  name: 'Lucas',
  email: 'lucas@carnacerta.com',
};

export const categories: Category[] = [
  {
    id: 'churrasco',
    name: 'Churrasco',
    subtitle: 'Conexão e sabor',
    description: 'Cortes intensos para reuniões, fogo e boa conversa.',
    accent: '#D9613C',
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'panela',
    name: 'Panela',
    subtitle: 'Cozimento e conforto',
    description: 'Carnes versáteis para receitas caseiras e sabor marcante.',
    accent: '#C96A46',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hamburguer',
    name: 'Hambúrguer',
    subtitle: 'Jantar rápido e irresistível',
    description: 'Textura macia, sabor intenso e visual surpreendente.',
    accent: '#E4A658',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'bife',
    name: 'Bife',
    subtitle: 'Elegância e textura',
    description: 'Cortes premium para experiências refinadas e marcantes.',
    accent: '#B85D58',
    image:
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80',
  },
];

export const preferenceGroups: Array<{
  id: string;
  title: string;
  options: PreferenceOption[];
}> = [
  {
    id: 'preference-1',
    title: 'Preferência 1',
    options: [
      { id: 'macia', label: 'Macia' },
      { id: 'suculenta', label: 'Súculenta' },
      { id: 'firme', label: 'Firme' },
    ],
  },
  {
    id: 'preference-2',
    title: 'Preferência 2',
    options: [
      { id: 'maturada', label: 'Maturada' },
      { id: 'apimentada', label: 'Apimentada' },
      { id: 'leves', label: 'Mais leve' },
    ],
  },
  {
    id: 'preference-3',
    title: 'Preferência 3',
    options: [
      { id: 'familia', label: 'Para família' },
      { id: 'rapida', label: 'Rápida' },
      { id: 'premium', label: 'Premium' },
    ],
  },
];
