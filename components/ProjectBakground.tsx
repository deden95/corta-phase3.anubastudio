"use client";
export default function ProjectBackground(props: any) {
  const bahasa = props.onSelectLanguage;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16 scroll-animation" id="projectBackground">
        <div className="title text-center pt-5 lg:pt-20">
          {bahasa === "EN" ? (
            <>
              Project Background
            </>
          ) : (
            <>
                Latar Belakang
            </>
          )}
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 p-4 lg:pt-12">
            <iframe
                className="w-full aspect-video youtube"
                title="vimeo-player"
                src="https://www.youtube.com/embed/Gy-kSw0tdOM?controls=0"
                allowFullScreen
              />
          </div>

          <div className="w-full sm:w-1/2 mt-4 lg:mt-0">
            <p className="subtitle p-4 lg:p-10">
              {bahasa === "EN" ? (
                  <>
                    The Indonesian Red Cross (PMI), with support from the American Red Cross and Margaret A. Cargill Philanthropies (MACP), continues the Community-Based Disaster Risk Reduction Program, especially in river basin areas, through the CoRTA Project (Community Ready To Act). The aim is to enhance community awareness and capacity to respond to potential disasters, particularly in river basin areas.
                     <br></br>
                     <br></br>                     
                    This program represents the third phase of the Community-Based Disaster Risk Reduction Program (CBDRR) known as FIRST - DAS, implemented in two provinces involving seven villages in Tanggamus Regency, Lampung Province, and five villages in Manggarai Regency, East Nusa Tenggara Province.
                  </>
                ) : (
                  <>
                   Palang Merah Indonesia (PMI) dengan dukungan Palang Merah Amerika dan Margaret A. Cargill Philanthropies (MACP) melanjutkan Program Pengurangan Resiko Bencana Berbasis Masyarakat khususnya di wilayah Daerah Aliran Sungai (DAS) melalui Proyek CoRTA (Community Ready To Act) atau masyarakat Siap Aksi dengan tujuan untuk meningkatkan kesadaran dan kapasitas masyarakat untuk menghadapi potensi bencana , khususnya di daerah aliran sungai. 
                    <br></br>
                    <br></br>
                    Program ini merupakan Fase ketiga dari Program Pengurangan Resiko Berbasis Masyarakat (Community based Disaster Risk Reduction)  PERTAMA – DAS  yang dilaksanakan di dua Provinsi yang melibatkan tujuh desa di Kabupaten Tanggamus , Provinsi Lampung dan lima desa di Kabupaten Manggarai, Provinsi Nusa Tenggara Timur.
                  </>
                )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}