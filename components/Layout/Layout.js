import Link from "next/link";
import ActiveLink from "../useRouter";
import {
  layout,
  title,
  header,
  pageContent,
  footer,
  link,
} from "./layout.module.scss";
export default function Layout({ children }) {
  return (
    <div className={layout}>
      <header className={header}>
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
