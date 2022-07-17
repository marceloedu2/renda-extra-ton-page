import type { NextPage } from "next";
import Link from "../../components/Link";
import Ticket from "../../components/ticket";
import { LINKS } from "../../constants/links";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center flex-col items-center w-full h-full">
      <Ticket />
      <Link href={LINKS.SITE_TON}>
        <a className="btn btn-primary btn-regular mt-32">
          Compra com desconton
        </a>
      </Link>
    </div>
  );
};

export default Home;
