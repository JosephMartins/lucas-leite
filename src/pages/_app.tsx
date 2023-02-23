import { GlobalStyle } from "@/styles/global";
import type { AppProps } from "next/app";
import localFont from '@next/font/local'
import { ThemeProvider } from "styled-components";

import defaulTheme from '../styles/theme/default';

export const myFont = localFont({ src: '../../public/fonts/ablation/Ablation.otf' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider theme={defaulTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
