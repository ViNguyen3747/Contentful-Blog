import Layout from "../../components/Layout/Layout";
import { createClient } from "contentful";
import { image, text, blogTitle } from "./detail.module.scss";
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
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });
  return {
    props: { blog: items[0] },
  };
};

const BlogDetail = ({ blog }) => {
  console.log(blog);
  const { title, content, thumbnail } = blog.fields;
  const imageurl = "https:" + thumbnail.fields.file.url;
  return (
    <Layout>
      <div>
        <div className={blogTitle}>{title}</div>
        <div
          className={image}
          style={{
            backgroundImage: `url(
              ${imageurl}
              )`,
          }}
        ></div>
        <div className={text}>
          {content.content.map((c, index) => (
            <p key={index}>{c.content[0].value}</p>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
