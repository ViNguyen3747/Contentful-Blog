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
            src="/background.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="80% 30%"
            alt="background"
          />
        </div>
        <div className={title}>
          <span>Welcome To</span>
          <span>My Blogs</span>
        </div>
        <div className={link}>
          <ActiveLink href="/blogs" link="Blogs" />
          <ActiveLink href="/about" link="About Me" />
        </div>
      </header>
      <div className={pageContent}>{children}</div>
      <footer className={footer}>
        <p>Copyright 2021 Vi Nguyen :)</p>
      </footer>
    </div>
  );
}
