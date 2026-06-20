import heroImage from "../../assets/heroImage.png";

function AboutMe() {
  return (
    <section
      id="about-me"
      className="px-6 py-4 md:px-12 md:py-18 max-w-6xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl mb-10 md:mb-16 uppercase text-primary text-center underline underline-offset-4 tracking-widest">
        About me
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-12">
        {/* Text side */}
        <div className="flex-1">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-medium flex flex-col mb-8 leading-tight">
            <span>I build things &</span>
            <span>
              I make them look <span className="text-primary">good</span>
            </span>
          </h3>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black-secondary">
            <span
              style={{
                background:
                  "linear-gradient(transparent 60%, var(--color-primary-light) 60%)",
                padding: "0 2px",
              }}
            >
              Fullstack dev
            </span>
            ,{" "}
            <span
              style={{
                background:
                  "linear-gradient(transparent 60%, var(--color-secondary) 60%)",
                padding: "0 2px",
              }}
            >
              UI/UX designer
            </span>
            , and{" "}
            <span
              style={{
                background:
                  "linear-gradient(transparent 60%, var(--color-tertiary) 60%)",
                padding: "0 2px",
              }}
            >
              aspiring game dev
            </span>{" "}
            — I spend my days turning ideas into interfaces and my evenings
            trying to figure out why my game's physics are broken. When I'm not
            staring at a screen, I'm out exploring nature and wildlife — because
            sometimes the best debugging happens away from the keyboard.
            Energetic by default, caffeinated by necessity.
          </p>
        </div>

        {/* Image side */}
        <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex-shrink-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      <blockquote className="italic border-l-8 border-primary px-6 py-5 text-base sm:text-lg md:text-xl bg-black-tertiary/15 rounded-r-xl leading-relaxed">
        "Whether it's writing code, designing flows, or architecting my next
        side project — I approach everything like a strategy game. Think first,
        execute hard, iterate until it's clean."
      </blockquote>
    </section>
  );
}

export default AboutMe;
