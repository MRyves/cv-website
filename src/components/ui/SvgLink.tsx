import React from "react";

interface SvgLinkProps {
  ariaLabel: string;
  svgData: string;
  href?: string;
  onclick?: () => void;
  className?: string;
  caption?: string;
}

export default function SvgLink(props: SvgLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (props.onclick) {
      e.preventDefault();
      props.onclick();
    }
  };

  const wrapperClasses = `h-[35px] w-[35px] opacity-75 ${props.className}`;

  return (
    <div className="flex-col">
      <div className={wrapperClasses}>
        <a
          className="h-full w-full"
          onClick={handleClick}
          href={props.href}
          target="_blank"
        >
          <object
            className="pointer-events-none h-full w-full"
            data={props.svgData}
            type="image/svg+xml"
          ></object>
        </a>
      </div>
      {props.caption ? (
        <div className="font-subtitle">{props.caption}</div>
      ) : null}
    </div>
  );
}
