import Typewriter, { TypewriterClass } from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Intro() {
  const [introDone, setIntroDone] = useState(false);
  const stringSplitter = (text: string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(text);
  };

  const typewriterEffect = (tw: TypewriterClass) => {
    tw.changeDelay(50)
      .changeDeleteSpeed(25)
      .typeString("Hello There 👋")
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
      .pauseFor(300)
      .pasteString("<br>", null)
      .typeString(
        '<span class="text-sm sm:text-2xl italic text-gray-400"> btw: i\'m also a n3rd 🤓</span>',
      )
      .callFunction(() => {
        setIntroDone(true);
      })
      .start();
  };

  const introHtml = (
    <>
      Hello There 👋 <br />
      My name is Yves Hendseth and I am a team player <br />
      <span className="sm:text-md text-sm italic text-gray-400 md:text-xl lg:text-2xl">
        btw: i'm also a n3rd 🤓
      </span>
    </>
  );

  return (
    <section id="intro" className="flex w-full flex-col justify-center">
      <div className="mx-auto w-11/12 font-title text-4xl sm:text-6xl md:text-7xl xl:text-8xl">
        {introDone ? (
          introHtml
        ) : (
          <Typewriter
            onInit={typewriterEffect}
            options={{
              // @ts-ignore
              stringSplitter: stringSplitter,
              loop: false,
            }}
          />
        )}
      </div>
      {introDone ? (
        <div className="scroll-down-wrapper">
          <Link smooth={true} duration={500} to="aboutMe">
            <span></span>
            Scroll Down for more <br />
            information about me
          </Link>
        </div>
      ) : null}
    </section>
  );
}
