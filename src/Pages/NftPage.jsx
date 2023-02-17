import React from "react";
import { TopNfts } from "../Components/Home";
import { Banner, Details } from "../Components/NftPage";
import { Navbar } from "../Components/Partials";

function NftPage(props) {
  return (
    <>
      <Banner />
      <div className="paddingX background-dark pb-10">
        <Details />
        <TopNfts />
      </div>
    </>
  );
}

export default NftPage;
