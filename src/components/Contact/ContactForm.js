"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("myyaqdgk");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (state.succeeded) {
      setMessage("Thanks for contacting Holic AI!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const buttonGlow = {
    textShadow:
      "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
    boxShadow:
      "0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14, 0 0 20px #39ff14",
  };

  const neonEffect = {
    textShadow:
      "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
  };

  const glow = {
    textShadow:
      "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
    boxShadow:
      "0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14, 0 0 20px #39ff14",
  };

  return (
    <motion.section
      className="bg-black py-16 px-4 sm:px-6 lg:px-8 lg:py-24 text-white"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.3,
          },
        },
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-neon-green sm:text-5xl mb-6"
          style={neonEffect}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Contact Form
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800 rounded-lg p-6"
          style={glow}
        >
          {message && <div className="alert alert-success">{message}</div>}
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleInputChange}
                className="block w-full bg-gray-700 text-white shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-neon-green focus:border-neon-green border-gray-700 rounded-md"
                placeholder="Full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full bg-gray-700 text-white shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-neon-green focus:border-neon-green border-gray-700 rounded-md"
                placeholder="Email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="block w-full bg-gray-700 text-white shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-neon-green focus:border-neon-green border-gray-700 rounded-md"
                placeholder="Message"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div>
              <motion.button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-neon-green hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                style={buttonGlow}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.9 }}
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <span>Submitting...</span>
                ) : (
                  <span>Submit</span>
                )}
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactForm;
