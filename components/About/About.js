import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  container,
  title,
  img1,
  img2,
  subtitle,
  img,
  gallery,
  image,
} from "./about.module.scss";
const AboutPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className={container}>
      <div data-aos="fade-up" data-aos-duration="1500" className={image}>
        <div className={img1}>
          <Image src="/img1.jpg" layout="fill" objectFit="cover" alt="cover" />
        </div>
        <div className={img2}>
          <Image src="/img2.jpg" layout="fill" objectFit="cover" alt="avatar" />
        </div>
      </div>
      <div>
        <div className={title}>
          Hi! I am <span>ABC</span>
        </div>
        <div className={subtitle}>
          I love designing websites and growing succulent 🌵
        </div>
      </div>
      <div className={gallery}>
        <Image
          data-aos="fade-right"
          data-aos-duration="2500"
          data-aos-anchor-placement="center-bottom"
          src="/image1.jpg"
          width={500}
          height={300}
          alt="avatar"
          className={img}
        />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Montes
          nascetur ridiculus mus mauris vitae. Tellus integer feugiat
          scelerisque varius. Elementum tempus egestas sed sed.
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
          suscipit adipiscing bibendum est ultricies integer quis auctor elit.
          Auctor elit sed vulputate mi sit amet mauris commodo. Vel fringilla
          est ullamcorper eget nulla facilisi.
        </div>
        <Image
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          src="/image2.jpg"
          width={500}
          height={300}
          alt="avatar"
          className={img}
        />
        <Image
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          src="/image3.jpg"
          width={500}
          height={300}
          alt="avatar"
          className={img}
        />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          lorem sed risus ultricies. Quisque non tellus orci ac auctor augue
          mauris augue neque.
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis
          commodo odio aenean sed adipiscing diam donec. Mauris rhoncus aenean
          vel elit scelerisque.
        </div>
        <Image
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          src="/image4.jpg"
          width={500}
          height={300}
          alt="avatar"
          className={img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
