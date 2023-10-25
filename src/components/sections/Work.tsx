import Template from "./Template.tsx";
import WorkItem from "../ui/WorkItem.tsx";
import WorkItemList from "../ui/WorkItemList.tsx";

export default function Work() {
  return (
    <Template title="WORK EXPERIENCE">
      <WorkItemList>
        <WorkItem
          title="Full Stack Dev @ SIX, Zurich"
          subtitle={"09.2021 - 08.2023"}
          tags={["Vue.js", "Quarkus", "Redux", "API", "Oracle"]}
        >
          The main focus of the project was the replacement of the legacy CMS
          system of SIX. First we started with the Frontend (mgmt decision) and
          quickly realized that the legacy backend does not suit the modern
          technologies we used in the frontend. The API of the legacy backend
          component was based on XML. So we decided to develop an
          intermediate/transmitter backend component using Quarkus. My main
          focus was the development of the frontend, with the occasional feature
          in the new backend component. Sometimes I had to manipulate the DB
          schema for maintenance work. I also educated apprentices of SIX in
          JavaScript and React during this time.
        </WorkItem>
      </WorkItemList>
    </Template>
  );
}
