import { useState } from "react";
import { GifGrid, AddCategory } from "./components/";

export const GifExpApp = () => {
  /*   const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(true); */
  const [gifs, setGifs] = useState([]);

  const onAddGif = (newGif) => {
    if (gifs.includes(newGif)) return;
    setGifs([newGif, ...gifs]);
  };
  return (
    <>
      <h1>GifExpApp</h1>
      <AddCategory onAddGif={onAddGif} />

      {gifs.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
