import { ImageSourcePropType } from 'react-native';

export type Carne = {
  id: string;
  nome: string;
  imagem: ImageSourcePropType | null;
};

export const carnes: Carne[] = [
  { id: 'acem', nome: 'Acém', imagem: null },
  { id: 'paleta', nome: 'Paleta', imagem: null },
  { id: 'musculo', nome: 'Músculo', imagem: null },
  { id: 'picanha', nome: 'Picanha', imagem: null },
];
