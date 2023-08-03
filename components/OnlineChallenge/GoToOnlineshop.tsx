import { memo, ReactNode } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './GoToOnlineshop.module.scss'

type Props = {
  title?: ReactNode;
  caption?: ReactNode;
  ec_url: string;
  slug?: ReactNode;
}

export const GoToOnlineshop = memo((props: Props) => {
  return (
      <>
        <section className={styles.box_go_to_onlineshop}>
          <div className={styles.layout_go_to_onlineshop}>
            <div className={styles.heading_go_to_onlineshop}>
              <div className={styles.inner_go_to_onlineshop}>
                <div className={styles.title}>
                  <h2 dangerouslySetInnerHTML={{__html: `${props.title}`}}></h2>
                  <p dangerouslySetInnerHTML={{__html: `${props.caption}`}}></p>
                </div>
              </div>
              <div className={styles.layout_button}>
                <Link href={props.ec_url} legacyBehavior><a className="button target_blank" target="_blank">オンラインショップでみる</a></Link>
              </div>
            </div>
            <ul className={styles.listsimages_go_to_onlineshop}>
              <li>
                <Image
                  src={`/images/${props.slug}/m001.jpg`}
                  alt=""
                  width={1280}
                  height={855}
                />
              </li>
              <li>
                <Image
                  src={`/images/${props.slug}/m002.jpg`}
                  alt=""
                  width={1280}
                  height={855}
                />
              </li>
              <li>
                <Image
                  src={`/images/${props.slug}/m003.jpg`}
                  alt=""
                  width={1280}
                  height={855}
                />
              </li>
            </ul>
          </div>
        </section>
      </>
  );
})

export default GoToOnlineshop;