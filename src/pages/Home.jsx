import React from "react";
import FilterBtn from "../components/FilterBtn";
import Popular from "../components/Popular";
import SearchBar from "../components/SearchBar";
import Vegan from "../components/Vegan";

function Home() {
  return (
    <>
      <SearchBar />
      <FilterBtn />
      <Popular />
      <Vegan />
    </>
  );
}

export default Home;
