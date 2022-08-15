import Head from 'next/head'

import UnsplashCanvas from 'components/unsplash/Canvas';
import { UnsplashList } from 'services/unsplash';
import { PER_PAGE_ITEM_COUNT } from 'constants/app-defaults';
import Credits from 'components/unsplash/Credits';
import { UnsplashWrapper } from 'contexts/unsplash-search';

import styles from '../styles/Home.module.css'

export default function Home({ results }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unsplash Canvas</title>
        <meta name="description" content="Unsplash Canvas App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UnsplashWrapper initialResults={results}>
          <UnsplashCanvas />
        </UnsplashWrapper>
      </main>

      <footer className={`${styles.footer} sticky-bottom`}>
        <Credits />
      </footer>
    </div>
  );
}


Home.getInitialProps = async () => {
  const {
    response: { results },
    status,
  } = await UnsplashList({
    page: 1,
    perPage: PER_PAGE_ITEM_COUNT,
  });

  return { results: status === 200 ? results : [] };
}