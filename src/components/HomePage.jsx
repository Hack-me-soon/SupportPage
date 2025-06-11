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
          <div className="md:pr-10">
            <p className="text-sm text-gray-500 mb-2">[ Contact Us ]</p>
            <h3 className="text-4xl font-semibold text-black mb-4">Reach Out Your Way</h3>
            <p className="text-gray-600">
              Have more specific questions? Contact us through your preferred channel
            </p>
            <div className="mt-6 space-y-3 flex flex-col items-center"> {/* Added flex, flex-col, and items-center */}
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
          <form className="max-w-2xl mx-auto space-y-4 md:pl-16 md:border-l md:border-gray-300"> {/* Changed md:pl-10 to md:pl-16 */}
            <h3 className="text-4xl text-black mb-4">Fill the Form &</h3>
            <h3 className="text-4xl font-semibold text-black mb-4">We will Contact You</h3><br />
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Your Name" required />
              <Input placeholder="Your City" required />
            </div>
            <Textarea placeholder="Your Question" required className="h-32 w-full border border-gray-300 rounded px-4 py-2" />
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Phone" required />
              <Input placeholder="Email Address" required />
            </div>
            <Button type="submit" className="bg-[#7e5ca3] hover:bg-[#6b4899]">Submit</Button>
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

      {/* New Section: Footer-like content based on the image */}
      <section className="py-16 px-4 bg-[#f4edf9]" id="new-footer-section">
        <div className="max-w-6xl mx-auto grid md:grid-cols-6 gap-10 items-start">
          {/* Left Part: Logo and Socials */}
          <div className="md:col-span-2 flex flex-col items-start">
            <h2 className="text-3xl font-bold text-[#1a3a30] mb-2">Pure Serve</h2>
            <p className="text-xl text-[#1a3a30] font-semibold mb-6">VENTURES</p>
            <div className="flex space-x-4">
              {/* Email Icon */}
              <a href="#" className="text-gray-600 hover:text-[#7e5ca3]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-17 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-17 0v-5a2 2 0 012-2h14a2 2 0 012 2v5"
                  />
                </svg>
              </a>
              {/* Instagram Icon */}
              <a href="#" className="text-gray-600 hover:text-[#7e5ca3]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.999 7.001C9.697 7.001 7.999 8.7 7.999 11c0 2.302 1.698 4.001 4.001 4.001 2.302 0 4.001-1.699 4.001-4.001 0-2.3-1.699-4-4.001-4zm0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm6.5-7.5h.001v.001H18.5z"
                  />
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                </svg>
              </a>
              {/* WhatsApp Icon */}
              <a href="#" className="text-gray-600 hover:text-[#7e5ca3]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.472 14.284A6.995 6.995 0 0019 12c0-3.87-3.13-7-7-7s-7 3.13-7 7a6.995 6.995 0 001.528 4.284L3 21l6.716-1.528A6.995 6.995 0 0012 19c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7zm-5.472-1.284c-.39-2.02-1.92-2.98-3.52-2.98-.82 0-1.63.4-2.18.96-.55.55-.83 1.25-.83 2.02 0 .78.28 1.48.83 2.02.55.56 1.36.96 2.18.96 1.6 0 3.13-.96 3.52-2.98zm-1.528 1.284c.39 2.02 1.92 2.98 3.52 2.98.82 0 1.63-.4 2.18-.96.55-.55.83-1.25.83-2.02 0-.78-.28-1.48-.83-2.02-.55-.56-1.36-.96-2.18-.96-1.6 0-3.13.96-3.52 2.98z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Part: Four Columns of Links */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Account Column */}
            <div>
              <h4 className="font-semibold text-black mb-4">Account</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:underline">Saving</a></li>
                <li><a href="#" className="hover:underline">Join Accounts</a></li>
                <li><a href="#" className="hover:underline">Crypto</a></li>
                <li><a href="#" className="hover:underline">Freelance</a></li>
                <li><a href="#" className="hover:underline">Commodities</a></li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h4 className="font-semibold text-black mb-4">Help</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:underline">Customer Help</a></li>
                <li><a href="#" className="hover:underline">Community</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>

            {/* Finance Column */}
            <div>
              <h4 className="font-semibold text-black mb-4">Finance</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:underline">Cards</a></li>
                <li><a href="#" className="hover:underline">Linked Account</a></li>
                <li><a href="#" className="hover:underline">Payment</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Career</a></li>
              </ul>
            </div>
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
        <p className="text-black">&copy; {new Date().getFullYear()} Pure Serve Ventures. All rights reserved.</p>
      </footer>
    </div>
  );
}
