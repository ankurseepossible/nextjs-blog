import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getCategories } from "../lib/categories";
import Link from "next/link";

export default function Home({ allPostsData, categoryList }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <Link href={"/posts/first-post"}>First Post</Link>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          {categoryList.data.category.name}
        </h2>
        <ul className={utilStyles.list}>
          {categoryList.data.category.children.map(
            (product) => (
              <li className={utilStyles.listItem} key={product.id}>
                <a href={product.url_path + product.url_suffix}>{product.name}</a>
                <br />
                <img src={product.image} />
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const categoryList = await getCategories(26);

  return {
    props: {
      categoryList,
    },
  };
}
