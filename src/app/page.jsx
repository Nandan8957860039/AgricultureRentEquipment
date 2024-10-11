import Link from 'next/link';
import React from 'react'

const Home = () => {



  return (
    <div>
      <>
        {/* ========== HEADER ========== */}

        <>
          {/* Hello world -<!-- Hero */}
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
              <div>
                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                  <span className="text-blue-600">Agriculture Rental Equipments</span>
                </h1>
                <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, quasi.
                </p>
                {/* Buttons */}
                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                  <Link
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="/browse-equipment"
                  >
                    Get started
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                  <a
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="relative ms-4">
                <img
                  className="w-full rounded-md"
                  src="data:image/jpeg;base64,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"
                  alt="Hero Image"
                />
                <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0" />
                {/* SVG*/}
                <div className="absolute bottom-0 start-0">
                  <svg
                    className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900"
                    width={630}
                    height={451}
                    viewBox="0 0 630 451"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={531} y={352} width={99} height={99} fill="currentColor" />
                    <rect x={140} y={352} width={106} height={99} fill="currentColor" />
                    <rect x={482} y={402} width={64} height={49} fill="currentColor" />
                    <rect x={433} y={402} width={63} height={49} fill="currentColor" />
                    <rect x={384} y={352} width={49} height={50} fill="currentColor" />
                    <rect x={531} y={328} width={50} height={50} fill="currentColor" />
                    <rect x={99} y={303} width={49} height={58} fill="currentColor" />
                    <rect x={99} y={352} width={49} height={50} fill="currentColor" />
                    <rect x={99} y={392} width={49} height={59} fill="currentColor" />
                    <rect x={44} y={402} width={66} height={49} fill="currentColor" />
                    <rect x={234} y={402} width={62} height={49} fill="currentColor" />
                    <rect x={334} y={303} width={50} height={49} fill="currentColor" />
                    <rect x={581} width={49} height={49} fill="currentColor" />
                    <rect x={581} width={49} height={64} fill="currentColor" />
                    <rect x={482} y={123} width={49} height={49} fill="currentColor" />
                    <rect x={507} y={124} width={49} height={24} fill="currentColor" />
                    <rect x={531} y={49} width={99} height={99} fill="currentColor" />
                  </svg>
                </div>
                {/* End SVG*/}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Hero */}
        </>


        {/* ========== END HEADER ========== */}
      </><>
        {/* ========== FOOTER ========== */}
        <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
            <div className="col-span-full hidden lg:col-span-1 lg:block">
              <a
                className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
                href="#"
                aria-label="Brand"
              >
                Agriculture equipment Brand
              </a>
              <p className="mt-3 text-xs sm:text-sm background-white text-gray-600 dark:text-neutral-400">
                © 2024 legal copyright
              </p>
            </div>
            {/* End Col */}
            <div>
              <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
                Product
              </h4>
              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Pricing
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Change log
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Docs
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Download
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
            <div>
              <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
                Company
              </h4>
              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    About us
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    blog
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Careers
                  </a>{" "}
                  <span className="inline text-blue-600 dark:text-blue-500">
                    — We're hiring
                  </span>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Customers
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Newsroom
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Sitemap
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
            <div>
              <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
                Resources
              </h4>
              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Community
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Help &amp; Support
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    eBook
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    What's New
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Status
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
            <div>
              <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
                equipmental-Developers
              </h4>
              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Api-agricultural Developers
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Status
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    GitHub
                  </a>{" "}
                  <span className="inline text-blue-600 dark:text-blue-500">
                    — New
                  </span>
                </p>
              </div>
              <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
                Industries
              </h4>
              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Financial Services
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Education
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          <div className="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
            <div className="sm:flex sm:justify-between sm:items-center">
              <div className="flex flex-wrap items-center gap-3">
                {/* Language Dropdown */}
                <div className="hs-dropdown [--placement:top-left] relative inline-flex">
                  <button
                    id="hs-footer-language-dropdown"
                    type="button"
                    className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    <svg
                      className="shrink-0 size-3 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-us1"
                      viewBox="0 0 512 512"
                    >
                      <g fillRule="evenodd">
                        <g strokeWidth="1pt">
                          <path
                            fill="#bd3d44"
                            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                        </g>
                        <path
                          fill="#192f5d"
                          d="M0 0h98.8v70H0z"
                          transform="scale(3.9385)"
                        />
                        <path
                          fill="#fff"
                          d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                          transform="scale(3.9385)"
                        />
                      </g>
                    </svg>
                    English (US)
                    <svg
                      className="hs-dropdown-open:rotate-180 shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  <div
                    className="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-footer-language-dropdown"
                  >
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-3.5 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-us"
                        viewBox="0 0 512 512"
                      >
                        <g fillRule="evenodd">
                          <g strokeWidth="1pt">
                            <path
                              fill="#bd3d44"
                              d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                            <path
                              fill="#fff"
                              d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                          </g>
                          <path
                            fill="#192f5d"
                            d="M0 0h98.8v70H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                            transform="scale(3.9385)"
                          />
                        </g>
                      </svg>
                      English (US)
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-3 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-de"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                        <path d="M0 0h512v170.7H0z" />
                        <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                      </svg>
                      Deutsch
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-3 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-dk"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#c8102e" d="M0 0h512.1v512H0z" />
                        <path fill="#fff" d="M144 0h73.1v512H144z" />
                        <path fill="#fff" d="M0 219.4h512.1v73.2H0z" />
                      </svg>
                      Dansk
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-3 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-it"
                        viewBox="0 0 512 512"
                      >
                        <g fillRule="evenodd" strokeWidth="1pt">
                          <path fill="#fff" d="M0 0h512v512H0z" />
                          <path fill="#009246" d="M0 0h170.7v512H0z" />
                          <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                        </g>
                      </svg>
                      Italiano
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-3 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        id="flag-icon-css-cn"
                        viewBox="0 0 512 512"
                      >
                        <defs>
                          <path
                            id="a"
                            fill="#ffde00"
                            d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                          />
                        </defs>
                        <path fill="#de2910" d="M0 0h512v512H0z" />
                        <use
                          width={30}
                          height={20}
                          transform="matrix(76.8 0 0 76.8 128 128)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-121 142.6 -47) scale(25.5827)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-98.1 198 -82) scale(25.6)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-74 272.4 -114) scale(25.6137)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="matrix(16 -19.968 19.968 16 256 230.4)"
                          xlinkHref="#a"
                        />
                      </svg>
                      中文 (繁體)
                    </a>
                  </div>
                </div>
                {/* End Language Dropdown */}
                <div className="space-x-4 text-sm">
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Terms
                  </a>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Privacy
                  </a>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Status
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center gap-3">
                <div className="mt-3 sm:hidden">
                  <a
                    className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-black"
                    href="#"
                    aria-label="Brand"
                  >
                    Brand
                  </a>
                  <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
                    © 2024 Preline Labs.
                  </p>
                </div>
                {/* Social Brands */}
                <div className="space-x-4">
                  <a
                    className="inline-block text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a
                    className="inline-block text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                  <a
                    className="inline-block text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                    </svg>
                  </a>
                </div>
                {/* End Social Brands */}
              </div>
              {/* End Col */}
            </div>
          </div>
        </footer>
        {/* ========== END FOOTER ========== */}
      </>

      +
    </div>

  )
}

export default Home;