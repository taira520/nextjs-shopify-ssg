import { memo } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './OrderFlow.module.scss'

export const OrderFlow = memo((props) => {
  return (
      <>
        <section className={styles.box__order_flow}>
          <h2>ご相談から「家具づくり」<br className="sp_only" />までの流れ</h2>
          <ul className={styles.contents__order_flow}>
              <li>
                  <div className={styles.heading}>
                      <span className={styles.number}>1</span>
                      <h3>お問い合わせ</h3>
                  </div>
                  <div className={styles.caption}>
                    <p>メール・お電話よりお問合せください。</p>
                    <p>具体的なご希望やデザインがまとまっていなくても大丈夫です。</p>
                    <p>まずは「丸いテーブルってできるの？」「ここに棚があるといいなー」「子供のおもちゃを整理したいなー」などのちょっとしたお部屋のお困りごとをお聞かせください。</p>
                  </div>
              </li>
              <li>
                  <div className={styles.heading}>
                      <span className={styles.number}>2</span>
                      <h3>設計</h3>
                  </div>
                  <div className={styles.caption}>
                    <p>ご要望を元にご希望を形にするための図面や資料のご提案をさせていただきます。</p>
                    <p>まずはあくまでも「たたき台の案」ですので、それを元に新たなご希望もお聞きしながら何度か修正を繰り返していき、お客様のイメージの形に近づけていきます。</p>
                    <p>※ 設計や資料は、何度繰り返し修正してもまったくの無料で対応させていただきます。</p>
                    <p>ぜひお試し感覚でご相談ください！</p>
                  </div>
              </li>
              <li>
                  <div className={styles.heading}>
                      <span className={styles.number}>3</span>
                      <h3>お見積り</h3>
                  </div>
                  <div className={styles.caption}>
                    <p>お客様と一緒に考えて、修正を繰り返して、理想の家具の形が見えてきましたら、</p>
                    <p>サイズや仕様の確認、そして樹種の選定などの後にお見積り金額を出させていただきます。</p>
                    <p>最終の決定は、図面などのサイズや仕様、お見積り金額が出てからのご判断で大丈夫です。</p>
                  </div>
              </li>
              <li>
                  <div className={styles.heading}>
                      <span className={styles.number}>4</span>
                      <h3>ご注文</h3>
                  </div>
                  <div className={styles.caption}>
                    <p>お客さまと一緒に考え、一緒につくった家具。</p>
                    <p>お見積り金額にもご納得いただけましたら、正式なご注文となります。</p>
                    <p>その後のお支払いとなりますので、最後までお客様にはリスクとストレスがないような流れを想定しています。ぜひご安心いただいてご相談ください。</p>
                  </div>
              </li>
              <li>
                  <div className={styles.heading}>
                      <span className={styles.number}>5</span>
                      <h3>製作</h3>
                  </div>
                  <div className={styles.caption}>
                    <p>ご入金、決済をいただきましたら、その後に製作の準備に入らせていただきます。</p>
                    <p>製作期間は約1ヶ月半～2ヶ月を予定しております。</p>
                    <p>世界に一つだけのお客さまオリジナルの家具ができるまで、楽しみにお待ちください。</p>
                  </div>
              </li>
              <li>
                  <div className={styles.heading}>
                      <span className={styles.number}>6</span>
                      <h3>納品・設置</h3>
                  </div>
                  <div className={styles.caption}>
                    <p>完成が近づきましたら、メールやライン、お電話でお届け日のご相談をさせていただきます。</p>
                    <p>基本的に私たち自らお届けに伺っておりますが、一人で伺うケースもあり、お客さまのお手をお借りしながら一緒に設置をさせていただいております。</p>
                    <p>(小さな家具は宅配業者のお届けとなります)</p>
                  </div>
              </li>
              <li>
                  <div className={styles.heading}>
                      <span className={styles.number}>7</span>
                      <h3>アフターフォロー</h3>
                  </div>
                  <div className={styles.caption}>
                    <p>お部屋の中で簡単にメンテナンスができるような塗装仕上げをおススメしております。</p>
                    <p>お届け後についても、そのメンテナンスについては無料対応しておりますので、お買上げ後も安心してお使いいただけます。</p>
                  </div>
              </li>
          </ul>
          <div className={styles.layout__button}>
            <Link href='/contact' legacyBehavior><a className="button_to_form">お問合わせフォームはこちら</a></Link>
          </div>
        </section>
      </>
  );
})

export default OrderFlow;