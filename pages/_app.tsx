import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from '@next/font/local'
import { store } from "../store";
import { Provider } from "react-redux";

const roboto = localFont({
  src: [
    {
      path: '../public/fonts/Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Roboto-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
