# Aplicativo Móvel de Gerenciamento de Estoque Laboratorial

## Descrição do Projeto

Aplicativo móvel para gerenciamento de estoque laboratorial, projetado para plataformas Android e iOS. 

O aplicativo permitirá aos funcionários cadastrar, editar, excluir e listar produtos em estoque, além de emitir alertas para níveis mínimos de estoque. A ferramenta também possibilitará a visualização e busca de itens específicos, geração de relatórios detalhados sobre o status do estoque, controle de lotes e validade dos produtos, e manterá um histórico completo de movimentações. 

O objetivo principal é otimizar a gestão de estoques laboratoriais, proporcionando maior controle e eficiência nas operações diárias dos laboratórios.


## Tecnologias Utilizadas
- JavaScript 21.0.3
- NodeJs 20.6.1
- React Native 0.72.2
- Expo 49.0.10
- Tailwind CSS 3.3.3
- React 18.2.0
- MySQL 8.0.33
- Visual Studio Code 1.80.1
- Figma
- Notion
- Google Drive
- Google Docs
- Git e GitHub

## Configuração do Ambiente
Para configurar o ambiente de desenvolvimento, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/Rapouse/TCC-SENAI.git
   cd TCC-SENAI

2. Instale as dependências:
   ```bash
   npm install
   npm install expo-router
   npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

3. Atualizar AppEntry.js:
   ```bash
   import App from '../../app/App'

4. Utilizar versão web:
   ```bash
   npx expo install react-dom react-native-web @expo/metro-runtime   
 
5. Inicie o aplicativo:
   ```bash
   npx expo start -c
   
