import constants from "./constants";

const productQuery = `
{
    category(id: %%id%%) {
        id
        description
        name
        product_count
        meta_title
        meta_keywords
        meta_description
    }
    products(
        pageSize: 20
        currentPage: 1
        filter: {}
    ) {
        items {
            id
            name
            price {
                regularPrice {
                    amount {
                        currency
                        value
                    }
                }
            }
            small_image {
                url
            }
            url_key
            url_suffix
        }
        page_info {
            total_pages
        }
        total_count
    }
}`;

export async function getCategoryProducts($id = null) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var graphql = JSON.stringify({
    query: productQuery.replace("%%id%%", $id),
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: graphql,
  };

  const res = await fetch(constants.requestUrl, requestOptions);

  return res.json();
}
