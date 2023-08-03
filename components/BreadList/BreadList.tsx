import { memo, ReactNode } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './BreadList.module.scss'

type Props = {
  list: { [key: string]: string }[]
}

// urlが入っていたらactive_floor
// urlが入っていないとnow_floor
// name & urlがない場合はスキップ

export const BreadList = memo((props: Props) => {

  const data = props.list;

  return (
      <>
        <nav>
          <ul
            className={styles.box__breadlist}
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >

            <li
              className={styles.active_floor}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link href={"/"} legacyBehavior>
                <a itemProp="item">
                  <span itemProp="name">ホーム</span>
                </a>
              </Link>
              <meta itemProp="position" content="1" />
            </li>

            {data.map((floor,index) => (

              floor.url != "" ?

                <li
                  className={`${styles.active_floor}`}
                  key={index}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <Link href={floor.url} legacyBehavior>
                    <a itemProp="item">
                      <span itemProp="name">{floor.name}</span>
                    </a>
                  </Link>
                  <meta itemProp="position" content={`${index+1}`} />
                </li>

              :

                <li
                  className={`${styles.now_floor}`}
                  key={index}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                    <span itemProp="name">{floor.name}</span>
                    <meta itemProp="position" content={`${index+1}`} />
                </li>

            ))}

          </ul>
        </nav>
      </>
  );
})

export default BreadList;