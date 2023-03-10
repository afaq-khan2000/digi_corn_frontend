import React, { useEffect, useState } from "react";
import { cardData } from "../../Constants";
import nftService from "../../services/NftsService";
import { Card } from "../Partials";

function TopNfts(props) {

  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    nftService.getAllNfts().then((res)=>setNfts(res.nfts)).catch((err)=>console.log(err))
  }, [])

  return (
    <div className="text-white mt-10">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-9">
          <h1 className="font-clash text-48">Top NFTS</h1>
          <p className="h5">Explore All Top NFTS</p>
        </div>
        <div className="col-12 col-md-4 col-lg-3 d-none d-md-block">
          <button className="btn btn-lg background-secondary rounded-pill px-5 py-2 text-white">
            View All{" "}
          </button>
        </div>
      </div>
      <div className="row mt-5">
        {nfts.slice(0,9).map((nft) => (
          <div className="col-12 col-md-6 col-lg-4 my-3">
            <Card nft={nft} />
          </div>
        ))}
        <div className="col-12 d-block d-md-none">
          <button className="btn btn-lg background-secondary rounded-pill px-5 py-2 text-white w-100">
            View All{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNfts;
