import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import MainCard from "../components/MainCard";

function Searched() {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const [mount, setMount] = useState(true);
  const [error, setError] = useState("");
  const fetchSearchData = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_Key}&query=${name}`
      );
      setData(res.data.results);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
  }, [name]);
  useEffect(() => {
    setMount(true);
    if (mount) fetchSearchData();
    return () => setMount(false);
  }, [fetchSearchData, mount]);
  return (
    <div className="mt-16">
      <SearchBar />
      {error && (
        <p className="col-span-3 text-center text-rose-500 mt-5 md:mt-20">
          {error}
        </p>
      )}
      <div className="w-11/12 lg:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mt-5 md:mt-20">
        {data &&
          data.map((i) => (
            <MainCard key={i.id} id={i.id} title={i.title} img={i.image} />
          ))}
      </div>
    </div>
  );
}

export default Searched;
