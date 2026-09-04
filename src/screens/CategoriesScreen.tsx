import { router } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { CategoryCarousel } from '@/components/CategoryCarousel';
import { PrimaryButton } from '@/components/PrimaryButton';
import { categories } from '@/data/mockData';

export default function CategoriesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>Seleção</Text>
          <Text style={styles.title}>Escolha o tipo de carne</Text>
        </View>

        <CategoryCarousel
          categories={categories}
          onSelect={(category) => router.push({ pathname: '/preferences', params: { category: category.name } })}
        />

        <View style={styles.footer}>
          <PrimaryButton title="Continuar" onPress={() => router.back()} />
        </View>
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
    paddingTop: 26,
    paddingBottom: 28,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 18,
  },
  eyebrow: {
    color: '#A05D43',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    color: '#1E1E1F',
    fontSize: 32,
    fontWeight: '800',
  },
  footer: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
});
