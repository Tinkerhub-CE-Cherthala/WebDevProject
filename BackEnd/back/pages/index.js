import Head from 'next/head'
import {signIn, signOut, useSession} from 'next-auth/react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { data: session, status } = useSession()
  if(status === "loading"){
    return(<p>Loading...</p>) ;
  }
  if (status === "authenticated") {
    return(
      <>
          <h4>
            You are logged as: {session.user.name}
          </h4>
          <div className={styles.boxCenter}>
            <h4>
              Email: {session.user.email}
            </h4>
            <br/>
            {session.user.image && (
              <span>
                <img src={session.user.image} alt={session.user.name} />
              </span>
            )}
          </div>
          <br/>
          <br/>
          <button className={styles.primaryButton} onClick={()=>signOut()}>
            Sign Out
          </button>
        </>
    );
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!session && (
        <>
          <button onClick={()=>signIn()}>Sign In</button>
        </>
      )}

    </div>
  )
}
