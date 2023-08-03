import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { BreadList } from 'components/BreadList/BreadList'

const Home: NextPage = () => {

    const bread_list : { [key: string]: string }[] = [
        {
        name: "会社概要",
        url: ""
        }
    ];

    return (
        <>
            <PageHead
                pageTitle = "会社概要"
                pageDescription = "会社概要のページです。"
                pageRobots = ""
                pagePath = "https://www.sample.com/company"
                pageImg = ""
                pageImgWidth = ""
                pageImgHeight = ""
            />

            <section className="contents-body body-company">

                <BreadList list={bread_list}></BreadList>

                <h1 className='heading'>会社概要</h1>

                <div className="box__contents">
                    <ul>
                        <li>
                            <p className="title">会社名</p>
                            <p className="line">HIDA-COLLECTION Company</p>
                        </li>
                        <li>
                            <p className="title">設立</p>
                            <p className="line">2002年2月</p>
                        </li>
                        <li>
                            <p className="title">代表取締役</p>
                            <p className="line">浦西 正幸</p>
                        </li>
                        <li>
                            <p className="title">取引銀行</p>
                            <p className="line">十六銀行</p>
                        </li>
                        <li>
                            <p className="title">営業品目</p>
                            <p className="line">一枚板テーブル / 一枚板原木 / ダイニングセット / デスク / 一枚板用脚 / 椅子 / 収納家具 / オーダー家具他</p>
                        </li>
                        <li>
                            <p className="title">ヒダコレ家具 ブランドサイト</p>
                            <p className="line"><a href="http://hidacolle.com/" target="_blank" rel="noopener">http://hidacolle.com/</a></p>
                        </li>
                        <li>
                            <p className="title">ヒダコレ家具 オンラインショップ</p>
                            <p className="line"><a href="https://www.hida-collection.shop/" target="_blank" rel="noopener">https://www.hida-collection.shop/</a></p>
                        </li>
                        <li>
                            <p className="title">所在地</p>
                            <p className="line">〒506-0055 岐阜県高山市上岡本町3-362</p>
                        </li>
                        <li>
                            <p className="title">電話番号</p>
                            <p className="line">0120-690-315</p>
                        </li>
                        <li>
                            <p className="title">Eメール</p>
                            <p className="line">info@hidacolle.com</p>
                        </li>
                    </ul>
                </div>

            </section>
        </>
    );
};

export default Home;