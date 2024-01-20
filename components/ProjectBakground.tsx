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
                    Building community capacity and readiness in responding to disasters and strengthening PMI institutional capacity in providing basic community needs in emergency situations through the Community Disaster Preparedness Program through Sustainable and Inclusive Disaster Risk Reduction (Fostering Disaster-Ready Communities through Sustainable and Inclusive Disaster Risk Reduction).
                     <br></br>
                     <br></br>
                     This program was implemented in two provinces involving seven communities in Tanggamus Regency, Lampung Province and five communities in West Manggarai Regency, East Nusa Tenggara Province.
                  </>
                ) : (
                  <>
                    Membangun kapasitas dan kesiapan masyarakat dalam merespon bencana serta memperkuat kapasitas kelembagaan PMI dalam menyediakan kebutuhan dasar masyarakat pada kondisi darurat melalui program Program Masyarakat Siaga Bencana Melalui Pengurangan Risiko Bencana Berkelanjutan dan Inklusif (Fostering Disaster-Ready Communities through Sustainable and Inclusive Disaster Risk Reduction).
                    <br></br>
                    <br></br>
                    Program ini dilaksanakan di dua provinsi dengan melibatkan tujuh komunitas di Kabupaten Tanggamus, Provinsi Lampung dan lima komunitas di Kabupaten Manggarai Barat, Provinsi Nusa Tenggara Timur.
                  </>
                )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}