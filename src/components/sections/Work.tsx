import { PropsWithChildren } from "react";
import Template from "./Template.tsx";
import Tag from "../ui/Tag.tsx";

export default function Work() {
  return (
    <Template title="WORK EXPERIENCE">
      <WorkItem title="Full Stack Dev @ SIX, Zurich">
        <span className="">
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
        </span>
      </WorkItem>
    </Template>
  );
}

interface WorkItemProps {
  title: string;
  tags?: string[];
}

function WorkItem(props: PropsWithChildren<WorkItemProps>) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="font-title text-xl">{props.title}</div>
      <div className="pl-1 text-left">{props.children}</div>
      <div className="flex flex-row flex-wrap gap-2">
        <Tag tag="Vue.js" />
        <Tag tag="Javascript" />
        <Tag tag="Quarkus" />
        <Tag tag="Rest" />
        <Tag tag="Oracle 12" />
      </div>
    </div>
  );
}
