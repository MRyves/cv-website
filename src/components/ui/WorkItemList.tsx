import { PropsWithChildren } from "react";

export default function WorkItemList(props: PropsWithChildren) {
  return <div className="flex flex-col gap-7">{props.children}</div>;
}
