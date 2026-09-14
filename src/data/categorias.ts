import { ImageSourcePropType } from 'react-native';

export type Categoria = {
  id: string;
  nome: string;
  imagem: ImageSourcePropType | null;
};

export const categorias: Categoria[] = [
  {
    id: 'churrasco',
    nome: 'Churrasco',
    imagem: require('../../assets/imagens/categorias/churrasco/parachurrasco.png'),
  },
  {
    id: 'panela',
    nome: 'Panela',
    imagem: require('../../assets/imagens/categorias/panela/parapanela.jpg'),
  },
  {
    id: 'moida',
    nome: 'Moída',
    imagem: require('../../assets/imagens/categorias/moida/parahamburguer.jpg'),
  },
  {
    id: 'fitness',
    nome: 'Fitness',
    imagem: require('../../assets/imagens/categorias/fitness/parafitness.webp'),
  },
  {
    id: 'desfiar',
    nome: 'Desfiar',
    imagem: require('../../assets/imagens/categorias/desfiar/paradesfiar.jpg'),
  },
  {
    id: 'bifes',
    nome: 'Bifes',
    imagem: require('../../assets/imagens/categorias/bifes/parabife.jpg'),
  },
];
