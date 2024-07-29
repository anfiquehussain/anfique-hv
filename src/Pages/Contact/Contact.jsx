import React, { useState } from "react";
import emailjs from "emailjs-com";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegMessage, FaPaperPlane, FaEarthAfrica } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { BsStackOverflow } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const SocialLink = ({ icon: Icon, name, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-light hover:text-white justify-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm hover:bg-backgroundHover"
  >
    <Icon />
    <span>{name}</span>
  </a>
)


const InputField = ({
  icon: Icon,
  type,
  placeholder,
  name,
  value,
  onChange,
}) => (
  <div className="relative mb-4">
    <Icon className="absolute left-3 top-3 text-gray-400" />
    <input
      required
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="block w-full rounded-lg border-0 bg-secondary py-2 pl-10 pr-4 focus:outline-none"
    />
  </div>
);

const Button = ({ type, className, children, onClick, disabled }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`relative flex items-center rounded-lg bg-secondary px-5 py-2 hover:bg-backgroundHover ${className} ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
  >
    {children}
  </button>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    user_location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        "service_yyzt3xn",
        "template_h7hfd8a",
        formData,
        "8b6dnsCUFzUHjh-KE",
      );

      console.log(result.text);
      setSubmitStatus("success");
      setFormData({
        user_email: "",
        user_name: "",
        user_location: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      user_email: "",
      user_name: "",
      user_location: "",
      message: "",
    });
    setSubmitStatus(null);
  };

  return (
    <div className="container mx-auto p-4">
      <section>
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 md:gap-4 lg:mx-40"
        >
          <div className="col-span-1 flex flex-col justify-between md:me-10">
            <InputField
              icon={HiOutlineMail}
              type="email"
              name="user_email"
              placeholder="Email address"
              value={formData.user_email}
              onChange={handleInputChange}
            />
            <InputField
              icon={IoIosContact}
              type="text"
              name="user_name"
              placeholder="Full name"
              value={formData.user_name}
              onChange={handleInputChange}
            />
            <InputField
              icon={FaEarthAfrica}
              type="text"
              name="user_location"
              placeholder="Location/County"
              value={formData.user_location}
              onChange={handleInputChange}
            />
            <Button
              type="button"
              onClick={handleReset}
              className="hidden w-fit self-end md:flex"
            >
              <GrPowerReset className="mr-2" />
              Reset
            </Button>
          </div>
          <div className="col-span-1 flex flex-col">
            <div className="relative mb-4">
              <FaRegMessage className="absolute left-3 top-3 text-gray-400" />
              <textarea
                placeholder="Message"
                required
                rows="7"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="block w-full rounded-lg border-0 bg-secondary py-2 pl-10 pr-4 focus:outline-none"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <Button
                type="submit"
                className="w-full md:w-fit"
                disabled={isSubmitting}
              >
                <FaPaperPlane className="mr-2" />
                {isSubmitting ? "Sending..." : "Sent"}
              </Button>
              <Button
                type="button"
                onClick={handleReset}
                className="ms-2 w-full md:hidden"
              >
                <GrPowerReset className="mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </form>
        {submitStatus === "success" && (
          <p className="mt-4 text-green-500">Email sent successfully!</p>
        )}
        {submitStatus === "error" && (
          <p className="mt-4 text-red-500">
            Error sending email. Please try again.
          </p>
        )}
      </section>

      <section className="mt-10">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 lg:mx-40">
          <div>
            <div className="mb-4 flex items-center gap-2 text-2xl text-white md:text-xl">
              <IoLocationOutline />
              <h2>Address</h2>
            </div>
            <address className="mb-6 font-mono text-base text-light md:text-sm">
              Veyattummal <br />
              Vattapparapoyil <br />
              Narikkuni(PO),673585 <br />
              Kozhikode,Kerala <br />
              INDIA <br />
            </address>

            <div className="mb-4 flex items-center gap-2 text-2xl text-white md:text-xl">
              <FaPhoneAlt />
              <h2>Phone</h2>
            </div>
            <p className="mb-6 font-mono text-base text-light md:text-sm">
              +91 9995424875
            </p>

            <div className="mb-4 flex items-center gap-2 text-2xl text-white md:text-xl">
              <HiOutlineMail />
              <h2>Email</h2>
            </div>
            <a href="mailto:anfiquehussain6@gmail.com" className="block font-mono text-base text-light md:text-sm">
              anfiquehussain6@gmail.com
            </a>
            <a href="mailto:adomax2003@gmail.com" className="block font-mono text-base text-light md:text-sm">
              adomax2003@gmail.com
            </a>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-2 text-2xl text-white md:text-xl">
              <PiLinkSimpleBold />
              <h2>Social Links</h2>
            </div>
            <div className="grid gap-4 grid-cols-2 xl:grid-cols-3">
              <SocialLink icon={FaLinkedinIn} name="LinkedIn" href="https://www.linkedin.com/in/anfiquehv" />
              <SocialLink icon={FiGithub} name="GitHub" href="https://github.com/anfiquehussain" />
              <SocialLink icon={RiTwitterXLine} name="X" href="https://twitter.com/anfiquehv" />
              <SocialLink icon={BsStackOverflow} name="Stack OF" href="https://stackoverflow.com/users/16822116/anfique-hussain-v" />
              <SocialLink icon={SiLeetcode} name="Leetcode" href="https://leetcode.com/u/Anfiquehussainv/" />
              <SocialLink icon={FaInstagram} name="Instagram" href="https://www.instagram.com/anfique_hv/" />
              <SocialLink icon={FaFacebookF} name="Facebook" href="https://m.facebook.com/people/Anfique-Hussain-V/100022489001636/" />

            </div>
          </div>
        </div>
      </section>
    </div>
  );

  
}
