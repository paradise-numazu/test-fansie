// Index page of the app

import Image from 'next/image'
import styles from './page.module.css'
import { Button, Link, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/an_singer_song_writer.png"
        alt="An Songer"
        width={640}
        height={480}
      />
      <h1 className={styles.title}>
        This is a Japanese Local Singer Song Writer&apos;s Fansite!
      </h1>
      <Button
        variant="contained"
        LinkComponent={Link}
        href="/about"
      >I want to know more about him!</Button>
    </main>
  );
}