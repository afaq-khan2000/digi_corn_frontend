import React from "react";
import { cardData } from "../../Constants";
import { Card } from "../Partials";
import Search from "./Search";

function Results(props) {
  return (
    <div className="col-12 col-lg-9 px-3">
      <div className="row">
        {cardData.map((nft) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <Card nft={nft} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
