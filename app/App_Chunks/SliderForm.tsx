"use client";
import React, { useEffect, useRef, useState } from "react";
import { X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import SmallLoadingSpinner from "./spinner";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/Checkbox";
interface SliderFormProps {
  isFormOpen: boolean;
  setIsFormOpen: (isFormOpen: boolean) => void;
}

const SliderForm: React.FC<SliderFormProps> = ({
  isFormOpen,
  setIsFormOpen,
}) => {
  const form = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (form.current && !form.current.contains(event.target as Node)) {
        setIsFormOpen(false);
      }
    };

    if (isFormOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFormOpen]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [checkbox, setCheckBox] = useState(false);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    checked: false,
  });
  const [status, setStatus] = useState("");

  const validate = () => {
    const tempErrors = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      checked: false,
    };
    if (!formData.firstName.trim())
      tempErrors.firstName = "First Name is required";
    if (!formData.lastName.trim())
      tempErrors.lastName = "Last Name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    if (!checkbox) tempErrors.checked = true;
    setErrors(tempErrors);
    const hasErrors = Object.values(tempErrors).some(
      (error) => error !== "" && error !== false
    );
    return !hasErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) {
      console.log("return", errors);
      return;
    }
    setStatus("Sending...");
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setStatus("ok");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        }); // Reset form
        setCheckBox(false);
      } else {
        setStatus("Failed to send email");
      }
    } catch (error) {
      setStatus("Failed to send email");
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isFormOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.19, 1, 0.22, 1], duration: 0.7 }}
            className="fixed z-[999999999999] flex px-2 justify-center lg:justify-end items-center top-0 left-0 w-screen h-screen bg-slate-950/30"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ ease: [0.19, 1, 0.22, 1], duration: 0.7 }}
              className="w-[500px] p-6 bg-white rounded-xl"
              ref={form}
            >
              <div className="flex justify-end text-slate-950">
                <button
                  className="flex px-4 py-2 transition-colors duration-300 hover:bg-red-300 rounded-full items-center gap-2"
                  onClick={() => setIsFormOpen(false)}
                >
                  Close <X />
                </button>
              </div>

              <h2 className="text-4xl font-Synonym font-[500] ">
                Have a Question?
              </h2>
              <p className="font-SplineSans font-[300] text-sm mt-1 text-slate-800">
                Contact us today to see how we can help you find the right
                solution for your financial needs.
              </p>

              <form
                className="grid grid-cols-1 gap-4 mt-5"
                onSubmit={handleSubmit}
              >
                <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-2 ">
                  <div className="w-full">
                    <label>First Name</label>
                    <input
                      name="firstName"
                      placeholder="Enter your full name"
                      className={`w-full font-[500] placeholder:text-slate-500 font-Grostek bg-slate-100 mt-1 rounded-xl ${
                        errors.firstName ? "border border-red-500" : ""
                      } px-5 py-3`}
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full">
                    <label>Last Name</label>
                    <input
                      name="lastName"
                      placeholder="Enter your last name"
                      className={`w-full font-[500] placeholder:text-slate-500 font-Grostek bg-slate-100 mt-1 rounded-xl ${
                        errors.lastName ? "border border-red-500" : ""
                      } px-5 py-3`}
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label>Phone</label>
                  <input
                    name="phone"
                    placeholder="Enter Contact number"
                    className={`w-full font-[500] placeholder:text-slate-500 font-Grostek bg-slate-100 mt-1 rounded-xl ${
                      errors.phone ? "border border-red-500" : ""
                    } px-5 py-3`}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <label>Email</label>
                  <input
                    name="email"
                    placeholder="Enter your email"
                    className={`w-full font-[500] placeholder:text-slate-500 font-Grostek bg-slate-100 mt-1 rounded-xl ${
                      errors.email ? "border border-red-500" : ""
                    } px-5 py-3`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <label>What service would you like help with?</label>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    className={`w-full resize-none h-32 font-[500] placeholder:text-slate-500 font-Grostek bg-slate-100 mt-1 ${
                      errors.message ? "border border-red-500" : ""
                    } rounded-xl px-5 py-3`}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center space-x-2 ">
                  <Checkbox
                    id="terms"
                    checked={checkbox}
                    onCheckedChange={() => {
                      setErrors((prev) => ({
                        ...prev, // Keep existing errors
                        checked: false, // Update 'checked' error
                      }));
                      setCheckBox(!checkbox);
                    }}
                    className=""
                  />
                  <label
                    htmlFor="terms"
                    className={`${
                      errors.checked ? "text-red-500" : ""
                    } text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                  >
                    Accept terms and conditions
                  </label>
                </div>
                <button
                  type="submit"
                  className={cn(
                    `border border-slate-400 w-full transition-all duration-200 hover:bg-Palette-20 hover:text-indigo-50 cursor-pointer mt-10 py-2 rounded-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`,
                    status === "ok" && "bg-Palette-20 text-indigo-200",
                    status === "Failed to send email" && "border-red-500"
                  )}
                  disabled={status === "Sending..." || status === "ok"}
                  onClick={handleSubmit}
                >
                  {status === "Sending..." ? (
                    <>
                      <SmallLoadingSpinner />
                      Sending...
                    </>
                  ) : status === "ok" ? (
                    "Submitted Sucessfully"
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default SliderForm;
