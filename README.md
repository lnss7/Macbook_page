# 💻 Apple MacBook Pro - 3D Landing Page

Uma recriação moderna e interativa da página de apresentação do MacBook Pro. Este projeto utiliza o poder do **React**, **Three.js** e **GSAP** para entregar uma experiência altamente imersiva com renderização de modelos 3D e animações fluidas baseadas na rolagem (scroll) da página.

## ✨ Destaques e Funcionalidades

- **Visualizador 3D Interativo**: Permite a exploração do modelo 3D do dispositivo diretamente no navegador.
- **Animações Cinematográficas no Scroll**: Efeitos de revelação, transformações e transições complexas construídas com GSAP (ScrollTrigger).
- **Design Responsivo (Mobile-First)**: A interface, construída com Tailwind CSS e react-responsive, adapta-se perfeitamente para celulares, tablets e desktops.
- **Performance Otimizada**: Carregamento eficiente das malhas e texturas em 3D usando `react-three-fiber` e `drei`.
- **Arquitetura Modular**: Múltiplas sessões (`Hero`, `ProductViewer`, `Showcase`, `Performance`, `Features`, `Highlights`) bem componentizadas e separadas.

## 🛠️ Tecnologias Utilizadas

O projeto faz uso das seguintes bibliotecas e tecnologias modernas do ecossistema front-end:

- **[React 19](https://react.dev/)** - Construção de interfaces dinâmicas.
- **[Vite](https://vitejs.dev/)** - Bundler veloz e eficiente.
- **[Tailwind CSS (v4)](https://tailwindcss.com/)** - Estilização utility-first de alta produtividade.
- **[Three.js](https://threejs.org/)** e **[React Three Fiber / Drei](https://docs.pmnd.rs/react-three-fiber/)** - Renderização de WebGL e modelos 3D declarativos no React.
- **[GSAP](https://gsap.com/) & [@gsap/react](https://gsap.com/resources/React/)** - Biblioteca padrão da indústria para animações robustas.
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Gerenciador de estados globais leve e minimalista.
- **[React Responsive](https://github.com/yocontra/react-responsive)** - Para leitura de media queries diretamente no código React.

## 🚀 Como Executar o Projeto Localmente

Siga o passo a passo abaixo para rodar a aplicação na sua máquina:

### 1. Pré-requisitos
Certifique-se de que você possui o **[Node.js](https://nodejs.org/)** instalado.

### 2. Clonando e Instalando Dependências
Clone o repositório e acesse a raiz do projeto:

```bash
# Clone o repositório
git clone https://github.com/lnss7/Macbook_page.git

# Acesse a pasta do projeto
cd Macbook_page

# Instale as dependências NPM
npm install
```

### 3. Rodando o Projeto
Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará rodando localmente (geralmente em [http://localhost:5173](http://localhost:5173)). Basta abrir no navegador!

## 📂 Estrutura do Projeto

O código se concentra essencialmente na pasta `src/`:
- `src/App.jsx`: Ponto de entrada onde o aplicativo compila todas as seções animadas (Hero, Features, Highlights, Showcase, etc.).
- `src/components/`: Armazena todos os componentes das sessões modulares do site.
- `src/constants/`: Variáveis de contexto estático, links, etc.
- `src/index.css`: Arquivo central de estilo usando as diretivas modulares do Tailwind.

## 📝 Notas
Desenvolvido para fins práticos e educacionais, focado no aprimoramento de animações scroll-linked e WebGL. O layout e a temática original remetem ao design marcante da Apple.

---
&copy; Algumas propriedades estéticas de caráter educativo baseadas em referências públicas da web. Feito por Lucas Simão.
