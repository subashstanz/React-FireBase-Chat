import React from "react";
import { AppProps } from "next/app";
import { Provider } from 'react-redux';


import "../styles/index.css";
import store from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store()}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
