import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Contact() {
  return (
    <div className="px-5">
      <h1 className="text-2xl text-orange-500 font-bold py-4">
        Contact Information
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="art-card flex">
          <div class="w-1/2 pr-4 space-y-4 text-sm opacity-50">
            <p class="font-bold">Country:</p>
            <p class="font-bold">City:</p>
            <p class="font-bold">Street:</p>
          </div>
          <div class="w-1/2 text-sm opacity-50 space-y-4">
            <p>Bangladesh</p>
            <p>Dhaka</p>
            <p>Shewrapara</p>
          </div>
        </div>
        <div class="art-card flex">
          <div class="w-1/2 pr-4 space-y-4 text-sm opacity-50">
            <p class="font-bold">Support service:</p>
            <p class="font-bold">Office:</p>
            <p class="font-bold">Personal:</p>
          </div>
          <div class="w-1/2 text-sm opacity-50 space-y-4">
            <p>Desktop / Laptop</p>
            <p>MohammadPur</p>
            <p>01785003901</p>
          </div>
        </div>
        <div class="art-card flex">
          <div class="w-1/2 pr-4 space-y-4 text-sm opacity-50">
            <p class="font-bold">Name:</p>
            <p class="font-bold">Mail:</p>
            <p class="font-bold">Phone:</p>
          </div>
          <div class="w-1/2 text-sm opacity-50 space-y-4">
            <p>Md Gousul Islam</p>
            <p>gausulislam5@gmail.com</p>
            <p>01785003901</p>
          </div>
        </div>
      </div>
      <div className="py-4">
        <h1 className="text-2xl text-orange-500 font-bold pb-4">
          Get in Touch
        </h1>
        <div className="px-10 py-5 art-card" id="contact">
          <form>
            <label htmlFor="username" className="block mb-3 text-sm font-bold">
              Username
            </label>
            <div className="flex mb-6 h-14">
              <div
                className="flex items-center h-full rounded-l-md border-none 
            text-white bg-black px-5 transition-colors duration-300 ease-in-out"
              >
                <FaUserAlt />
              </div>
              <input
                type="text"
                id="username"
                className="rounded-none rounded-r-md bg-gradient-to-r from-[#252532] to-[#23232d] border-none
             text-[#fafafc] block flex-1 min-w-0 w-full text-sm p-2.5 shadow-inner transition 
             ease-in-out duration-300 focus:outline-none"
                placeholder="Username"
              />
            </div>

            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <div className="flex mb-6 h-14">
              <div
                className="flex items-center h-full rounded-l-md border-none 
            text-white bg-black px-5 transition-colors duration-300 ease-in-out"
              >
                <FaAt />
              </div>
              <input
                type="email"
                id="email"
                className="rounded-none rounded-r-md bg-gradient-to-r from-[#252532] to-[#23232d] 
            border-none text-[#fafafc] block flex-1 min-w-0 w-full text-sm p-2.5 shadow-inner 
            transition ease-in-out duration-300 focus:outline-none"
                placeholder="Email"
              />
            </div>

            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <div className="flex mb-6 h-24">
              <div
                className="flex items-center h-full rounded-l-md border-none 
            text-white bg-black px-5 transition-colors duration-300 ease-in-out"
              >
                <IoMail />
              </div>

              <textarea
                id="message"
                className="rounded-none rounded-r-md bg-gradient-to-r from-[#252532] to-[#23232d] border-none
             text-[#fafafc] block flex-1 min-w-0 w-full text-sm p-2.5 shadow-inner transition
             ease-in-out duration-300 focus:outline-none"
                placeholder="Message"
              />
            </div>

            <button className="button px-14 my-4">Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
