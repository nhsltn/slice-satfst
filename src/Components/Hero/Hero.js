import React from "react";

import HeroVector from "../../assets/img/hero-vector.png";
import "./Hero.scss";

const hero = () => {
  return (
    <div className="hero flex w-10/12 items-center justify-center mx-auto py-28">
      <div className="hero__tagline mr-20">
        <h1 className="text-4xl font-bold mb-4">
          Mau Kuliah Gratis? Daftarkan dirimu <br /> dalam Program Beasiswa
          2020!!
        </h1>
        <h2 className="text-white text-lg font-normal">
          UIN Jakarta saat ini sedang membuka banyak kesempatan pada mahasiswa
          dan calon mahasiswa untuk mendapatkan beasiswa pendidikan, baik yang
          bersumber swasta maupun pemerintah pusat maupun daerah. Jenis
          pemberian beasiswa bervariasi ada beasiswa penuh (Full Scholarship)
          dan beasiswa.. <span className="font-bold">Baca Selengkapnya</span>
        </h2>
      </div>
      <div className="hero__vector">
        <img src={HeroVector} alt="apaandahtuh" />
      </div>
    </div>
  );
};

export default hero;
<div className="hero"></div>;
