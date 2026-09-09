# CarneCerta — Documentação da Etapa 1 (Login, Cadastro e Tela Principal)

## 1. Objetivo

O CarneCerta é um aplicativo React Native + Expo + TypeScript que vai ajudar o usuário a escolher carnes de acordo com o tipo de preparo desejado.


## 2. Estrutura de pastas e arquivos

```text
projetoapp/
├── assets/
│   ├── categorias/
│   │   ├── churrasco/.gitkeep
│   │   ├── panela/.gitkeep
│   │   ├── moida/.gitkeep
│   │   ├── fitness/.gitkeep
│   │   ├── desfiar/.gitkeep
│   │   └── bifes/.gitkeep
│   └── carnes/
│       ├── acem/.gitkeep
│       ├── paleta/.gitkeep
│       ├── musculo/.gitkeep
│       └── picanha/.gitkeep
├── docs/
│   └── DOCUMENTACAO.md
└── src/
    ├── app/                    rotas do Expo Router
    │   ├── _layout.tsx         Stack com headers desativados
    │   ├── index.tsx           rota da tela de Login
    │   ├── cadastro.tsx        rota da tela de Cadastro
    │   └── principal.tsx       rota da Tela Principal
    ├── screens/                lógica e layout de cada tela
    │   ├── LoginScreen.tsx
    │   ├── CadastroScreen.tsx
    │   └── PrincipalScreen.tsx
    ├── components/             peças reutilizáveis de interface
    │   ├── Button.tsx
    │   ├── Input.tsx
    │   ├── Header.tsx
    │   ├── Banner.tsx
    │   ├── CategoryCard.tsx
    │   ├── MeatCard.tsx
    │   └── AccessibilityCard.tsx
    ├── data/                   dados estáticos usados pela Tela Principal
    │   ├── categorias.ts
    │   └── carnes.ts
    └── constants/
        └── cores.ts            paleta de cores única do app
```

Cada rota dentro de `src/app` é só um arquivo fino que importa e renderiza a tela correspondente de `src/screens`. Essa separação existe para deixar claro o que é "endereço de navegação" (`app/`) e o que é "conteúdo da tela" (`screens/`).

## 3. Telas e fluxo de navegação

O projeto usa o Expo Router (roteamento por arquivos). Cada arquivo dentro de `src/app` vira uma rota automaticamente, e `src/app/index.tsx` é a primeira tela aberta.

| Tela | Arquivo de rota | Arquivo de tela |
| --- | --- | --- |
| Login | `src/app/index.tsx` | `src/screens/LoginScreen.tsx` |
| Cadastro | `src/app/cadastro.tsx` | `src/screens/CadastroScreen.tsx` |
| Principal | `src/app/principal.tsx` | `src/screens/PrincipalScreen.tsx` |

Fluxo de navegação, usando `useRouter()` de `expo-router`:

```text
Login  --ENTRAR-->        Principal   (router.replace, não volta pro Login)
Login  --Criar conta-->   Cadastro    (router.push)
Cadastro --CADASTRAR-->   Login       (router.replace, não volta pro Cadastro)
Cadastro --Voltar-->      Login       (router.back)
```

`replace` é usado nos dois pontos em que faria sentido o botão físico de voltar do Android levar de novo para uma tela que o usuário já "concluiu" (logar ou cadastrar). Nenhum desses botões salva dado nenhum ou faz qualquer tipo de autenticação — são apenas trocas de tela.

`src/app/_layout.tsx` define um `Stack` do Expo Router com `headerShown: false` (sem cabeçalho nativo, já que cada tela desenha seu próprio conteúdo) e o fundo padrão das transições vindo de `cores.fundo`.

## 4. Componentes

### Button (`src/components/Button.tsx`)
Botão padrão do app, usado nas telas de Login e Cadastro.
- Props: `titulo: string`, `onPress: () => void`, `variante?: 'primario' | 'secundario'`, `style?: StyleProp<ViewStyle>`.
- Evento: `onPress`, disparado ao tocar no botão.
- Usa `cores.vermelho` como cor de destaque na variante primária.

### Input (`src/components/Input.tsx`)
Campo de texto com rótulo, usado nos formulários de Login e Cadastro.
- Props: `rotulo: string`, `valor: string`, `aoAlterarTexto: (texto: string) => void`, `placeholder?: string`, `senha?: boolean`, além de `keyboardType` e `autoCapitalize` (repassados direto para o `TextInput`).
- Evento: `aoAlterarTexto`, chamado a cada tecla digitada (equivalente ao `onChangeText` do `TextInput`).
- Quando `senha` é `true`, ativa `secureTextEntry` para esconder o texto digitado.

### Header (`src/components/Header.tsx`)
Cabeçalho simples da Tela Principal, só com o nome do app. Não recebe props e não tem perfil, avatar ou notificações.

### Banner (`src/components/Banner.tsx`)
Espaço reservado no topo da Tela Principal para uma futura imagem de destaque. Hoje é só um retângulo com `cores.superficie`, sem imagem nenhuma, porque nenhuma foto foi fornecida para este banner.

