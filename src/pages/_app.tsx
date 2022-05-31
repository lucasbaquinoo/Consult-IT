import "antd/dist/antd.css";
import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { useWindowSize } from "../hooks/useWindowSize";

function MyApp({ Component, pageProps }: AppProps) {
  const { width } = useWindowSize();

  if (width && width < 700) {
    return <Component {...pageProps} />;
  } else {
    return <h1>Não disponível para esse tamanho de tela</h1>;
  }
}

export default MyApp;
