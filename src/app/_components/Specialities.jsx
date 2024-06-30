import React from "react";
const promises = [
  {
    image:
      "https://media.sketchfab.com/models/c705869a59ae4b3497ef7b5332963c3c/thumbnails/d790ffc579794d528e06d905d6ccfc9c/502972474da047ed9c497efb4aa2f6a2.jpeg",
    title: "Quality HTML, CSS, and JavaScript",
    description:
      "Build robust and responsive web applications with clean and semantic HTML, powerful CSS for styling, and efficient JavaScript for dynamic client-side functionality.",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png",
    title: "Modern React Development",
    description:
      "Create interactive user interfaces with React.js, utilizing components, hooks, and state management libraries to build scalable and performant applications.",
  },
  {
    image:
      "https://www.bretfisher.com/content/images/2017/05/nodejs-new-pantone-white.png",
    title: "Server-Side with Node.js and Express",
    description:
      "Develop server-side applications using Node.js and Express.js, leveraging JavaScript for backend logic, APIs, and integrations with databases and external services.",
  },
  {
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
    title: "Next.js for Powerful Web Apps",
    description:
      "Utilize Next.js for server-side rendering, static site generation, and API routes, enabling fast and SEO-friendly web applications with seamless client-side transitions.",
  },
  {
    image:
      "https://w7.pngwing.com/pngs/6/498/png-transparent-d3-js-react-javascript-library-document-object-model-react-orange-symmetry-area-thumbnail.png",
    title: "Mobile Development with React Native",
    description:
      "Build cross-platform mobile applications using React Native, sharing codebase between iOS and Android to deliver native-like experiences with JavaScript and React.",
  },
];

function Specialities() {
  return (
    <>
      <div
        id="specialities"
        className="bg-[#222222] text-white px-[1%] md:px-[2.5%] py-[5%]"
      >
        <h1 id="heading-large" className="text-center heading">
          Specialities
        </h1>
        <p id="dark" className="text-center mb-16">
          {/* {description} */}
        </p>
        <div className="promise_cards flex flex-row flex-wrap justify-evenly items-center w-full mb-4">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="border min-w-[90%] sm:min-w-[180px] min-h-[160px] mx-[1px] flex flex-col rounded-md flex-wrap mb-6 p-4"
              style={{ width: "25%" }}
            >
              <div className="font-bold inline">
                <img
                  src={promise.image}
                  alt=""
                  className="inline mr-2 w-20 h-20 rounded-full"
                ></img>
              </div>
              <div className="subheading">{promise.title}</div>

              <p>{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Specialities;