### CategoryCard (`src/components/CategoryCard.tsx`)
Card usado para representar uma categoria de preparo na Tela Principal.
- Props: `nome: string`, `imagem: ImageSourcePropType | null`, `onPress?: () => void`.
- Renderizado dentro de um `map()` sobre `categorias` (`src/data/categorias.ts`).
- Se `imagem` for `null`, nenhuma `Image` é desenhada — só o fundo neutro do card aparece.
- Nesta etapa nenhum `onPress` é passado a ele: o toque não leva a lugar nenhum ainda.

### MeatCard (`src/components/MeatCard.tsx`)
Mesma ideia do `CategoryCard`, mas para os itens do catálogo de carnes.
- Props: `nome: string`, `imagem: ImageSourcePropType | null`, `onPress?: () => void`.
- Renderizado dentro de um `map()` sobre `carnes` (`src/data/carnes.ts`).
- Também não abre nenhuma tela nesta etapa — é só a chamada visual do catálogo.

### AccessibilityCard (`src/components/AccessibilityCard.tsx`)
Card maior no fim da Tela Principal, com um título, um texto curto sobre acessibilidade e um espaço reservado (`View` vazia) para conteúdo futuro. Não recebe props.

### Acessibilidade dos componentes
Todo `Pressable` do projeto (`Button`, `CategoryCard`, `MeatCard` e os links de "Criar conta"/"Voltar" dentro das telas) tem `accessibilityRole="button"`, `accessibilityLabel` com o texto do elemento, e altura mínima de toque de 44 pixels.

## 5. States

| State | Onde | Valor inicial | Motivo |
| --- | --- | --- | --- |
| `email` | `LoginScreen` | `''` | Guardar o que o usuário digita no campo de e-mail do login |
| `senha` | `LoginScreen` | `''` | Guardar o que o usuário digita no campo de senha do login |
| `nome` | `CadastroScreen` | `''` | Guardar o nome digitado no cadastro |
| `email` | `CadastroScreen` | `''` | Guardar o e-mail digitado no cadastro |
| `senha` | `CadastroScreen` | `''` | Guardar a senha digitada no cadastro |
| `confirmarSenha` | `CadastroScreen` | `''` | Guardar a confirmação de senha digitada no cadastro |

Nenhum dos campos vem pré-preenchido com valor fictício — todos começam vazios e só existem para o `TextInput` funcionar como componente controlado. Não existe `useState` em nenhum outro lugar do projeto: a Tela Principal é só leitura dos dados de `src/data`.

## 6. Assets: organização e como adicionar imagens

O React Native não permite `require()` dinâmico (com nome de arquivo montado em tempo de execução), então cada imagem precisa ter seu caminho escrito literalmente no código.

Por isso os dados de categorias e carnes ficam em arquivos separados (`src/data/categorias.ts` e `src/data/carnes.ts`), cada item com um campo `imagem: ImageSourcePropType | null`. Hoje todos começam como `null`, e os componentes (`CategoryCard`, `MeatCard`) já sabem lidar com isso: se `imagem` for `null`, só o fundo neutro do card é mostrado.

As pastas de destino das fotos já existem, vazias, com um `.gitkeep` em cada uma (o Git não versiona pasta vazia):

```text
assets/categorias/{churrasco,panela,moida,fitness,desfiar,bifes}/
assets/carnes/{acem,paleta,musculo,picanha}/
```

Para adicionar uma foto de verdade no futuro:

1. Colocar o arquivo de imagem dentro da pasta correspondente, por exemplo `assets/categorias/churrasco/churrasco.jpg`.
2. Abrir `src/data/categorias.ts` (ou `carnes.ts`) e trocar o `imagem: null` daquele item por:
   ```ts
   imagem: require('../../assets/categorias/churrasco/churrasco.jpg')
   ```
3. Nada mais precisa mudar — o componente já exibe a imagem assim que ela deixa de ser `null`.

O projeto também já tem um acervo de fotos em `src/assets/imagens/` (coletado antes desta etapa). Ele não é usado por nenhuma tela hoje e fica fora da estrutura `assets/categorias` e `assets/carnes` descrita acima — pode servir de material de referência para quando as imagens forem adicionadas de verdade.

## 7. Rolagem vertical e horizontal

- **Vertical**: `LoginScreen`, `CadastroScreen` e `PrincipalScreen` usam um `ScrollView` como contêiner principal, para o formulário/conteúdo poder rolar caso não caiba na tela.
- **Horizontal**: dentro da `PrincipalScreen`, a lista de categorias usa um segundo `ScrollView`, com `horizontal` e `showsHorizontalScrollIndicator={false}`, contendo os `CategoryCard` gerados por `map()`. Não é usado `FlatList` nem nenhuma biblioteca de carrossel — só rolagem simples.
- O catálogo de carnes, por outro lado, não rola sozinho: os `MeatCard` são organizados em uma grade (`flexDirection: 'row'` com `flexWrap: 'wrap'`) que rola junto com o `ScrollView` vertical da tela.

