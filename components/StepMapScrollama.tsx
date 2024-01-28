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
import imgProvNTT from "../public/images/ra-ntt.jpeg";
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
                  <>Province of Lampung</>
                ) : (
                  <>Provinsi Lampung</>
                )}
              </h3>
              <Image 
                src={imgProvLampung} 
                className="w-full" 
                alt="Province of Lampung"                
              />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://lampung.bps.go.id/publication/2021/09/03/71dfb425039080bb0d5617d0/potret-sensus-penduduk-2020-provinsi-lampung.html">
                  {bahasa === "EN" ? (
                    <>Province of Lampung</>
                  ) : (
                    <>Provinsi Lampung</>
                  )}
                </a>
              </p>
              <p className="text-justify">
                {bahasa === "EN" ? (
                  <>
                    The Province of Lampung has an area of 33,553.55 square kilometers with a population of 9,176,546 people and a population density of 270 people per square kilometer in the year 2022. This figure has increased compared to the 2010 Population Census data, which recorded a population density of 220 people per square kilometer for the Province of Lampung and 192 people per square kilometer based on the 2000 Population Census.
                  </>
                ) : (
                  <>
                    Wilayah Provinsi Lampung memiliki luas sebesar 33.553,55 kilometer persegi dengan jumlah penduduk 9.176.546 jiwa dan kepadatan penduduk 270 jiwa per kilometer persegi pada tahun 2022. Angka ini meningkat berdasarkan data Sensus Penduduk 2010 yang mencatat kepadatan penduduk Provinsi Lampung sebanyak 220 jiwa per kilometer persegi dan 192 jiwa per kilometer persegi berdasarkan Sensus Penduduk 2000.
                  </>
                )}
              </p>
            </div>
          </Step>
          <Step data={2} key={2}>
            <div className="my-96 lg:bg-white/100 bg-white/50 rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 lg:mx-14 mx-4 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 ">
                {bahasa === "EN" ? (
                  <>Regency of Tanggamus</>
                ) : (
                  <>Kabupaten Tanggamus</>
                )}
              </h3>
              <Image 
                src={imgTanggamus} 
                className="w-full" 
                alt="Regency of Tanggamus"             
              />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://kimyrae1.users.earthengine.app/view/banjir-kabupaten-tanggamus-2021">
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
                    The Regency of Tanggamus covers an area of 4,654.98 square kilometers and has a population of 652,898 people (2022) with a population density of 140 people per square kilometer. The Regional Disaster Management Agency (BPBD) of Tanggamus Regency states that there are 12 districts in this Land of Begawi Jejama that fall into the category of flood and landslide-prone areas. This is due to the regency geographical location in hilly terrain, coupled with large-sized rivers.
                  </>
                ) : (
                  <>
                    {" "}
                    Kabupaten Tanggamus ini memiliki luas wilayah 4.654,98 Km2 dan berpenduduk sebanyak 652.898 jiwa (2022) dengan kepadatan penduduk 140 jiwa/km2. Badan Penanggulangan Bencana Daerah (BPBD) Kabupaten Tanggamus menyatakan ada 12 kecamatan di Bumi Begawi Jejama ini yang masuk dalam katagori rawan bencana banjir dan tanah longsor.Hal ini disebabkan oleh lokasi geografis kabupaten yang berada diwilayah perbukitan disertai sungai-sungai yang berukuran besar.
                  </>
                )}
              </p>
            </div>
          </Step>

          <Step data={3} key={3}>
            <div className="my-96 lg:bg-white/100 bg-white/50 rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 lg:mx-14 mx-4 mb-3.5 lg:ml-auto">
              <h3 className="font-bold uppercase text-justify mb-2 ">
                {bahasa === "EN" ? <>Disaster Risk Index</> : <> Indeks Resiko Bencana</>}
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
                    According to the risk assessment from inaRISK BNPB, Tanggamus Regency has a disaster risk index with a value of 149.56, indicating a high-risk class. The flood risk is assessed with a value ranging from 0.083 to 0.658, categorizing it as low to high (IRBI 2022).
                  </>
                ) : (
                  <>
                    Berdasarkan kajian risiko inaRISK BNPB, Kabupaten Tanggamus memiliki indeks risiko bencana  dengan nilai 149,56 dan kelas resiko tinggi dan resiko banjir dengan nilai  0.083 - 0.658 yaitu rendah sampai tinggi ( IRBI 2022) 
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
                // src={imgDesaDampinganTanggamus}
                src={imgTanggamus} 
                className="w-full" 
                alt=""
              />
              <p className="text-justify ">
                {bahasa === "EN" ? (
                  <>
                    This program is implemented in the Semaka District, which is prone to floods due to being one of the areas traversed by the Way Samaka River. Additionally, during the rainy season, the tributaries in several villages in Semaka are often unable to accommodate the incoming water, posing the potential risk of water overflow not far from residential areas.
                  </>
                ) : (
                  <>
                    {" "}
                    Program ini diimplementasikan di Kecamatan Semaka yang merupakan daerah rawan banjir dikarenakan merupakan salah satu wilayah yang dilewati oleh sungai Way Samaka, selain itu setiap musim penghujan sering kali anak cabang sungai di beberapa desa samaka tidak mampu menampung kirimina air sehingga berpotensi terjadinya luapan air yang tak jauh dari pemukiman warga. 
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
                   The NTT region consists of 12 districts (Kabupaten/Kota). The regional expansion process that occurred resulted in the administrative division of the NTT Province in 2019 into 21 districts and 1 city, namely Kupang City, as the capital of the NTT province located on the western part of Timor Island. This province, known for its endemic Komodo wildlife, has a land area of 47,931.54 km². According to the BPS data for the year 2022, the population of the NTT Province has reached 5,446,285 people with a population density of 114 people per km².
                  </>
                ) : (
                  <>
                   Wilayah NTT terdiri atas 12 daerah Kabupaten/Kota. Proses pemekaran wilayah yang terjadi menjadikan wilayah administratif Provinsi NTT pada tahun 2019 terbagi atas 21 Kabupaten dan 1 Kota yaitu Kota Kupang, sebagai ibukota provinsi NTT yang berada bagian barat Pulau Timor. Provinsi dengan satwa endemik Komodo ini memiliki luas wilayah darat 47.931,54 km2. Berdasarkan data BPS tahun 2022, jumlah populasi di Provinsi NTT mencapai 5.446.285 jiwa dengan kepadatan penduduk sebesar 114 jiwa per km2. 
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
                    Regency is a highland area characterized by undulating landforms, with land slopes ≥40% (mountains) covering an area of 38.36%, and land slopes between 15% to 40% covering an area of 55.41% of the total area of the Manggarai Regency. The regency is home to 12 rivers that are prone to flooding. Several of these rivers have caused floods, resulting in damage to community facilities and other public infrastructure, with 22 incidents recorded in the year 2019. According to the data from the Badan Pusat Statistik (BPS) Indonesia in 2020, Manggarai Regency in the East Nusa Tenggara Province has a population of approximately 368,657 people.
                  </>
                ) : (
                  <>
                    {" "}
                    Kabupaten Manggarai merupakan daerah dataran tinggi yang didominasi oleh bentuk permukaan daratan yang bergelombang dengan kemiringan lahan ≥40% (pegunungan) yaitu seluas 38,36% dan kemiringan lahan antara 15%-40% yakni seluas 55,41% dari luas wilayah Kabupaten Manggarai. Kabupaten Manggarai memiliki 12 sungai yang berpotensi banjir, dari beberapa sungai tersebut telah menyebabkan banjir dan mengakibatkan rusaknyanya fasilitas masyarakat dan fasilitas umum lainnya dengan 22 Kejadian pada tahun 2019. Menurut data Badan Pusat Statistik (BPS) Indonesia pada tahun 2020, Kabupaten Manggarai di Provinsi Nusa Tenggara Timur memiliki populasi sekitar 368.657 jiwa
                  </>
                )}
              </p>
            </div>
          </Step>
          <Step data={7} key={7}>
            <div className="my-96 lg:bg-white/100 bg-white/50 rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 lg:mx-14 mx-4 mb-3.5 lg:ml-auto">
              <h3 className="font-bold uppercase text-justify mb-2 ">
                {bahasa === "EN" ? <>Disaster Risk Index Based </> : <>Indeks Resiko Bencana</>}
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
                    On the risk assessment by inaRISK BNPB, Tanggamus Regency has a disaster risk index with a value of 149.56, categorizing it as having a high risk. The flood risk is assessed with a value ranging from 0.072 to 0.616, indicating a risk level from low to high (IRBI 2022).
                  </>
                ) : (
                  <>
                    {" "}
                    Berdasarkan kajian risiko inaRISK BNPB, Kabupaten Tanggamus memiliki indeks risiko bencana  dengan nilai 149,56 dengan kelas resiko tinggi dan resiko banjir dengan nilai  0.072 – 0.616 yaitu rendah sampai tinggi ( IRBI 2022) 
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
                    American Red Cross and the Indonesian Red Cross (PMI) are implementing this program in five villages in the Reok Subdistrict, Reok Regency. In addition to floods, the residents in this area also face high exposure to the risks of extreme weather, drought, earthquakes, landslides, epidemics, tsunamis, as well as extreme coastal storms and erosion (National Disaster Management Agency, 2015).
                  </>
                ) : (
                  <>
                    Palang Merah Amerika dan PMI mengimplementasikan program ini di lima desa di Kecamatan Reok, Kabupaten Reok. Selain banjir penduduk di wilayah ini juga menghadapi paparan risiko tinggi terhadap cuaca ekstrem, kekeringan, gempa bumi, tanah longsor, banjir, wabah penyakit dan wabah, tsunami serta badai dan abrasi pantai yang ekstrem (Badan Nasional Penanggulangan Bencana, 2015).
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