import React, { useState } from "react";
import Image from "./components/Image.jsx";
import Button from "./components/Button.jsx";
import Footer from "./components/Footer.jsx";
import preloader from "./../images/preloader.gif";
import api_key from "./api.json";

const App = (props) => {
  const [cat, setCat] = useState({});
  const [isLoading, setLoading] = useState(false);

  const fetchCat = async () => {
    setLoading(true);

    const response = await fetch("https://api.thecatapi.com/v1/images/search", {
      method: "GET",
      headers: {
        "X-Auth-Token": api_key,
      },
    });

    const data = await response.json();

    while (data[0].width >= 700 || data[0].height >= 500) {
      data[0].width /= 1.2;
      data[0].height /= 1.2;
    }

    setCat(data[0]);

    setLoading(false);
  };

  return (
    <div className="main-container">
      {isLoading ? (
        <img src={preloader} className="preloader" />
      ) : Object.keys(cat).length > 0 ? (
        <Image src={cat.url} width={cat.width} height={cat.height} />
      ) : (
        <h1 className="no_cats">No cats :c Press the button</h1>
      )}
      <Button setCat={fetchCat} />
      <Footer />
    </div>
  );
};

export default App;
