import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import {pagesTitle} from "../constants/seo";
import Loading from "../components/global/Loading";
import OnceEffect from "../components/OnceEffect";
import {Provider} from "react-redux";
import {store} from "../store/reducer";
import ModalWithOptions from "../components/ModalWithOptions";
import GlobalStyles from "../components/global/Styles";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <CacheProvider value={emotionCache}>
          <Head>
            <title>{pagesTitle.APP}</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <Provider store={store}>
              <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Component {...pageProps} />
                  <Loading />
                  <OnceEffect />
                  <ModalWithOptions />
                  <GlobalStyles />
              </ThemeProvider>
          </Provider>
        </CacheProvider>
    );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
