import { PropsWithChildren } from "react";

export default function AppLayout(props: PropsWithChildren) {
  return <div className="mx-auto max-w-7xl px-3">{props.children}</div>;
}
