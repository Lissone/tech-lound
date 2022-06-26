import { GetStaticProps } from 'next'
import Head from 'next/head'

import { GetProductsQuery } from '@graphql/generated/graphql'
import { getServerPageGetProducts, ssrGetProducts } from '@graphql/generated/pagePublic'

import { withPublicApollo } from '@libs/withPublicApollo'

interface EnrollProps {
  products: GetProductsQuery
}

function Enroll({ products }: EnrollProps) {
  return (
    <>
      <Head>TechLound - Matrículas</Head>

      <div>
        <h1>Matrículas</h1>
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { props } = await getServerPageGetProducts(undefined, {} as any)

  return {
    props: {
      products: props.data
    },
    revalidate: 60 * 60 // 1 hour
  }
}

export default withPublicApollo(ssrGetProducts.withPage()(Enroll as any))
