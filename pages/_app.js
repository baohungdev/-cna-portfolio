import "zenscroll";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Head>
      <title>{"Duong Bao Hung Personal Website"}</title>
      <link href="/public/assets/NextJS.png" />
    </Head>
    <ColorModeProvider value={"light"}>
      <Component {...pageProps} />
      <CSSReset />
    </ColorModeProvider>
  </ThemeProvider>
);

export default App;
