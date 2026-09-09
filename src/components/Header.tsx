import { StyleSheet, Text, View } from 'react-native';

import { cores } from '@/constants/cores';

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.marca}>CARNE CERTA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  marca: {
    color: cores.texto,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1,
  },
});
