import Link from "next/link";
import Image from "next/image";
import {
  cardDark,
  cardLight,
  actionsDark,
  actionsLight,
  info,
  image,
} from "./blogCard.module.scss";
export default function BlogCard({ blog, index }) {
  const { title, slug, thumbnail } = blog.fields;
  return (
    <div className={index % 2 !== 0 ? cardDark : cardLight}>
      <div className={index % 2 !== 0 ? actionsLight : actionsDark}>
        <Link href={`/blogs/${slug}`}>
          <a>Discover</a>
        </Link>
      </div>
      <div className={info}>
        <h4>{title}</h4>
      </div>
      <div>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width="300"
          height="200"
          alt="blog post"
          className={image}
        />
      </div>
    </div>
  );
}
