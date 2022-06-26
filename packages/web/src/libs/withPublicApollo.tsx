import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { GetServerSidePropsContext, NextPage } from 'next'

export type ApolloClientContext = GetServerSidePropsContext

export const withPublicApollo = (Component: NextPage) =>
  function Provider(props: any) {
    const { apolloState } = props
    return (
      <ApolloProvider client={getApolloClient(undefined, apolloState)}>
        <Component {...props} />
      </ApolloProvider>
    )
  }

export function getApolloClient(
  ctx?: ApolloClientContext,
  ssrCache?: NormalizedCacheObject
) {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_BASE_URL_API,
    fetch
  })

  const cache = new InMemoryCache().restore(ssrCache ?? {})

  return new ApolloClient({
    link: from([httpLink]),
    cache
  })
}
