import Template from "./Template.tsx";
import WorkItem from "../ui/WorkItem.tsx";
import WorkItemList from "../ui/WorkItemList.tsx";

export default function Projects() {
  return (
    <Template title="PROJECTS">
      <WorkItemList>
        <WorkItem
          title={"Recipe Management App for Seniorama Wiedikon"}
          subtitle={"11.2023 - 12.2023"}
          url={"TODO"}
          tags={["Angular", "Firebase", "RxJs", "Redux"]}
        >
          During my civil service at a retirement home's canteen, I identified a
          significant opportunity for digitization and process improvement.
          Recognizing the potential for a tech-driven solution, I proposed the
          idea of a recipe management app to the head chef. After receiving
          approval, I swiftly began the development process. The result was a
          progressive web app (PWA), now actively used by the entire kitchen
          team. This initiative not only streamlined their operations but also
          demonstrated my ability to apply technology in practical, impactful
          ways outside of traditional tech environments.
        </WorkItem>
        <WorkItem
          title="Vietnamese Coffee in Switzerland"
          subtitle="08.2023"
          url="https://www.olivier-coffee.ch/en"
          tags={["NextJs", "React"]}
        >
          In early 2023, during a trip through Vietnam, I became captivated by
          the local coffee culture. This led to a collaboration with Quang, a
          local coffee shop owner, where I pitched the idea of introducing his
          coffee to the Swiss market. This initiative evolved into a project
          that combines cross-cultural exchange and business development. The
          full story of this entrepreneurial journey and its ongoing impact is
          detailed on the project's dedicated website.
        </WorkItem>

        <WorkItem
          title="Climbing safety image analytics"
          subtitle="02.2022 - 07.2022"
          tags={["Python", "Open CV", "TensorFlow", "CLI"]}
          url="https://github.com/MRyves/bsc-climbing-analysis"
        >
          For my Bachelor's thesis, I developed a command-line application to
          analyze videos of climbers, with the aim of assessing climbing safety
          through object-detection and image analysis. Utilizing TensorFlow for
          object detection and OpenCV for video image processing, the project
          explored the feasibility of using these technologies to evaluate
          safety in climbing scenarios. The results demonstrated that while
          certain safety parameters, like the horizontal distance between
          climbers, could be effectively calculated using object-detection, many
          safety aspects still require more complex analysis beyond the scope of
          current image-analysis capabilities.
        </WorkItem>

        <WorkItem
          title="Nasci E-Learning Platform"
          subtitle="2019 - 2021"
          tags={["Angular", "RxJS", "Python", "Django"]}
          url="https://github.com/MRyves/nasci-learn"
        >
          As the lead software engineer in a small team, I played a pivotal role
          in the development of an e-learning platform tailored for primary
          school students. The project involved constructing the backend with
          Python and Django, ensuring robust and scalable functionality. On the
          frontend, we utilized Angular (version 9), complemented by Angular
          Material and RxJS, to create an intuitive and engaging user interface.
          This role not only highlighted my technical expertise but also my
          ability to guide a team through complex software development
          processes.
        </WorkItem>
      </WorkItemList>
    </Template>
  );
}
