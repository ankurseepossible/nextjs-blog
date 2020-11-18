import constants from "./constants";

const productQuery = `
{
    products(filter: { sku: { eq: "%%sku%%" } }) {
        items {
            __typename
            id
            name
            sku
            url_key
            ... on ConfigurableProduct {
                configurable_options {
                    attribute_code
                    attribute_id
                    id
                    label
                    values {
                        default_label
                        label
                        store_label
                        use_default_value
                        value_index
                        swatch_data {
                            ... on ImageSwatchData {
                                thumbnail
                            }
                            value
                        }
                    }
                }
                variants {
                    attributes {
                        code
                        value_index
                    }
                    product {
                        id
                        media_gallery_entries {
                            id
                            disabled
                            file
                            label
                            position
                        }
                        sku
                        stock_status
                    }
                }
            }
        }
    }
}`;

export async function productBySKU($sku = null) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var graphql = JSON.stringify({
    query: productQuery.replace("%%sku%%", $sku),
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: graphql,
  };

  const res = await fetch(constants.requestUrl, requestOptions);

  return res.json();
}
