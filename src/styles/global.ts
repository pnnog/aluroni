import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *{
    font-family: 'Italiana', serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F6F6F6;
  }

  #root >main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
  }
`;