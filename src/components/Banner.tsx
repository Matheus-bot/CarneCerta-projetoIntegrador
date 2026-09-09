import { StyleSheet, View } from 'react-native';

import { cores } from '@/constants/cores';

export function Banner() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    backgroundColor: cores.superficie,
    marginBottom: 24,
  },
});
