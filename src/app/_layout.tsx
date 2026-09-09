import { Stack } from 'expo-router';

import { cores } from '@/constants/cores';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: cores.fundo },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="cadastro" />
      <Stack.Screen name="principal" />
    </Stack>
  );
}
