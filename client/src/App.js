import React, { useState, useEffect } from "react";
import { Header } from "./components/Header.js";
import { Content } from "./components/Content.js";
import { Footer } from "./components/Footer.js";

function App() {
  const [store, setStore] = useState("");

  useEffect(() => {
    const get = async () => {
      let a = await fetch("http://www.cbr.ru/scripts/XML_daily.asp");
      setStore(a);
      console.log(a);
    };
    get();
  }, [setStore]);

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
