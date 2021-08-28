import Image from "next/image";
import { Divider, List } from "semantic-ui-react";

import {
  image,
  text,
  blogTitle,
  contentStyle,
  headline,
  divider,
} from "./detail.module.scss";

const Detail = ({ blog }) => {
  const { title, content, thumbnail } = blog.fields;
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
          <Content key={index} type={c.nodeType} content={c.content} />
        ))}
      </div>
    </>
  );
};

const Content = ({ type, content }) => {
  const style = (marks) => {
    return {
      textDecoration: marks.find((m) => m.type === "underline")
        ? "underline"
        : "",
      fontWeight: marks.find((m) => m.type === "bold") ? "bold" : "",
      fontStyle: marks.find((m) => m.type === "italic") ? "italic" : "",
    };
  };
  if (type === "heading-1")
    return (
      <h1 className={headline} style={style(content[0].marks)}>
        {content[0].value}
      </h1>
    );
  else if (type === "heading-2")
    return (
      <h2 className={headline} style={style(content[0].marks)}>
        {content[0].value}
      </h2>
    );
  else if (type === "heading-3")
    return (
      <h3 className={headline} style={style(content[0].marks)}>
        {content[0].value}
      </h3>
    );
  else if (type === "paragraph")
    return (
      <p className={text}>
        {content.map((c, index) => (
          <span key={index} style={style(c.marks)}>
            {c.value}
          </span>
        ))}
      </p>
    );
  else if (type === "ordered-list")
    return (
      <List as="ol">
        {content.map((c, index) => (
          <List.Item
            as="li"
            key={index}
            className={text}
            style={{ textIndent: "0px" }}
          >
            <Content content={c.content} type={c.nodeType} />
          </List.Item>
        ))}
      </List>
    );
  else if (type === "unordered-list")
    return (
      <List as="ul">
        {content.map((c, index) => (
          <List.Item
            as="li"
            key={index}
            className={text}
            style={{ textIndent: "0px" }}
          >
            {c.content[0].content[0].value}
          </List.Item>
        ))}
      </List>
    );
  else if (type === "hr") return <Divider className={divider} />;

  return <></>;
};

export default Detail;
