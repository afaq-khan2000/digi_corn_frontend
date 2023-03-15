import React, { useEffect, useState } from "react";
import { user } from "../../Asset";
import { Pencil } from "react-bootstrap-icons";
import userService from "../../services/UserService";
import { success } from "../../utils/notification";
import {Base_URL} from '../../url';

function Form(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState("");
  const [banner, setBanner] = useState("");
  const [bio, setBio] = useState("");
  const [showPicEditButton, setShowPicEditButton] = useState(false);
  const [showBannerEditButton, setShowBannerEditButton] = useState(false);

  const [picPreview, setPicPreview] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);

  function handlePicChange(e) {
    const file = e.target.files[0];

    if (file) {
      setPic(e.target.files[0]);
      const reader = new FileReader();

      reader.onload = () => {
        setPicPreview(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPicPreview(null);
    }
  }
  function handleBannerChange(e) {
    const file = e.target.files[0];

    if (file) {
      setBanner(e.target.files[0]);
      const reader = new FileReader();

      reader.onload = () => {
        setBannerPreview(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setBannerPreview(null);
    }
  }

  const handleUpdate = () => {
    userService
      .updateProfile(id, {
        name,
        email,
        pic,
        banner,
        bio,
      })
      .then((res) => {
        success(res.message).then(() => (window.location.href = "/profile"));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (userService.isLoggedIn()) {
      userService.getProfile().then((res) => {
        console.log(res.user);
        setId(res.user._id);
        setName(res.user.name);
        setEmail(res.user.email);
        setBio(res.user.bio);
        setPic(res.user.pic);
        setBanner(res.user.banner);
      });
    }
  }, []);

  return (
    <div className="row">
      <div className="col-12 mb-5">
        <div
          onMouseEnter={() => setShowBannerEditButton(true)}
          onMouseLeave={() => setShowBannerEditButton(false)}
          className="rounded-border img-fluid background-gray"
          style={{
            height: "250px",
            width: "100%",
            backgroundImage: `url("${
              bannerPreview
                ? bannerPreview
                : `${Base_URL}uploads/users/${banner}`
            }")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {showBannerEditButton && (
            <>
              <input
                type={"file"}
                name="banner"
                id="banner"
                className="d-none"
                accept=".png,.gif,.jpg,.jpeg"
                max="100000000"
                onChange={(e) => handleBannerChange(e)}
              />
              <label for="banner">
                <Pencil
                  color="white"
                  className="pointer background-gray p-2"
                  size={"50px"}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    borderRadius: "10px",
                  }}
                />
              </label>
            </>
          )}
        </div>
        <div
          onMouseEnter={() => setShowPicEditButton(true)}
          onMouseLeave={() => setShowPicEditButton(false)}
          src={user}
          alt=""
          width={"100px"}
          height={"100px"}
          style={{
            height: "100px",
            width: "100px",
            backgroundImage: `url("${
              picPreview
                ? picPreview
                : `${Base_URL}uploads/users/${pic}`
            }")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50px",
            position: "relative",
            //   top: "180px",
            //   left: "50px",
            marginLeft: "50px",
            marginTop: "-60px",
          }}
        >
          {showPicEditButton && (
            <>
              <input
                type="file"
                id="pic"
                name="pic"
                className="d-none"
                accept=".png,.gif,.jpg,.jpeg"
                max="100000000"
                onChange={(e) => handlePicChange(e)}
              />
              <label for="pic">
                <Pencil
                  color="white"
                  className="pointer background-gray p-2"
                  size={"30px"}
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "40%",
                    borderRadius: "10px",
                  }}
                />
              </label>
            </>
          )}
        </div>
      </div>
      <div className="col-lg-9">
        <div className="form-group">
          <label for="name" className="font-clash text-white">
            Display Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            className="form-control form-control-lg background-gray rounded-border paraColor formInput"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="email" className="font-clash text-white">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            className="form-control form-control-lg background-gray rounded-border paraColor formInput"
            disabled
          />
        </div>
        <div className="form-group">
          <label for="bio" className="font-clash text-white">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            type="text"
            value={bio}
            rows={2}
            className="form-control form-control-lg background-gray rounded-border paraColor formInput"
            placeholder="Tell us something about you."
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-lg background-secondary rounded-pill px-5 py-2 text-white"
          onClick={handleUpdate}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Form;
