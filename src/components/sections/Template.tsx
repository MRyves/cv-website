import {PropsWithChildren} from "react";

interface TemplateProps {
    title: string;
}

export default function Template(props: PropsWithChildren<TemplateProps>) {
    return <div className="flex justify-evenly">
        <div className="w-1/3 font-medium font-subtitle text-4xl">{props.title} &gt;&gt;</div>
        <div className="grow">
            {props.children}
        </div>
    </div>
}
