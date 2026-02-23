import Template from "./Template.tsx";
import WorkItem from "../ui/WorkItem.tsx";
import WorkItemList from "../ui/WorkItemList.tsx";

export default function Work() {
  return (
    <Template title="WORK EXPERIENCE">
      <WorkItemList>
        <WorkItem
          title={"Senior Software Engineer (Frontend Focus)"}
          subtitle={"05.2025 - Present"}
          tags={["Lit.js", "Typescript", "Quarkus", "Java/EE"]}
        >
          Following an eight-month sabbatical, I rejoined OpenConcept to take a leading role in the frontend development of a new project aimed at replacing a legacy system for local government management. In this capacity, I am responsible for the frontend architecture using Lit.js and TypeScript, ensuring a modern, performant interface that integrates seamlessly with our Quarkus-based backend. My role is highly dynamic, encompassing not only technical implementation but also Requirement and Feature Engineering. This involves maintaining close contact with stakeholders to translate complex administrative needs into scalable technical solutions. Throughout the development lifecycle, I actively employ AI-assisted tools to streamline prototyping and maintain high code quality, ensuring that the new system remains robust and future-proof while meeting the specific demands of the public sector.
        </WorkItem>

      <WorkItem
        title={"Full Stack Dev @ OpenConcept, Bern"}
        subtitle={"02.2024 - 09.2024"}
        tags={["Java/JEE", "JS", "Quarkus", "Lit.js", "SQL"]}
      >
        At OpenConcept, I was part of a small team of five working on a web
        app for ecological accounting. The compact team size required me to
        take on diverse responsibilities and adapt flexibly to project needs.
        On the frontend, I developed custom web components using JavaScript
        and the Lit library, often implementing advanced features such as
        drag-and-drop functionality and deferred loading to fulfill client
        requirements. On the backend, I contributed to the REST API using Java
        and Quarkus, ensuring seamless integration between the frontend and
        data sources.
        <br />
        Our database system was MSSQL, where I was occasionally tasked with
        analyzing and optimizing SQL queries and devising efficient data
        collection solutions. Working within a Scrum framework, I collaborated
        closely with team members to deliver iterative improvements, ensuring
        alignment with the client’s goals while maintaining high performance
        and scalability in the application.
      </WorkItem>
      <WorkItem
        title={"Software development Tutor @ Superprof"}
        subtitle={"08.2023 - 12.2023"}
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
    </Template >
  );
}
