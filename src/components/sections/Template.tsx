import { PropsWithChildren } from "react";

interface TemplateProps {
  title: string;
  id?: string;
}

export default function Template(props: PropsWithChildren<TemplateProps>) {
  return (
    <div
      id={props.id || ""}
      className="flex flex-col justify-center pb-10 pt-3 md:flex-row md:justify-evenly"
    >
      <div className="pb-3 pr-5 text-center font-subtitle text-4xl font-medium md:w-1/3 md:pb-0 md:text-right">
        {props.title}
      </div>
      <div className="text-justify md:w-2/3 md:text-left">{props.children}</div>
    </div>
  );
}
