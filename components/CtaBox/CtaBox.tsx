import { memo, ReactNode } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './CtaBox.module.scss'


type Props = {
  heading?: ReactNode;
  caption?: ReactNode;
  button_caption?: ReactNode;
}

export const CtaBox = memo((props: Props) => {

  return (
      <>
        <div className={styles.box_cta}>
          <div className={styles.box_cta_layout}>
            <div className={styles.inner_layout}>
              <p className={styles.heading_innner_layout} dangerouslySetInnerHTML={{__html: `${props.heading}`}}></p>
              {props.caption &&
                <p className={styles.caption_innner_layout} dangerouslySetInnerHTML={{__html: `${props.caption}`}}></p>
              }
            </div>
            <div className={styles.button_layout}><Link href='/contact'>{props.button_caption}</Link></div>
          </div>
        </div>
      </>
  );
})

export default CtaBox;