import constants from "./constants";

const categoryQuery = `
{
    category(id: %%id%%) {
        id
        name
        children {
            id
            name
            url_key
            url_path
            url_suffix
            children_count
            path
            image
            productImagePreview: products(pageSize: 1) {
                items {
                    id
                    small_image {
                        url
                    }
                }
            }
        }
    }
}`;

export async function getCategories($id = null) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var graphql = JSON.stringify({
    query: categoryQuery.replace("%%id%%", $id),
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: graphql,
  };

  const res = await fetch(constants.requestUrl, requestOptions);
  return res.json();
}
