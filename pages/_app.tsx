import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {
        // TODO: NAVBAR FOOTER
      }
      <div className="min-h-screen flex flex-col relative">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
