import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { Router } from './routes';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import store from './store';

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
