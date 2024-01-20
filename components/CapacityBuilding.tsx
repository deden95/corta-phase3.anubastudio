"use client";

import IncreaseImage from '../public/assets/design/increase.png';
import Image from "next/image";

export default function CapacityBuilding(props: any) {
  const bahasa = props.onSelectLanguage;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16">
        <div className="title text-center pt-5 lg:pt-20 scroll-animation" id="peningkatanKapasitas">
          {bahasa === "EN" ? (
            <>
              Capacity Building
            </>
          ) : (
            <>
                Peningkatan Kapasitas
            </>
          )}
        </div>
        <div className="flex flex-col sm:flex-row py-10">
          <div className="w-full sm:w-1/2 p-4 lg:pt-12">
            <div className="lg:flex max-w-md rounded-lg overflow-hidden shadow-lg p-6 mb-6">
              <div className="flex items-center">
                <div className="rounded-full h-10 w-10 flex items-center justify-center bg-red-custom text-white font-bold">01</div>
              </div>
              <div className="lg:pl-5 pt-4 lg:pt-0">
                <p className="subtitle">
                  {bahasa === "EN" ? (
                    <>
                      12 schools (7 schools in Tanggamus and 5 schools in Manggarai) have held disaster preparedness school training for students.
                    </>
                  ) : (
                    <>
                        12 sekolah (7 sekolah di Tanggamus dan 5 sekolah di Manggarai) telah menyelenggarakan pelatihan sekolah siaga bencana bagi siswa.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="lg:flex max-w-md rounded-lg overflow-hidden shadow-lg p-6 my-6 bg-red-custom lg:ml-16">
              <div className="flex items-center">
                <div className="rounded-full h-10 w-10 flex items-center justify-center bg-white red-custom font-bold">02</div>
              </div>
              <div className="lg:pl-5 pt-4 lg:pt-0">
                <p className="text-white">
                  {bahasa === "EN" ? (
                    <>
                      12 schools (7 schools in Tanggamus and 5 schools in Manggarai) have held disaster preparedness school training for students.
                    </>
                  ) : (
                    <>
                        12 sekolah (7 sekolah di Tanggamus dan 5 sekolah di Manggarai) telah menyelenggarakan pelatihan sekolah siaga bencana bagi siswa.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="lg:flex max-w-md rounded-lg overflow-hidden shadow-lg p-6 my-6">
              <div className="flex items-center">
                <div className="rounded-full h-10 w-10 flex items-center justify-center bg-red-custom text-white font-bold">03</div>
              </div>
              <div className="lg:pl-5 pt-4 lg:pt-0">
                <p className="subtitle">
                  {bahasa === "EN" ? (
                    <>
                      12 schools (7 schools in Tanggamus and 5 schools in Manggarai) have held disaster preparedness school training for students.
                    </>
                  ) : (
                    <>
                        12 sekolah (7 sekolah di Tanggamus dan 5 sekolah di Manggarai) telah menyelenggarakan pelatihan sekolah siaga bencana bagi siswa.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mt-4 flex justify-end">
            <div className="inline-flex items-center">
              <Image
                src={IncreaseImage}
                alt="Increase"
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}