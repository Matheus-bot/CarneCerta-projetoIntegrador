import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { PrimaryButton } from '@/components/PrimaryButton';
import { CategoryCarousel } from '@/components/CategoryCarousel';
import { categories, userProfile } from '@/data/mockData';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.greeting}>Olá, {userProfile.name}</Text>
            <Text style={styles.title}>Encontre a carne ideal para cada momento.</Text>
          </View>
          <View style={styles.avatarWrap}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' }}
              style={styles.avatar}
            />
          </View>
        </View>

        <View style={styles.heroCard}>
          <Text style={styles.heroLabel}>CarneCerta</Text>
          <Text style={styles.heroText}>Qualidade, sabor e confiança em cada corte.</Text>
          <PrimaryButton title="Escolher categoria" onPress={() => router.push('/categories')} style={styles.button} />
        </View>

        <View style={styles.sectionHead}>
          <Text style={styles.sectionTitle}>Categorias</Text>
          <Text style={styles.sectionLink}>Ver tudo</Text>
        </View>

        <CategoryCarousel
          categories={categories}
          onSelect={(category) => router.push({ pathname: '/preferences', params: { category: category.name } })}
        />
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
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 30,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    color: '#8D7A72',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  title: {
    marginTop: 8,
    color: '#1D1D1D',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 36,
    maxWidth: 260,
  },
  avatarWrap: {
    width: 52,
    height: 52,
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  heroCard: {
    backgroundColor: '#1B1B1D',
    borderRadius: 28,
    padding: 22,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
  },
  heroLabel: {
    color: '#F3C7A8',
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  heroText: {
    marginTop: 10,
    marginBottom: 18,
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 31,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#D66D3B',
  },
  sectionHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#1E1E1F',
    fontSize: 26,
    fontWeight: '700',
  },
  sectionLink: {
    color: '#9A5F44',
    fontWeight: '700',
  },
});
