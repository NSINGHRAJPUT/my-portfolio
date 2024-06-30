import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="mx-auto px-[1%] md:px-[2.5%] py-[5%]">
      {/* Heading and Paragraph */}
      <div className="grid md:flex flex-col md:flex-row md:items-start md:gap-4">
        <div className="text-left md:text-left heading mb-4">
          <h2>Take a Look at My Recent Projects</h2>
        </div>
        <div className="text-left mt-6 md:text-left paragraph mb-4">
          <p>
            Here are some of my recent projects showcasing a variety of
            technologies and solutions.
          </p>
        </div>
        <div className="text-center w-[150px] mt-6 md:text-left">
          <button className="button">See More</button>
        </div>
      </div>

      {/* Projects Cards */}
      <div className="flex flex-wrap items-end justify-center gap-24 mt-8">
        {/* Project Card 1 */}
        <div className="bg-white max-w-[482px] min-w-[320px] h-fit flex flex-row shadow-md border-[1px] border-gray overflow-hidden hover:shadow-lg">
          <div className="p-4 w-3/5">
            <div className="text-left subheading ">
              <h3>Project Title 1</h3>
            </div>
            <div className="text-left paragraph mb-1">
              <p>
                Description of Project 1. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="button mr-2">See Live</button>
            </div>
          </div>
          <div className="w-2/5">
            <img
              src="https://placehold.co/400x400.png"
              alt="Project 1"
              className="w-fit h-full md:h-48 object-cover"
            />
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white max-w-[482px] min-w-[320px] h-fit flex flex-row shadow-md border-[1px] border-gray overflow-hidden hover:shadow-lg">
          <div className="p-4 w-3/5">
            <div className="text-left subheading ">
              <h3>Project Title 1</h3>
            </div>
            <div className="text-left paragraph mb-1">
              <p>
                Description of Project 1. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="button mr-2">See Live</button>
            </div>
          </div>
          <div className="w-2/5">
            <img
              src="https://placehold.co/400x400.png"
              alt="Project 1"
              className="w-fit h-full md:h-48 object-cover"
            />
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white max-w-[482px] min-w-[320px] h-fit flex flex-row shadow-md border-[1px] border-gray overflow-hidden hover:shadow-lg">
          <div className="p-4 w-3/5">
            <div className="text-left subheading ">
              <h3>Project Title 1</h3>
            </div>
            <div className="text-left paragraph mb-1">
              <p>
                Description of Project 1. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="button mr-2">See Live</button>
            </div>
          </div>
          <div className="w-2/5">
            <img
              src="https://placehold.co/400x400.png"
              alt="Project 1"
              className="w-fit h-full md:h-48 object-cover"
            />
          </div>
        </div>

        {/* Project Card 4 */}
        <div className="bg-white max-w-[482px] min-w-[320px] h-fit flex flex-row shadow-md border-[1px] border-gray overflow-hidden hover:shadow-lg">
          <div className="p-4 w-3/5">
            <div className="text-left subheading ">
              <h3>Project Title 1</h3>
            </div>
            <div className="text-left paragraph mb-1">
              <p>
                Description of Project 1. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="button mr-2">See Live</button>
            </div>
          </div>
          <div className="w-2/5">
            <img
              src="https://placehold.co/400x400.png"
              alt="Project 1"
              className="w-fit h-full md:h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
