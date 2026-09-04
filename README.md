# CarneCerta

Aplicação desenvolvida como Projeto Integrador com o objetivo de auxiliar consumidores na escolha de carnes de acordo com o tipo de preparo desejado, apresentando informações organizadas sobre os cortes, recomendações e recursos de acessibilidade.

## Sobre o projeto

O **CarneCerta** é uma aplicação desenvolvida para facilitar a escolha de carnes, especialmente para usuários que não possuem conhecimento aprofundado sobre cortes e suas características.

A aplicação relaciona os tipos de preparo às características das carnes, permitindo que o usuário encontre opções mais adequadas para cada situação.

Além da experiência do consumidor, o projeto conta com uma área administrativa para gerenciamento do catálogo e uma integração com **Internet das Coisas (IoT)** para monitoramento da temperatura de equipamentos refrigerados.

O projeto também possui recursos de acessibilidade com conteúdos em **Libras e legendas**, buscando tornar as informações mais acessíveis.

---

## Objetivos

### Objetivo geral

Desenvolver uma aplicação capaz de auxiliar o consumidor na escolha de carnes de acordo com suas preferências e necessidades de preparo, utilizando recursos tecnológicos para organizar informações, realizar recomendações e ampliar a acessibilidade.

### Objetivos específicos

* Facilitar a escolha de carnes;
* Organizar informações sobre diferentes cortes;
* Relacionar carnes aos seus principais tipos de preparo;
* Permitir pesquisa e consulta ao catálogo;
* Apresentar características como maciez, gordura e preço;
* Disponibilizar recomendações personalizadas;
* Oferecer conteúdos acessíveis em Libras;
* Permitir gerenciamento do catálogo por um administrador;
* Monitorar a temperatura de equipamentos refrigerados por meio de IoT;

---

## Funcionalidades

### Para o usuário

* Cadastro e login;
* Seleção do açougue;
* Tela principal;
* Escolha do tipo de preparo;
* Seleção de preferências;
* Recomendações de carnes;
* Catálogo de carnes;
* Pesquisa de carnes;
* Filtros;
* Página de detalhes da carne;
* Informações sobre características dos cortes;
* Seleção de carnes;
* Criação de uma ficha;
* Conteúdos em Libras;
* Legendas.

### Categorias de preparo

O sistema trabalha inicialmente com seis categorias:

| Categoria  | Descrição                                                                  |
| ---------- | -------------------------------------------------------------------------- |
| Churrasco  | Carnes indicadas para preparos na churrasqueira                            |
| Panela     | Carnes adequadas para preparos cozidos                                     |
| Desfiar    | Carnes indicadas para preparos desfiados                                   |
| Moer       | Carnes utilizadas para carne moída                                         |
| Hambúrguer | Carnes e combinações adequadas para hambúrguer                             |
| Fitness    | Opções com características adequadas para uma alimentação mais equilibrada |

## Sistema de recomendação

O CarneCerta utiliza informações fornecidas pelo usuário para auxiliar na escolha das carnes.

O fluxo principal consiste em:

```text
Tipo de preparo
       ↓
Preferências
       ↓
Processamento das informações
       ↓
Recomendação de carnes
       ↓
Detalhes da carne
       ↓
Seleção
```

A lógica de recomendação considera características relacionadas ao preparo e às preferências informadas pelo usuário.

---

## Acessibilidade

A acessibilidade é um dos componentes do projeto.

O CarneCerta contará com uma área específica para conteúdos em **Libras**, permitindo que usuários surdos tenham acesso às informações sobre as carnes por meio de vídeos produzidos em Libras.

Também serão utilizadas legendas e informações textuais complementares.

A proposta utiliza **vídeos reais em Libras**, não personagens ou avatares fictícios.

---

## Área administrativa

O sistema contará com uma área administrativa destinada ao gerenciamento das informações do açougue.

Entre as funcionalidades previstas estão:

* Login administrativo;
* Painel administrativo;
* Configuração do açougue;
* Gerenciamento do catálogo;
* Ativação e desativação de carnes;
* Alteração de preços;
* Controle de disponibilidade;
* Acompanhamento das informações de IoT.

