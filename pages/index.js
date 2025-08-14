// pages/index.js
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Image
        src="/hero-neon.png"
        alt="The Green Room After Dark"
        className={styles.neonImage}
        width={1200}
        height={800}
        priority
      />
    </div>
  );
}
