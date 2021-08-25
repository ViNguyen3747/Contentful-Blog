import Layout from "../Layout/Layout";
import {
  container,
  image,
  title,
  img1,
  img2,
  subtitle,
} from "./about.module.scss";
const AboutPage = () => {
  return (
    <Layout>
      <div className={container}>
        <div className={image}>
          <div className={img1}></div>
          <div className={img2}></div>
        </div>
        <div>
          <div className={title}>
            Hi! I am <span>ABC</span>
          </div>
          <div className={subtitle}>
            I love designing websites and growing succulent 🌵
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
