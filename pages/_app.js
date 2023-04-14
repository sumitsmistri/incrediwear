import React from "react";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import useAudio from "../shared/useAudio";
import store from "../store/store";
import "../styles/globals.css";
import AppInside from "../components/AppInside";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <AppInside Component={Component} pageProps={pageProps} />
    </Provider>
  );
}
