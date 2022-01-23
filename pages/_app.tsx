import '../styles/globals.css'
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app'
import { theme } from '../common/theme';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

export const link = createHttpLink({
  uri: "https://graphqlzero.almansi.me/api"
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
