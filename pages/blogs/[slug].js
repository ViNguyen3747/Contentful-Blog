import { createClient } from "contentful";
import Skeleton from "../../components/Skeleton";
import Detail from "../../components/BlogDetail/Detail";
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blogPost",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });
  if (!items.length) {
    return {
      redirect: {
        destination: "/blogs",
        permanent: false,
      },
    };
  }
  return {
    props: { blog: items[0] },
    revalidate: 1,
  };
};

const BlogDetail = ({ blog }) => {
  if (!blog) return <Skeleton />;
  return <Detail blog={blog} />;
};

export default BlogDetail;
