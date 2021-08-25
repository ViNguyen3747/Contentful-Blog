import Link from "next/link";
import { home, video, title } from "../styles/home.module.scss";
export default function Home() {
  return (
    <div className={home}>
      <video autoPlay muted loop className={video}>
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className={title}>
        <div>Welcome To My Blogs</div>
        <did>
          <Link href="/about">
            <a>About Me</a>
          </Link>
        </did>
        <div>
          <Link href="/blogs">
            <a>My Blogs</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
