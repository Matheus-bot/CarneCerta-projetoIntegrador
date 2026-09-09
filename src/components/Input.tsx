import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

import { cores } from '@/constants/cores';

type InputProps = {
  rotulo: string;
  valor: string;
  aoAlterarTexto: (texto: string) => void;
  placeholder?: string;
  senha?: boolean;
} & Pick<TextInputProps, 'keyboardType' | 'autoCapitalize'>;

export function Input({
  rotulo,
  valor,
  aoAlterarTexto,
  placeholder,
  senha,
  keyboardType,
  autoCapitalize,
}: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.rotulo}>{rotulo}</Text>
      <TextInput
        value={valor}
        onChangeText={aoAlterarTexto}
        placeholder={placeholder}
        placeholderTextColor={cores.textoSecundario}
        secureTextEntry={senha}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  rotulo: {
    color: cores.texto,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    minHeight: 48,
    backgroundColor: cores.superficie,
    borderRadius: 12,
    paddingHorizontal: 16,
    color: cores.texto,
    fontSize: 15,
  },
});
