import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../../components/Layout";
import { createClient } from "contentful";
import BlogCard from "../../components/BlogCard";
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: "blogPost" });
  return {
    props: {
      blogs: res.items,
    },
  };
}
const Blogs = ({ blogs }) => {
  console.log(blogs);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <Layout>
      <div className="container">
        {blogs.map((blog, index) => (
          <div
            key={blog.sys.id}
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-duration="700"
            data-aos-easing="ease"
          >
            <BlogCard blog={blog} index={index} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Blogs;
