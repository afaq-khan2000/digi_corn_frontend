import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TopNfts } from "../Components/Home";
import { Banner, Details } from "../Components/NftPage";
import { Navbar } from "../Components/Partials";
import nftService from "../services/NftsService";

function NftPage(props) {
  const [nft, setNft] = useState("");

  const params = useParams();

  useEffect(() => {
    nftService
      .getSingleNfts(params.id)
      .then((res) => setNft(res.nft))
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <>
      <Banner nft={nft}/>
      <div className="paddingX background-dark pb-10">
        <Details nft={nft}/>
        <TopNfts />
      </div>
    </>
  );
}

export default NftPage;
