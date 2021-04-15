import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import { Router } from './routes';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import store from './store';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyle />
        <ToastContainer autoClose={3000} position="bottom-right" />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
