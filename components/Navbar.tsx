"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import LogoPMI from "../public/images/LogoPMI.jpg";
import IndonesiaFlag from "../public/assets/flag/indonesia.png";
import USFlag from "../public/assets/flag/united-states.png";
import Link from "next/link";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'

const people = [
  {
    id: 1,
    name: 'Indonesia',
    avatar: IndonesiaFlag,
    value: 'ID'
  },
  {
    id: 2,
    name: 'English',
    avatar: USFlag,
    value: 'EN'
  },
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar(props: any) {
  const [active, setActive] = useState(false);
  const [translate, setTranslate] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname()

  const handleClick = () => {
    setActive(!active);
  };

  const handleTranslate = (data: any) => {
    setSelected(data);
    setTranslate(data.value);
    props.onSelectLanguage(data.value);
    sessionStorage.setItem("translate", data.value);
  };

  useEffect(() => {
    const getData = sessionStorage.getItem("translate");
    setTranslate(getData!);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const [selected, setSelected] = useState(people[0])
  return (
    <>
      <nav
        className="flex items-center w-full custom-navbar fixed z-50 flex-wrap p-2 top-0 left-0 right-0 lg:px-16"
      >
        <Link href="/">
          <Image
            src={LogoPMI}
            alt="Logo"
            width="200"
            height="45"
            className="inline-flex items-center p-2 mr-4"
          />
        </Link>
        <button
          className={`inline-flex p-3 rounded lg:hidden ml-auto outline-none ${
            scrolled ? 'bg-white text-red-600': 'bg-red-600 hover:bg-red-600 text-white hover:text-white'}`}
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div 
            className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
          >
            <Link 
              href="/"
              className={`${pathname === '/' ? 'font-bold' : ''}`}
            >
                {translate === "EN" ? <>Home</> : <> Beranda</>}
            </Link>

            {pathname != '/success-story' && (
              <Link 
                href="#projectBackground"
                className={`${pathname === '/projectBackground' ? 'font-bold' : ''}`}
              >
                  {translate === "EN" ? <>Project Background</> : <> Latar Belakang</>}
              </Link>
            )}

            {pathname != '/success-story' && (
            <Link 
              href="#peningkatanKapasitas"
              className={`${pathname === '/peningkatanKapasitas' ? 'font-bold' : ''}`}
            >
                {translate === "EN" ? (
                  <>Capacity Building</>
                ) : (
                  <> Peningkatan Kapasitas</>
                )}
            </Link>
            )}

            {pathname != '/success-story' && (
            <Link 
              href="#harapanKedepannya"
              className={`${pathname === '/harapanKedepannya' ? 'font-bold' : ''}`}
            >
                {translate === "EN" ? <>Looking Forward</> : <> Harapan Kedepan</>}
            </Link>
            )}

            <Link 
              href="https://success-corta.anubastudio.com/"
              className={`${pathname === '/' ? 'font-bold' : ''}`}
            >
                {translate === "EN" ? <>Success Story</> : <> Kisah Sukses</>}
            </Link>

            <Listbox 
              value={selected} 
              onChange={handleTranslate}>
              {({ open }) => (
                <>
                  <div className="relative m-3">
                    <Listbox.Button 
                      className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      <span className="flex items-center">
                      <Image 
                        src={selected.avatar} 
                        alt="" 
                        className="flex-shrink-0 rounded-full" 
                        width="20" 
                        height="20" 
                      />
                        <span 
                          className="ml-3 block truncate">
                            {selected.name}
                        </span> 
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon 
                          className="h-5 w-5 text-gray-400" 
                          aria-hidden="true" 
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {people.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-3 pr-9'
                              )
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                <Image 
                                  src={person.avatar} 
                                  alt="" 
                                  className="flex-shrink-0 rounded-full" 
                                  width="20" 
                                  height="20" 
                                />
                                  <span
                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                  >
                                    {person.name}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 right-0 flex items-center pr-4'
                                    )}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
        </div>
      </nav>
    </>
  );
}