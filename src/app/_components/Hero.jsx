import Image from "next/image";
import hero from "../../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between px-[1%] md:p-[5%] space-y-24"
    >
      {/* Left Section */}
      <div className="flex flex-col space-y-4 md:w-3/5">
        <h1 className="heading">
          Great Ideas Don't Need Approvals, They Need Applications
        </h1>
        <p className="paragraph">
          I'm a passionate developer with experience in building web
          applications. Check out my work and get in touch!
        </p>
        <button className="button w-fit">Download CV</button>
      </div>

      {/* Right Section */}
      <div className="md:w-2/5 flex justify-end items-center">
        <div className="w-fit p-4 border-4 border-red-500">
          <Image
            src="https://placehold.co/600x400/png"
            alt="Your Image"
            width={420}
            height={420}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
