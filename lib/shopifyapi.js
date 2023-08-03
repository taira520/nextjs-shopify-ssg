// 以下「graphql参考」
// https://ebisu.com/note/next-and-wordpress/

async function shopifyFetchAPI(query = '', variables = {}) {

    const response = await fetch(process.env.SHOPIFY_GRAPHQL_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
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

export async function getAllItems(limit = 100) {

    const variables = {
        limit,
    }

    const query = `
            query getAllItems($limit: Int!) {
                products(first: $limit){
                    edges{
                        node{
                            id
                            title
                            description
                            onlineStoreUrl
                            totalInventory
                        }
                    }
                }
            }
            `

    try {
        const response = await shopifyFetchAPI(query, variables)

        console.log("==========================================")
        console.log("==============Shopify response==============")
        console.log("==========================================")
        console.log("==============response==============")
        console.log(response)
        console.log("==============response.products==============")
        console.log(response.products)
        console.log("==============response.products.edges[0]==============")
        console.log(response.products.edges[0])

        const contents = response.products.edges.map((item) => {

            const content = {
                id: item.node.id,
                title: item.node.title,
                description: item.node.description,
                onlineStoreUrl: item.node.onlineStoreUrl,
                totalInventory: item.node.totalInventory,
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
        console.log('==============getAllItems ERROR==============')
        console.log(err)
    }
}