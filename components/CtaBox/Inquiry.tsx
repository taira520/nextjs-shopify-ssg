import { memo } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './Inquiry.module.scss'

export const Inquiry = memo((props) => {
  return (
      <>
        <section className={styles.box__inquiry}>
          <div className={styles.box__layout}>
            <div className={styles.box__layout_heading}>
              <div className={styles.box__heading}>
                <p className={styles.small}>INQUIRY</p>
                <h2>お問い合わせ</h2>
                <p className={styles.caption}>お問い合わせはメールフォーム、<br />またはお電話にてお気軽にご連絡ください。<br />その他ご連絡方法はこちらからご確認ください。</p>
              </div>
            </div>
            <div className={styles.box__layout_contents}>
              <ul>
                <li className={styles.to_mailform}>
                  <div className={styles.heading__to_mailform}>
                    <h3>メールフォームから</h3>
                    <p>メールフォームからの<br />ご相談・お問い合わせはこちらからどうぞ。</p>
                  </div>
                  <div className={styles.inner__to_mailform}>
                    <div className={styles.layout_button}>
                      <Link href='/contact' legacyBehavior><a className="button target_this_site">メールフォームはこちら</a></Link>
                    </div>
                  </div>
                </li>
                <li className={styles.to_telephone}>
                  <div className={styles.heading__to_telephone}>
                    <h3>お電話から</h3>
                    <p>受付時間 : 9:30 ~ 17:30<br />定休日 : 毎週水曜日</p>
                  </div>
                  <div className={styles.inner__to_telephone}>
                    <p>フリーダイヤル</p>
                    <Link href='' legacyBehavior><a href="tel:0120-690-315" className="">0120-690-315</a></Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
  );
})

export default Inquiry;