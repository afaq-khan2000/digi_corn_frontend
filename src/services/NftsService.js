import GenericService from "./GenericService";
class NftsService extends GenericService {
  constructor() {
    super();
  }

  createNft = ({ name, price, description, file, owner }) =>
    new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      formData.append("owner", owner);
      formData.append("price", price);
      formData.append("description", description);

      this.post("nfts/add", formData)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  getAllNfts = () =>
    new Promise((resolve, reject) => {
      this.get("nfts")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  getSingleNfts = (id) =>
    new Promise((resolve, reject) => {
      this.get("nfts/" + id)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  deleteNft = (id) =>
    new Promise((resolve, reject) => {
      this.delete("nfts/" + id)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  updateNft = (id, { name, price, description, file }) =>
    new Promise((resolve, reject) => {
      this.put("nfts/" + id, {
        name,
        price,
        description,
        file,
      })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}

let nftService = new NftsService();
export default nftService;
