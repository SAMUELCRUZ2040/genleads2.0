import Catch from "./home/catch";
import Collaborators from "./home/collaborators";
import FrontPage from "./home/frontPage";
import Interests from "./home/interests";

export default function Home() {
  return (
    <>
      <FrontPage />
      <Collaborators />
      <Interests />
    </>
  );
}
