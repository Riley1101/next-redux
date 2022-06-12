import "../styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "@/state/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
function MyApp({ Component, pageProps }) {
  const options = {
    position: positions.BOTTOM_RIGHT,
    timeout: 5000,
    offset: "30px",
    transition: transitions.SCALE,
  };
  let persistor = persistStore(store);
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </AlertProvider>
  );
}

export default MyApp;
