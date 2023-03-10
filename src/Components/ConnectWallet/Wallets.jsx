import React from "react";

function Wallets(props) {
  return (
    <div className="row text-white text-center">
      <div className="col-3 d-none d-lg-block"></div>
      <div className="col-12 col-lg-6">
        <div className="row mt-5">
          <div className="col-12 mb-4">
            <button className="btn btn-lg background-gray rounded-pill px-5 py-2 text-white w-75">
              MetaMask
            </button>
          </div>

          <div className="col-12 mb-4">
            <button className="btn btn-lg background-gray rounded-pill px-5 py-2 text-white w-75">
              MyEtherWallet
            </button>
          </div>

          <div className="col-12 mb-4">
            <button className="btn btn-lg background-gray rounded-pill px-5 py-2 text-white w-75">
              Ledger
            </button>
          </div>

          <div className="col-12 mb-4">
            <button className="btn btn-lg background-gray rounded-pill px-5 py-2 text-white w-75">
              Trezor
            </button>
          </div>
        </div>
      </div>
      <div className="col-3 d-none d-lg-block"></div>
    </div>
  );
}

export default Wallets;
