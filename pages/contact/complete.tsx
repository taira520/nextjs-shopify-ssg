import { memo } from 'react'
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title : string;
}

export const Input = memo((props: Props) => {

  return (
      <>
        <section className="contents-body body-contact_complete">
          <p className='heading'>お問合せの送信が<br className='sp_only' />完了しました</p>
          <p className='caption'>お問い合わせ有難うございます。<br />ご返信まで1~2営業日をいただいております。<br />返信まで今しばらくおまちください。</p>
          <Link href="/" legacyBehavior>
            <a className="home-backButton">ホームへもどる</a>
          </Link>
        </section>
      </>
  );
})

export default Input;