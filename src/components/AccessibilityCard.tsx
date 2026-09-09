import { StyleSheet, Text, View } from 'react-native';

import { cores } from '@/constants/cores';

export function AccessibilityCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Acessibilidade</Text>
      <Text style={styles.texto}>
        Espaço reservado para recursos de acessibilidade, como conteúdos em Libras e legendas.
      </Text>
      <View style={styles.espacoReservado} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: cores.superficie,
    borderRadius: 16,
    padding: 20,
    marginTop: 8,
  },
  titulo: {
    color: cores.texto,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  texto: {
    color: cores.textoSecundario,
    fontSize: 14,
    lineHeight: 20,
  },
  espacoReservado: {
    height: 100,
    borderRadius: 12,
    backgroundColor: cores.fundo,
    marginTop: 16,
  },
});
