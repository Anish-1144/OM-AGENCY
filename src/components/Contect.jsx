"use client";

import { useState } from "react";
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    companyName: "",
    service: "",
    monthlyBudget: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

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

  return (
    <div className=" bg-[url('/org1.png')] bg-cover  h-full w-full overflow-hidden ">
      {/* Decorative elements */}
      <img src="/bolls.svg" alt="no" className="h-10 w-10 md:h-16 md:w-16" />

      {/* Main content */}
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4 text-center">
        LET'S TALK!
      </h1>
      <p className="text-white mb-4 sm:mb-8 text-center">
        Get in touch with us and let's make magic happen.
      </p>

      {/* Form container with device frame */}
      <div
        className="w-full mb-8 md:max-w-[800px] mx-auto relative  sm:bg-transparent rounded-lg hidden md:block "
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-Q9wO8ex3nuV94zJQelSiSLmpXavrNx.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          // width: "100%",
          // maxWidth: "800px",
          // height: "auto",
          aspectRatio: "4/3",
        }}
      >
        <div className="md:h-full md:p-8 md:m-8   ">
          <form onSubmit={handleSubmit} className="md:space-y-4 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
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
              <div className="space-y-2">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
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
              <div className="space-y-2">
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

            <div className="space-y-2">
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

            <div className="space-y-2">
              <label className="text-sm font-medium">
                SERVICE <span className="text-red-500">*</span>
              </label>
              <Select
                value={formData.service}
                onValueChange={(value) => handleSelectChange("service", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="DIGITAL MARKETING" />
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

            <div className="space-y-2">
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
                  <SelectValue placeholder="MONTHLY ₹1L - ₹5L" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1l-5l">MONTHLY ₹1L - ₹5L</SelectItem>
                  <SelectItem value="5l-10l">MONTHLY ₹5L - ₹10L</SelectItem>
                  <SelectItem value="10l-plus">MONTHLY ₹10L+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="justify-items-start bg-purple-500 text-black px-8 py-4 text-lg rounded-none border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-purple-400 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all transform hover:translate-x-[-3px] hover:translate-y-[-3px] uppercase font-bold"
              >
                send
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div
      // className="w-full md:max-w-[100px] mx-auto relative  sm:bg-transparent rounded-lg block md:hidden "
      >
        <div className="rounded-3xl border-2 border-black p-8 m-8 bg-white block md:hidden relative">
          {/* Outer gray border */}
          {/* <div className="absolute inset-6 rounded-3xl border-2 border-gray-400" /> */}
          {/* Inner gray border */}
          <div className="absolute inset-2 rounded-2xl border-2 border-black" />
          {/* Form container */}
          <div className="relative p-4 bg-white rounded-3xl">
            <form onSubmit={handleSubmit} className="md:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
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
                <div className="space-y-2">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
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
                <div className="space-y-2">
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

              <div className="space-y-2">
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

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  SERVICE <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    handleSelectChange("service", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="DIGITAL MARKETING" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem className="bg-white" value="digital-marketing">
                      DIGITAL MARKETING
                    </SelectItem>
                    <SelectItem className="bg-white" value="seo">
                      SEO
                    </SelectItem>
                    <SelectItem className="bg-white" value="social-media">
                      SOCIAL MEDIA
                    </SelectItem>
                    <SelectItem className="bg-white" value="content">
                      CONTENT MARKETING
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
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
                    <SelectValue placeholder="MONTHLY ₹1L - ₹5L" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem className="bg-white" value="1l-5l">
                      MONTHLY ₹1L - ₹5L
                    </SelectItem>
                    <SelectItem className="bg-white" value="5l-10l">
                      MONTHLY ₹5L - ₹10L
                    </SelectItem>
                    <SelectItem className="bg-white" value="10l-plus">
                      MONTHLY ₹10L+
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-center mt-4">
                <Button
                  size="lg"
                  className="justify-items-start bg-purple-500 text-black px-8 py-4 text-lg rounded-none border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-purple-400 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all transform hover:translate-x-[-3px] hover:translate-y-[-3px] uppercase font-bold"
                >
                  send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
