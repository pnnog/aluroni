import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyles } from 'styles/global';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import AppRouter from 'routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AppRouter/>
    </ThemeProvider>

  </StrictMode>
);
