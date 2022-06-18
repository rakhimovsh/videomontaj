import Contact from "../Components/Home/Contact/Contact";
import CoursFor from "../Components/Home/CoursFor/CoursFor";
import HeroHome from "../Components/Home/HeroHome/HeroHome";
import NumUsers from "../Components/Home/NumUsers/NumUsers";
import OnlineCours from "../Components/Home/OnlineCours/OnlineCours";
import ProjectHelp from "../Components/Home/ProjectHelp/ProjectHelp";
import Questions from "../Components/Home/Questions/Questions";
import Video from "../Components/Home/Video/Video";

function Home() {
  return (
    <main>
      <HeroHome />
      <NumUsers />
      <CoursFor />
      <OnlineCours />
      <Video />
      <ProjectHelp />
      <Questions />
      <Contact />
    </main>
  );
}

export default Home;
