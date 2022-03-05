import Head from 'next/dist/shared/lib/head';

import Link from 'next/link';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>First List | Home</title>
          <meta name="keywords" content="users" />
        </Head>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
        <Link href="/users">
          <a className={styles.btn}>see users list</a>
        </Link>
      </div>
    </>
  );
}
