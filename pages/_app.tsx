import '../styles/globals.css'
import { ThemeProvider } from 'styled-components';
import { theme } from '../common/theme';
import { ApolloProvider } from '@apollo/client';
import withData from "../lib/withApollo";

function MyApp({ Component, pageProps, apollo }: any) {
  return (
    <ApolloProvider client={apollo}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async function ({ Component, ctx }: any) {
  let pageProps = {
    query: undefined
  };
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
