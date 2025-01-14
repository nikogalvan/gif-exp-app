/* eslint-disable react/prop-types */
import { useState } from "react";

export const AddCategory = ({ onAddGif }) => {
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onAddGif(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={inputValue}
        onChange={onChangeHandler}
        placeholder="Buscar gifs"
      />
    </form>
  );
};
