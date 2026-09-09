import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { cores } from '@/constants/cores';

export default function CadastroScreen() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Criar conta</Text>
      </View>

      <View style={styles.formulario}>
        <Input rotulo="Nome" valor={nome} aoAlterarTexto={setNome} placeholder="Seu nome" />
        <Input
          rotulo="E-mail"
          valor={email}
          aoAlterarTexto={setEmail}
          placeholder="seuemail@exemplo.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input rotulo="Senha" valor={senha} aoAlterarTexto={setSenha} placeholder="Sua senha" senha />
        <Input
          rotulo="Confirmar senha"
          valor={confirmarSenha}
          aoAlterarTexto={setConfirmarSenha}
          placeholder="Repita a senha"
          senha
        />

        <Button titulo="CADASTRAR" onPress={() => router.replace('/')} />

        <Pressable
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel="Voltar para o login"
          style={styles.linkVoltar}
        >
          <Text style={styles.textoLink}>Voltar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  conteudo: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  cabecalho: {
    alignItems: 'center',
    marginBottom: 32,
  },
  titulo: {
    color: cores.texto,
    fontSize: 24,
    fontWeight: '800',
  },
  formulario: {
    backgroundColor: cores.superficie,
    borderRadius: 16,
    padding: 20,
  },
  linkVoltar: {
    marginTop: 16,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoLink: {
    color: cores.vermelho,
    fontSize: 15,
    fontWeight: '700',
  },
});
