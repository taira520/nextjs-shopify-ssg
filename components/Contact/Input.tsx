import { memo } from 'react'
import Link from 'next/link';
import Image from 'next/image';

// next.jsの機能
import { useRouter } from "next/router";
import { useState } from "react";

//react-hook-form
import { useFormContext, SubmitHandler } from "react-hook-form"; // SubmitHandlerは、submitイベントに関する関数の型宣言に使う
// import { ErrorMessage } from "@hookform/error-message"; //エラーメッセージコンポーネント

import type { ContactType, checkBoxType } from "types/contact";

export const Input = memo((props) => {

  const [checkBoxValues, setcheckBoxValues] = useState<checkBoxType[]>([
    {
      id: "1",
      name: "一枚板について",
      checked: false,
      disabled: false,
    },
    {
      id: "2",
      name: "いろいろなテーブルなど",
      checked: false,
      disabled: false,
    },
    {
      id: "3",
      name: "ソファなど",
      checked: false,
      disabled: false,
    },
    {
      id: "4",
      name: "ＴＶボードなど",
      checked: false,
      disabled: false,
    },
    {
      id: "5",
      name: "ベッドなど",
      checked: false,
      disabled: false,
    },
    {
      id: "6",
      name: "家具全般について",
      checked: false,
      disabled: false,
    },
    {
      id: "7",
      name: "メンテナンス・修理・買い取りについて",
      checked: false,
      disabled: false,
    },
    {
      id: "8",
      name: "その他",
      checked: false,
      disabled: false,
    }
  ]);

  const router = useRouter();

  const {
    register, //inputなどに入力された値を参照するために使う
    handleSubmit,
    formState: { errors, isValid }
  } = useFormContext();

  const onSubmit: SubmitHandler<ContactType> = async (data) => {
    console.log(data);
    //ここでバリデーション用APIを叩くなど処理をする想定
    router.push(`/contact?confirm=1`);
  };

  return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-unit">
            <label htmlFor="yourName">お名前<span className='required_label'>必須</span></label>
            <input
              type="text"
              className="input-text"
              placeholder=""
              {...register("yourName", {
                required: true
              })}
            />
            {/* <ErrorMessage
              errors={errors}
              name="yourName"
              render={({ message }) =>
                message ? <p className="form-validateMessage">{message}</p> : null
              }
            /> */}
          </div>

          <div className="form-unit">
            <label htmlFor="yourEmail">メールアドレス<span className='required_label'>必須</span></label>
            <input
              type="text"
              className="input-text"
              placeholder=""
              {...register('yourEmail', {
                required: true
              })}
            />

            {/* <ErrorMessage
              errors={errors}
              name="yourEmail"
              render={({ message }) =>
                message ? <p className="form-validateMessage">{message}</p> : null
              }
            /> */}
          </div>


          <div className="form-unit">

            <label htmlFor="yourTell">お電話番号</label>
            <input
              type="text"
              className="input-text"
              placeholder=""
              {...register("yourTell", {
                required: false
              })}
            />
            {/* <ErrorMessage
              errors={errors}
              name="yourTell"
              render={({ message }) =>
                message ? <p className="form-validateMessage">{message}</p> : null
              }
            /> */}
          </div>

          <div className="form-unit">
            <label htmlFor="yourAddress">ご住所</label>
            <input
              type="text"
              className="input-text"
              placeholder=""
              {...register('yourAddress', {
                required: false
              })}
            />

            {/* <ErrorMessage
              errors={errors}
              name="yourAddress"
              render={({ message }) =>
                message ? <p className="form-validateMessage">{message}</p> : null
              }
            /> */}
          </div>

          <div className="form-unit">
            <p className='title'>何についてのお問い合せ・ご相談ですか?</p>
            <div className="layout__check_box">
              {checkBoxValues.map((item) => {
                return (
                  <div className="block__check_box" key={item.id}>
                    <input
                      id={item.id}
                      type="checkbox"
                      value={item.name}
                      defaultChecked={item.checked}
                      disabled={item.disabled}
                      {...register("checkBoxValues")}  // 追記
                    />
                    <label htmlFor={item.id}>{item.name}</label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="form-unit">
            <label htmlFor="yourMessage">お問い合わせ内容・ご相談内容</label>
            <textarea
              className="input-textarea"
              placeholder="お問い合わせ内容をご入力ください。"
              {...register("yourMessage", {
                required: false
              })}
            />
            {/* <ErrorMessage
              errors={errors}
              name="yourMessage"
              render={({ message }) =>
                message ? <p className="form-validateMessage">{message}</p> : null
              }
            /> */}
          </div>

          <div className="form-actionArea">
            {!isValid && (
              <>
                <p className="form-validateMessage">
                  まだ全ての必須項目の入力が完了していません。
                </p>
              </>
            )}
            <div className="form-buttonWrapper">
              <button type="submit" className="form-submitButton">
                入力内容を確認する
              </button>
            </div>
          </div>
        </form>
      </>
  );
})

export default Input;