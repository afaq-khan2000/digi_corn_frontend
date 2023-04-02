import GenericService from "./GenericService";
class FavoriteService extends GenericService {
  constructor() {
    super();
  }

  addToFavorites = ({ nftId }) =>
    new Promise((resolve, reject) => {
      this.post("favorites/add", { nftId })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  removeFromFavorites = (nftId) =>
    new Promise((resolve, reject) => {
      this.delete("favorites/remove/" + nftId)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  getFavorites = () =>
    new Promise((resolve, reject) => {
      this.get("favorites")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  // getSingleNfts = (id) =>
  //   new Promise((resolve, reject) => {
  //     this.get("nfts/" + id)
  //       .then((data) => {
  //         resolve(data);
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   });

  // deleteNft = (id) =>
  //   new Promise((resolve, reject) => {
  //     this.delete("nfts/" + id)
  //       .then((data) => {
  //         resolve(data);
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   });

  // updateNft = (id, { name, price, description, file }) =>
  //   new Promise((resolve, reject) => {
  //     this.put("nfts/" + id, {
  //       name,
  //       price,
  //       description,
  //       file,
  //     })
  //       .then((data) => {
  //         resolve(data);
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   });
}

let favoriteService = new FavoriteService();
export default favoriteService;
