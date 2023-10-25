import Template from "./Template.tsx";
import WorkItem from "../ui/WorkItem.tsx";
import WorkItemList from "../ui/WorkItemList.tsx";

export default function Projects() {
  return (
    <Template title="PROJECTS">
      <WorkItemList>
        <WorkItem
          title="Vietnamese Coffee in Switzerland"
          subtitle="08.2023"
          url="https://www.olivier-coffee.ch/en"
          tags={["NextJs", "React"]}
        >
          Beginning of 2023 I went on a long trip through Vietnam. I fell in
          love with their coffee culture and so I met a local coffee-owner. His
          name is Quang and one day I pitched the idea of bringing his coffee to
          Switzerland. One thing lead to the other and this project started. You
          can read the full story on the Homepage.
        </WorkItem>

        <WorkItem
          title="Climbing safety image analytics"
          subtitle="02.2022 - 07.2022"
          tags={["Python", "Open CV", "TensorFlow", "CLI"]}
          url="https://github.com/MRyves/bsc-climbing-analysis"
        >
          This was my bachelors thesis-project. I developed a command-line
          application to analyse videos of people who are climbing. The goal was
          to evaluate whether object-detection and image analysis are sufficient
          to determine whether a given climbing situation is safe for the people
          involved or not. I used the TensorFlow library and pre-trained models
          for the object-detection and OpenCV for handling the images of the
          video. The result of the evaluation is that some safety-related
          variables can be calculated using only object-detection, like the
          horizontal distance between the climbers. Still there are a lot of
          safety concerns which can not be detected using only image-analysis.
        </WorkItem>

        <WorkItem
          title="Nasci E-Learning Platform"
          subtitle="2019 - 2021"
          tags={["Angular", "RxJS", "Python", "Django"]}
          url="https://github.com/MRyves/nasci-learn"
        >
          In a small team we developed an e-learning platform for students im
          primary school. The backend of the application was built with python
          and django. In the frontend we used Angular (version 9) with
          Angular-Material and RxJS. I was the leading-software engineer of the
          project team.
        </WorkItem>
      </WorkItemList>
    </Template>
  );
}
