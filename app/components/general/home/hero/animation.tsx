import Typewriter from "typewriter-effect";

export default function Animation() {
  return (
    <div data-aos="fade-up" data-aos-delay="400" className="text-lg font-medium text-gray-400">
      Hi i'm Yabetse a passionate{" "}
      <span className="text-indigo-400 font-bold">
        <Typewriter
          options={{
            strings: [
              "Fullstack Developer",
              "Next.js Developer",
              "Python Expert",
              "Tech Enthusiast",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
            wrapperClassName: "inline",
          }}
        />
      </span>
    </div>
  );
}
