"use client";

import { useState, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";

import style from "./css/Scrollama.module.css";

export default function FlourishScrollama(props: any) {
  const bahasa = props.onSelectLanguage;

  const [currentStepIndex, setCurrentStepIndex] = useState(1);

  const onStepEnter = ({ data }: { data: any }) => {
    setCurrentStepIndex(data - 1);
  };

  return (
    <div className="relative z-40 bg-white pt-10" style={{ fontFamily: "trebuchet" }}>
      <div className="px-auto py-auto flex flex-col sm:flex-row">
      <div className={style.graphic}>
          <iframe
            width="100%"
            height="100%"
            className="h-full"
            scrolling="no"
            src={
              `https://public.flourish.studio/story/2161837/embed#slide-` +
              currentStepIndex
            }
          />
        </div>
        <div className="basis-1/3">
          <Scrollama onStepEnter={onStepEnter}>
            <Step data={1} key={1}>
              <div className="lg:my-96 my-10 my-10 bg-red-600 text-white rounded-md lg:p-10 lg:mx-10 p-8 mx-6">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>DISTRIBUTION OF RESPONDENTS FROM THE COMMUNITY</>
                  ) : (
                    <>SEBARAN RESPONDEN DARI MASYARAKAT</>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Respondents of the Basic Community Survey 
                      consist of 360 adults distributed across 12 
                      villages and 2 districts, namely Manggarai District 
                      with 175 individuals and Tanggamus District with 185 individuals.
                    </>
                  ) : (
                    <>
                      Responden survei dasar Masyarakat mencakup 360 orang dewasa 
                      tersebar di 12 desa dan 2 Kabupaten yaitu Kabupaten Manggarai 
                      sebanyak 175 orang dan Kabupaten Tanggamus sebanyak 185 orang.
                    </>
                  )}
                </p>
              </div>
            </Step>
            <Step data={2} key={2}>
              <div className="lg:my-96 my-10 bg-red-600 text-white rounded-md lg:p-10 lg:mx-10 p-8 mx-6">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>                   
                      DISTRIBUTION OF RESPONDENTS FROM SCHOOLS
                    </>
                  ) : (
                    <>SEBARAN RESPONDEN DARI SEKOLAH</>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Respondents of the Basic Student Survey, 
                      comprising 274 adult students, are distributed across 12 
                      schools and 2 districts, with 131 individuals in Manggarai 
                      District and 143 individuals in Tanggamus District.
                    </>
                  ) : (
                    <>
                      Responden survei dasar Siswa dan Siswi  
                      274 orang dewasa tersebar di 12 Sekolah dan 2 
                      Kabupaten yaitu Kabupaten Manggarai sebanyak 131 
                      orang dan Kabupaten Tanggamus sebanyak 143 orang.
                    </>
                  )}
                </p>
              </div>
            </Step>
            <Step data={3} key={3}>
              <div className="lg:my-96 my-10 bg-red-600 text-white rounded-md lg:p-10 lg:mx-10 p-8 mx-6">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>
                      COMMUNITY RESPONDENT PROFILE
                    </>
                  ) : (
                    <>
                      PROFIL RESPONDEN MASYARAKAT
                    </>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Total of 360 respondents (48% female & 52% male)
                      Average age of respondents is 46 years
                      47 years for males & 46 years for females
                      Average age in Manggarai & Tanggamus is 46 years
                      Average education level of respondents: Elementary School (Tanggamus) & High School (Manggarai)
                      Ethnicity
                      Manggarai: Manggarai (79%), Bima (11%), Bugis (3%), others (1%)
                      Tanggamus: Javanese (77%), Lampung (22%), Sundanese & Bantenese (1%)
                    </>
                  ) : (
                    <>
                      Total 360 responden (48% perempuan & 52% laki - laki)
                      Rata-rata usia responden 46 tahun
                      47 tahun untuk laki-laki &  46 tahun untuk perempuan
                      46 tahun di Manggarai & 46 tahun di Tanggamus 
                      Rata-rata pendidikan responden SD (Tanggamus) & SMA (Manggarai)
                      Suku
                      Manggarai: Manggarai (79%), Bima (11%), Bugis (3%), lainnya (1%)
                      Tanggamus: Jawa (77%), Lampung (22%), Sunda & Banten (1%)
                    </>
                  )}
                </p>
              </div>
            </Step>
            <Step data={4} key={4}>
              <div className="lg:my-96 my-10 bg-red-600 text-white rounded-md lg:p-10 lg:mx-10 p-8 mx-6">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>                      
                      COMMUNITY DISASTER AWARENESS
                    </>
                  ) : (
                    <>
                      PENGETAHUAN KEBENCANAAN MASYARAKAT
                    </>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      From the total respondents in both districts, awareness of the minimum threat in the village can be seen from the increase in Baseline and Endline related to knowledge about risks in the village, sources of early warning information, and actions after receiving early warnings.
                    </>
                  ) : (
                    <>
                      Dari total responden di kedua Kabupaten, Pengetahuan terhadap minimal ancaman di desa Bisa di lihat dari peningkatan Baseline dan Endline terkait Pengetahuan tentang risiko di desa, Sumber informasi peringatan dini dan tindakan setelah menerima peringatan dini
                    </>
                  )}
                </p>
              </div>
            </Step>
            <Step data={5} key={5}>
              <div className="lg:my-96 my-10 bg-red-600 text-white rounded-md lg:p-10 lg:mx-10 p-8 mx-6">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Knowledge & Actions Related to Disasters
                    </>
                  ) : (
                    <>
                      Pengetahuan & Tindakan Terkait Bencana
                    </>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      From the graph, the majority of respondents knowledge and actions related to disasters have increased.
                    </>
                  ) : (
                    <>
                      Bila dilihat dari grafik, mayoritas responden Pengetahuan dan tindakan terkait bencana meningkat.
                    </>
                  )}
                </p>
              </div>
            </Step>
            <Step data={6} key={6}>
              <div className="lg:my-96 my-10 bg-red-600 text-white rounded-md lg:p-10 lg:mx-10 p-8 mx-6">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>
                      ATTITUDE TOWARDS DISASTERS
                    </>
                  ) : (
                    <>
                      {" "}
                      SIKAP TERHADAP BENCANA
                    </>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Concern about disasters in their village
                      Baseline 90% - Endline 97%
                      Disasters can have a significant and very significant impact
                      Baseline 73% - Endline 69%
                    </>
                  ) : (
                    <>
                      {" "}
                      Khawatir terhadap bencana di desanya
                      Baseline 9o%  - Endline 97%
                      Bencana bisa berikan dampak besar & sangat besar
                      Baseline 73%  - Endline 69%
                    </>
                  )}
                </p>
              </div>
            </Step>
            <Step data={7} key={7}>
              <div className="lg:my-96 my-10 bg-red-600 text-white rounded-md lg:p-10 lg:mx-10 p-8 mx-6">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>
                      MOST EFFECTIVE COMMUNICATION CHANNEL
                    </>
                  ) : (
                    <>
                      SALURAN KOMUNIKASI PALING EFEKTIF
                    </>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                      <>
                        Community engagement methods and trust in the Red Cross (PMI) increased from 14% to 78%.
                      </>
                    ) : (
                      <>
                        {" "}
                        Metode Keterlibatan Masyarakat dan kepercayaan terhadap PMI meningkat dari 14% menjadi 78%
                      </>
                    )}                 
                </p>
              </div>
            </Step>
            <Step data={8} key={8}>
              <div className="lg:my-96 my-10 bg-red-600 text-white rounded-md lg:p-10 lg:mx-10 p-8 mx-6">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>
                      What do respondents do when they get warning info early?
                    </>
                  ) : (
                    <>
                      {" "}
                      Apa yang responden lakukan ketika mendapatkan info
                      peringatan dini?
                    </>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Only a few respondents are aware of the regulations
                      disaster management in their village, namely eight people
                      (2%) of all respondents, four people (3%) of respondents
                      women, four people (2%) of the male respondents, three
                      people (2%) among respondents in Manggarai, and five
                      people (2%) on respondents in Tanggamus.
                    </>
                  ) : (
                    <>
                      {" "}
                      Hanya sedikit responden yang mengetahui adanya peraturan
                      penanggulangan bencana di desa mereka, yaitu delapan orang
                      (2%) pada semua responden, empat orang (3%) padaresponden
                      perempuan, empat orang (2%) pada responden laki-laki, tiga
                      orang (2%) di kalangan responden di Manggarai, dan lima
                      orang (2%) pada responden di Tanggamus.
                    </>
                  )}
                </p>
              </div>
            </Step>
            {/* <Step data={9} key={9}>
              <div className="lg:my-96 my-10 bg-red-600 text-white rounded-md lg:p-10 lg:mx-10 p-8 mx-6">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>
                      What do respondents do when they get warning info early?
                      (per district)
                    </>
                  ) : (
                    <>
                      {" "}
                      Apa yang responden lakukan ketika mendapatkan info
                      peringatan dini?(per kabupaten)
                    </>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Only a few respondents are aware of the regulations
                      disaster management in their village, namely eight people
                      (2%) of all respondents, four people (3%) of respondents
                      women, four people (2%) of the male respondents, three
                      people (2%) among respondents in Manggarai, and five
                      people (2%) on respondents in Tanggamus.
                    </>
                  ) : (
                    <>
                      {" "}
                      Hanya sedikit responden yang mengetahui adanya peraturan
                      penanggulangan bencana di desa mereka, yaitu delapan orang
                      (2%) pada semua responden, empat orang (3%) padaresponden
                      perempuan, empat orang (2%) pada responden laki-laki, tiga
                      orang (2%) di kalangan responden di Manggarai, dan lima
                      orang (2%) pada responden di Tanggamus.
                    </>
                  )}
                </p>
              </div>
            </Step> */}
          </Scrollama>
        </div>

      </div>
    </div>
  );
}
