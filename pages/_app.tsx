import "../css/default.css";
import "../css/layout.css";
import "../css/media-queries.css";
import "../css/magnific-popup.css";

import type { AppProps /*, AppContext */ } from "next/app";

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
