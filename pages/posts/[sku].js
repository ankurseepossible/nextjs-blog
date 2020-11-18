import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Loader from "../../components/loader";
import { productBySKU } from "../../lib/prodyctBySKU";

export default function Post({ productData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader isLoading={true}></Loader>;
  }
  return (
    <Layout>
      <Head>
        <title>{productData.name}</title>
      </Head>
      <section>
        <div>{productData.name}</div>
        <div>{productData.sku}</div>
        <div>{productData.url_key}</div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const productData = await productBySKU(params.sku.split(".")[0]);
  return {
    props: {
      productData: productData.data.products.items[0],
    },
  };
}
