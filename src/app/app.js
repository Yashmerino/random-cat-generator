import React, { useState } from "react";
import Image from "./components/Image.jsx";
import Button from "./components/Button.jsx";
import Footer from "./components/Footer.jsx";
import api_key from "./api.json";

const App = (props) => {
  const [cat, setCat] = useState("");

  const fetchCat = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search", {
      method: "GET",
      headers: {
        "X-Auth-Token": api_key,
      },
    });

    const data = await response.json();

    setCat(data[0].url);
  };

  return (
    <div className="main-container">
      <Image src={cat} />
      <Button setCat={fetchCat} />
      <Footer />
    </div>
  );
};

export default App;
