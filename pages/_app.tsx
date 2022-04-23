import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>navbar</div>
      <div className="min-h-screen flex flex-col relative">
        <Component {...pageProps} />
      </div>
      <div>footer</div>
    </>
  );
}

export default MyApp;
