import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import {wrapper} from "../store/reducer";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setLoading} from "../store/reducers/main";
import {pagesTitle} from "../constants/seo";
import Loading from "../components/global/Loading";
import {useRouter} from "next/router";
import {refresh} from "../actions/auth";
import OnceEffect from "../components/OnceEffect";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
    const router = useRouter();
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(refresh());
    }, []);


    useEffect(() => {
        router.events.on('routeChangeStart', () => dispatch(setLoading(true)));
        router.events.on('routeChangeComplete', () => dispatch(setLoading(false)));
        router.events.on('routeChangeError', () => dispatch(setLoading(false)));

        return () => {
            router.events.off('routeChangeStart', () => dispatch(setLoading(true)));
            router.events.off('routeChangeComplete', () => dispatch(setLoading(true)));
            router.events.off('routeChangeError', () => dispatch(setLoading(true)));
        };
    }, [router]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{pagesTitle.APP}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Component {...pageProps} />
          <Loading />
          <OnceEffect />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
