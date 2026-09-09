import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';

import { cores } from '@/constants/cores';

type ButtonProps = {
  titulo: string;
  onPress: () => void;
  variante?: 'primario' | 'secundario';
  style?: StyleProp<ViewStyle>;
};

export function Button({ titulo, onPress, variante = 'primario', style }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={titulo}
      style={({ pressed }) => [
        styles.base,
        variante === 'secundario' && styles.secundario,
        pressed && styles.pressionado,
        style,
      ]}
    >
      <Text style={[styles.texto, variante === 'secundario' && styles.textoSecundario]}>
        {titulo}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: cores.vermelho,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  secundario: {
    backgroundColor: cores.superficie,
  },
  pressionado: {
    opacity: 0.85,
  },
  texto: {
    color: cores.texto,
    fontSize: 16,
    fontWeight: '700',
  },
  textoSecundario: {
    color: cores.texto,
  },
});
