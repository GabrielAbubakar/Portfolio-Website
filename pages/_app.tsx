import type { AppProps } from "next/app";
import "locomotive-scroll/dist/locomotive-scroll.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
