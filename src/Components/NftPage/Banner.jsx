import React from "react";
import { cardData } from "../../Constants";
import { Base_URL } from "../../url";

function Banner({ nft }) {
  return (
    <div
      className="text-white img-fluid"
      style={{
        backgroundImage: `url("${Base_URL}uploads/${nft?.file}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "90vh",
      }}
    >
      <div
        className="dark-transparent text-center py-5 px-2 d-none d-lg-block"
        style={{
          width: "500px",
          position: "absolute",
          bottom: "10px",
          left: "100px",
        }}
      >
        <h1 className="font-clash">{nft?.name}</h1>
        <p className="">
          Minted on{" "}
          {new Date(nft.date).toLocaleDateString("en-US", {
            timeZone: "Asia/Karachi",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          })}
        </p>
      </div>
      <div
        className="dark-transparent text-center py-5 px-2 d-block d-lg-none img-fluid"
        style={{ position: "absolute", bottom: "10px" }}
      >
        <h1 className="font-clash">{cardData[2].name}</h1>
        <p className="">Minted on Sep 30, 2022</p>
      </div>
    </div>
  );
}

export default Banner;
