import React, { useEffect, useState } from "react";
import { cardData } from "../../Constants";
import { Card } from "../Partials";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import nftService from '../../services/NftsService'

function TrendingNfts(props) {

  const [nfts, setNfts] = useState([]);

useEffect(() => {
  nftService.getAllNfts().then((res)=>setNfts(res.nfts)).catch((err)=>console.log(err))
}, [])



  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="text-white mt-10">
      <div className="row">
        <div className="col-12">
          <h1 className="font-clash text-48">Trending NFTS</h1>
          <p className="h5">Explore Trending NFTS</p>
        </div>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
        className="mt-5"
      >
        {nfts.map((nft) => (
          <div className="col-4 my-3">
            <Card nft={nft} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TrendingNfts;
