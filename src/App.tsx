import { ThemeProvider } from '@material-ui/core';
import { Router } from './routes';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
