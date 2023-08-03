import { memo, ReactNode } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './OriginalProductsList.module.scss'

type Props = {
  id: string;
  hidacolle_number: string;
  item_name: string;
  caption: string;
  ec_url: string;
  index: boolean;
}


export const OriginalProductsList = memo((props: Props) => {

  return (
      <>
        <div className={styles.lists__products}>
          <div className={styles.block__product} key={props.id}>
            <figure>
              {!props.index &&
                <Link href={props.ec_url} legacyBehavior>
                  <a className={`${styles.visual} add_corner`}>
                    <Image
                      src={`/images/original-products/puroducts/${props.id}.jpg`}
                      alt={`ヒダコレのオリジナルプロダクト『${props.item_name}』の商品画像`}
                      width={1280}
                      height={855}
                    />
                  </a>
                </Link>
              }
              {props.index &&
                <div className={styles.visual}>
                  <Image
                    src={`/images/original-products/puroducts/${props.id}.jpg`}
                    alt={`ヒダコレのオリジナルプロダクト『${props.item_name}』の商品画像`}
                    width={1280}
                    height={855}
                  />
                </div>
              }
              <figcaption>
                <div className={styles.hidacolle_number}><span className={styles.line}>HIDACOLLE No.</span><span className={styles.number}>{props.hidacolle_number}</span></div>
                <h3>{props.item_name}</h3>
                {!props.index &&
                  <div className={styles.caption} dangerouslySetInnerHTML={{__html: `${props.caption}`}}></div>
                }
                {!props.index &&
                  <div className={styles.layout__button}>
                    <Link href={props.ec_url} legacyBehavior><a className="button target_blank" target="_blank">オンラインショップでみる</a></Link>
                  </div>
                }
              </figcaption>
            </figure>
          </div>
        </div>
      </>
  );
})

export default OriginalProductsList;