import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { AccessibilityCard } from '@/components/AccessibilityCard';
import { Banner } from '@/components/Banner';
import { CategoryCard } from '@/components/CategoryCard';
import { Header } from '@/components/Header';
import { MeatCard } from '@/components/MeatCard';
import { cores } from '@/constants/cores';
import { carnes } from '@/data/carnes';
import { categorias } from '@/data/categorias';

export default function PrincipalScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <Header />
      <Banner />

      <Text style={styles.tituloSecao}>Categorias</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listaCategorias}
      >
        {categorias.map((categoria) => (
          <CategoryCard key={categoria.id} nome={categoria.nome} imagem={categoria.imagem} />
        ))}
      </ScrollView>

      <Text style={styles.tituloSecao}>Catálogo de Carnes</Text>
      <View style={styles.grade}>
        {carnes.map((carne) => (
          <MeatCard key={carne.id} nome={carne.nome} imagem={carne.imagem} />
        ))}
      </View>

      <AccessibilityCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  conteudo: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 32,
  },
  tituloSecao: {
    color: cores.texto,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 12,
    marginTop: 8,
  },
  listaCategorias: {
    paddingBottom: 8,
    marginBottom: 16,
  },
  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
