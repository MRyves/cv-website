import Template from "./Template.tsx";
import SvgLink from "../ui/SvgLink.tsx";
import reactImg from "../../assets/react.svg";
import angularImg from "../../assets/angular.svg";
import rxjsImg from "../../assets/rxjs.svg";
import apiImg from "../../assets/api.svg";
import gitImg from "../../assets/git.svg";
import javaImg from "../../assets/java.svg";
import javaEEImg from "../../assets/wildfly.svg";
import javascriptImg from "../../assets/javascript.svg";
import materialImg from "../../assets/material-ui.svg";
import pythonImg from "../../assets/python.svg";
import quarkusImg from "../../assets/quarkus.svg";
import tailwindImg from "../../assets/tailwind.svg";
import typescriptImg from "../../assets/typescript.svg";
import vueImg from "../../assets/vue.svg";
import reduxImg from "../../assets/redux.svg";
import databaseImg from "../../assets/database.svg";
import scrumImg from "../../assets/scrum.svg";

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
              caption="Angular"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="react skill button"
              svgData={reactImg}
              caption="React"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="vuejs skill button"
              svgData={vueImg}
              caption="Vue.js"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="rxjs skill button"
              svgData={rxjsImg}
              caption="RxJS"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="redux skill button"
              svgData={reduxImg}
              caption="Redux"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="javascript skill button"
              svgData={javascriptImg}
              caption="JavaScript"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="typescript skill button"
              svgData={typescriptImg}
              caption="TypeScript"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="tailwindcss skill button"
              svgData={tailwindImg}
              caption="Tailwind"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="material ui skill button"
              svgData={materialImg}
              caption="Material UI"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="java skill button"
              svgData={javaImg}
              caption="Java"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="java ee skill button"
              svgData={javaEEImg}
              caption="Java EE"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Quarkus skill button"
              svgData={quarkusImg}
              caption="Quarkus"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="API skill button"
              svgData={apiImg}
              caption="Rest"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Database skill button"
              svgData={databaseImg}
              caption="Oracle SQL"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Git skill button"
              svgData={gitImg}
              caption="GIT"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="scrum skill button"
              svgData={scrumImg}
              caption="SCRUM"
            />
          </div>
          <div className="text-center">
            <SvgLink
              className="mx-auto"
              ariaLabel="Angular skill button"
              svgData={pythonImg}
              caption="Python"
            />
          </div>
        </div>
      </Template>
    </>
  );
}
