import Template from "./Template.tsx";
import WorkItem from "../ui/WorkItem.tsx";
import WorkItemList from "../ui/WorkItemList.tsx";

export default function Work() {
  return (
    <Template title="WORK EXPERIENCE">
      <WorkItemList>
        <WorkItem
          title={"Software development Tutor @ Superprof"}
          subtitle={"08.2023 - Today"}
          tags={["JS/TS", "React", "Teaching"]}
          url={
            "https://de.superprof.ch/individuelle-nachhilfe-programmier-anfanger-und-vortgeschrittene-perfekt-studierende-und-interssierte-lernende.html"
          }
        >
          Realizing my passion for mentoring at SIX, I embraced the role of a
          private coach to assist individuals in their journey to become
          software developers. This endeavor allowed me to guide a diverse range
          of students, from young enthusiasts to older career-changers, helping
          them enhance their coding skills and navigate the complexities of
          software development. My dedication to teaching has not only enriched
          their learning experience but has also been a rewarding and fulfilling
          aspect of my professional life.
        </WorkItem>
        <WorkItem
          title="Full Stack Dev @ SIX, Zurich"
          subtitle={"09.2021 - 08.2023"}
          tags={["Vue.js", "Quarkus", "Redux", "API", "Oracle"]}
        >
          In my second role at SIX, I was part of a project aimed at replacing
          the legacy CMS system. Initially focusing on the frontend, we
          encountered compatibility issues with the legacy backend, which used
          an XML-based API. To bridge this gap, we developed an intermediate
          backend component utilizing Quarkus. My primary role was in frontend
          development, though I also contributed occasionally to the new backend
          component and performed database schema manipulations for maintenance
          purposes. During this period, I also had the opportunity to mentor SIX
          apprentices in JavaScript and React, sharing my knowledge and
          fostering new talent in the company.
        </WorkItem>
        <WorkItem
          title="Junior Full Stack Dev @ SIX, Zurich"
          subtitle={"08.2017 - 09.2021"}
          tags={["Java/JEE", "REST", "JSF", "Oracle"]}
        >
          In my role at SIX following my apprenticeship, I was integral to a key
          project: replacing the outdated Valor-Data-Feed delivery system. Over
          these four years, our objective was to develop a robust,
          high-availability software using Java (JEE), enhancing our backend
          capabilities. Working in a dynamic team of over ten developers, I
          deepened my skills in server application development and database
          management, especially with Oracle 12, through dedicated workshops.
          This role marked my introduction to third-level support, offering
          valuable experience in critical system maintenance. Additionally, this
          project piqued my interest in frontend technologies, leading to a
          newfound appreciation and curiosity in this area.
        </WorkItem>
      </WorkItemList>
    </Template>
  );
}
