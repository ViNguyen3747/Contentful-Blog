import { Divider, List } from "semantic-ui-react";

import { text, headline, divider } from "./detail.module.scss";
const Content = ({ type, content, depth }) => {
  const style = (marks) => {
    return {
      textDecoration: marks.find((m) => m.type === "underline")
        ? "underline"
        : "",
      fontWeight: marks.find((m) => m.type === "bold") ? "bold" : "",
      fontStyle: marks.find((m) => m.type === "italic") ? "italic" : "",
    };
  };
  const indentText = {
    marginBottom: "20px",
    textIndent: `${depth * 10}px`,
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
      <p className={text} style={indentText}>
        {content.map((c, index) => (
          <span key={index} style={style(c.marks)}>
            {c.value}
          </span>
        ))}
      </p>
    );
  else if (type === "ordered-list") {
    depth = depth + 1;
    return (
      <div className={text}>
        {depth > 1 ? (
          <List.List as="ol">
            {content.map((c, index) => (
              <List.Item as="li" key={index}>
                <Content content={c.content} type={c.nodeType} depth={depth} />
              </List.Item>
            ))}
          </List.List>
        ) : (
          <List as="ol">
            {content.map((c, index) => (
              <List.Item as="li" key={index}>
                <Content content={c.content} type={c.nodeType} depth={depth} />
              </List.Item>
            ))}
          </List>
        )}
      </div>
    );
  } else if (type === "list-item") {
    return (
      <>
        {content.map((c, index) => (
          <Content
            key={index}
            content={c.content}
            type={c.nodeType}
            depth={depth}
          />
        ))}
      </>
    );
  } else if (type === "hr") return <Divider className={divider} />;

  return null;
};
export default Content;
