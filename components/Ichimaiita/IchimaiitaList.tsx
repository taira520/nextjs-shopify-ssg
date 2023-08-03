import { memo } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './IchimaiitaList.module.scss'

type IchimaiitaListProps = {
  key: string;
  title: string;
  slug: string;
  size: string;
  control_number: string;
  thumbnail: string;
  photos: {
    photo_1: string;
    photo_2: string;
    photo_3: string;
    photo_4: string;
    photo_5: string;
    photo_6: string;
    photo_7: string;
    photo_8: string;
  };
};

export const IchimaiitaList = memo((props: IchimaiitaListProps) => {

  return (
      <>
        <Link href={`/ichimaiita/${props.slug}`}>
          <div className={`${styles.visual_item} add_corner `}>
            <Image
              // loader={myLoader}
              src={props.thumbnail}
              alt={`${props.title}の一枚板`}
              width={1280}
              height={855}
            />
          </div>
          <div className={styles.title_item}>{props.title}の一枚板</div>
          <div className={styles.inner_item}>
            <table>
              <tbody>
                <tr>
                  <th>サイズ</th>
                  <td>{props.size}</td>
                </tr>
                <tr>
                  <th>管理番号</th>
                  <td>{props.control_number}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Link>
      </>
  );
})

export default IchimaiitaList;