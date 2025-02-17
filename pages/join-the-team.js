import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import ContentfulData from "@utils/ContentfulData";
import RichText from "@components/RichText";
import PageTitle from "@components/PageTitle";

export default function JoinTheTeam({ page }) {
  return (
    <>
      <NextSeo title={page.title} description={page.metaDescription} />

      <Layout>
        <PageTitle title={page.title} />
        <RichText content={page.content} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const page = await ContentfulData.getPageContent("join-the-team");

  return {
    props: {
      page,
    },
    revalidate: 1,
  };
}
