import Catch from "./home/catch";
import Collaborators from "./home/collaborators";
import FrontPage from "./home/frontPage";
import Interests from "./home/interests";
import { Testimonies } from "./home/testimonies";

export default function Home() {
  return (
    <>
      <FrontPage />
      <Collaborators />
      <Interests />
      <Testimonies />
    </>
  );
}
