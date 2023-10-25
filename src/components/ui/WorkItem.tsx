import { PropsWithChildren } from "react";
import Tag from "./Tag.tsx";

interface WorkItemProps {
  title: string;
  subtitle: string;
  tags?: string[];
  url?: string;
}

export default function WorkItem(props: PropsWithChildren<WorkItemProps>) {
  const handleClick = () => {
    if (props.url) {
      window.open(props.url, "_blank", "noreferrer");
    }
  };

  const titleElementClassName = props.url
    ? "hover:underline hover:cursor-pointer"
    : "";

  return (
    <div className="flex flex-col gap-2.5">
      <div className={titleElementClassName} onClick={handleClick}>
        <div className="font-title text-xl">{props.title}</div>
        <div className="font-subtitle text-sm">{props.subtitle}</div>
      </div>

      <div className="pl-1 text-left">{props.children}</div>
      <div className="flex flex-row flex-wrap gap-2">
        {props.tags?.map((tag, index) => <Tag key={index} tag={tag} />)}
      </div>
    </div>
  );
}
