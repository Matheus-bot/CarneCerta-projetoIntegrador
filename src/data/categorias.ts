import { ImageSourcePropType } from 'react-native';

export type Categoria = {
  id: string;
  nome: string;
  imagem: ImageSourcePropType | null;
};

export const categorias: Categoria[] = [
  { id: 'churrasco', nome: 'Churrasco', imagem: null },
  { id: 'panela', nome: 'Panela', imagem: null },
  { id: 'moida', nome: 'Moída', imagem: null },
  { id: 'fitness', nome: 'Fitness', imagem: null },
  { id: 'desfiar', nome: 'Desfiar', imagem: null },
  { id: 'bifes', nome: 'Bifes', imagem: null },
];
