import { getSession } from '@auth0/nextjs-auth0'
import { GetServerSideProps } from 'next'

export default function Login() {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res)

  if (!session) {
    return {
      redirect: {
        destination: '/api/autth/login',
        permanent: false
      }
    }
  }

  return {
    redirect: {
      destination: '/app',
      permanent: false
    }
  }
}
