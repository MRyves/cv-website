import Template from "./Template.tsx";

export default function AboutMe({ id }: { id: string }) {
  return (
    <>
      <Template title="ABOUT ME" id={id}>
        <p>
          With over a decade of experience across the full stack, I have developed a broad technical foundation ranging from low-level C/C++ to modern web architectures. My recent focus has been centered on frontend development, where I have built a deep expertise in JavaScript and TypeScript. I am a firm advocate for the long-term stability and evolution of these languages within the industry.
        </p>
        {/* <p>
          In my most recent role, I dedicated my focus to frontend development,
          nurturing a profound affinity for JavaScript (and Typescript). I
          strongly advocate for their enduring significance in the evolving
          landscape of development. As evident from current trends, these
          languages are progressively gaining traction in backend applications,
          reinforcing my conviction in their longevity and relevance.
        </p> */}
        <br />
        <p>
          While I have worked extensively with various frameworks, Angular remains my preferred environment for complex applications. However, I am equally proficient in Vue and have a strong interest in the lightweight, web-component-based approach of Lit.js.
        </p>
        <br />
        <p>
          Beyond frontend architecture, I maintain a strong interest in the growing ecosystem of TypeScript-based backend solutions, recognizing their potential for creating cohesive and maintainable systems. To ensure my workflow remains efficient and aligned with current technological shifts, I actively integrate AI-assisted development tools into my daily practice. I stay updated on the latest LLM capabilities, focusing on practical applications that enhance code quality and accelerate delivery without compromising architectural integrity. My objective is to continue delivering robust, scalable solutions by balancing foundational engineering principles with modern, AI-supported methodologies.
        </p>
      </Template>
    </>
  );
}
