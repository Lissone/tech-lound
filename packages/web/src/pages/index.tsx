import { getSession, useUser } from '@auth0/nextjs-auth0'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

export default function Home() {
  const { user } = useUser()

  return (
    <>
      <Head>TechLound - Home</Head>

      <div>
        <h1>Hello World</h1>

        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res)

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false
      }
    }
  }

  console.log(session.accessToken)

  return {
    props: {}
  }
}
