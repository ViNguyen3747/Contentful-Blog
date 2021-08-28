import Image from "next/image";
import { mediaGallery, videoStyle } from "./detail.module.scss";
const Media = ({ media }) => {
  console.log(media);
  return (
    <div className={mediaGallery}>
      {media.map((m, index) => (
        <div key={index}>
          {m.fields.file.contentType === "video/mp4" ? (
            <video autoPlay muted loop className={videoStyle}>
              <source src={`https:${m.fields.file.url}`} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={`https:${m.fields.file.url}`}
              width={400}
              height={250}
              alt="media"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Media;
