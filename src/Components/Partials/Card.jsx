import React from "react";
import { topNFTs,cardData } from "../../Constants";

function Card({nft}) {
  return (
    <div>
      <div className="card background-gray p-3 rounded-border text-white pulse" style={{width:"20rem"}}>
        <img className="card-img-top rounded img-fluid" src={nft?.image} alt="Card image cap" />
        <div className="card-body p-0">
          <div className="row my-3">
            <div className="col-3">
            <img className="rounded img-fluid" src={nft?.profile} alt="Card image cap" />
            </div>
            <div className="col-6 pl-0">
                <p className="h6 my-0 font-clash">{nft?.name}</p>
                <p className="my-0">{nft?.user}</p>
            </div>
            <div className="col-3">
            <img className="img-fluid" src={nft?.currency} alt="Card image cap" />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-4">
            <p className="h6 my-0 font-clash">6.73 ETH</p>
                <p className="my-0">Latest Bid</p>
            </div>
            <div className="col-4">
            <p className="h6 my-0 font-clash">1.55 ETH</p>
                <p className="my-0">From</p>
            </div>
            <div className="col-4">
            <p className="h6 my-0 font-clash">$9945.1</p>
                <p className="my-0 green">+3.571%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
