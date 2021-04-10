import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Routes from "./routes/routes";
import store from "./store";
import GlogalStyles from "./styles/global";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlogalStyles />
          <Header />
          <Routes />
          <ToastContainer autoClose={2500} />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
