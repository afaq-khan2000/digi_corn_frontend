import React, { useState, useEffect } from "react";
import { cardData } from "../../Constants";
import favoriteService from "../../services/FavoriteService";
import nftService from "../../services/NftsService";
import { Card } from "../Partials";

function Results(props) {
  const [nfts, setNfts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // console.log(favorites);

  useEffect(() => {
    nftService
      .getAllNfts()
      .then((res) => setNfts(res.nfts))
      .catch((err) => console.log(err));

    favoriteService
      .getFavorites()
      .then((res) => setFavorites(res.favorites[0].nfts));
  }, []);

  return (
    <div className="col-12 col-lg-9 px-0 px-lg-3">
      <div className="row">
        {nfts.map((nft) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <Card
              nft={nft}
              isFavorite={favorites.some((fav) => fav._id === nft._id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
