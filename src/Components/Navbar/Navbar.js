import React from "react";

import Logo from "../../assets/img/logoexactfig.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar mx-auto w-full px-16 py-5">
      <div className="navbar__top text-right text-white text-sm mb-4 text-sm">
        <a href="/" className="navbar__top-item mr-4">
          AKREDITASI
        </a>
        <a href="/" className="navbar__top-item mr-4">
          AUN QA
        </a>
        <a href="/" className="navbar__top-item mr-4">
          LAKIP FST
        </a>
        <a href="/" className="navbar__top-item mr-4">
          ISO 9001
        </a>
        <a href="/" className="navbar__top-item mr-4">
          IKU FST
        </a>
        <a href="/" className="navbar__top-item">
          UNDUH
        </a>
      </div>
      <div className="navbar__bottom">
        <div class="flex items-center justify-between text-white">
          <div className="navbar__bottom-brand flex flex-row items-center">
            <img className="mr-4" src={Logo} alt="logo" />
            <p>
              Sistem Akademik Terpadu <br /> Fakultas Sains dan Teknologi <br />{" "}
              UIN Syarif Hidayatullah Jakarta
            </p>
          </div>
          <div className="navbar__bottom-items text-base">
            <a href="/" className="navbar__bottom-item">
              Beranda
            </a>
            <a href="/" className="navbar__bottom-item">
              Sistem Akademik Terpadu
            </a>
            <a href="/" className="navbar__bottom-item">
              Berita
            </a>
            <a href="/" className="navbar__bottom-item">
              Info
            </a>
            <a href="/" className="navbar__bottom-item">
              Feedback
            </a>
            <form className="w-56 inline mr-5 relative">
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="navbar__bottom-search bg-transparent border-2 border-light border-opacity-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
              ></input>
              <i class="fas fa-search"></i>
            </form>
            <button className="navbar__bottom-login bg-white text-black py-2 px-4 rounded-full">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
