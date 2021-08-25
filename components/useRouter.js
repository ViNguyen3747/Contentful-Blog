import { useRouter } from "next/router";

function ActiveLink({ link, href }) {
  const router = useRouter();
  const style = {
    color: router.asPath === href ? "black" : "white",
    backgroundColor: router.asPath === href ? "white" : "",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {link}
    </a>
  );
}

export default ActiveLink;
