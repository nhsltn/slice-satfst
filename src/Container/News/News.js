import React from "react";

import BigNews from "../../Components/News/BigNews/BigNews";
import SmallNews from "../../Components/News/SmallNews/SmallNews";
import AgriCamp from "../../assets/img/small-news-agricamp.png";
import Ruko from "../../assets/img/small-news-ruko.png";

const News = () => {
  return (
    <div className="news bg-primary relative">
      <div className=" py-20 container mx-auto">
        <h1 className="text-yellowclaw">Berita FST</h1>
        <div className="w-11/12 mt-12 mx-auto">
          <BigNews />
          <hr className="my-20" />
          <div className="flex space-x-10">
            <SmallNews
              src={AgriCamp}
              title="AGRICAMP 2019"
              content="FST UIN JAKARTA FST UIN JAKARTA, Pada Minggu, 12 Oktober 2019 telah usai rangkaian..."
            />
            <SmallNews
              src={Ruko}
              title="RUMAH KODING MENGGELAR PMCC"
              content="DI UIN SYARIF HIDAYATULLAH JAKARTA Acara ini diadakan dengan...."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
