import { memo } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './CustomFurnitureList.module.scss'


type Props = {
  title : string;
}

export const CustomFurnitureList = memo((props: Props) => {
  return (
      <>
        <section className={styles.box_example}>
          <div className={styles.heading}>
            <p dangerouslySetInnerHTML={{__html: `${props.title}`}}></p>
          </div>
          <ul className={styles.example}>
            <li>
              <Link href='/custom-furniture/kitchen' legacyBehavior>
                <a>
                  <div className={`${styles.visual_example} add_corner }`}>
                    <Image
                      // loader={myLoader}
                      src="/images/custom-furniture/example/kitchen/001_main.jpg"
                      alt="ヒダコレのカスタムオーダー家具 キッチンの事例です。"
                      width={1280}
                      height={855}
                    />
                  </div>
                  <div className={styles.heading_example}>キッチン</div>
                  <div className={styles.inner_example}>「古くなったカップボードを、<br />部屋にマッチした造作家具のようにしたい」</div>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/custom-furniture/workspace' legacyBehavior>
                <a>
                  <div className={`${styles.visual_example} add_corner }`}>
                    <Image
                      // loader={myLoader}
                      src="/images/custom-furniture/example/workspace/001_main.jpg"
                      alt="ヒダコレのカスタムオーダー家具 ワークスペースの事例です。"
                      width={1280}
                      height={855}
                    />
                  </div>
                  <div className={styles.heading_example}>ワークスペース</div>
                  <div className={styles.inner_example}>「デスク回りの機器のコードをまとめて、<br />使い勝手のいい環境にしたい」</div>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/custom-furniture/tvboard' legacyBehavior>
                <a>
                  <div className={`${styles.visual_example} add_corner }`}>
                    <Image
                      // loader={myLoader}
                      src="/images/custom-furniture/example/tvboard/001_main.jpg"
                      alt="ヒダコレのカスタムオーダー家具 テレビボードの事例です。"
                      width={1280}
                      height={855}
                    />
                  </div>
                  <div className={styles.heading_example}>テレビボード</div>
                  <div className={styles.inner_example}>「壁掛けテレビに合わせた、<br />シンプルなＴＶボードがほしい」</div>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/custom-furniture/storage' legacyBehavior>
                <a>
                  <div className={`${styles.visual_example} add_corner }`}>
                    <Image
                      // loader={myLoader}
                      src="/images/custom-furniture/example/storage/001_main.jpg"
                      alt="ヒダコレのカスタムオーダー家具 収納の事例です。"
                      width={1280}
                      height={855}
                    />
                  </div>
                  <div className={styles.heading_example}>収納</div>
                  <div className={styles.inner_example}>「お店のスペースにピッタリの<br />大きなキャスター付き収納があるといいな」</div>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/custom-furniture/sofa' legacyBehavior>
                <a>
                  <div className={`${styles.visual_example} add_corner }`}>
                    <Image
                      // loader={myLoader}
                      src="/images/custom-furniture/example/sofa/001_main.jpg"
                      alt="ヒダコレのカスタムオーダー家具 ソファの事例です。"
                      width={1280}
                      height={855}
                    />
                  </div>
                  <div className={styles.heading_example}>ソファ</div>
                  <div className={styles.inner_example}>「高さや幅のサイズ、<br />そしてクッションのサイズも選べると嬉しい」</div>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/custom-furniture/bed' legacyBehavior>
                <a>
                  <div className={`${styles.visual_example} add_corner }`}>
                    <Image
                      // loader={myLoader}
                      src="/images/custom-furniture/example/bed/001_main.jpg"
                      alt="ヒダコレのカスタムオーダー家具 ベッドの事例です。"
                      width={1280}
                      height={855}
                    />
                  </div>
                  <div className={styles.heading_example}>ベッド</div>
                  <div className={styles.inner_example}>「ヘッドボードを自然木の”耳付きの木”で<br />格好良く作ってほしい」</div>
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </>
  );
})

export default CustomFurnitureList;