interface SvgLinkProps {
    ariaLabel: string;
    href: string;
    svgData: string;
}

export default function SvgLink(props: SvgLinkProps) {
    return <div className="w-[35px] h-[35px] opacity-75 ">
        <a className="h-full w-full" href={props.href} target="_blank">
            <object className="h-full w-full pointer-events-none" data={props.svgData} type="image/svg+xml"></object>
        </a>
    </div>
}
