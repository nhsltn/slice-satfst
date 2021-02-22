import React from "react";

import CritVector from "../../assets/img/critics-vector.png";
import Button from "../Button/Button";

const critics = () => {
  return (
    <div className="critics py-20 text-primary">
      <div className="container mx-auto">
        <div className="w-11/12 mx-auto">
          <div className="flex items-center justify-center space-x-20">
            <div className="flex-1 text-center">
              <h1 className="mb-10">
                Apakah kamu memiliki kritik dan saran untuk Fakultas atau
                Jurusan kamu?
              </h1>
              <Button
                children="Kirimkan Kritik dan Saranmu!"
                bgcolor="bg-yellowclaw"
                txtcolor="text-white"
              />
            </div>
            <img className="flex-1 max-w-lg" src={CritVector} alt="vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default critics;
