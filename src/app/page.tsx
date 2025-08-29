import Catch from "./home/catch";
import { Consults } from "./home/consults";
import FrontPage from "./home/frontPage";
import { Testimonies } from "./home/testimonies";
import Highlights from "./home/Highlights";

export default function Home() {
  return (
    <>
      <FrontPage />
      <Highlights />
      <Consults />
      <Catch />
      <Testimonies />
    </>
  );
}
