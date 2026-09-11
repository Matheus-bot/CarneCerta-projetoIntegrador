import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';

import { cores } from '@/constants/cores';

type MeatCardProps = {
  nome: string;
  imagem: ImageSourcePropType | null;
  onPress?: () => void;
};

export function MeatCard({ nome, imagem, onPress }: MeatCardProps) {
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
    width: '48%',
    minHeight: 44,
    marginBottom: 16,
  
  },
  imagemWrap: {
    width: '100%',
    height: 110,
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
    fontSize: 14,
    fontWeight: '600',
  },
});
