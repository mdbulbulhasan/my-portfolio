import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email link method
    const mailtoLink = `mailto:bulbulhasan095@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=From: ${formData.name} (${
      formData.email
    })%0A%0A${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for reaching out.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-base-100 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side Contact Info */}
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p>
              I am open to freelance opportunities, collaborations, or any
              queries related to frontend development.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaUser className="text-primary" />
                <p>Md. Bulbul Hasan</p>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <p>Rajshahi, Bangladesh</p>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <p>bulbulhasan095@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <IoIosCall className="text-primary" />
                <p>+880 1612-838785</p>
              </div>
            </div>
          </div>

          {/* Right Side Contact Form */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="textarea textarea-bordered w-full"
                rows="5"
              ></textarea>
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
