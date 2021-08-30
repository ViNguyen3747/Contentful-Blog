import Image from "next/image";

import { image, blogTitle, contentStyle } from "./detail.module.scss";
import Content from "./Content";
import Media from "./Media";

const Detail = ({ blog }) => {
  const { title, content, thumbnail, media } = blog.fields;
  const id = blog.sys.id;
  return (
    <>
      <div className={blogTitle}>{title}</div>
      <div className={image}>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          priority="true"
          layout="fill"
          objectFit="cover"
          quality={70}
          alt="blog post"
        />
      </div>
      <div className={contentStyle}>
        {content.content.map((c, index) => (
          <Content
            key={`id${index}`}
            type={c.nodeType}
            content={c.content}
            depth={0}
          />
        ))}
        {media && media.length > 0 ? <Media media={media} /> : null}
      </div>
    </>
  );
};

export default Detail;
