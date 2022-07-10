import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + inputValue);
    setTimeout(() => {
      setInputValue("");
    }, 2000);
  };
  return (
    <div className="w-full text-center my-10">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border w-11/12 md:w-4/6 lg:w-4/12 outline-none px-3 py-2 text-base rounded-md"
          placeholder="Search"
        />
      </form>
    </div>
  );
}

export default SearchBar;
