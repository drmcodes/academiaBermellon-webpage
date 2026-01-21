import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

html,
body {
  margin: 0 auto;
  font-family: 'Cormorant Garamond', 'Playfair Display', 'Georgia', serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.7;
  overflow-x: hidden;
}

:root {
  /* Paleta principal - Atelier Bermellón */
  --bg-primary: #0a0a0a;
  --bg-secondary: #121010;
  --bg-tertiary: #1a1515;
  --bg-card: #1f1a1a;

  /* Tonos claros */
  --cream: #f5f0e8;
  --ivory: #fffef9;
  --white: #ffffff;
  --off-white: #e8e4dc;

  /* Texto */
  --text-primary: #f5f0e8;
  --text-secondary: #b8b0a7;
  --text-muted: #7a7068;

  /* Acentos Bermellón y Rojos */
  --accent-primary: #e23d28;
  --accent-primary-light: #ef5a47;
  --accent-vermillion: #e34234;
  --accent-crimson: #dc143c;
  --accent-burgundy: #800020;
  --accent-wine: #722f37;
  --accent-terracotta: #c94c4c;
  --accent-coral: #cd5c5c;

  /* Colores secundarios */
  --burnt-sienna: #a0522d;
  --rust: #b7410e;
  --maroon: #5c1a1b;

  /* Bordes y líneas */
  --border-subtle: rgba(226, 61, 40, 0.15);
  --border-accent: rgba(226, 61, 40, 0.4);

  /* Sombras y efectos */
  --shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.3);
  --shadow-medium: 0 8px 40px rgba(0, 0, 0, 0.4);
  --shadow-strong: 0 16px 60px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 40px rgba(226, 61, 40, 0.15);

  /* Gradientes */
  --gradient-vermillion: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-burgundy) 100%);
  --gradient-dark: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  --gradient-overlay: linear-gradient(180deg, rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 0.9) 100%);

  /* Transiciones */
  --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-medium: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  /* Espaciado */
  --section-padding: clamp(60px, 10vw, 120px);
  --container-max: 1400px;
  --container-padding: clamp(20px, 5vw, 80px);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', 'Georgia', serif;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--text-primary);
}

p {
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  font-weight: 400;
  font-size: 1.1rem;
  color: var(--text-secondary);
}

a {
  text-decoration: none;
  color: inherit;
  transition: var(--transition-fast);
}

button {
  font-family: 'Lato', 'Arial', sans-serif;
  cursor: pointer;
  border: none;
  outline: none;
}

img {
  max-width: 100%;
  height: auto;
}

::selection {
  background-color: var(--accent-primary);
  color: var(--bg-primary);
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--accent-primary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent-primary-light);
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

section {
  padding: var(--section-padding) 0;
}
`;

export default GlobalStyle;
