import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { PrimaryButton } from '@/components/PrimaryButton';
import { userProfile } from '@/data/mockData';

export default function LoginScreen() {
  const [email, setEmail] = useState(userProfile.email);
  const [password, setPassword] = useState('123456');

  const handleLogin = () => {
    router.replace('/home');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.logoWrap}>
          <View style={styles.logoBadge}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80' }}
              style={styles.logoImage}
            />
          </View>
          <Text style={styles.brand}>CarneCerta</Text>
          <Text style={styles.subtitle}>Seu melhor corte, com clareza e confiança.</Text>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="seuemail@exemplo.com"
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            secureTextEntry
            style={styles.input}
          />

          <PrimaryButton title="Entrar" onPress={handleLogin} style={styles.primaryButton} />

          <Pressable style={styles.createAccount}>
            <Text style={styles.createAccountText}>Criar conta</Text>
          </Pressable>
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
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  logoWrap: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoBadge: {
    width: 88,
    height: 88,
    borderRadius: 28,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#E7DAD2',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  brand: {
    fontSize: 34,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  subtitle: {
    marginTop: 8,
    color: '#726A64',
    fontSize: 15,
    textAlign: 'center',
  },
  formCard: {
    backgroundColor: '#FFF',
    borderRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    elevation: 6,
  },
  label: {
    color: '#3C3432',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F6F4F3',
    borderWidth: 1,
    borderColor: '#EEE8E4',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 18,
    fontSize: 15,
    color: '#1D1D1D',
  },
  primaryButton: {
    marginTop: 10,
  },
  createAccount: {
    marginTop: 18,
    alignItems: 'center',
    paddingVertical: 8,
  },
  createAccountText: {
    color: '#A4502D',
    fontSize: 15,
    fontWeight: '700',
  },
});
