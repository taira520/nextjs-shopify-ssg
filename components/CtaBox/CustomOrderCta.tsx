import { memo } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './CustomOrderCta.module.scss'

export const CustomOrderCta = memo((props) => {
  return (
      <>
        <div className={styles.box__custom_order_service}>
          <div className={styles.layout__custom_order_service}>
            <div className={styles.inner__custom_order_service}>
              <p className={styles.small__custom_order_service}>もっと暮らしに寄り添うことも、</p>
              <p className={styles.heading__custom_order_service}>カスタムオーダーで対応できます。</p>
              <div className={styles.caption__custom_order_service}>
                <p>「部屋に合わせて幅を広げたい」「引出しなどの収納がほしい」など、暮らしの中のご要望も人それぞれ。</p>
                <p>自社工房で製作しているヒダコレでは、すべての家具・インテリア小物は、お客様のご希望に合わせてカスタマイズができます。</p>
                <p>どんなご希望でもお気軽にこ相談くださいね。</p>
              </div>
              <div className={styles.layout__button}>
                <Link href='/contact' legacyBehavior><a className="button target_this_site">相談してみる</a></Link>
              </div>
            </div>
            <div className={styles.visual__custom_order_service}>
              <Image
                src="/images/original-products/illust-1.jpg"
                alt=""
                width={490}
                height={455}
              />
            </div>
          </div>
        </div>
      </>
  );
})

export default CustomOrderCta;