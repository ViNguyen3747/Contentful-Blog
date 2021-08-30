import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "semantic-ui-react";
import {
  mediaGallery,
  mediaGallery2,
  mediaGallery3,
  modelStyle,
  icon,
} from "./detail.module.scss";

const Media = ({ media }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  const [model, setModel] = useState(false);
  const [tempSrc, setTempSrc] = useState({
    src: "",
    width: 0,
    height: 0,
    type: "",
  });

  const classStyle = (length) => {
    if (length === 1) return mediaGallery;
    else if (length === 2) return mediaGallery2;
    return mediaGallery3;
  };

  const getElement = (src, width, height, type = "image") => {
    setTempSrc({ src: "https:" + src, width, height, type });
    setModel(true);
  };
  return (
    <>
      <div className={classStyle(media.length)}>
        {media.map((m) => (
          <div key={m.sys.id}>
            {m.fields.file.contentType === "video/mp4" ? (
              <video
                autoPlay
                muted
                loop
                width="100%"
                height="auto"
                onClick={() => getElement(m.fields.file.url, 0, 0, "video")}
              >
                <source src={`https:${m.fields.file.url}`} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={`https:${m.fields.file.url}`}
                width={m.fields.file.details.image.width}
                height={m.fields.file.details.image.height}
                layout="intrinsic"
                onClick={() =>
                  getElement(
                    m.fields.file.url,
                    m.fields.file.details.image.width,
                    m.fields.file.details.image.height,
                    "image"
                  )
                }
                alt="media"
              />
            )}
          </div>
        ))}
      </div>
      {model ? (
        <div className={modelStyle} data-aos="zoom-in">
          {tempSrc.type === "video" ? (
            <video autoPlay muted loop>
              <source src={tempSrc.src} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={tempSrc.src}
              width={tempSrc.width / 4}
              height={tempSrc.height / 4}
              alt="chosen media"
            />
          )}
          <Icon
            name="close"
            size="big"
            className={icon}
            onClick={() => setModel(false)}
          />
        </div>
      ) : null}
    </>
  );
};

export default Media;
