"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-28 scroll-mt-28 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-2 dark:text-gray-300">
        Please contact me directly at{" "}
        <a
          className="underline font-bold dark:text-sky-400"
          href="mailto:shaikhtanveer5205@gmail.com"
        >
          shaikhtanveer5205@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-gray-200"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(`Error sending email: ${error}`);
            return;
          }
          toast.success("Email sent successfully!");
        }}
        // action={sendEmail}
        // action={async (sendEmail) => {
        //   console.log("Running on client");
        //   console.log(sendEmail.get("senderEmail"));
        //   console.log(sendEmail.get("message"));
        // }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack shadow-xl p-4 mb-4 dark:bg-black/20 dark:border-white/20"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 p-4 rounded-lg borderBlack shadow-xl mb-4 dark:bg-black/20 dark:border-white/20"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
