import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getCategoryProducts } from "../../lib/categoryProducts";
import UserContext from "../../components/UserContext";
import { useContext } from "react";

function FirstPost({ categoryProducts }) {
  return (
    <Layout>
      <Head>
        <title>{categoryProducts.data.category.name}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          {categoryProducts.data.category.name}
        </h2>
        <ul className={utilStyles.list}>
          {categoryProducts.data.products.items.map(
            ({ id, name, url_key, url_suffix, small_image, price }) => (
              <li className={utilStyles.listItem} key={id}>
                <img src={small_image.url} />
                <a href={url_key + url_suffix}>{name}</a>
                <br />
                <span>
                  {price.regularPrice.amount.currency}
                  {price.regularPrice.amount.value}
                </span>
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // const {userContext} = useContext(UserContext);
  // userContext.showLoader();
  const categoryProducts = await getCategoryProducts(26);
  // userContext.hideLoader();
  return {
    props: {
      categoryProducts
    },
  };
}

export default FirstPost;
