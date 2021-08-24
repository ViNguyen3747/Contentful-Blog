import Link from "next/link";
import { layout, header, pageContent, footer } from "./layout.module.scss";
export default function Layout({ children }) {
  return (
    <div className={layout}>
      <header className={header}>
        <Link href="/blogs">
          <a>
            <span>Welcome To</span>
            <span>My Blogs</span>
          </a>
        </Link>
      </header>
      <div className={pageContent}>{children}</div>
      <footer className={footer}>
        <p>Copyright 2021 Vi Nguyen :)</p>
      </footer>
    </div>
  );
}
