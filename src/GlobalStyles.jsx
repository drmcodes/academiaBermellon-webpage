import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html,
body {
  margin: 0 auto;
  font-family: Quicksand, sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
}
:root {
  --night: #0b090a;
  --eerie-black: #161a1d;
  --blood-red: #660708;
  --cornell-red: #a4161a;
  --cornell-red-2: #ba181b;
  --imperial-red: #e5383b;
  --silver: #b1a7a6;
  --timberwolf: #d3d3d3;
  --white-smoke: #f5f3f4;
  --white: #ffffff;
}
`;

export default GlobalStyle;
