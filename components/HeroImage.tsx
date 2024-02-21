import { useState, useEffect } from "react";
import style from "./css/Header.module.css";
import Image from "next/image";
import LogoPMI from "../public/images/LogoPMI-large.png";
import Link from 'next/link'

interface Type {
  bg: any;
}
export default function HeroImage(props : Type) {
  const [bahasa, setBahasa] = useState<String>("");
  return (
    <div>
      {props.bg === 1 ? <div className={style.heroimage}></div> : null }
      {props.bg === 2 ? <div className={style.heroimage2}></div> : null }
      {props.bg === 3 ? <div className={style.heroimage3}></div> : null }
      
      <Image
        src={LogoPMI}
        alt="Logo"
        width="300"
        className={style.herologo}
      />
      <div className={style.herotext}>
        <h1 style={{ fontFamily: "helveticaNeue" }}>
          {bahasa === "EN" ? (
            <>
              Disaster Preparedness Community Program Through Sustainable and Inclusive Disaster Risk Reduction
            </>
          ) : (
            <>
                Program Masyarakat Siaga Bencana Melalui Pengurangan Risiko Bencana Berkelanjutan dan Inklusif
            </>
          )}
        </h1>
      </div>
      <Link href="?modal=true&url=https://www.youtube.com/embed/c1vQhB34h9U?si=aJLIW_K-QhDmznhK?controls=0">
        <button className={`${style.btnVideo} inline-flex items-center bg-[#facc15] hover:bg-[#eab308] text-sm text-white py-3 px-5 rounded-full mt-8`}>
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
      </Link>

      <div className={style.heroCard}>
        <Link href="https://corta-phase2.anubastudio.com/">
          <div className="px-6 py-4 bg-white rounded-xl lg:mr-6 mr-2 cursor-pointer transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">
            <div className="text-sm font-bold">Pencapaian</div>
            <p className="text-gray-700 font-bold lg:text-xl text-sm">
              2020-2021
            </p>
          </div>
        </Link>

        <Link href="/2022-2023">
          <div className="px-6 py-4 bg-[#facc15] rounded-xl lg:mr-6 mr-2 cursor-pointer transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">
            <div className="text-sm font-bold">Pencapaian</div>
            <p className="text-red-700 font-bold lg:text-xl text-sm">
              2022-2023
            </p>
          </div>
        </Link>
        
        <Link href="https://kisahsuksescorta.pmi.or.id/">
          <div className="px-6 py-4 bg-white rounded-xl lg:mr-6 mr-2 cursor-pointer transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">
            <div className="text-sm font-bold">Cerita</div>
            <p className="text-gray-700 font-bold lg:text-xl text-sm">
              Sukses
            </p>
          </div>
        </Link>     
      </div>
    </div>
  );
}