import { memo } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

import axios from "axios";

//react-hook-form
import { useFormContext, SubmitHandler } from "react-hook-form"; // SubmitHandlerは、submitイベントに関する関数の型宣言に使う

import type { ContactType } from "types/contact";

export const Confirm = memo((props) => {

  const router = useRouter();

  const {
    handleSubmit,
    getValues,
    formState: { isValid } //form内の入力の有無や送信の状態などを取得できる isValid以外にも色々ある
  } = useFormContext<ContactType>();

  const values = getValues(); // 入力データを取得

  console.log(values);

  //直アクセスの場合はリダイレクト
  //※必須項目の無いフォームは無いと思うのでisValidで判定
  if (!isValid) {
    router.push(`/contact`);
  }

  /**
   * フォームで submit が発生したときの処理
   * - contact form 7 の機能にアクセスしてメールを送信する
   * - フォームデータは、React Hook Form から提供される
   */
  const onSubmit: SubmitHandler<ContactType> = async (data) => {

    console.log("送信しました");
    console.log("yourName", values.yourName);
    console.log("yourTell", values.yourTell);
    console.log("yourEmail", values.yourEmail);
    console.log("yourAddress", values.yourAddress);
    console.log("checkBoxValues", values.checkBoxValues);
    console.log("yourMessage", values.yourMessage);

    // Sending
    // WordPress / Contact form 7 Settings
    const WEBSITE_URL = 'https://workspace.hidacolle.com';
    const FORM_ID = '5';

    const bodyFormData = new FormData();
    bodyFormData.set('yourName', values.yourName);
    bodyFormData.set('yourTell', values.yourTell);
    bodyFormData.set('yourEmail', values.yourEmail);
    bodyFormData.set('yourAddress', values.yourAddress);
    bodyFormData.set('checkBoxValues', values.checkBoxValues);
    bodyFormData.set('yourMessage', values.yourMessage);

    axios({
    method: 'post',
    url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
    data: bodyFormData,
    headers: {
        // 'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
    },
    }).then(response => {
        router.push("/contact/complete");
    }).catch(error => {
        console.log('失敗');
    });

  };

  return (
      <>
        <div className="box__contents">
          <div className="layout__confirm">
            <p className='title'>入力内容のご確認</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-unit">
                <p className="form-unit-title">お名前</p>
                <p className="form-unit-value">{values.yourName}</p>
              </div>
              <div className="form-unit">
                <p className="form-unit-title">お電話番号</p>

                {values.yourTell != "" ? (
                  <>
                    <p className="form-unit-value">{values.yourTell}</p>
                  </>
                  ) : (
                  <>
                    <p className="form-unit-value">未入力です</p>
                  </>
                )}

              </div>
              <div className="form-unit">
                <p className="form-unit-title">メールアドレス</p>
                <p className="form-unit-value">{values.yourEmail}</p>
              </div>
              <div className="form-unit">
                <p className="form-unit-title">ご住所</p>

                {values.yourAddress != "" ? (
                  <>
                    <p className="form-unit-value">{values.yourAddress}</p>
                  </>
                  ) : (
                  <>
                    <p className="form-unit-value">未入力です</p>
                  </>
                )}

              </div>
              <div className="form-unit">
                <p className="form-unit-title">何についてのお問い合せ・ご相談ですか?</p>

                {values.checkBoxValues ? (
                  <>
                    {values.checkBoxValues.map((item,index) => {
                      return (
                        <p className="form-unit-value" key={item.id}>{index+1}.{item}</p>
                      );
                    })}
                  </>
                  ) : (
                  <>
                    <p className="form-unit-value">未選択</p>
                  </>
                )}

              </div>
              <div className="form-unit">
                <p className="form-unit-title">お問い合わせ内容・ご相談内容</p>
                {values.yourMessage != "" ? (
                  <>
                    <p className="form-unit-value">{values.yourMessage}</p>
                  </>
                  ) : (
                  <>
                    <p className="form-unit-value">未入力です</p>
                  </>
                )}
              </div>

              <div className="form-actionArea">
                <div className="form-buttonWrapper">
                  <button type="submit" className="form-submitButton">
                    送信する
                  </button>
                  <Link href="/contact#contact_form" legacyBehavior>
                    <a className="form-backButton">入力内容を修正する</a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
  );
})

export default Confirm;