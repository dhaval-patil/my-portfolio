import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { ABOUT_ME } from "../utils/data";
import ContactInfoCard from "../components/ContactInfoCard";
import { MdOutlineWeb } from "react-icons/md";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Success or error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      to_name: "Dhaval", // Replace with dynamic name if needed
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
        emailData,
        import.meta.env.VITE_EMAILJS_USER_ID // Public Key
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto ">
          <h4 className="text-zinc-300 text-center font-bold text-5xl">
            Contact Me
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-15">
            <div>
              <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
              <ContactInfoCard
                icon={<IoPhonePortraitOutline />}
                text={ABOUT_ME.phone}
              />
              {/* <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.website} /> */}
            </div>
            <div>
              <h5 className="md:hidden text-zinc-300 text-lg font-medium mt-4 pb-5">
                Contact Form
              </h5>

              <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  id=""
                  className="input-box"
                  autoComplete="off"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  id=""
                  className="input-box"
                  autoComplete="off"
                />
                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  id=""
                  rows={3}
                  className="input-box"
                  autoComplete="off"
                />
                <button type="submit" className="action-btn btn-scale-anim">
                  SUBMIT
                </button>
              </form>
              {status && <p className="text-center mt-2">{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
