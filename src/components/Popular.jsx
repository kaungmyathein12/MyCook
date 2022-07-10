import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import Slider from "react-slick";
import MainCard from "./MainCard";
const setting = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
function Popular() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [mount, setMount] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_Key}&number=6`
      );
      setData(res.data.recipes);
    } catch (error) {
      setError(error.response.data.message);
    }
  }, []);
  useEffect(() => {
    setMount(true);
    if (mount) fetchData();
    return () => setMount(false);
  }, [fetchData, mount]);
  return (
    <div className="my-16">
      <h3 className="w-11/12 lg:w-2/3 mx-auto">Random Choices for You</h3>
      {error && (
        <div className="w-11/12 lg:w-2/3 mx-auto mt-5 p-3 text-center">
          <p className="text-rose-500">{error}</p>
        </div>
      )}
      {data && (
        <Slider {...setting} className="lg:w-3/4 mx-auto mt-8 px-4 lg:px-12">
          {data &&
            data.map((i) => (
              <MainCard key={i.id} id={i.id} title={i.title} img={i.image} />
            ))}
        </Slider>
      )}
    </div>
  );
}

export default Popular;
