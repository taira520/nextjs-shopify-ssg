// 以下「graphql参考」
// https://ebisu.com/note/next-and-wordpress/

async function fetchAPI(query = '', variables = {}) {

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
        method: 'POST',
        headers: {
            Authorization: process.env.WP_AUTH_SECRET,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    }).then((response) => response.json())

    if (response.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    return response.data

}

export async function getAllPosts(limit = 100) {

    const variables = {
        limit,
    }

    const query = `
            query getAllSlugs($limit: Int!) {
                posts(first: $limit) {
                    nodes {
                        title
                        slug
                        featuredImage {
                            node {
                                sourceUrl
                                altText
                                mediaDetails {
                                    width
                                    height
                                }
                            }
                        }
                    }
                }
            }
            `

    try {
        const response = await fetchAPI(query, variables)

        const contents = response.posts.nodes.map((node) => {

            const content = {
                title: node.title,
                slug: node.slug,
            }

            if (node.featuredImage) {
                content.eyecatch = {
                    url: node.featuredImage.node.sourceUrl,
                    altText: node.featuredImage.node.altText,
                    width: node.featuredImage.node.mediaDetails.width,
                    height: node.featuredImage.node.mediaDetails.height,
                }
            }

            return content

        }
    )

    return contents

    } catch (err) {
        console.log('~~ getAllPosts ~~')
        console.log(err)
    }
}


export async function getPostBySlug(slug) {

    const variables = {
        slug,
    }

    const query = `
            query getPostBySlug($slug: ID!) {
                post(idType: SLUG, id: $slug) {
                    slug
                    title(format: RENDERED)
                    date
                    content(format: RENDERED)
                    featuredImage {
                        node {
                            sourceUrl
                            altText
                            mediaDetails {
                                width
                                height
                            }
                        }
                    }
                    categories {
                        nodes {
                            name
                            slug
                        }
                    }
                    note_person_introduction {
                        personIntroduction
                    }
                    seo {
                        metaDesc
                    }
                }
            }
            `
    try {

        const response = await fetchAPI(query, variables)

        const content = {
            title: response.post.title,
            slug: response.post.slug,
            publishDate: response.post.date,
            content: response.post.content,
            categories: response.post.categories.nodes,
            note_person_introduction: response.post.note_person_introduction.personIntroduction,
            description: response.post.seo.metaDesc,
        }

        if (response.post.featuredImage) {
            content.eyecatch = {
                url: response.post.featuredImage.node.sourceUrl,
                altText: response.post.featuredImage.node.altText,
                width: response.post.featuredImage.node.mediaDetails.width,
                height: response.post.featuredImage.node.mediaDetails.height,
            }
        }

        return content

    } catch (err) {
        console.log('~~ getPostBySlug ~~')
        console.log(err)
    }
}

export async function getIchimaiitaAllPosts(limit = 100) {

    const variables = {
        limit,
    }

    const query = `
            query getAllIchimaiitaData($limit: Int!) {
                ichimaiitaItems(first: $limit) {
                        nodes {
                            ichimaiitaItems {
                                title
                                slug
                                controlNumber
                                size
                                priceTaxIncluded
                                thumbnail {
                                    altText
                                    sourceUrl
                                }
                                photos {
                                    photo1 {
                                        altText
                                        sourceUrl
                                    }
                                    photo2 {
                                        altText
                                        sourceUrl
                                    }
                                    photo3 {
                                        altText
                                        sourceUrl
                                    }
                                    photo4 {
                                        altText
                                        sourceUrl
                                    }
                                    photo5 {
                                        altText
                                        sourceUrl
                                    }
                                    photo6 {
                                        altText
                                        sourceUrl
                                    }
                                    photo7 {
                                        altText
                                        sourceUrl
                                    }
                                    photo8 {
                                        altText
                                        sourceUrl
                                    }
                                }
                            }
                        }
                  }
            }
            `

    try {
        const response = await fetchAPI(query, variables)

        console.log("response");
        console.log(response);

        const contents = response.ichimaiitaItems.nodes.map((node) => {

            const content = {
                title: node.ichimaiitaItems.title,
                slug: node.ichimaiitaItems.slug,
                controlNumber: node.ichimaiitaItems.controlNumber,
                size: node.ichimaiitaItems.size,
                priceTaxIncluded: node.ichimaiitaItems.priceTaxIncluded,
                thumbnail: node.ichimaiitaItems.thumbnail,
                photos: [],
            }

            for (let i = 1; i <= 8; i++) {
                const photo = node.ichimaiitaItems.photos[`photo${i}`];
                if (photo) {
                    content.photos.push({
                        altText: photo.altText,
                        sourceUrl: photo.sourceUrl,
                    });
                }
            }

            // if (node.featuredImage) {
            //     content.eyecatch = {
            //         url: node.featuredImage.node.sourceUrl,
            //         altText: node.featuredImage.node.altText,
            //         width: node.featuredImage.node.mediaDetails.width,
            //         height: node.featuredImage.node.mediaDetails.height,
            //     }
            // }

            return content

        }
    )

    return contents

    } catch (err) {
        console.log('~~ getIchimaiitaAllPosts ~~')
        console.log(err)
    }
}

// =============================================
// =============================================
// 2023/7/11
// wordpressのプレビュー機能をnextjsに持たせるため
// Github actions上でbuildできなくなったので、WP側でプレビューする仕様へ変えました
// =============================================
// =============================================

// export async function getPreviewPostBySlug(slug) {

//     const API_URL = `${process.env.WP_API_URL}/wp-json/wp/v2/posts/?slug=${slug}&_embed&status=draft`;

//     console.log("===========API_URL==========");
//     console.log(API_URL);

//     const response = await fetch(API_URL, {
//         method: 'GET',
//         headers: {
//             Authorization: process.env.WP_AUTH_SECRET,
//             "Content-Type": "application/json",
//         },
//     });

//     if (response.ok) {
//         const data = await response.json();
//         return data;
//     } else {
//         console.error('Failed to fetch API');
//         throw new Error('Failed to fetch API');
//     }

// }

// export async function getPreviewAllPosts() {

//     const API_URL = `${process.env.WP_API_URL}/wp-json/wp/v2/posts/?status=draft&_embed`;

//     console.log("===========API_URL==========");
//     console.log(API_URL);

//     const response = await fetch(API_URL, {
//         method: 'GET',
//         headers: {
//             Authorization: process.env.WP_AUTH_SECRET,
//             "Content-Type": "application/json",
//         },
//     });

//     if (response.ok) {
//         const data = await response.json();
//         return data;
//     } else {
//         console.error('Failed to fetch API');
//         console.error('this error API_URL => ', API_URL);
//         throw new Error('Failed to fetch API');
//     }

// }