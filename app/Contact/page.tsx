"use client";
import React, { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { PhoneInput } from "../App_Chunks/CountryInput";
import Link from "next/link";
import SmallLoadingSpinner from "../App_Chunks/spinner";
import { cn } from "@/lib/utils";
const Page = () => {
  const social = [
    <>
      <Link
        href={
          "https://www.instagram.com/insightvision.marketing?igsh=enp5bGcxc255MmJr"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white" // fill inside the shapes with white
          stroke="rgba(0, 0, 0, 1)" // semi-transparent black lines
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-instagram-icon lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </Link>
    </>,
    <>
      <Link href={"https://www.facebook.com/share/1B8MhGwsoX/?mibextid=wwXIfr"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white" // fill inside the shapes with white
          stroke="rgba(0, 0, 0, 1)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-facebook-icon lucide-facebook"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </Link>
    </>,
    <>
      <Link href={"https://www.linkedin.com/company/insight-vision-marketing/"}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white" // fill inside the shapes with white
          stroke="rgba(0, 0, 0, 1)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-linkedin-icon lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </Link>
    </>,
  ];
  return (
    <div className="mb-28 relative pt-12 ">
      <div
        className="absolute inset-0 
    bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] 
    [background-size:80px_80px] 
    pointer-events-none 
    z-0 
    [mask-image:linear-gradient(to_bottom,transparent,black_40%,black_10%,transparent)] 
    [mask-repeat:no-repeat] 
    [mask-size:100%_100%]"
        aria-hidden="true"
      />

      <div className="container mb-20 relative z-10 max-w-5xl">
        <h2 className="text-center text-3xl lg:text-5xl font-Plus-Jakarta-Sans font-[600]">
          Contact our team
        </h2>
        <p className="text-sm text-center mt-4 ">
          At Insight Vision, our team is ready to assist you with any questions,
          ideas, or support you need. Reach out to us today — we&apos;re here to
          help turn your vision into reality.
        </p>
      </div>
      <div className="container relative z-10 max-w-5xl grid-cols-1 grid lg:grid-cols-[.8fr_1.2fr] gap-12 ">
        <div className="w-full bg-gradient-to-b from-Palette-10 from-[5%] to-[#dfd6ff]  rounded-2xl px-9 py-12">
          <h2 className="text-xl font-DM-Sans tracking-tight text-white font-[600]">
            Get in touch
          </h2>
          <div className="mt-7">
            <h3 className="text-md text-white font-Plus-Jakarta-Sans font-[600]">
              Visit us
            </h3>
            <p className="text-sm text-slate-50">
              Come say hello at our Office HQ.
            </p>
            <p className="text-sm text-slate-50 mt-1">
              Office - 1701, Churchill Towers, Business Bay, Dubai, UAE
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-lg text-white font-Plus-Jakarta-Sans font-[600]">
              Call to us
            </h3>
            <p className="text-sm text-slate-50">Mon-Fri from 9am-7pm</p>
            <p className="text-sm text-slate-50 mt-1">+971 50 865 4179</p>
          </div>

          <div className="mt-8">
            {" "}
            <h3 className="text-md text-white font-Plus-Jakarta-Sans font-[600]">
              Chat to us
            </h3>
            <p className="text-sm text-slate-50">
              Our friendly team is here to help
            </p>
            <p className="text-sm text-slate-50">
              info@insightvision.marketing
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-md text-white font-Plus-Jakarta-Sans font-[600]">
              Social media
            </h3>
            <div className="flex justify-start gap-4 mt-3">
              {social.map((icon, idx) => (
                <div key={idx}>{icon}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-8 ">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Page;

const Form = () => {
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
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("Error sending email.");
    }
  };

  return (
    <>
      <div className="w-full col-span-2 lg:col-span-1">
        <label>First Name</label>
        <input
          name={"firstName"}
          value={formData.firstName}
          onChange={handleChange}
          className="text-sm mt-1 w-full border bg-[#f1f0fb] border-slate-400/40 rounded-md px-3 block py-[.7rem]"
          placeholder="First name"
        />
        {errors.firstName && (
          <p className="text-red-600 text-sm">{errors.firstName}</p>
        )}
      </div>
      <div className="w-full col-span-2 lg:col-span-1">
        <label>Last Name</label>
        <input
          name={"lastName"}
          value={formData.lastName}
          onChange={handleChange}
          className="text-sm mt-1 w-full border bg-[#f1f0fb] border-slate-400/40 rounded-md px-3 block py-[.7rem]"
          placeholder="Last name"
        />
        {errors.lastName && (
          <p className="text-red-600 text-sm">{errors.lastName}</p>
        )}
      </div>
      <div className="w-full col-span-2">
        <label>Phone</label>
        <input
          id="phone"
          type={'number'}
          onChange={handleChange}
          placeholder="+000000"
          name="phone"
          value={formData.phone}
          className="text-sm mt-1 w-full border bg-[#f1f0fb] border-slate-400/40 rounded-md px-3 block py-[.7rem]"
        />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
      </div>
      <div className="w-full col-span-2">
        <label>Email</label>
        <input
          type={"email"}
          name={"email"}
          value={formData.email}
          onChange={handleChange}
          className="text-sm mt-1 w-full border bg-[#f1f0fb] border-slate-400/40 rounded-md px-3 block py-[.7rem]"
          placeholder="you@email.com"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
      </div>
      <div className="w-full col-span-2">
        <label>Message</label>
        <textarea
          rows={6}
          className="text-sm mt-1 w-full resize-none bg-[#f1f0fb] border border-slate-400/40 rounded-md px-3 block py-[.7rem]"
          placeholder="Leave us a message"
          value={formData.message}
          name={"message"}
          onChange={handleChange}
        />
        {errors.message && (
          <p className="text-red-600 text-sm">{errors.message}</p>
        )}
      </div>
      <div className="col-span-2">
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
            status === "ok" && "bg-Palette-20 text-indigo-200"
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
    </>
  );
};
