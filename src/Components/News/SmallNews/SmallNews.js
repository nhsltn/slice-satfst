import React from "react";
import "./SmallNews.scss";

const smallNews = (props) => {
  return (
    <div className="text-white flex news__small space-x-5">
      <img src={props.src} alt="news" />
      <div>
        <h3 className="text-2xl font-bold text-yellowclaw">{props.title}</h3>
        <p>
          {props.content} <span className="font-bold">Baca Lebih Banyak</span>
        </p>
      </div>
    </div>
  );
};

export default smallNews;
