import React from "react";

import HeroVector from "../../assets/img/hero-vector.png";
import "./Hero.scss";

const hero = () => {
  return (
    <div className="hero py-28">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="hero__tagline">
            <h1 className="mb-4 text-yellowclaw">
              Mau Kuliah Gratis? Daftarkan dirimu <br /> dalam Program Beasiswa
              2020!!
            </h1>
            <p className="text-white font-normal">
              UIN Jakarta saat ini sedang membuka banyak kesempatan pada
              mahasiswa dan calon mahasiswa untuk mendapatkan beasiswa
              pendidikan, baik yang bersumber swasta maupun pemerintah pusat
              maupun daerah. Jenis pemberian beasiswa bervariasi ada beasiswa
              penuh (Full Scholarship) dan beasiswa..{" "}
              <span className="font-bold">Baca Selengkapnya</span>
            </p>
          </div>
          <div className="hero__vector flex flex-col items-center">
            <img src={HeroVector} alt="apaandahtuh" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
<div className="hero"></div>;
