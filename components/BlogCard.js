import Link from "next/link";
import Image from "next/image";
export default function BlogCard({ blog, index }) {
  const { title, slug, thumbnail } = blog.fields;
  return (
    <div className={index % 2 !== 0 ? "cardDark" : "cardLight"}>
      <div className={index % 2 !== 0 ? "actionsLight" : "actionsDark"}>
        <Link href={`/blogs/${slug}`}>
          <a>Discover</a>
        </Link>
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
        </div>
      </div>
      <div>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width="300"
          height="200"
          alt="blog post"
        />
      </div>
    </div>
  );
}
