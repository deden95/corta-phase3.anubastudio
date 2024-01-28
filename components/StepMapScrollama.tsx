import Image from "next/image";
import { useEffect, useState } from "react";
import { Parallax, Background } from "react-parallax";
import { Scrollama, Step } from "react-scrollama";
import imgResikoBanjirTanggamus from "../public/images/banjirsemaka1.jpg";
import imgManggarai from "../public/images/gee-mgr.jpg";
import imgTanggamus from "../public/images/gee-tgm.jpg";
import imgDesaDampinganManggarai from "../public/images/manggarai-keg01.jpg";
import imgResikoBanjirManggarai from "../public/images/mgr-bnj.jpg";
import imgProvLampung from "../public/images/provlampung.jpg";
import imgProvNTT from "../public/images/ra-ntt.jpg";
import imgDesaDampinganTanggamus from "../public/images/tgm-des.jpeg";
import layerMap from "./LayerMap";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGVkZW45NSIsImEiOiJjbHI5MWpreGowMWl0MmpvMzkyZnBqem10In0.Lu4yqc9FAwHTBX7CjkoI2w";

export default function StepMapScrollama(props: any) {
  const bahasa = props.onSelectLanguage;
  const [Map, setMap] = useState();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/deden95/clri6260z00mm01r2cdh7bsg9",
      interactive: false,
      center: { lon: 0.0, lat: 0.0 },
      zoom: 1.0,
      pitch: 0.0,
      bearing: 0.0,
    });
    setMap(map);
  }, []);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }: { data: any }) => {
    setCurrentStepIndex(data);
  };

  useEffect(() => {
    if (currentStepIndex) {
      layerMap(Map, currentStepIndex);
    }
  }, [setMap, Map, currentStepIndex]);
  return (
    <>
      <div
        className="relative z-0 bg-white"
        style={{ fontFamily: "trebuchet" }}
      >
        <div className="relative bg-white w-full flex justify-center ">
          <div className="w-full items-center">
            <p className="text-center py-10">
              {bahasa === "EN" ? (
                <>Scroll to continue</>
              ) : (
                <>Scroll untuk melanjutkan</>
              )}
            </p>
          </div>
        </div>
      </div>
      <div id="map" className="h-screen w-screen top-0 fixed -z-10" />
      <div
        className="pt-3 pb-0 relative mx-auto "
        style={{ fontFamily: "trebuchet" }}
      >
        <div className="sticky top-24 -z-10">
          <div className=" h-full w-full">
            {currentStepIndex === 3 ? (
              <>
                <div className="h-fit w-fit mt-80  mx-10 p-2 flex bg-white rounded-md flex-col">
                  <div className="truncate px-1 text-xs md:text-md xl:text-md">
                    {bahasa === "EN" ? (
                      <>Flood Risk</>
                    ) : (
                      <> Indeks Risiko Banjir</>
                    )}
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-100" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.082594
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-200" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.214227
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-300" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.325212
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-400" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.449102
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-500" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.658167
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            {currentStepIndex === 4 ? (
              <>
                <div className="h-fit w-fit mt-80 mx-10 p-2 flex bg-white rounded-md flex-col lg:ml-auto">
                  <div className="truncate px-1 text-xs md:text-md xl:text-md">
                    {bahasa === "EN" ? <>Population</> : <>Jumlah Penduduk</>}
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-penduduk-100" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      1277
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-penduduk-200" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      1565
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-penduduk-300" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      1851
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-penduduk-400" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      1954
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-penduduk-500" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      2492
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-penduduk-600" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      2776
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-penduduk-700" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      3581
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {currentStepIndex === 7 ? (
              <>
                <div className="h-fit w-fit mt-80  mx-10 p-2 flex bg-white rounded-md flex-col">
                  <div className="truncate px-1 text-xs md:text-md xl:text-md">
                    {bahasa === "EN" ? (
                      <>Flood Risk</>
                    ) : (
                      <> Indeks Risiko Banjir</>
                    )}
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-100" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.072555
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-200" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.193481
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-300" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.319243
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-400" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.452261
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-500" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.61672
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {currentStepIndex === 8 ? (
              <div className="h-fit w-fit mt-80  mx-10 p-2 flex bg-white rounded-md flex-col lg:ml-auto">
                <div className="truncate px-1 text-xs md:text-md xl:text-md">
                  {bahasa === "EN" ? <>Population</> : <>Jumlah Penduduk</>}
                </div>
                <div className="flex content-center py-2">
                  <div className=" w-5 h-5 bg-penduduk-100" />
                  <div className="truncate px-1 text-xs md:text-md xl:text-md">
                    1125
                  </div>
                </div>
                <div className="flex content-center py-2">
                  <div className=" w-5 h-5 bg-penduduk-200" />
                  <div className="truncate px-1 text-xs md:text-md xl:text-md">
                    2104
                  </div>
                </div>
                <div className="flex content-center py-2">
                  <div className=" w-5 h-5 bg-penduduk-300" />
                  <div className="truncate px-1 text-xs md:text-md xl:text-md">
                    2495
                  </div>
                </div>
                <div className="flex content-center py-2">
                  <div className=" w-5 h-5 bg-penduduk-400" />
                  <div className="truncate px-1 text-xs md:text-md xl:text-md">
                    2618
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={1} key={1}>
            <div className="my-96 lg:bg-white/100 bg-white/50 rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 lg:mx-14 mx-4 mb-3.5 lg:ml-auto">
              <h3 className="font-bold uppercase text-justify mb-2 ">
                {bahasa === "EN" ? (
                  <>Lampung province</>
                ) : (
                  <> Provinsi Lampung</>
                )}
              </h3>
              <Image 
                src={imgProvLampung} 
                className="w-full" 
                alt=""
              />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://success-corta.anubastudio.com/public/images/media/17063851382024-01-28_025156.jpg ">
                  {bahasa === "EN" ? (
                    <>Lampung province</>
                  ) : (
                    <>Provinsi Lampung</>
                  )}
                </a>
              </p>
              <p className="text-justify">
                {bahasa === "EN" ? (
                  <>                    
                  The Province of Lampung has an area of 33,553.55 square kilometers with a population of 9,176,546 people and a 
                  population density of 270 people per square kilometer in the year 2022. 
                  This figure has increased compared to the 2010 Population Census data, 
                  which recorded a population density of 220 people per square kilometer for the 
                  Province of Lampung and 192 people per square kilometer based on the 2000 Population Census.
                  </>
                ) : (
                  <>
                    Wilayah Provinsi Lampung memiliki luas sebesar 33.553,55 kilometer persegi dengan jumlah penduduk 9.176.546 
                    jiwa dan kepadatan penduduk 270 jiwa per kilometer persegi pada tahun 2022. 
                    Angka ini meningkat berdasarkan data Sensus Penduduk 2010 yang mencatat kepadatan penduduk Provinsi 
                    Lampung sebanyak 220 jiwa per kilometer persegi dan 192 jiwa per kilometer persegi berdasarkan Sensus Penduduk 2000.
                  </>
                )}
              </p>
            </div>
          </Step>
          <Step data={2} key={2}>
            <div className="my-96 lg:bg-white/100 bg-white/50 rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 lg:mx-14 mx-4 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 ">
                {bahasa === "EN" ? (
                  <>TANGGAMUS District</>
                ) : (
                  <>Kabupaten TANGGAMUS</>
                )}
              </h3>
              <Image 
                src={imgTanggamus} 
                className="w-full" 
                alt=""
              />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://success-corta.anubastudio.com/public/images/media/1706384843IMG_20230306_095559.jpg">
                  {bahasa === "EN" ? (
                    <>Google Earth Engine Alluvionne analysis</>
                  ) : (
                    <> Analisis Google Earth Engine Alluvionne</>
                  )}
                </a>
              </p>
              <p className="text-justify ">
                {bahasa === "EN" ? (
                  <>
                   The Regency of Tanggamus covers an area of 4,654.98 square kilometers and has a 
                   population of 652,898 people (2022) with a population density of 140 people per square kilometer. 
                   The Regional Disaster Management Agency (BPBD) of Tanggamus Regency states that there are 12 districts in this Land of 
                   Begawi Jejama that fall into the category of flood and landslide-prone areas. This is due to the regency's geographical 
                   location in hilly terrain, coupled with large-sized rivers.
                  </>
                ) : (
                  <>
                    {" "}
                    Kabupaten Tanggamus ini memiliki luas wilayah 4.654,98 Km² dan berpenduduk sebanyak 652.898 jiwa (2022) dengan kepadatan 
                    penduduk 140 jiwa/km². Badan Penanggulangan Bencana Daerah (BPBD) Kabupaten Tanggamus menyatakan ada 12 kecamatan di Bumi 
                    Begawi Jejama ini yang masuk dalam katagori rawan bencana banjir dan tanah longsor.Hal ini disebabkan oleh lokasi geografis 
                    kabupaten yang berada diwilayah perbukitan disertai sungai-sungai yang berukuran besar.
                  </>
                )}
              </p>
            </div>
          </Step>
          <Step data={3} key={3}>
            <div className="my-96 lg:bg-white/100 bg-white/50 rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 lg:mx-14 mx-4 mb-3.5 lg:ml-auto">
              <h3 className="font-bold uppercase text-justify mb-2 ">
                {bahasa === "EN" ? <>Flood Risk</> : <> Risiko Banjir</>}
              </h3>
              <Image 
                src={imgResikoBanjirTanggamus} 
                className="w-full" 
                alt=""
              />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://inarisk.bnpb.go.id/pdf/Buku%20RBI_Final_low.pdf">
                  {bahasa === "EN" ? <>RBI BNPB</> : <>RBI BNPB</>}
                </a>
              </p>
              <p className="text-justify ">
                {bahasa === "EN" ? (
                  <>
                    Based on BNPB inaRISK risk assessment, Tanggamus Regency
                    has a disaster risk index with a value of 0.083 - 0.658,
                    namely low to high.
                  </>
                ) : (
                  <>
                    Berdasarkan kajian risiko inaRISK BNPB, Kabupaten Tanggamus
                    memiliki indeks risiko bencana dengan nilai 0.083 - 0.658
                    yaitu rendah sampai tinggi.
                  </>
                )}
              </p>
            </div>
          </Step>
          <Step data={4} key={4}>
            <div className="my-96 lg:bg-white/100 bg-white/50 rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 lg:mx-14 mx-4 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 ">
                {bahasa === "EN" ? (
                  <>Assisted Village in Tanggamus . district</>
                ) : (
                  <> Desa Dampingan di kabupaten Tanggamus</>
                )}
              </h3>
              <Image 
                src={imgDesaDampinganTanggamus} 
                className="w-full" 
                alt=""
              />
              <p className="text-justify ">
                {bahasa === "EN" ? (
                  <>
                    The American Red Cross and PMI implemented this program in
                    Semaka District, Tanggamus Regency with reference to agreed
                    criteria for village selection related to potential elements
                    of the district-level PMI branch that are for carry out
                    program coordination and implementation. However, The
                    increase in PMI branch office capacity remains a main
                    component to improve institutional readiness.
                  </>
                ) : (
                  <>
                    {" "}
                    Palang Merah Amerika dan PMI mengimplementasikan program ini
                    di Kecamatan Semaka, Kabupaten Tanggamus dengan merujuk pada
                    kriteria yang disepakati untuk pemilihan desa terkait dengan
                    unsur-unsur potensi cabang PMI tingkat kabupaten yang untuk
                    menjalankan koordinasi dan implementasi program. Namun
                    demikian, peningkatan kapasitas kantor cabang PMI ini tetap
                    menjadi komponen utama untuk meningkatkan kesiapan
                    kelembagaan.
                  </>
                )}
              </p>
              <iframe
                className="flourish-embed flourish-table"
                width="100%"
                height="500"
                scrolling="yes"
                src={`https://public.flourish.studio/visualisation/3919568/embed`}
              />
            </div>
          </Step>
          <Step data={5} key={5}>
            <div className="my-96 lg:bg-white/100 bg-white/50 rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 lg:mx-14 mx-4 mb-3.5 lg:ml-auto">
              <h3 className="font-bold uppercase text-justify mb-2 ">
                {bahasa === "EN" ? (
                  <>East Nusa Tenggara (NTT) Province</>
                ) : (
                  <> Provinsi Nusa Tenggara Timur (NTT)</>
                )}
              </h3>
              <Image 
                src={imgProvNTT} 
                className="w-full" 
                alt=""
              />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://localisesdgs-indonesia.org/profil-tpb/profil-daerah/17">
                  {bahasa === "EN" ? (
                    <>NTT Regional Profile</>
                  ) : (
                    <> Profil Daerah NTT</>
                  )}
                </a>
              </p>
              <p className="text-justify ">
                {bahasa === "EN" ? (
                  <>
                    The East Nusa Tenggara (NTT) region consists of 12 districts/cities. 
                    The administrative division process in 2019 resulted in the NTT province 
                    being divided into 21 districts and 1 city, namely Kupang City, 
                    serving as the provincial capital located on the western part of Timor Island. 
                    This province, known for its endemic Komodo wildlife, has a land area of 47,931.54 km². 
                    According to the 2020 BPS data, the population of the NTT Province reached 5,466,285 people 
                    with a population density of 114 people per km². When examined by gender, the female population 
                    is higher than the male population, especially with a gender ratio in the NTT Province in 2020 at 98.19 percent.
                  </>
                ) : (
                  <>
                    Wilayah NTT terdiri atas 12 daerah Kabupaten/Kota. Proses pemekaran wilayah
                     yang terjadi menjadikan wilayah administratif Provinsi NTT pada tahun 2019 
                     terbagi atas 21 Kabupaten dan 1 Kota yaitu Kota Kupang, sebagai ibukota provinsi
                     NTT yang berada bagian barat Pulau Timor. Provinsi dengan satwa endemik Komodo ini 
                     memiliki luas wilayah darat 47.931,54 km2. Berdasarkan data BPS tahun 2020, jumlah 
                     populasi di Provinsi NTT mencapai 5.466.285 jiwa dengan kepadatan penduduk sebesar 114 jiwa per km2.
                     Jika dilihat berdasarkan jenis kelamin, penduduk dengan jenis kelamin perempuan lebih tinggi daripada laki-laki
                     terutama dengan rasio jenis kelamin di Provinsi NTT tahun 2020 sebesar 98,19 perasen.
                  </>
                )}
              </p>
            </div>
          </Step>
          <Step data={6} key={6}>
            <div className="my-96 lg:bg-white/100 bg-white/50 rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 lg:mx-14 mx-4 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 ">
                {bahasa === "EN" ? (
                  <>Manggarai Regency</>
                ) : (
                  <> Kabupaten Manggarai</>
                )}
              </h3>
              <Image 
                src={imgManggarai} 
                className="w-full" 
                alt=""
              />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://kimyrae1.users.earthengine.app/view/banjir-kabupaten-manggarai-tahun-2021/">
                  {bahasa === "EN" ? (
                    <>Google Earth Engine Alluvionne analysis</>
                  ) : (
                    <>Analisis Google Earth Engine Alluvionne</>
                  )}
                </a>
              </p>
              <p className="text-justify ">
                {bahasa === "EN" ? (
                  <>
                    Manggarai Regency is a highland area which dominated by the
                    shape of the undulating land surface with a land slope of
                    40% (mountains) which is 38.36% and the slope of the land is
                    between 15% -40% which is 55.41% of the area of Manggarai
                    Regency. Manggarai Regency has 12 rivers that have the
                    potential to flood, from some of these rivers has caused
                    flooding and caused damage to facilities community and other
                    public facilities with 22 incidents on year 2019.
                  </>
                ) : (
                  <>
                    {" "}
                    The Manggarai Regency is a highland area characterized by undulating landforms, 
                    with land slopes ≥40% (mountains) covering an area of 38.36% and land slopes between 15%-40% covering 
                    55.41% of the total area of the Manggarai Regency, which is 2,096.44 km². 
                    The population of the regency is 318,115 with a population density of 152 per square kilometer. 
                    Manggarai Regency has 12 rivers that are prone to flooding, and some of these rivers have caused floods, 
                    resulting in damage to community facilities and other public amenities with 22 incidents in the year 2019.
                  </>
                )}
              </p>
            </div>
          </Step>
          <Step data={7} key={7}>
            <div className="my-96 lg:bg-white/100 bg-white/50 rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 lg:mx-14 mx-4 mb-3.5 lg:ml-auto">
              <h3 className="font-bold uppercase text-justify mb-2 ">
                {bahasa === "EN" ? <>Flood Risk</> : <>Risiko Banjir</>}
              </h3>
              <Image 
                src={imgResikoBanjirManggarai} 
                className="w-full" 
                alt=""
              />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://inarisk.bnpb.go.id/pdf/Buku%20RBI_Final_low.pdf">
                  {bahasa === "EN" ? <>RBI BNPB</> : <>RBI BNPB</>}
                </a>
              </p>
              <p className="text-justify ">
                {bahasa === "EN" ? (
                  <>
                    Based on BNPB inaRISK risk assessment, Manggarai district
                    has a risk index with a value of 0.072 - 0.616 which is low
                    to moderate.
                  </>
                ) : (
                  <>
                    {" "}
                    Berdasarkan kajian risiko inaRISK BNPB, kabupaten Manggarai
                    memiliki indeks risiko dengan nilai 0.072 - 0.616 yaitu
                    rendah sampai sedang.
                  </>
                )}
              </p>
            </div>
          </Step>
          <Step data={8} key={8}>
            <div className="my-96 lg:bg-white/100 bg-white/50 rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 lg:mx-14 mx-4 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 ">
                {bahasa === "EN" ? (
                  <>Assisted Village in Manggarai kabupaten district</>
                ) : (
                  <>Desa Dampingan di kabupaten Manggarai</>
                )}
              </h3>
              <Image 
                src={imgDesaDampinganManggarai} 
                className="w-full" 
                alt=""
              />
              <p className="text-justify ">
                {bahasa === "EN" ? (
                  <>
                    The American Red Cross and PMI implemented this program in
                    five villages in Reok District, Reok Regency. Apart from the
                    flood residents in this region also face high risk exposure
                    against extreme weather, droughts, earthquakes, landslides,
                    floods, plagues and plagues, tsunamis and storms and
                    abrasion extreme coast (National Agency for Disaster
                    Management, 2015).
                  </>
                ) : (
                  <>
                    Palang Merah Amerika dan PMI mengimplementasikan program ini
                    di lima desa di Kecamatan Reok, Kabupaten Reok. Selain
                    banjir penduduk di wilayah ini juga menghadapi paparan
                    risiko tinggi terhadap cuaca ekstrem, kekeringan, gempa
                    bumi, tanah longsor, banjir, wabah penyakit dan wabah,
                    tsunami serta badai dan abrasi pantai yang ekstrem (Badan
                    Nasional Penanggulangan Bencana, 2015).
                  </>
                )}
              </p>
              <iframe
                className="flourish-embed flourish-table"
                width="100%"
                height="400"
                scrolling="no"
                src={`https://public.flourish.studio/visualisation/8235044/embed`}
              />
            </div>
          </Step>
        </Scrollama>
      </div>
    </>
  );
}