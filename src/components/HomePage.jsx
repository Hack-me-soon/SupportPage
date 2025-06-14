import React, { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button"; // Assuming this Button is from your UI library
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Navigation module for arrow buttons
import { EffectCoverflow, Pagination, Keyboard, Mousewheel, Navigation } from 'swiper/modules';

// Import Swiper styles (these are external and still needed)
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// No custom CSS file imported here, all styling is inline Tailwind CSS

export default function HomePage() {

  // Carousel settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Custom Button component (if not from a separate UI library)
  const CustomButton = ({ children, className, onClick }) => (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );

  // Expert data for the Swiper carousel (first slider)
  const experts = [
    {
      type: 'domestic',
      title: 'Enjoy the exotic of sunny Hawaii',
      location: 'Maui, Hawaii',
      imageUrl: 'https://images.unsplash.com/photo-1556206079-747a7a424d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      tagColor: '#62667f',
    },
    {
      type: 'subtropical',
      title: 'The Island of Eternal Spring',
      location: 'Lanzarote, Spanien',
      imageUrl: 'https://images.unsplash.com/photo-1571900670723-a317a66e3fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80',
      tagColor: '#087ac4',
    },
    {
      type: 'history',
      title: 'Awesome Eiffel Tower',
      location: 'Paris, France',
      imageUrl: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG0tby1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      tagColor: '#b45205',
    },
    {
      type: 'Mayans',
      title: 'One of the safest states in Mexico',
      location: 'The Yucatan, Mexico',
      imageUrl: 'https://images.unsplash.com/photo-1650367310179-e1b5b8e453c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG0tby1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      tagColor: '#087ac4',
    },
    {
      type: 'native',
      title: 'The most popular yachting destination',
      location: 'Whitsunday Islands, Australia',
      imageUrl: 'https://images.unsplash.com/photo-1596521864207-13d46b1a0c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      tagColor: '#1b7402',
    },
  ];

  // Updated serviceItems to match the new image exactly
  const serviceItems = [
    {
      title: "Full home painting consultation",
      rating: "4.79 (50K)",
      price: "₹49",
      imageUrl: "https://placehold.co/350x250/cccccc/000000?text=Painting+Man", // Resembles the man painting
    },
    {
      title: "Bed bugs control",
      rating: "4.77 (23K)",
      price: "₹1,599",
      imageUrl: "https://placehold.co/350x250/cccccc/000000?text=Bed+Bugs+Control", // Resembles bed bugs control
    },
    {
      title: "At home consultation",
      rating: "4.79 (6K)",
      price: "₹49",
      imageUrl: "https://placehold.co/350x250/cccccc/000000?text=Consultation", // Resembles a consultation
    },
    {
      title: "Intense cleaning (2 bathrooms)",
      rating: "4.78 (2.5M)",
      price: "₹960",
      originalPrice: "₹1,038",
      imageUrl: "https://placehold.co/350x250/cccccc/000000?text=Cleaning", // Resembles cleaning service
    },
    {
      title: "Swedish stress relief massage",
      rating: "4.84 (177K)",
      price: "₹1,299",
      imageUrl: "https://placehold.co/350x250/cccccc/000000?text=Massage", // Resembles massage service
    },
  ];

  // Lift the openIndex state for the FAQ section outside the map function
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Define the toggle function for FAQ items
  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
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

      <section className="bg-gray-100 py-12 mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Most booked services</h2>
          <Slider {...settings}>
            {serviceItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex flex-grow flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* --- NEW SECTION: Most Booked Services Slider (Exact Image Match with Tailwind Only) --- */}
      <section className="py-20 bg-white"> {/* services-slider-section class removed */}
        <h2 className="text-3xl font-bold mb-8 text-black text-left px-4 md:text-left md:max-w-7xl md:mx-auto"> {/* Max-width applied directly */}
          Most booked services
        </h2>
        <div className="relative max-w-full md:max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 box-border"> {/* service-swiper-container classes */}
          <Swiper
            slidesPerView={1.1} // Show one full card and a hint of the next
            spaceBetween={16} // Gap between cards
            grabCursor={true}
            loop={true}
            centeredSlides={false} // Ensure first slide starts from the left
            navigation={{
              nextEl: '.swiper-button-next-services',
              prevEl: '.swiper-button-prev-services',
            }}
            modules={[Navigation]}
            className="w-full py-2.5 box-border" // servicesSwiper classes
            breakpoints={{
              640: { // sm breakpoint
                slidesPerView: 2.1,
                spaceBetween: 20,
              },
              768: { // md breakpoint (Desktop view from image)
                slidesPerView: 3.5, // Shows 3 full cards and a good portion of the 4th
                spaceBetween: 24,
              },
              1024: { // lg breakpoint
                slidesPerView: 4.5,
                spaceBetween: 28,
              },
              1280: { // xl breakpoint
                slidesPerView: 4.5, // Similar to 1024, adjust if more visibility is needed
                spaceBetween: 32,
              },
            }}
          >
            {serviceItems.map((service, i) => (
              <SwiperSlide key={i} className="!w-auto !h-[250px] !block !m-0 !p-0 !box-border"> {/* swiper-slide classes */}
                <div className="w-full h-full rounded-lg overflow-hidden shadow-md bg-white flex flex-col"> {/* service-card classes */}
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-[160px] object-cover" // service-image classes
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop
                      e.target.src = `https://placehold.co/350x250/cccccc/000000?text=Service`; // Generic fallback
                    }}
                  />
                  {/* Text Content Below Image */}
                  <div className="p-3.5 px-4 flex flex-col flex-grow items-start justify-start"> {/* text-content-wrapper classes */}
                    <h4 className="text-base font-semibold text-black leading-tight mb-1 line-clamp-2"> {/* service-title classes */}
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-500 flex items-center mt-1 mb-3 leading-tight"> {/* service-rating classes */}
                      <span className="text-yellow-500 mr-1">★</span>
                      {service.rating}
                    </p>
                    <div className="flex items-baseline"> {/* service-price-wrapper classes */}
                      <span className="text-lg font-bold text-black mr-2"> {/* service-price-current classes */}
                        {service.price}
                      </span>
                      {service.originalPrice && (
                        <span className="text-sm text-gray-400 line-through"> {/* service-price-original classes */}
                          {service.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev-services absolute top-1/2 left-0 transform -translate-y-1/2 ml-4 bg-white rounded-full p-3 shadow-md cursor-pointer z-10 hidden md:flex items-center justify-center transition-all duration-200 ease-in-out hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className="swiper-button-next-services absolute top-1/2 right-0 transform -translate-y-1/2 mr-4 bg-white rounded-full p-3 shadow-md cursor-pointer z-10 hidden md:flex items-center justify-center transition-all duration-200 ease-in-out hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
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
            <div className="mt-6 space-y-3 flex flex-col items-center">
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
          <form className="max-w-2xl mx-auto space-y-4 md:pl-16 md:border-l md:border-gray-300">
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

      {/* --- Original Swiper.js Experts Section (still using some inline styles for effect-coverflow specifics) --- */}
      <section className="bg-white py-12 px-4 relative w-full flex flex-col justify-center items-center overflow-hidden"> {/* expert-section classes */}
        <h3 className="text-3xl font-semibold text-center mb-6 text-black">
          Experts Ready to Help
        </h3>
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            keyboard={{
              enabled: true,
            }}
            mousewheel={{
              thresholdDelta: 70,
            }}
            spaceBetween={60}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel]}
            className="w-full pt-[50px] pb-[50px]" // mySwiper classes
          >
            {experts.map((expert, i) => (
              <SwiperSlide
                key={i}
                className={`!w-[300px] !h-[400px] shadow-lg rounded-xl flex flex-col justify-end items-start relative overflow-hidden transition-all duration-300 ease-in-out`} // Removed filter blur-sm
                style={{
                  backgroundImage: `linear-gradient(to top, #0f2027, rgba(32, 58, 67, 0), rgba(44, 83, 100, 0)), url(${expert.imageUrl})`, // linear-gradient overlay and background-image
                  backgroundSize: 'cover',
                  backgroundPosition: '50% 50%',
                }}
              >
                <span className="text-uppercase text-white bg-[#1b7402] py-1.5 px-6 rounded-r-2xl tracking-wide text-xs relative z-10" style={{backgroundColor: expert.tagColor}}> {/* swiper-slide span */}
                  {expert.type}
                </span>
                <div className="relative z-10"> {/* Container for h2 and p */}
                  <h2 className="text-white font-normal text-lg leading-tight mb-4 pt-6 px-6"> {/* swiper-slide h2 */}
                    {expert.title}
                  </h2>
                  <p className="text-white font-light flex items-center px-6 pb-9"> {/* swiper-slide p */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white mr-1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {expert.location}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <p className="text-center text-black mt-4 max-w-2xl mx-auto">
            Behind every solution is a real person who’s ready to assist you with professionalism and care.
            Meet our financial advisors, tech team, and service consultants.
          </p>
          <div className="text-center mt-4">
            <CustomButton className="bg-[#7e5ca3] hover:bg-[#6b4899]">
              Check Our Team
            </CustomButton>
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
              // Now using the single openFaqIndex state and toggleFaq function
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-4 transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)} // Call the centralized toggle function
                    className="flex justify-between items-center w-full text-left text-black font-medium text-lg"
                  >
                    {item.question}
                    <span className="text-xl">
                      {openFaqIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaqIndex === index && (
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