O sistema parte de um catálogo inicial de carnes, permitindo que o estabelecimento adapte quais opções estarão disponíveis.

---

## Internet das Coisas (IoT)

O projeto também possui uma integração com **IoT** para acompanhamento das condições de refrigeração.

O objetivo é monitorar principalmente a temperatura das câmaras frias e equipamentos refrigerados.

A aplicação poderá apresentar:

* Temperatura atual;
* Status dos equipamentos;
* Histórico de temperaturas;
* Gráficos;
* Alertas de temperatura fora dos limites definidos.

A integração busca demonstrar a aplicação prática da Internet das Coisas em conjunto com uma aplicação de software.

---

## Tecnologias

| Tecnologia             | Utilização                                  |
| ---------------------- | ------------------------------------------- |
| React Native           | Desenvolvimento da aplicação                |
| Expo                   | Ambiente e ferramentas para desenvolvimento |
| Expo Go                | Execução e testes durante o desenvolvimento |
| JavaScript/TypeScript  | Lógica da aplicação                         |
| Git                    | Controle de versão                          |
| GitHub                 | Hospedagem e colaboração do código          |
| IoT                    | Monitoramento de temperatura                |
| ESP32                  | Integração com dispositivos IoT             |
| Backend/Banco de dados | A definir durante o desenvolvimento         |

A aplicação será desenvolvida considerando tanto dispositivos móveis quanto execução na Web.

---

## Arquitetura inicial

A organização do projeto seguirá uma estrutura modular, buscando separar interface, dados, navegação e serviços.

```text
CarneCerta/
│
├── assets/
│   ├── images/
│   ├── videos/
│   └── fonts/
│
├── src/
│   ├── components/
│   ├── screens/
│   ├── navigation/
│   ├── services/
│   ├── data/
│   ├── utils/
│   └── hooks/
│
├── docs/
│   ├── diagrams/
│   └── documentation/
│
├── app.json
├── package.json
└── README.md
```

A estrutura poderá ser ajustada conforme as necessidades do desenvolvimento.

---

## Fluxo principal da aplicação

```text
                    CARNECERTA
                        │
                        ▼
                     Login
                        │
                        ▼
              Seleção do Açougue
                        │
                        ▼
                      Home
                        │
          ┌─────────────┴─────────────┐
          ▼                           ▼
      Preparos                    Catálogo
          │                           │
          ▼                           ▼
    Preferências                  Pesquisa
          │                           │
          ▼                           ▼
   Recomendações              Lista de Carnes
          │                           │
          └─────────────┬─────────────┘
                        ▼
                 Detalhes da Carne
                        │
                        ▼
                  Minha Ficha

       ┌─────────────────────────────┐
       │        Acessibilidade       │
       │             ↓               │
       │       Conteúdo em Libras    │
       └─────────────────────────────┘
```

---

## Desenvolvimento

O desenvolvimento será realizado de forma incremental, priorizando inicialmente as funcionalidades essenciais do sistema.

### Prioridades

**Alta prioridade**

* Estrutura inicial;
* Navegação;
* Login e cadastro;
* Home;
* Categorias;
* Sistema de recomendação;
* Catálogo;
* Detalhes das carnes;
* Área administrativa básica;
* Acessibilidade;
* Integração IoT.

**Média prioridade**

* Melhorias visuais;
* Filtros avançados;
* Histórico;
* Gráficos;
* Melhorias de acessibilidade;
* Recursos adicionais da ficha.

**Baixa prioridade**

* Recursos visuais e animações mais avançadas;
* Vídeos adicionais das carnes;
* Recursos que não sejam essenciais para o funcionamento do MVP.
* Tela do boi intuitiva 

---

## Status do projeto

**Em desenvolvimento**

O CarneCerta encontra-se em fase de desenvolvimento e poderá receber ajustes de funcionalidades, interface e arquitetura conforme a evolução do projeto.

---

## Licença

Projeto desenvolvido para fins acadêmicos como parte de um Projeto Integrador.
