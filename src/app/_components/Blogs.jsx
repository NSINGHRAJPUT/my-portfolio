import React from "react";

const Blogs = () => {
  return (
    <div id="blog" className=" mx-auto px-[1%] md:px-[2.5%] py-[5%]">
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
      <div className="flex flex-wrap gap-2 items-center justify-evenly mt-8">
        {/* Project Card 1 */}
        <div className="bg-white flex flex-col h-[360px] w-[260px] justify-between border-gray border-[1px] shadow-md  overflow-hidden hover:shadow-lg">
          <div className="p-4">
            <div className="text-left subheading mb-2">
              <h3>Project Title 1</h3>
            </div>
            <div className="text-left paragraph mb-4">
              <p>
                Description of Project 1. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="button mr-2">See Live</button>
            </div>
          </div>
          <img
            src="https://placehold.co/400x400/png"
            alt="Project 1"
            className="w-full h-40 md:h-48 object-cover"
          />
        </div>

        {/* Project Card 2 */}
        <div className="bg-white flex flex-col h-[360px] w-[260px] justify-between border-gray border-[1px] shadow-md  overflow-hidden hover:shadow-lg">
          <div className="p-4">
            <div className="text-left subheading mb-2">
              <h3>Project Title 2</h3>
            </div>
            <div className="text-left paragraph mb-4">
              <p>
                Description of Project 2. Sed do eiusmod tempor incididunt ut
                labore et dolore magna.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="button mr-2">See Live</button>
            </div>
          </div>
          <img
            src="https://placehold.co/400x400/png"
            alt="Project 2"
            className="w-full h-40 md:h-48 object-cover"
          />
        </div>

        {/* Project Card 3 */}
        <div className="bg-white flex flex-col h-[360px] w-[260px] justify-between border-gray border-[1px] shadow-md  overflow-hidden hover:shadow-lg">
          <div className="p-4">
            <div className="text-left subheading mb-2">
              <h3>Project Title 3</h3>
            </div>
            <div className="text-left paragraph mb-4">
              <p>
                Description of Project 3. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="button mr-2">See Live</button>
            </div>
          </div>
          <img
            src="https://placehold.co/400x400/png"
            alt="Project 3"
            className="w-full h-40 md:h-48 object-cover"
          />
        </div>

        {/* Project Card 4 */}
        <div className="bg-white flex flex-col h-[360px] w-[260px] justify-between border-gray border-[1px] shadow-md  overflow-hidden hover:shadow-lg">
          <div className="p-4">
            <div className="text-left subheading mb-2">
              <h3>Project Title 4</h3>
            </div>
            <div className="text-left paragraph mb-4">
              <p>
                Description of Project 4. Duis dolor in reprehenderit in
                voluptate velit esse.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="button mr-2">See Live</button>
            </div>
          </div>
          <img
            src="https://placehold.co/400x400/png"
            alt="Project 4"
            className="w-full h-40 md:h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
