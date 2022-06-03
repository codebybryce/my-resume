import '../styles/globals.css'
import Loader from '../components/Loader'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (router.isReady === false) {
      setLoaded(false)
    }
    else {
      setLoaded(true)
    }
  }, [router.isReady])

  console.log(loaded)



  return (
    <>
      {!loaded ? <div className='fullpage-loader'><Loader /></div> : <div className='fullpage-loader off'><Loader /></div>}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
