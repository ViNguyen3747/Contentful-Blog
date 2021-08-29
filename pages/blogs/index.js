import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { createClient } from "contentful";
import BlogCard from "../../components/BlogCard/BlogCard";
import { container } from "./blogs.module.scss";
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: "blogPost" });
  return {
    props: {
      blogs: res.items,
      revalidate: 1,
    },
  };
}
const Blogs = ({ blogs }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className={container}>
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
  );
};

export default Blogs;
