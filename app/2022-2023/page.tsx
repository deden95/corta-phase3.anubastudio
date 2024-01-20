"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import FlourishScrollama from "../../components/FlourishScrollama";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import StepMapScrollama from "../../components/StepMapScrollama";
import Home from "../../components/Home";
import ProjectBackground from "../../components/ProjectBakground";
import CapacityBuilding from "../../components/CapacityBuilding";
import Scrollytelling from "../../components/Scrollytelling";
import Expectation from "../../components/Expectations";

export default function App() {
  const [bahasa, setBahasa] = useState<String>("");
  const handleLanguage = (data: any) => {
    setBahasa(data);
  };
  useEffect(() => {
    const getData = sessionStorage.getItem("translate");
    setBahasa(getData!);
  }, [bahasa]);
  return (
    <>
      <Head>
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var flourishScript = document.createElement('script');
                flourishScript.src = 'https://public.flourish.studio/resources/embed.js';
                flourishScript.async = true;
                document.head.appendChild(flourishScript);
              })();
            `,
          }}
        ></script>
      </Head>
      <main style={{ fontFamily: "trebuchet" }}>
        <Navbar onSelectLanguage={(data: any) => handleLanguage(data)} />
        <Home onSelectLanguage={bahasa}/>
        <ProjectBackground onSelectLanguage={bahasa}/>
        <StepMapScrollama onSelectLanguage={bahasa} />
        <FlourishScrollama onSelectLanguage={bahasa} />
        <CapacityBuilding onSelectLanguage={bahasa} />
        <Scrollytelling/>
        <Expectation onSelectLanguage={bahasa} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
