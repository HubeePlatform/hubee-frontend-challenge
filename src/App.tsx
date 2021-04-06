import GlogalStyles from './styles/global';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlogalStyles />
        <Header />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
