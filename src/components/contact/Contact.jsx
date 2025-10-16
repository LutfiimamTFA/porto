// src/components/Contact.jsx
import React from "react";

const socialMediaData = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/lutfiimamtfa/", // ganti dengan IG kamu
    icon: "📸",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lutfi-imam-tauchid-faried-akbar-6633b2371/", // ganti dengan LinkedIn kamu
    icon: "💼",
  },
];

const contactData = [
  {
    title: "Address",
    description: "Kota Semarang, Jawa Tengah",
    icon: "📍",
  },
  {
    title: "Email",
    description: "lutfiimam81@gmail.com",
    icon: "✉️",
  },
  {
    title: "Phone",
    description: "089680597803",
    icon: "📞",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div className="content p-6 md:p-10 lg:p-20 bg-white rounded-2xl shadow-lg" id="contact">
        <p className="text-[35px] font-semibold text-[#132238] text-center mb-6">
          Let's Connect
        </p>

        <div className="flex flex-col md:flex-row justify-around gap-6">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            {contactData.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-[#F5F5F5] p-3 rounded-lg">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-base font-normal">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Follow Me */}
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold text-[#132238]">Follow Me</p>
            <div className="flex gap-4">
              {socialMediaData.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#F5F5F5] p-2 rounded-lg hover:bg-[#E0D4FF] transition"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
