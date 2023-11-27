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
          In my second engagement at SIX, I played a key role in a comprehensive
          project to overhaul the legacy CMS system. As a full-stack developer,
          I addressed challenges on both ends of the spectrum. Initially, my
          focus was on the frontend, where we navigated compatibility issues
          with the legacy backend's XML-based API. To resolve this, our team
          crafted an intermediate backend component using Quarkus, in which I
          actively participated. My contributions spanned from dynamic frontend
          development using modern practices to significant involvement in the
          backend, including developing new components and database schema
          modifications. This period also saw me taking on a mentorship role,
          guiding SIX apprentices in mastering JavaScript and React, thereby
          contributing to the cultivation of emerging talent within the company.
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
          This role also marked my introduction to third-level support, offering
          valuable experience in critical system maintenance. Additionally, this
          project piqued my interest in frontend technologies, leading to a
          newfound appreciation and curiosity in this area.
        </WorkItem>
      </WorkItemList>
    </Template>
  );
}
