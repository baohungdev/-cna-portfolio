import "zenscroll";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Head>
      <title>{"Duong Bao Hung Personal Website"}</title>
      <link href="/public/assets/NextJS.png" />
      {/* Global site tag (gtag.js) - Google Analytics  */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8YPLPTHQLZ"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8YPLPTHQLZ');`,
        }}
      />
    </Head>
    <ColorModeProvider value={"light"}>
      <Component {...pageProps} />
      <CSSReset />
    </ColorModeProvider>
  </ThemeProvider>
);

export default App;
