import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
  --background: #121214;
  --shape-principal: #202024;
  --shape-secundaria: #29292E;
  --shape-terciária: #323238;
  --placeholder:#7C7C8A;
  --text-base:#C4C4CC
  --text-title:#E1E1E6;
  --white:#FFFFFF;

  --green: #00875F;
  --green-light: #00B37E;
  --green-dark: #015F43;
  --red: #F75A68;
  --red-dark: #AA2834;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  @media (max-width: 1080px){
    font-size: 93.75%;
  }
  @media (max-width: 720px){
    font-size: 87.5%;
  }
}
body, input, textarea, button{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
h1, h2, h3, h4, h5, h6, strong{
  font-weight: 700;
}
body{
background: var(--white);
-webkit-font-smoothing: antialiased;
}
button{
  cursor: pointer;
}
[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}
`
