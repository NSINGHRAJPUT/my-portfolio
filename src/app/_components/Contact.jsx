"use client";

import React, { useEffect, useState } from "react";
import "./contact.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMapMarker,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import toast from "react-hot-toast";

// const notifysuccess = (props) => toast.success(props);
// const notifyfailure = (props) => toast.error(props);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //   const response = await fetch("/api/mail", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   });

      //   if (response.ok) {
      //     console.log("Email sent successfully!");
      //     notifysuccess("Email sent successfully");
      //     // Reset form state or show success message to user
      //   } else {
      //     console.error("Failed to send email");
      //     notifyfailure("Failed to send email");
      //   }
      //   console.log(response);
      console.log(formData);
    } catch (error) {
      console.error("Error sending email:", error);
      //   notifyfailure("server error");
    } finally {
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    }
  };

  return (
    <>
      <div className="flex-1 w-full mt-[5vh] lg:mt-0" id="contact">
        {/* <ContactForm /> */}
        <section className="contact w-full pt-[23vh]">
          <div className="content">
            <h2 className=" text-4xl text-white">Contact Us</h2>
          </div>
          <div className="container w-full">
            <div className="contactInfo">
              <div className="box">
                <div className="icon">
                  <b></b>{" "}
                  <FaLinkedin className="mr-2 z-[999] text-white relative left-1" />
                </div>
                <div className="text">
                  <h3>LinkedIN</h3>
                  <p className="text-gray-300">
                    <span className="text-slate-100 mt-2 font-bold">
                      {/* Office Address :{" "} */}
                      <a href="https://www.linkedin.com/in/n-s-r/">Connect</a>
                    </span>
                    {/* Sanidhya Arcade And Bunglows Villa-13, Vastral, Ahmedabad,
                    Gujarat 382418 */}
                    <br></br>
                    <span className="text-white mt-2 font-bold">
                      {" "}
                      {/* India */}
                      {/* Registered Address:{" "} */}
                    </span>{" "}
                    {/* 118, Gajanan Industrial Hub-2, Opp. Ramvadi Bridge, GIDC
                    Vatva, Ahmedabad, Gujarat, INDIA – 382445 */}
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <b></b>
                  <FaPhone className="mr-2 z-[999] text-white relative left-1" />
                </div>
                <div className="text text-gray-300">
                  <h3>Phone</h3>
                  <p className="text-gray-300"> +91 9752661779</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <b></b>
                  <MdEmail className="mr-2 z-[999] text-white relative left-1" />
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <p className="text-gray-300">nsinghrajput30@gmail.com</p>
                </div>
              </div>
              <h2 className="txt text-white">Connect with me</h2>
              <ul className="sci">
                <li>
                  <a href="">
                    {" "}
                    <FaFacebook className="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaTwitter className="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/n-s-r/">
                    {" "}
                    <FaLinkedin className="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="contactForm">
              <form action="">
                <h2>Send Message</h2>
                <div className="inputBox">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    name=""
                    required
                  />
                  <span>Full Name</span>
                </div>
                <div className="inputBox">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name=""
                    required
                  />
                  <span>Email</span>
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    name=""
                    required
                  />
                  <span>Phone</span>
                </div>
                {/* <div className="inputBox">
                    <input
                      type="text"
                      value={formData.address}
                      onChange={handleChange}
                      name=""
                      required
                    />
                    <span>Address</span>
                  </div> */}
                <div className="inputBox">
                  <textarea
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <span>Type Your Message...</span>
                </div>
                <div className="inputBox">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
