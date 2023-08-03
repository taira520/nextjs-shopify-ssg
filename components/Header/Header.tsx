import { memo, useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import { Inquiry } from 'components/CtaBox/Inquiry';

export const Header = memo(() => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleFunction = () => {
    setOpenMenu(!openMenu);
  }

  const router = useRouter(); 

  useEffect(() => {
    setOpenMenu(false);
      },[ router.pathname ]
  );

  return (
      <>

        <header className={styles.header}>

          <p>HEADER</p>

        </header>
      </>
  );
})