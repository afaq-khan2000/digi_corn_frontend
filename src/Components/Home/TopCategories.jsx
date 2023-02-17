import React from "react";
import { topCategories } from "../../Constants";

function TopCategories(props) {
  return (
    <div className="text-white mt-10">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-9">
          <h1 className="font-clash text-48">Top Categories</h1>
          <p className="h5">Explore All Top Categories</p>
        </div>
        <div className="col-12 col-md-4 col-lg-3 d-none d-md-block">
          <button className="btn btn-lg background-secondary rounded-pill px-5 py-2 text-white">
            View All{" "}
          </button>
        </div>
      </div>
      <div className="row mt-5">
        {topCategories.map((category) => (
          <div className="col-6 col-lg-3 my-2 px-2 px-md-5">
            <div className="background-gray p-2 rounded-border text-center pulse">
              <div
                className="rounded-border"
                style={{
                  backgroundImage: `url(${category.bg})`,
                  backgroundPosition: "center",
                  backgroundSize: "full",
                  backgroundRepeat: "no-repeat",
                  opacity: "0.5",
                }}
              >
                <img src={category.icon} alt="" className="" />
              </div>
              <p className="font-clash h5 mt-3">{category.title}</p>
            </div>
          </div>
        ))}
        <div className="col-12 d-block d-md-none">
          <button className="btn btn-lg background-secondary rounded-pill px-5 py-2 text-white w-100">
            View All{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopCategories;
