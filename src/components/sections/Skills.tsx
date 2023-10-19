import Template from "./Template.tsx";
import SvgLink from "../ui/SvgLink.tsx";
import reactImg from "../../assets/react.svg";
import angularImg from "../../assets/angular.svg";
import apiImg from "../../assets/api.svg";
import gitImg from "../../assets/git.svg";
import javaImg from "../../assets/java.svg";
import javascriptImg from "../../assets/javascript.svg";
import materialImg from "../../assets/material-ui.svg";
import pythonImg from "../../assets/python.svg";
import quarkusImg from "../../assets/quarkus.svg";
import tailwindImg from "../../assets/tailwind.svg";
import typescriptImg from "../../assets/typescript.svg";
import vueImg from "../../assets/vue.svg";
import reduxImg from "../../assets/redux.svg";

export default function Skills() {
  return (
    <>
      <Template title="SKILLS">
        <div className="grid grid-cols-3 gap-2.5 md:grid-cols-4 lg:grid-cols-6">
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Angular skill button"
              svgData={angularImg}
              onclick={() => alert("test")}
              caption="Angular"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Angular skill button"
              svgData={reactImg}
              onclick={() => alert("test")}
              caption="React"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Angular skill button"
              svgData={vueImg}
              onclick={() => alert("test")}
              caption="Vue.js"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Angular skill button"
              svgData={reduxImg}
              onclick={() => alert("test")}
              caption="Redux"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Angular skill button"
              svgData={javascriptImg}
              onclick={() => alert("test")}
              caption="JavaScript"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Angular skill button"
              svgData={typescriptImg}
              onclick={() => alert("test")}
              caption="TypeScript"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Angular skill button"
              svgData={tailwindImg}
              onclick={() => alert("test")}
              caption="Tailwind"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Angular skill button"
              svgData={materialImg}
              onclick={() => alert("test")}
              caption="Material UI"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Angular skill button"
              svgData={javaImg}
              onclick={() => alert("test")}
              caption="Java"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Angular skill button"
              svgData={quarkusImg}
              onclick={() => alert("test")}
              caption="Quarkus"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Angular skill button"
              svgData={apiImg}
              onclick={() => alert("test")}
              caption="Rest"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Angular skill button"
              svgData={gitImg}
              onclick={() => alert("test")}
              caption="GIT"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Angular skill button"
              svgData={pythonImg}
              onclick={() => alert("test")}
              caption="Python"
            />
          </div>
        </div>
      </Template>
    </>
  );
}
