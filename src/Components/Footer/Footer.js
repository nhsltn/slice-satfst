import React from "react";

import Logo from "../../assets/img/logo2.png";
import "./Footer.scss";

const footer = () => {
  return (
    <div className="footer bg-primary pt-16">
      <div className="container mx-auto flex space-x-24">
        <div className="footer__main space-y-1">
          <img className="w-32" src={Logo} alt="logobig" />
          <p className="text-yellowclaw pt-6 font-bold">
            Fakultas Sains dan Teknologi
          </p>
          <p>Universitas Islam Negeri Syarif Hidayatullah Jakarta</p>
          <p>
            Gedung FST UIN Jakarta, Jl. Lkr. Kampus UIN, Cempaka Putih, Kec.
            Ciputat Timur, Kota Tangerang Selatan, Banten 15412.
          </p>
          <p>Telp/Fax : (021) 7401925</p>
          <p>Email : fst@uinjkt.ac.id</p>
        </div>

        <div className="footer__item flex space-x-16">
          <div>
            <ul className="space-y-4">
              <li className="pb-2 font-medium">Tentang FST</li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Struktur Organisasi
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Visi dan Misi
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Dekanat
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Prodi
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Peta Kampus
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4">
              <li className="pb-2 font-medium">Kemahasiswaan</li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Info Akademik
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Beasiswa
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Kegiatan Mahasiswa
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Organisasi Mahasiswa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4">
              <li className="pb-2 font-medium">Program Studi</li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Prodi Sistem Informasi
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Prodi Teknik Informatika
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Prodi Teknik Pertambangan
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Prodi Agri Bisnis
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Prodi Matematika
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Prodi Kimia
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Prodi Biologi
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Prodi Fisika
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-16 py-2 footer__bottom text-center text-white flex justify-center items-center space-x-4">
        <p>© FST UIN Syarif Hidayatullah Jakarta</p>
        <i className="fab fa-3x fa-twitter-square"></i>
        <i className="fab fa-3x fa-youtube"></i>
        <i className="fab fa-3x fa-facebook"></i>
        <i className="fas fa-3x fa-envelope-square"></i>
      </div>
    </div>
  );
};

export default footer;
