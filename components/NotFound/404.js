import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { container } from "./404.module.scss";
const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/about");
    }, 4000);
  }, []);
  return (
    <div className={container}>
      <Image
        src="/notfoundsymbol.svg"
        width={400}
        height={300}
        alt="404 Page Not Found"
      />
      <h2>Oops! That page cannot be found :(</h2>
      <p>
        Redirecting to{" "}
        <Link href="/about">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
