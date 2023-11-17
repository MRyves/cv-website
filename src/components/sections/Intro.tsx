import Typewriter, { TypewriterClass } from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

export default function Intro() {
  const stringSplitter = (text: string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(text);
  };

  const typewriterEffect = (tw: TypewriterClass) => {
    tw.changeDelay(70)
      .changeDeleteSpeed(50)
      .typeString("Hello World")
      .pauseFor(800)
      .deleteChars(5)
      .typeString("There 👋")
      .pauseFor(100)
      .pasteString("<br>", null)
      .typeString("My name is Yves Hendseth and ")
      .typeString("I am a frontend dev")
      .pauseFor(200)
      .deleteChars(14)
      .typeString("a backend dev")
      .pauseFor(200)
      .deleteChars(13)
      .typeString("a team player")
      .pauseFor(200)
      .deleteChars(13)
      .typeString("also a n3rd 🤓")
      .start();
  };
  return (
    <section id="intro" className="flex w-full flex-col justify-center">
      <div className="mx-auto w-11/12 font-title text-8xl">
        <Typewriter
          onInit={typewriterEffect}
          // @ts-ignore
          options={{ stringSplitter: stringSplitter }}
        />
      </div>
    </section>
  );
}
