import Image from "next/image";
import hero from "../../assets/images/hero.jpg";

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="flex flex-col md:flex-row-reverse items-center justify-between px-[1%] md:p-[5%] "
    >
      {/* Left Section */}
      <div className="flex flex-col space-y-4 md:w-3/5">
        <h1 className="heading">Testimonials </h1>
        <p className="paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui error
          alias blanditiis, optio exercitationem aliquid illo inventore eligendi
          ut. Dolorum voluptatum corrupti minus quidem minima laudantium laborum
          sequi vitae sit. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Qui error alias blanditiis, optio exercitationem aliquid illo
          inventore eligendi ut. Dolorum voluptatum corrupti minus quidem minima
          laudantium laborum sequi vitae sit. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Qui error alias blanditiis, optio
          exercitationem aliquid illo inventore eligendi ut. Dolorum voluptatum
          corrupti minus quidem minima laudantium laborum sequi vitae sit.
        </p>
        <div className="w-full flex justify-end items-center">
          <p>- John Doe</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-2/5 flex justify-center items-center">
        <div className="w-fit p-4 border-4 border-red-500">
          <Image
            src="https://placehold.co/600x400/png"
            alt="Your Image"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
