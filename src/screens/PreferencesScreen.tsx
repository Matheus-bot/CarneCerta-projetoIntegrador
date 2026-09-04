import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { PrimaryButton } from '@/components/PrimaryButton';
import { PreferenceSelector } from '@/components/PreferenceSelector';
import { preferenceGroups } from '@/data/mockData';

export default function PreferencesScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ category?: string }>();
  const category = params.category ?? 'Churrasco';
  const [selected, setSelected] = useState<string[]>(['suculenta', 'maturada', 'premium']);

  const selectedLabel = useMemo(
    () => selected.length > 0 ? `${selected.length} preferências marcadas` : 'Nenhuma preferência marcada',
    [selected]
  );

  const toggleSelection = (value: string) => {
    setSelected((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  };

  const handleFind = () => {
    Alert.alert(
      'Resultado do protótipo',
      `Categoria: ${category}\n${selectedLabel}\n\nA recomendação real será implementada em seguida.`,
      [{ text: 'OK', onPress: () => router.back() }]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>Preferências</Text>
          <Text style={styles.title}>Vamos encontrar a carne ideal para seu {category.toLowerCase()}.</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryText}>{selectedLabel}</Text>
        </View>

        {preferenceGroups.map((group) => (
          <PreferenceSelector
            key={group.id}
            title={group.title}
            options={group.options}
            selected={selected}
            onToggle={toggleSelection}
          />
        ))}

        <PrimaryButton title="Encontrar minha carne" onPress={handleFind} style={styles.button} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F3F0',
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 26,
    paddingBottom: 38,
  },
  header: {
    marginBottom: 18,
  },
  eyebrow: {
    color: '#A05D43',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.1,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    color: '#191919',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 38,
  },
  summaryCard: {
    backgroundColor: '#EFE7E1',
    borderRadius: 18,
    padding: 14,
    marginBottom: 22,
  },
  summaryText: {
    color: '#534A46',
    fontSize: 14,
    fontWeight: '700',
  },
  button: {
    marginTop: 12,
  },
});
