import Catch from "./home/catch";
import { Consults } from "./home/consults";
import Different from "./home/different";
import FrontPage from "./home/frontPage";
import Interests from "./home/interests";
import { Testimonies } from "./home/testimonies";

export default function Home() {
  return (
    <>
      <FrontPage />
      <Different />
      <Consults />
      {/* <Catch /> */}
      {/* <Testimonies /> */}
    </>
  );
}
