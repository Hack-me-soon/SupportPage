import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export default function HomePage() {
  const visibleCount = 5;
  const expertCount = 10;
  const totalSlides = expertCount + visibleCount;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex >= expertCount) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(expertCount - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="pt-24 bg-gradient-to-b from-[#f0ebf8] to-[#e9e4f0] text-gray-800">
      <header className="flex justify-between items-center px-6 py-6 gap-10 shadow-md bg-[#faf6ff] fixed top-0 left-0 w-full z-50">
        <div className="flex items-center space-x-3">
          <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-bold text-black">Pure Serve Ventures</h1>
        </div>
        <nav className="space-x-20 hidden md:block">
          <a href="#about" className="text-black">About Us</a>
          <a href="#services" className="text-black">Services</a>
          <a href="#contact" className="text-black">Contact Us</a>
        </nav>
        <Button className="hidden md:inline-block bg-[#7e5ca3] hover:bg-[white]"></Button>
      </header>

      <section id="about" className="px-4 py-20">
        <h2 className="text-4xl font-bold mb-4 text-center text-black">About Us</h2>
        <p className="mb-6 max-w-xl mx-auto text-center text-black">
          Whether you’re seeking help with your account, planning your next investment, or simply have questions,
          our team is ready to assist you with fast & personalized solutions.
        </p>
        <div className="text-center">
          <Button className="bg-[#7e5ca3] hover:bg-[#6b4899]">Explore Our Support</Button>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-20 max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/images/hero-img-1.jpg" alt="Gallery 1" className="w-full h-48 object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/images/hero-img-2.jpg" alt="Gallery 2" className="w-full h-48 object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/images/hero-img-3.jpg" alt="Gallery 3" className="w-full h-48 object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#faf6ff]" id="services">
        <h3 className="text-3xl font-semibold text-center mb-12 text-black">Find What You Need Faster</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Accounts & Investments",
              desc: "Get guidance on setting up, managing, or adjusting your accounts and investment preferences.",
              icon: "/images/icon-accounts.svg"
            },
            {
              title: "Security & Privacy",
              desc: "Understand how we keep your data secure and what steps you can take to protect your account.",
              icon: "/images/icon-security.svg"
            },
            {
              title: "Payments & Billing",
              desc: "FAQs and guides related to transaction history, linked cards, and payment methods.",
              icon: "/images/icon-payments.svg"
            },
            {
              title: "Technical Support",
              desc: "Having trouble with the app or dashboard? Troubleshooting tips and updates here.",
              icon: "/images/icon-support.svg"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#eae4f2] flex items-center justify-center">
                <img src={item.icon} alt={`${item.title} icon`} className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-black">{item.title}</h4>
              <p className="text-black text-sm">{item.desc}</p>
              <Button className="bg-[#7e5ca3] hover:bg-[#6b4899]">Explore Our Support</Button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-[#faf6ff]" id="contact">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Column */}
          <div>
            <p className="text-sm text-gray-500 mb-2">[ Contact Us ]</p>
            <h3 className="text-4xl font-semibold text-black mb-4">Reach Out Your Way</h3>
            <p className="text-gray-600">
              Have more specific questions? Contact us through your preferred channel
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="tel:+1234567890"
                className="inline-block w-full max-w-xs bg-[#7e5ca3] hover:bg-[#6b4899] text-white text-center py-3 rounded font-medium"
              >
                📞 Call Us
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full max-w-xs bg-[#25D366] hover:bg-[#1ebe5d] text-white text-center py-3 rounded font-medium"
              >
                💬 Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Conversational Form */}
          <form className="space-y-6">
            <p className="text-black text-lg">
              Hi! I'm <Input className="inline-block w-40 mx-2" placeholder="Your Name" />
              a <Input className="inline-block w-40 mx-2" placeholder="Your Job" /> from{" "}
              <Input className="inline-block w-40 mx-2" placeholder="Your City" /> that need help.
              I have a question which are
            </p>

            <Textarea
              placeholder="State your Questions here"
              className="w-full border border-gray-300 rounded px-4 py-3 h-32"
            />

            <p className="text-black text-lg">
              You can reach me at <Input className="inline-block w-60 mx-2" placeholder="Email address" /> to get things started.
            </p>

            <Button type="submit" className="bg-[#7e5ca3] hover:bg-[#6b4899]">
              Submit
            </Button>
          </form>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <h3 className="text-3xl font-semibold text-center mb-6 text-black">
          Experts Ready to Help
        </h3>
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex % expertCount) * (100 / visibleCount)}%)`,
              }}
            >
              {[...Array(expertCount + visibleCount)].map((_, i) => {
                const realIndex = i % expertCount;
                return (
                  <div
                    key={i}
                    className={`w-full md:w-1/5 flex-shrink-0 px-2 transition-all duration-300 ${realIndex === (currentIndex + 2) % expertCount ? 'scale-110' : 'scale-90'
                      }`}
                  >
                    <img
                      src={`/images/expert-${realIndex + 1}.jpg`}
                      alt={`Expert ${realIndex + 1}`}
                      className="rounded-xl w-full h-72 object-cover shadow-md"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev <= 0 ? expertCount - 1 : prev - 1
                )
              }
              className="w-10 h-10 rounded-full bg-[#7e5ca3] text-white"
            >
              &#8592;
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % expertCount)
              }
              className="w-10 h-10 rounded-full bg-[#7e5ca3] text-white"
            >
              &#8594;
            </button>
          </div>
          <p className="text-center text-black mt-4 max-w-2xl mx-auto">
            Behind every solution is a real person who’s ready to assist you with professionalism and care.
            Meet our financial advisors, tech team, and service consultants.
          </p>
          <div className="text-center mt-4">
            <Button className="bg-[#7e5ca3] hover:bg-[#6b4899]">
              Check Our Team
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#f4edf9]" id="faq">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
          <div>
            <p className="text-sm text-gray-500 mb-2">[ FAQ ]</p>
            <h3 className="text-4xl font-semibold leading-snug text-black">
              <span className="text-gray-400 font-light">You Have</span>{" "}
              <span className="text-black font-semibold">Questions,</span><br />
              <span className="text-gray-400 font-light">We Have</span>{" "}
              <span className="text-black font-semibold">Answers</span>
            </h3>
          </div>

          <div className="md:col-span-2 space-y-4">
            {[
              {
                question: "Who can benefit from Solvance’s financial services?",
                answer:
                  "Our services are ideal for individuals, families, and businesses seeking expert financial planning, investment advice, and personalized support.",
              },
              {
                question: "What services does Solvance offer?",
                answer:
                  "We offer investment management, retirement planning, tax optimization, business financial strategy, and more.",
              },
              {
                question: "How does Solvance help with investment management?",
                answer:
                  "Our team provides personalized investment strategies based on your goals and risk tolerance, with regular performance reviews.",
              },
              {
                question: "How can I schedule a consultation with Solvance?",
                answer:
                  "You can schedule a meeting directly from our website using the contact form or through WhatsApp.",
              },
              {
                question: "Can Solvance help with business financial planning?",
                answer:
                  "Yes, we specialize in helping startups and growing businesses create sustainable and scalable financial plans.",
              },
            ].map((item, index) => {
              const [openIndex, setOpenIndex] = useState(null);
              const toggle = () =>
                setOpenIndex((prev) => (prev === index ? null : index));

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-4 transition-all"
                >
                  <button
                    onClick={toggle}
                    className="flex justify-between items-center w-full text-left text-black font-medium text-lg"
                  >
                    {item.question}
                    <span className="text-xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="mt-2 text-sm text-gray-700">{item.answer}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </a>

      <footer className="text-center py-6 bg-[#faf6ff] border-t mt-10">
        <p className="text-black">&copy; {new Date().getFullYear()} Your Business Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
