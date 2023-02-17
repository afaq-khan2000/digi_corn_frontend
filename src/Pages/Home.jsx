import React from "react";
import {
  Hero,
  Support,
  TopCategories,
  TopNfts,
  TrendingNfts,
} from "../Components/Home";


function Home(props) {
  return (
    <>
      <div className="paddingX background-dark pb-10">
        <Hero />
        <TrendingNfts />
        <TopNfts />
        <TopCategories />
        <Support />
      </div>
    </>
  );
}

export default Home;
