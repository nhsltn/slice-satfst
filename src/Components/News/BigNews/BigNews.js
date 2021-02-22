import React from "react";

import NewsPic from "../../../assets/img/big-news-aunqa.png";
import "./BigNews.scss";

const bigNews = () => {
  return (
    <div className="news__big flex flex-row space-x-20 items-center justify-center">
      <img className="news__big-img" src={NewsPic} alt="aunqa" />
      <div className="news__big-content text-white">
        <p>Rianto Martino</p>
        <p className="mb-4">30th - April - 2019</p>
        <h2 className="text-yellowclaw text-4xl font-bold mb-4">
          The 143rd AUN-QA Program Assessment Syarif Hidayatullah State Islamic
          University Jakarta Indonesia
        </h2>
        <p>
          Alhamdulillah, The 143rd AUN-QA Syarif Hidayatullah Assessment Program
          State Islamic University Jakarta Indonesia for three study programs
          namely Information System (FST), Management (FEB) and Family Law (FSH)
          was completed on 30th April...{" "}
          <span className="font-bold">Baca Selengkapnya</span>
        </p>
      </div>
    </div>
  );
};

export default bigNews;
