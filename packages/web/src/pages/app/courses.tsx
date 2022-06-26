import Head from 'next/head'

import { useMe } from '@graphql/generated/page'

import { withApollo } from '@libs/withApollo'

function Courses() {
  const { data } = useMe()

  return (
    <>
      <Head>TechLound - Meus Cursos</Head>

      <div>
        <h1>Meu cursos</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  )
}

export default withApollo(Courses)
