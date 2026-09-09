import { StyleSheet, Text, View } from 'react-native';

import { cores } from '@/constants/cores';

export default function PrincipalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela Principal (em construção)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: cores.texto,
    fontSize: 16,
    fontWeight: '600',
  },
});
