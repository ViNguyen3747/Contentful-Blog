import Link from "next/link";
import Image from "next/image";
import ActiveLink from "../useRouter";
import {
  layout,
  title,
  header,
  pageContent,
  footer,
  link,
  image,
} from "./layout.module.scss";
export default function Layout({ children }) {
  return (
    <div className={layout}>
      <header className={header}>
        <div className={image}>
          <Image
            priority="true"
            src="/background.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="80% 50%"
            alt="background"
          />
        </div>
        <div className={title}>
          <span>Welcome To</span>
          <span>My Blogs</span>
        </div>
        <div className={link}>
          <ActiveLink href="/about" link="About Me" />
          <ActiveLink href="/blogs" link="Blogs" />
        </div>
      </header>
      <div className={pageContent}>{children}</div>
      <footer className={footer}>
        <p>Copyright 2021 Vi Nguyen :)</p>
      </footer>
    </div>
  );
}
