"use client";

import HomeImage from '../public/assets/design/home.png';
import Image from "next/image";

export default function Home(props: any) {
  const bahasa = props.onSelectLanguage;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16 py-8 mt-16">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 p-4 lg:pt-12">
            <h2 className="home__title mb-2 lg:mb-4">
              <span className="black-custom">
                {bahasa === "EN" ? (
                  <>
                    Disaster Preparedness Community Program through Reduction
                  </>
                ) : (
                  <>
                     Program Masyarakat Siaga Bencana Melalui Pengurangan
                  </>
                )}
              </span>
              <span className="red-custom ml-2">
                {bahasa === "EN" ? (
                  <>
                    Sustainable and Inclusive Disaster Risk
                  </>
                ) : (
                  <>
                     Risiko Bencana Berkelanjutan dan Inklusif
                  </>
                )}
              </span>
            </h2>
            <p className="subtitle">
              {bahasa === "EN" ? (
                  <>
                    Since January 2020, the Indonesian Red Cross (PMI) together with the American Red Cross have continued the Community Based Disaster Risk Reduction Program.
                  </>
                ) : (
                  <>
                     Sejak Januari 2020, Palang Merah Indonesia (PMI) bersama Palang Merah Amerika melanjutkan Program Pengurangan Risiko Bencana Berbasis Masyarakat (Community Based Disaster Risk Reduction)
                  </>
                )}
            </p>
            <button className="inline-flex items-center bg-red-custom__shadow text-sm text-white py-3 px-5 rounded-full mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
              </svg>
              <span className="pl-1">
                {bahasa === "EN" ? (
                  <>
                    Watch Video
                  </>
                ) : (
                  <>
                     Lihat Video
                  </>
                )}</span>
            </button>
          </div>

          <div className="w-full sm:w-1/2 mt-4 lg:mt-0">
            <Image
              src={HomeImage}
              alt="Home"
              width={550}
              className="lg:absolute lg:right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}