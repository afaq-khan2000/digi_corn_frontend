import React, { useRef, useState } from "react";
import nftService from "../../services/NftsService";
import userService from "../../services/UserService";
import { success } from "../../utils/notification";

function Form(props) {
  const [imagePreview, setImagePreview] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const videoRef = useRef(null);

  const handleAdd = () => {
    nftService
      .createNft({
        name,
        price,
        description,
        file,
        owner: userService.getLoggedInUser().id,
      })
      .then((res) => {
        success(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="font-clash text-67 text-white">
        Upload an <span className="text-gradient">NFT</span>
      </h1>
      <div className="row text-white mt-5">
        <div className="col-12 col-lg-7">
          <div className="form-group">
            <label for="file" className="paraColor">
              PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
            </label>
            <input
              accept=".png,.gif,.webp,.mp4,.mp3"
              max="100000000"
              id="file"
              type="file"
              className="form-control form-control-lg background-gray rounded-border paraColor formInput"
              onChange={(e) => {
                // const objectUrl = URL.createObjectURL(e.target.files[0]);
                // setImagePreview(objectUrl);
                setFile(e.target.files[0]);
                const file = e.target.files[0];

                if (file) {
                  const reader = new FileReader();

                  reader.readAsDataURL(file);

                  reader.onload = () => {
                    setImagePreview(reader.result);
                    if (videoRef.current) {
                      videoRef.current.load();
                    }
                  };
                }
              }}
            />
          </div>
          <div className="form-group">
            <label for="price" className="paraColor">
              Enter the Floor Price.
            </label>
            <input
              id="price"
              name="price"
              type="number"
              value={price}
              className="form-control form-control-lg background-gray rounded-border paraColor formInput"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="name" className="paraColor">
              Enter the NFT Name.
            </label>
            <input
              id="name"
              name="name"
              value={name}
              type="text"
              className="form-control form-control-lg background-gray rounded-border paraColor formInput"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="description" className="paraColor">
              Enter the description.
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              rows={4}
              className="form-control form-control-lg background-gray rounded-border paraColor formInput"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-lg background-secondary rounded-pill px-5 py-2 text-white"
            onClick={handleAdd}
          >
            Create
          </button>
        </div>
        <div className="col-12 col-lg-5 order-first order-lg-2">
          <p className="font-clash h3">Preview</p>

          {imagePreview ? (
            file.type.startsWith("image/") ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="img-fluid rounded-border sticky-lg-top"
              />
            ) : (
              <video
                controls
                ref={videoRef}
                className="img-fluid rounded-border sticky-lg-top"
              >
                <source src={imagePreview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          ) : (
            <div
              className="background-gray rounded-border text-center pt-10 sticky-lg-top"
              style={{ height: "400px" }}
            >
              <p className="paraColor">
                Upload file to preview your brand new NFT
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Form;
