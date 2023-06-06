"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-black text-white rounded-lg shadow p-6 mb-4 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">{question}</h3>
        {isOpen ? (
          <FaCaretUp className="text-white" />
        ) : (
          <FaCaretDown className="text-white" />
        )}
      </div>
      {isOpen && (
        <motion.p
          className="text-indigo-200 mt-2"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

const ContactDetails = () => {
  const faqs = [
    {
      question: "How can I get in touch with you?",
      answer: "You can reach us at team@holicai.com",
    },
    {
      question: "How is the pricing determined for a project?",
      answer:
        "Pricing is determined after a detailed consultation with you. We take into consideration your unique requirements, the complexity of the task, and the resources needed to complete the project. We then provide a comprehensive quote that represents the best value for your needs.",
    },
    {
      question: "What is your turnaround time for projects?",
      answer:
        "Our delivery timelines are also customized based on each project. The complexity and scope of the project are the main factors that determine the delivery time. However, we always strive to meet your deadlines while ensuring the highest quality of work.",
    },
    {
      question: "Do you provide consultation before starting a project?",
      answer:
        "Yes, we believe in understanding your requirements thoroughly before beginning a project. The consultation allows us to align our services with your needs for the best results.",
    },
    {
      question: "What if I'm not satisfied with the delivered project?",
      answer:
        "Your satisfaction is our priority. If you're not satisfied with the delivered project, please get in touch with us to discuss your concerns. We are committed to resolving any issues to your satisfaction.",
    },
    {
      question:
        "Can I request changes or revisions after the project delivery?",
      answer:
        "Absolutely. We understand that you may need adjustments after seeing the finished product. That's why we offer a period for revisions, during which you can request changes to the project. However, the specifics of this would be discussed during the consultation stage.",
    },
    {
      question: "Do you have expertise in specific technologies or industries?",
      answer:
        "Yes, we have a diverse team of experts proficient in a wide range of technologies. Our industry experience spans various sectors such as healthcare, finance, retail, and more. During the consultation, we can discuss your specific needs and align you with experts who best suit your project.",
    },
    {
      question: "Can you handle large-scale technology projects?",
      answer:
        "Yes, we have extensive experience in managing large-scale technology projects. Our team is capable of handling projects of any size and complexity, ensuring timely delivery and quality work.",
    },
    {
      question:
        "Do you offer ongoing support and maintenance post-project completion?",
      answer:
        "Yes, we understand that ongoing support and maintenance are crucial for the smooth operation of any technology project. As such, we offer various support and maintenance packages that you can choose from based on your needs.",
    },
    {
      question:
        "Are your services compliant with industry standards and regulations?",
      answer:
        "Absolutely. Compliance with industry standards and regulations is paramount in our service delivery. We ensure all projects are compliant with relevant standards and laws for your peace of mind.",
    },
    {
      question: "Do you offer services for startups or small businesses?",
      answer:
        "Certainly, we offer a range of services that can help startups and small businesses leverage technology to grow and succeed. Our team is adept at understanding the unique challenges of small businesses and startups, providing solutions that are tailored to their specific needs.",
    },
    {
      question:
        "How do you ensure the security and confidentiality of our data and information?",
      answer:
        "We take data security and confidentiality very seriously. All data is handled in strict compliance with data protection laws, and we have robust security measures in place to prevent unauthorized access or breaches. We also offer non-disclosure agreements for added assurance.",
    },
    // more FAQs...
  ];

  const neonEffect = {
    textShadow:
      "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
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
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-black sm:text-5xl mb-6"
          style={neonEffect}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="mt-8 text-base text-indigo-200 max-w-3xl mx-auto text-justify">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactDetails;
