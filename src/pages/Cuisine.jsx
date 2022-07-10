import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import MainCard from "../components/MainCard";

function Cuisine() {
  const { cuisine } = useParams();
  const [data, setData] = useState(null);
  const [mount, setMount] = useState(true);
  const [error, setError] = useState("");
  const fetchCuisine = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_Key}&cuisine=${cuisine}`
      );
      setData(res.data.results);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
  }, [cuisine]);
  useEffect(() => {
    setMount(true);
    if (mount) fetchCuisine();
    return () => setMount(false);
  }, [fetchCuisine, mount]);
  return (
    <div className="w-11/12 lg:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-10 mt-5 md:mt-20">
      {error && <p className="col-span-3 text-center text-rose-500">{error}</p>}
      {data &&
        data.map((i) => (
          <MainCard key={i.id} id={i.id} title={i.title} img={i.image} />
        ))}
    </div>
  );
}

export default Cuisine;
