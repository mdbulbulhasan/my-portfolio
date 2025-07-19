import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { motion } from "framer-motion";

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

    emailjs
      .send(
        "service_oskkfmm",
        "template_7lwjlfp",
        {
          user_name: formData.name,
          user_email: formData.email,
          user_subject: formData.subject,
          user_message: formData.message,
        },
        "6oLHyFBsSxgS43KW0"
      )

      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out.",
            background: "#0e1117",
            color: "#67e8f9",
            confirmButtonColor: "#22d3ee",
          });
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            background: "#0e1117",
            color: "#f87171",
            confirmButtonColor: "#ef4444",
          });
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen px-2 md:px-4 py-8 md:py-16 pb-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-cyan-200">
          Contact Me
        </h2>
        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.14 } },
            hidden: {},
          }}
        >
          {/* Left Side Contact Info */}
          <motion.div
            className="md:w-1/2 w-full space-y-4 glassmorphism-card p-4 md:p-7 rounded-2xl shadow-lg border border-cyan-400/20"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-cyan-100">
              Get in Touch
            </h3>
            <p className="text-cyan-50 text-sm md:text-base">
              I am open to freelance opportunities, collaborations, or any
              queries related to frontend development.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaUser className="text-cyan-300" />
                <p>Md. Bulbul Hasan</p>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-cyan-300" />
                <p>Rajshahi, Bangladesh</p>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-cyan-300" />
                <p>bulbulhasan095@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <IoIosCall className="text-cyan-300" />
                <p>+880 1612-838785</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Contact Form */}
          <motion.div
            className="md:w-1/2 w-full glassmorphism-card p-4 md:p-7 rounded-2xl shadow-lg border border-cyan-400/20"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Your Name"
                className="w-full rounded-lg border border-cyan-400/50 bg-transparent px-4 py-2 text-cyan-100 placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Your Email"
                className="w-full rounded-lg border border-cyan-400/50 bg-transparent px-4 py-2 text-cyan-100 placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                aria-label="Subject"
                className="w-full rounded-lg border border-cyan-400/50 bg-transparent px-4 py-2 text-cyan-100 placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Message"
                rows="5"
                className="w-full rounded-lg border border-cyan-400/50 bg-transparent px-4 py-2 text-cyan-100 placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
              ></textarea>
              <motion.button
                type="submit"
                className="w-full bg-cyan-400 text-gray-900 font-semibold rounded-lg py-2 shadow-md hover:bg-cyan-500 active:scale-95 transition-transform"
                whileTap={{ scale: 0.97 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 24px 4px #67e8f9cc",
                }}
                aria-label="Send Message"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
