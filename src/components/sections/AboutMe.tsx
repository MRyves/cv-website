import Template from "./Template.tsx";

export default function AboutMe({ id }: { id: string }) {
  return (
    <>
      <Template title="ABOUT ME" id={id}>
        <p>
          With over a decade of experience in both backend and frontend
          development, I've had the opportunity to dive into a multitude of
          programming languages. From the foundational realms of C/C++ to the
          dynamic world of JavaScript, my journey has been a diverse
          exploration.
        </p>
        <br />
        <p>
          In my most recent role, I dedicated my focus to frontend development,
          nurturing a profound affinity for JavaScript (and Typescript). I
          strongly advocate for their enduring significance in the evolving
          landscape of development. As evident from current trends, these
          languages are progressively gaining traction in backend applications,
          reinforcing my conviction in their longevity and relevance.
        </p>
        <br />
        <p>
          Among the myriad frontend frameworks, Angular stands out as my
          personal favorite. However, I'm also adept in React and Vue, finding
          their versatility and capabilities equally appealing.
        </p>
        <br />
        <p>
          In the realm of my future goals and aspirations, I am particularly
          excited about the expanding potential of JavaScript (and TypeScript)
          in backend applications. My experience and affinity with these
          languages fuel my enthusiasm to explore their capabilities beyond
          conventional frontend usage. I am keen to delve deeper into projects
          and roles that leverage JavaScript and TypeScript for backend
          development, embracing the innovative possibilities they offer in
          creating efficient, scalable, and robust systems. This interest aligns
          with my broader objective to remain at the forefront of technological
          evolution, constantly seeking out opportunities to innovate and excel
          in my field.
        </p>
      </Template>
    </>
  );
}
