import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <video autoPlay muted loop id="video">
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="title">
        <Link href="/blogs">
          <a>Welcome To My Blogs</a>
        </Link>
      </div>
    </div>
  );
}
