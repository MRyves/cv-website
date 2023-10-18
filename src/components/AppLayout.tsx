import {PropsWithChildren} from "react";

export default function AppLayout(props: PropsWithChildren) {
    return <div className="max-w-7xl px-3 mx-auto">
        {props.children}
    </div>;
}
