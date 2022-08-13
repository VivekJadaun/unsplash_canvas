import Head from 'next/head'
import styles from '../styles/Home.module.css'

import UnsplashCanvas from 'components/unsplash/Canvas';
import { UnsplashList } from 'services/unsplash';

export default function Home({ results }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unsplash Canvas</title>
        <meta name="description" content="Unsplash Canvas App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UnsplashCanvas results={results}/>
      </main>
    </div>
  );
}


Home.getInitialProps = async () => {
  const { response: { results } } = await UnsplashList({
    page: 1,
    perPage: 50,
  });

  return { results };
}

// export async function getServerSideProps() {
//   const { results = [] } = await UnsplashList({
//     page: 1,
//     perPage: 50,
//   }).then(({ status, response }) => (status == 200 ? response : {}));

//   return {
//     props: {
//       results: results
//     },
//   };
// }