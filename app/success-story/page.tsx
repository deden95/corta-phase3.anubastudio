"use client";

import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Testimonial from "../../components/testimonial";

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
      <main style={{ fontFamily: "trebuchet" }}>
        <Navbar onSelectLanguage={(data: any) => handleLanguage(data)} />
        <Testimonial onSelectLanguage={bahasa} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
