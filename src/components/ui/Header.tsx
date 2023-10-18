import linkedInImg from '../../assets/linkedIn.svg'
import githubImg from '../../assets/github.svg'
import SvgLink from "./SvgLink.tsx";

export default function Header() {
    return (
        <div className="py-7 flex justify-end items-center gap-2">
            <div>This is the header</div>
            <div className="flex-spacer"></div>
            <SvgLink ariaLabel="linkedIn link" href="https://google.ch" svgData={linkedInImg} />
            <SvgLink ariaLabel="github link" href="https://google.ch" svgData={githubImg} />
            <div className="hidden" aria-label="mail link"></div>
        </div>
    );
}
