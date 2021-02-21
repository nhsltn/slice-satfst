import React, { Component } from "react";

import "./SAT.scss";
import Card from "../../Components/Card/Card";
import Vector from "../../assets/img/sat-vector.png";

class SAT extends Component {
  state = {};
  render() {
    return (
      <div className="SAT w-10/12 mx-auto bg-white py-20">
        <h1 className="SAT__title text-4xl font-bold pb-8">
          Sistem Akademik Terpadu
        </h1>
        <div className="SAT__content flex space-x-10 items-center">
          <Card />
          <div className="SAT__content-graph flex flex-col items-center">
            <img className="max-w-4xl" src={Vector} alt="vector" />
            <p className="font-semibold text-2xl text-center">
              Ambil suratmu jika sudah tercetak di Lt.2 Ruang Kemahasiswaan FST
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SAT;