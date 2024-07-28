import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { HiOutlineMail } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegMessage, FaPaperPlane } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";

const InputField = ({ icon: Icon, type, placeholder, name, value, onChange }) => (
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
    className={`relative flex items-center rounded-lg bg-secondary px-5 py-2 hover:bg-backgroundHover ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    {children}
  </button>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    user_location: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS service ID, template ID, and user ID
      const result = await emailjs.send(
        'service_yyzt3xn',
        'template_h7hfd8a',
        formData,
        '8b6dnsCUFzUHjh-KE'
      );

      console.log(result.text);
      setSubmitStatus('success');
      setFormData({ user_email: "", user_name: "", user_location: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ user_email: "", user_name: "", user_location: "", message: "" });
    setSubmitStatus(null);
  };

  return (
    <div className="container mx-auto p-4">
      <section>
        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2 lg:mx-40">
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
              icon={IoLocationOutline}
              type="text"
              name="user_location"
              placeholder="Location"
              value={formData.user_location}
              onChange={handleInputChange}
            />
            <Button type="button" onClick={handleReset} className="hidden w-fit self-end md:flex">
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
              <Button type="submit" className="w-full md:w-fit" disabled={isSubmitting}>
                <FaPaperPlane className="mr-2" />
                {isSubmitting ? 'Sending...' : 'Submit'}
              </Button>
              <Button type="button" onClick={handleReset} className="ms-2 w-full md:hidden">
                <GrPowerReset className="mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </form>
        {submitStatus === 'success' && (
          <p className="mt-4 text-green-500">Email sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="mt-4 text-red-500">Error sending email. Please try again.</p>
        )}
      </section>
    </div>
  );
}