"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    companyName: "",
    service: "",
    monthlyBudget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="bg-[url('https://res.cloudinary.com/dmrwefamp/image/upload/v1738591253/org1_wzor05.png')] bg-cover bg-center h-full w-full px-4 sm:px-8 py-10">
      <div className="text-center text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
          LET'S TALK!
        </h1>
        <p className="mb-6 sm:mb-10">
          Get in touch with us and let's make magic happen.
        </p>
      </div>

      <div className="border-4 bg-gray-500 border-black rounded-3xl w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto bg-white/90 p-2 sm:p-2 shadow-3xl">
        <div className="border-4 border-black p-6 rounded-2xl text-2xl bg-white ">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">
                  FIRST NAME <span className="text-red-500">*</span>
                </label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">
                  LAST NAME <span className="text-red-500">*</span>
                </label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email & Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">
                  EMAIL ID <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">
                  NUMBER <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="text-sm font-medium">
                COMPANY NAME <span className="text-red-500">*</span>
              </label>
              <Input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="text-sm font-medium">
                SERVICE <span className="text-red-500">*</span>
              </label>
              <Select
                value={formData.service}
                onValueChange={(value) => handleSelectChange("service", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital-marketing">
                    DIGITAL MARKETING
                  </SelectItem>
                  <SelectItem value="seo">SEO</SelectItem>
                  <SelectItem value="social-media">SOCIAL MEDIA</SelectItem>
                  <SelectItem value="content">CONTENT MARKETING</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Monthly Budget */}
            <div>
              <label className="text-sm font-medium">
                MONTHLY BUDGET <span className="text-red-500">*</span>
              </label>
              <Select
                value={formData.monthlyBudget}
                onValueChange={(value) =>
                  handleSelectChange("monthlyBudget", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1l-5l">₹1L - ₹5L</SelectItem>
                  <SelectItem value="5l-10l">₹5L - ₹10L</SelectItem>
                  <SelectItem value="10l-plus">₹10L+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                className="bg-purple-500 text-white w-full sm:w-auto px-8 py-4 text-lg font-bold uppercase"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 