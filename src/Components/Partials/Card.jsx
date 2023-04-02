import React, { useEffect, useState } from "react";
import { topNFTs, cardData } from "../../Constants";
import { crypto } from "../../Asset/index";
import { Base_URL } from "../../url";
import { Heart, HeartFill } from "react-bootstrap-icons";
import favoriteService from "../../services/FavoriteService";
import { useNavigate } from "react-router-dom";
import { success } from "../../utils/notification";

function Card({ nft, isFavorite }) {
  const [nftId, setNftId] = useState(nft._id);
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);


  const navigate = useNavigate();

  const handleAddFavorite = () => {
    favoriteService
      .addToFavorites({ nftId })
      .then((res) => {
        success(res.message).then(() => navigate(0));
      })
      .catch((err) => console.log(err));
  };
  const handleRemoveFavorite = () => {
    favoriteService
      .removeFromFavorites(nftId)
      .then((res) => {
        success(res.message).then(() => navigate(0));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div
        className="card background-gray p-3 rounded-border text-white pulse"
        style={{ width: "100%" }}
      >
        <div className="">
          <img
            className=""
            src={crypto}
            alt="Card image cap"
            width={"50px"}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
            }}
          />
        </div>
        <img
          style={{
            height: "300px",
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="card-img-top rounded pointer"
          src={`${Base_URL}uploads/${nft?.file}`}
          alt="Card image"
          onClick={() => navigate(`/nft/${nftId}`)}
        />
        <div className="card-body p-0">
          <div className="row my-3">
            <div className="col-2">
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
            <div className="col-8 pl-0">
              <p className="h6 my-0 font-clash">{nft?.name}</p>
              <p className="my-0">{nft?.owner?.name}</p>
            </div>

            <div className="col-2">
              {!isFavoriteState ? (
                <Heart
                  size={"20px"}
                  className="pointer"
                  onClick={handleAddFavorite}
                />
              ) : (
                <HeartFill
                  size={"20px"}
                  color="#FF5733"
                  className="pointer"
                  onClick={handleRemoveFavorite}
                />
              )}
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
              <p className="h6 my-0 font-clash">{nft?.price * 1534.27}</p>
              <p className="my-0 green">
                +{100 * ((nft?.latestBid - nft?.price) / nft?.price)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
