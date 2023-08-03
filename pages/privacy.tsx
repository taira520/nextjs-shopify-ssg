import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { BreadList } from 'components/BreadList/BreadList'

const Home: NextPage = () => {

    const bread_list : { [key: string]: string }[] = [
        {
            name: "プライバシーポリシー",
            url: ""
        }
    ];

    return (
        <>
            <PageHead
                pageTitle = "プライバシーポリシー"
                pageDescription = "プライバシーポリシーのページです。"
                pageRobots = ""
                pagePath = "https://www.sample.com/privacy"
                pageImg = ""
                pageImgWidth = ""
                pageImgHeight = ""
            />

            <section className="contents-body body-privacy">

                <BreadList list={bread_list}></BreadList>

                <h1 className='heading'>プライバシーポリシー</h1>

                <div className="caption">
                    <p>HIDA・COLLECTION くらしの制作所（以下、当店）は、個人情報を保護することが社会的責務であることを十分認識し、以下の通り個人情報の適正な取扱いに努めます。</p>
                </div>

                <div className="box__contents">
                    <ul>
                        <li>
                            <p className="title">法令の遵守</p>
                            <p className="line">当店は、個人情報の保護に関する法律、条例、および国が定める指針等を遵守します。</p>
                        </li>
                        <li>
                            <p className="title">安全管理措置</p>
                            <p className="line">当店は、その取り扱う個人データの漏えい、滅失又はき損の防止その他の個人データの安全管理のために必要かつ適切な措置を講じます。 ・当店は、当店の従業者に個人データを取り扱わせるに当たって、当該個人データの安全管理が図られるよう、当該従業者に対する必要かつ適切な監督を行ないます。</p>
                        </li>
                        <li>
                            <p className="title">正確性の確保</p>
                            <p className="line">当店は、利用目的の達成に必要な範囲内において、個人データを正確かつ最新の内容に保つよう努めます。</p>
                        </li>
                        <li>
                            <p className="title">個人情報の適正な取り扱い</p>
                            <p className="line">
                                当店は、個人情報を取り扱うに当たって、その利用目的をできる限り特定します。<br />
                                <br />
                                当店は、あらかじめ本人の同意を得ないで、特定された利用目的の達成に必要な範囲を超えて、個人情報を取り扱いません。<br />
                                <br />
                                当店は、偽りその他不正の手段により個人情報を取得しません。<br />
                                <br />
                                当店は、個人情報を取得した場合、あらかじめその利用目的を公表している場合を除き、速やかに、その利用目的を、本人に通知し、又は公表します。<br />
                                <br />
                                当店は、本人との間で契約を締結することに伴って契約書その他の書面（電子的方式、磁気的方式その他人の知覚によっては認識することができない方式で作られる記録を含む。）に記載された当該本人の個人情報を取得する場合その他本人から直接書面に記載された当該本人の個人情報を取得する場合、あらかじめ、本人に対し、その利用目的を明示します。<br />
                                <br />
                                当店は、利用目的を変更する場合、変更前の利用目的と相当の関連性を有すると合理的に認められる範囲を超えた変更を行いません。<br />
                                <br />
                                当店は、利用目的を変更した場合、変更された利用目的について、本人に通知し、又は公表します。<br />
                                <br />
                                当店は、あらかじめ本人の同意を得ないで、個人データを第三者に提供しません。
                            </p>
                        </li>
                        <li>
                            <p className="title">個人情報の委託</p>
                            <p className="line">
                                当店は、特定された利用目的を達するために、利用目的の範囲内で個人データを委託します。<br />
                                <br />
                                当店は、個人データの取扱いの全部又は一部を委託する場合、その取扱いを委託された個人データの安全管理が図られるよう、委託を受けた者に対する必要かつ適切な監督を行ないます。
                            </p>
                        </li>
                        <li>
                            <p className="title">開示等の要請</p>
                            <p className="line">
                                当店は、本人から、当該保有個人データの開示、訂正、追加、削除、利用目的の通知（以下「開示等」という。）を求められた場合、遅滞なく、当該保有個人データの開示等を行います。<br />
                                <br />
                                当店は、本人から、当該保有個人データの利用の停止、消去、第三者への提供の停止（以下「利用停止等」という。）を求められた場合であって、その求めに理由があることが判明したときは、遅滞なく当該保有個人データの利用停止等を行います。<br />
                                <br />
                                当店は、本人から求められた措置の全部又は一部について、その措置をとらない場合、又はその措置と異なる措置をとる場合は、本人に対し、その旨を通知すると共に、その理由を説明するよう努めます。
                            </p>
                        </li>
                        <li>
                            <p className="title">苦情・相談</p>
                            <p className="line">
                                当店は、個人情報の取扱いに関する苦情の適切かつ迅速な処理に努めます。 ・当店は、前項の目的を達成するために必要な体制の整備に努めます。<br />
                                <br />
                                「個人情報の保護に関する法律」に基づく公表事項<br />
                                <br />
                                1.個人情報取扱事業者の氏名又は名称 名称：HIDA・COLLECTION くらしの制作所 代表：浦西 正幸<br />
                                2.個人データの利用目的 受注管理 / 商品配送 / 入金管理 / 商品・サービス等のご案内<br />
                                3.お問い合わせ窓口 TEL : 0577-57-7555 / E-mail : info@hida-collection.shop
                            </p>
                        </li>
                    </ul>
                </div>

            </section>
        </>
    );
};

export default Home;