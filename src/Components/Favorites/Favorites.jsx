import React, { useEffect, useState } from "react";
import favoriteService from "../../services/FavoriteService";
import { Card } from "../Partials/index";

function Favorites(props) {
  const [favorites, setFavorites] = useState();

  // console.log(favorites);

  useEffect(() => {
    favoriteService
      .getFavorites()
      .then((res) => setFavorites(res.favorites[0].nfts))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        <h1 className="font-clash text-white mb-5">
          My <span className="text-gradient">Favorites</span>
        </h1>
      </div>
      {favorites?.map((favorite) => (
        <div className="col-12 col-md-6 col-lg-4 my-3">
          <Card nft={favorite} isFavorite={true} />
        </div>
      ))}
    </div>
  );
}

export default Favorites;
