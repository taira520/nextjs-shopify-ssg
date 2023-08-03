import { memo } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss'

import { Inquiry } from 'components/CtaBox/Inquiry'

export const Footer = memo(() => {

    return (
      <>
        <footer className={styles.footer}>

          <p>FOOTER</p>

        </footer>
      </>
    );
  })