import React from "react";
import { topNFTs, cardData } from "../../Constants";
import { crypto } from "../../Asset/index";
import { Base_URL } from "../../url";

function Card({ nft }) {
  return (
    <div>
      <div
        className="card background-gray p-3 rounded-border text-white pulse"
        style={{ width: "100%"}}
      >
        <img
          className="card-img-top rounded img-fluid"
          src={`${Base_URL}uploads/${nft?.file}`}
          alt="Card image cap"
        />
        <div className="card-body p-0">
          <div className="row my-3">
            <div className="col-3">
              <div
                style={{
                  backgroundColor: "#ff0",
                  width: "30px",
                  height: "30px",
                  borderRadius: "15px",
                }}
              ></div>
              {/* <img className="rounded img-fluid" src={nft?.profile} alt="Card image cap" /> */}
            </div>
            <div className="col-6 pl-0">
              <p className="h6 my-0 font-clash">{nft?.name}</p>
              <p className="my-0">{nft?.owner}</p>
            </div>
            <div className="col-3">
              <img
                className="img-fluid"
                src={crypto}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-4">
              <p className="h6 my-0 font-clash">{nft?.latestBid} ETH</p>
              <p className="my-0">Latest Bid</p>
            </div>
            <div className="col-4">
              <p className="h6 my-0 font-clash">{nft?.price} ETH</p>
              <p className="my-0">From</p>
            </div>
            <div className="col-4">
              <p className="h6 my-0 font-clash">{nft?.price*1534.27}</p>
              <p className="my-0 green">+{100*((nft?.latestBid-nft?.price)/nft?.price)}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
