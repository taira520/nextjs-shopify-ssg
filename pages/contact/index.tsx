import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";

import { useForm, FormProvider } from "react-hook-form";

import PageHead from 'components/PageHead/PageHead'
import { BreadList } from 'components/BreadList/BreadList'

import Confirm from 'components/Contact/Confirm'
import Input from 'components/Contact/Input'

const Home: NextPage = () => {

    const bread_list : { [key: string]: string }[] = [
        {
            name: "ご相談・お問合わせ",
            url: ""
        }
    ];

    // パラメータを取得
    const router = useRouter();
    const isConfirm = router.query.confirm;

    // useFormの設定&使用したい機能を呼び出す
    const methods = useForm({
        mode: "onChange",
        criteriaMode: "all"
    });

    return (
        <>
            <PageHead
                pageTitle = "お問合わせ"
                pageDescription = "お見積もりまでは何度でも無料ですので、みなさん「お試し感覚」でご利用いただいています。お名前・メールアドレスだけでも構いませんので、まずはお気軽にお問合せください。"
                pageRobots = ""
                pagePath = "https://www.hidacolle.com/contact"
                pageImg = ""
                pageImgWidth = ""
                pageImgHeight = ""
            />

            <section className="contents-body body-contact">

                <BreadList list={bread_list}></BreadList>

                <h1 className='heading'>ご相談・お問合わせ</h1>

                <FormProvider {...methods}>
                    {!isConfirm ? (
                        <>
                            <div className="introduction">
                                <h2>人の暮らしは「十人十色」</h2>
                                <p>みなさんそれぞれの暮らしの形は違っていますので、<br className="pc_only" />既製品の家具では、なかなかピッタリ納まることはないですよね。</p>
                                <p>お客様の声に耳を傾けながら、既製品では見つからない家具、<br className="pc_only" />みなさんの暮らしにフィットする家具をお作りしたいと思います。</p>
                            </div>

                            <ul className="list-attempt">
                                <li>
                                    <Image
                                        src="/images/custom-furniture/index/illust-1.jpg"
                                        alt="「ご縁・相談の場をつくる」のイメージイラスト"
                                        width={1280}
                                        height={855}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="/images/custom-furniture/index/illust-2.jpg"
                                        alt="「一緒に家具を考える時間をつくる」のイメージイラスト"
                                        width={1280}
                                        height={855}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="/images/custom-furniture/index/illust-3.jpg"
                                        alt="「既製品では見つからない家具をつくる」のイメージイラスト"
                                        width={1280}
                                        height={855}
                                    />
                                </li>
                            </ul>

                            <div id="contact_form" className="caption">
                                <p>ご相談からお見積もりまでは何度でも無料ですので、みなさん「お試し感覚」でご利用いただいています。</p>
                                <p>お名前・メールアドレスだけでも構いませんので、まずは以下より、お気軽にお問合せください。</p>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}

                </FormProvider>

                <div className="box__contents">

                    <FormProvider {...methods}>
                        {!isConfirm ? (
                        <>
                            <Input />
                        </>
                        ) : (
                        <>
                            <Confirm />
                        </>
                        )}
                    </FormProvider>

                </div>

                <div className="box__selectable">
                    <div className="heading__selectable">
                        <h2>選べるご相談方法</h2>
                        <p className='s_caption'>ヒダコレではお客さのご都合の良い方法でご相談いただけるよう、<br className='pc_only' />様々な選べるご相談方法をご用意しております。</p>
                    </div>

                    <div className="contents__selectable">
                        <div className="layout__selectable">
                            <div className="block__select">
                                <div className="layout__info">
                                    <h3>電話・メールでご相談</h3>
                                    <div className="catch">
                                        <Image
                                            src="/images/contact/telormail.png"
                                            alt=""
                                            width={320}
                                            height={203}
                                        />
                                    </div>
                                    <div className="s_caption">
                                        <p>もちろん、お電話・メールでのご相談も可能です。</p>
                                        <p>商品の在庫や手配状況の確認はもちろん、インテリア選びのご相談も手厚く受け付けています。メールは、おおよそ翌営業日には、回答をさせていただきます。</p>
                                    </div>
                                </div>
                                <div className="layout__buttons">
                                    <a href="tel:0120-690-315" className="block__button">お電話 : 0120-690-315</a>
                                    <a href="mailto:info@hidacolle.com?subject=ヒダコレ家具 ブランドサイトからのお問合せ / (from : ご相談・お問合わせ)" className="block__button">メールで予約する</a>
                                </div>
                            </div>
                            <div className="block__select">
                                <div className="layout__info">
                                    <h3>店頭でご相談</h3>
                                    <div className="catch">
                                        <Image
                                            src="/images/contact/shop.png"
                                            alt=""
                                            width={320}
                                            height={203}
                                        />
                                    </div>
                                    <div className="s_caption">
                                        <p>ヒダコレ家具は飛騨高山に実店舗がございます。</p>
                                        <p>土日は比較的混むため、ご来店予定・ご相談予定のお客様は事前予約をおすすめします。当日は予約のお客様を優先的にご案内しております。</p>
                                        <p>「じっくり相談したい」というお客様は、ぜひ事前にお電話でご予約いただければと思います。</p>
                                    </div>
                                </div>
                                <div className="layout__buttons">
                                    <a className="block__button" href="tel:0120-690-315">お電話 : 0120-690-315</a>
                                </div>
                            </div>
                            <div className="block__select">
                                <div className="layout__info">
                                    <h3>画面共有でご相談</h3>
                                    <div className="catch">
                                        <Image
                                            src="/images/contact/view.png"
                                            alt=""
                                            width={320}
                                            height={203}
                                        />
                                    </div>
                                    <div className="s_caption">
                                        <p>画面越しに家族みんなで参加できるから、 ひとりひとりの声が伝えられます。</p>
                                        <p>資料や、お部屋を見ながら話せるから、ご相談もスムーズに。</p>
                                        <p>まずはお問合せから「オンライン画面共有でのご相談」とお伝えください。ヒダコレスタッフからスケジュールなどの調整などをご案内させていただきます。</p>
                                        <div className="attention">※平日限定／事前予約制となります。</div>
                                    </div>
                                </div>
                                <div className="layout__buttons">
                                    <a className="block__button" href="/contact">ご予約はこちら</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
};

export default Home;