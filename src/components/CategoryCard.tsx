import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';

import { cores } from '@/constants/cores';

type CategoryCardProps = {
  nome: string;
  imagem: ImageSourcePropType | null;
  onPress?: () => void;
};

export function CategoryCard({ nome, imagem, onPress }: CategoryCardProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={nome}
      style={styles.container}
    >
      <View style={styles.imagemWrap}>
        {imagem && <Image source={imagem} style={styles.imagem} />}
      </View>
      <Text style={styles.nome}>{nome}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 96,
    minHeight: 44,
    marginRight: 12,
    alignItems: 'center',
  },
  imagemWrap: {
    width: 88,
    height: 88,
    borderRadius: 16,
    backgroundColor: cores.superficie,
    overflow: 'hidden',
  },
  imagem: {
    width: '100%',
    height: '100%',
  },
  nome: {
    marginTop: 8,
    color: cores.texto,
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
});
