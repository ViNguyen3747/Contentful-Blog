import Link from "next/link";
import Image from "next/image";
import { container } from "./home.module.scss";
const Home = () => {
  return (
    <div className={container}>
      <Image src="/welcome.svg" width={400} height={300} alt="Welcome" />
      <h1>
        <Link href="/about">
          <a>Let me introduce myself ^^</a>
        </Link>
      </h1>
    </div>
  );
};

export default Home;
