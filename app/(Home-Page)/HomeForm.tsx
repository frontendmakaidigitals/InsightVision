"use client";
import React, { useState } from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/Checkbox";
import SmallLoadingSpinner from "../App_Chunks/spinner";
import { cn } from "@/lib/utils";
const HomeForm = () => {
  const icons = [
    {
      id: "facebook",
      Icon: FacebookLogo,
      link: "https://www.facebook.com/share/1B8MhGwsoX/?mibextid=wwXIfr",
    },
    {
      id: "instagram",
      Icon: InstagramLogo,
      link: "https://www.instagram.com/insightvision.marketing?igsh=enp5bGcxc255MmJr",
    },
    {
      id: "linkedin",
      Icon: LinkedinLogo,
      link: "https://www.linkedin.com/company/insight-vision-marketing/",
    },
  ];
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
    <div className="bg-white py-20">
      <div className="container h-full  gap-5 grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr]">
        <div className="bg-[#0e2147] text-indigo-200 py-8 px-8 flex flex-col justify-between items-start rounded-2xl w-full h-full">
          <div>
            <h3 className="text-purple-50 font-Plus-Jakarta-Sans font-[600] text-xl">
              Address
            </h3>
            <p className="mt-2 max-w-xs text-lg">
              Office - 1701, Churchill Towers, Business Bay, Dubai, UAE
            </p>
          </div>
          <div>
            <h3 className="text-purple-50 font-Plus-Jakarta-Sans font-[600] text-xl">
              Contact
            </h3>
            <p className="mt-2 text-lg">Phone - +971 50 865 4179</p>
            <p className="text-lg">Email - info@insightvision.marketing</p>
          </div>
          <div>
            <h3 className="text-purple-50  font-Plus-Jakarta-Sans font-[600] text-xl">
              Open Time
            </h3>
            <p className="mt-2 text-lg">
              Monday - Friday &nbsp; &nbsp; 10:00 - 19:00
            </p>
          </div>
          <div>
            <h3 className="text-purple-50 font-Plus-Jakarta-Sans font-[600] text-xl">
              Stay Connnected
            </h3>
            <div className="flex gap-8 mt-4 justify-between w-full">
              {icons.map(({ id, Icon, link }) => (
                <Link key={id} href={link}>
                  <div className="text-4xl size-12 p-2 bg-Palette-30 flex justify-center items-center rounded-full">
                    <Icon weight="fill" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4">
          <p className="text-[#bb9bfc] font-[600]">Contact us</p>
          <h2 className="text-2xl font-DM-Sans font-[600] mt-1 lg:text-4xl">
            Get Your <span className="text-indigo-700">Free Quote</span> Today!
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-7">
            <div>
              <label className="font-DM-Sans text-lg font-[600]">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                name={"firstName"}
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first Name"
                className="w-full px-4 py-[.7rem] mt-1  text-md bg-slate-100 rounded-lg"
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="font-DM-Sans text-lg font-[600]">
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                name={"lastName"}
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last Name"
                className="w-full px-4 py-[.7rem] mt-1  text-md bg-slate-100 rounded-lg"
              />
              {errors.lastName && (
                <p className="text-red-600 text-sm">{errors.lastName}</p>
              )}
            </div>
            <div>
              <label className="font-DM-Sans text-lg font-[600]">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type={"email"}
                name={"email"}
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-[.7rem] mt-1  text-md bg-slate-100 rounded-lg"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="font-DM-Sans text-lg font-[600]">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                id="phone"
                onChange={handleChange}
                name="phone"
                value={formData.phone}
                placeholder="Enter your contact"
                type="number"
                className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0 w-full px-4 py-[.7rem] mt-1  text-md bg-slate-100 rounded-lg"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone}</p>
              )}
            </div>

            <div className="lg:col-span-2">
              <label className="font-DM-Sans text-lg font-[600]">Message</label>
              <textarea
                value={formData.message}
                name={"message"}
                onChange={handleChange}
                placeholder="Enter here"
                rows={8}
                className="w-full resize-none px-4 py-[.7rem] mt-1  text-md bg-slate-100 rounded-lg"
              />
              {errors.message && (
                <p className="text-red-600 text-sm">{errors.message}</p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2">
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
              status === 'Failed to send email' && 'border-red-500'
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
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
