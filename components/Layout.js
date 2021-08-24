import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/blogs">
          <a>
            <span>Welcome To</span>
            <span>My Blogs</span>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2021 Vi Nguyen :)</p>
      </footer>
    </div>
  );
}
