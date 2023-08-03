import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'

import PageHead from 'components/PageHead/PageHead'
import { Links } from 'components/Ichimaiita/Links'
import { CustomFurnitureList } from 'components/CustomFurniture/CustomFurnitureList'
import { OriginalProductsList } from 'components/OriginalProducts/OriginalProductsList'

import data from 'list-original-prodacts.json'

// Wordpress graphql
import { getAllItems } from "lib/shopifyapi";

export async function getStaticProps(context) {

  const allItems = await getAllItems();

  console.log("==============allItems==============");
  console.log(allItems);

  return {
    props: {
      allItems
    }
  };
}

type Props = {
  allItems: any;
}

const Home: NextPage<Props> = ({allItems}) => {

    const postLists = data.postLists;

    const hero_image = "/images/index/001.jpg"

    return (

      <>
        <PageHead
          pageTitle = ""
          pageDescription = ""
          pageRobots = ""
          pagePath = ""
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <section className="contents-body body-index">

          {/* <section className="box-products">
            <p className='heading-products'>商品の一部をご紹介</p>
            <div className="layout__lists-products">
              {postLists.map((post, index) =>
                <OriginalProductsList
                  key = {index}
                  id = {post.id}
                  hidacolle_number = {post.hidacolle_number}
                  item_name = {post.item_name}
                  caption = {post.caption}
                  ec_url = {post.ec_url}
                  index = {true}
                />
              )}
            </div>
          </section> */}

          <div className="items">
            {allItems.map((item,index) =>
              <Link
                key={index}
                href={item.onlineStoreUrl}
                legacyBehavior
              >
                <a className="item">
                  <div className="thumbnail">
                    {/* {item.eyecatch ? (
                      <Image
                        src={item.eyecatch.url}
                        width={item.eyecatch.width}
                        height={item.eyecatch.height}
                        alt={item.eyecatch.altText}
                      />
                    ) : (
                      // 代替のコンテンツを表示する場合
                      // ヒダコレノートの基本サムネイル画像を設定しておく。
                      <div>Alternative Content</div>
                    )} */}
                  </div>
                  <h3 className="title">TITLE: {item.title}</h3>
                  <h3 className="totalInventory">QUANTITY: {item.totalInventory}</h3>
                  <h3 className="onlineStoreUrl">URL: {item.onlineStoreUrl}</h3>
                  <h3 className="description">DESCRIPTION: {item.description}</h3>
                  <h3 className="id">ID: {item.id}</h3>
                </a>
              </Link>
            )}
          </div>

        </section>
      </>
    );
};

export default Home;