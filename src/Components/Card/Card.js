import React from "react";

import "./Card.scss";

const card = () => {
  return (
    <div className="SAT__content-card p-10 h-full">
      <div className="flex mb-10">
        <button className="flex-auto card-button border-r-2 text-lg">
          E-Letter
        </button>
        <button className="flex-auto card-button border-r-2 text-lg">
          Fasilitas
        </button>
        <button className="flex-auto card-button border-r-2 text-lg">
          E-Learning
        </button>
        <button className="flex-auto card-button text-lg">Form</button>
      </div>
      <div>
        <form className="w-9/12 mx-auto">
          <label className="block my-10">
            <span className="block text-lg font-bold mb-4">NIM</span>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="11150930000055"
            />
          </label>
          <label className="block mb-12">
            <span className="block text-lg font-bold mb-4">Jenis Surat</span>
            <select className="w-full">
              <option value="1"> Surat Keterangan Aktif Kuliah </option>
              <option value="2"> Surat Kelakuan Baik </option>
              <option value="3"> Surat Rekomendasi Beasiswa </option>
              <option value="4"> Surat Buka Rekening </option>
              <option value="5"> Surat Permohonan Wawancara </option>
              <option value="6"> Surat Permohonan Magang </option>
              <option value="7"> Surat Permohonan Penelitian / Riset </option>
              <option value="8">
                Surat Permohonan Penelitian / Riset Kelompok{" "}
              </option>
              <option value="9">
                Surat Permohonan Praktek Kerja Lapangan (PKL){" "}
              </option>
              <option value="10">
                Surat Permohonan Praktek Kerja Lapangan (PKL) Kelompok{" "}
              </option>
              <option value="11"> Surat Tunjangan PNS </option>
              <option value="12">
                {" "}
                Surat Permohonan Observasi/Pengamatan{" "}
              </option>
              <option value="13"> Surat Pembimbing Skripsi </option>
              <option value="14">
                Surat Pembimbing Praktek Kerja Lapangan (PKL){" "}
              </option>
              <option value="15">
                Surat Keterangan Sebagai Aktivitis Organisasi{" "}
              </option>
              <option value="16">
                Surat Keterangan Bebas Pelanggaran Kode Etik Mahasiswa{" "}
              </option>
              <option value="17">
                Surat Keterangan Tidak Menerima Beasiswa{" "}
              </option>
              <option value="18"> Surat Keterangan Lulus (SKL) </option>
              <option value="19"> Surat Pembimbing Thesis </option>
              <option value="20"> Surat Permohonan Bebas Pustaka </option>
              <option value="21"> Surat Keterangan Kehilangan KTM </option>
              <option value="22"> Surat Perubahan Status AIS </option>
              <option value="23"> Surat Keterangan (Bahasa Inggris) </option>
              <option value="24"> Surat Permohonan Cuti </option>
              <option value="25"> Surat Pengunduran Diri </option>
              <option value="26"> Surat Rekomendasi S2 </option>
              <option value="27">
                {" "}
                Surat Undangan Seminar Proposal/Hasil{" "}
              </option>
              <option value="28"> Surat Undangan Sidang Skripsi </option>
              <option value="32"> Surat Rekomendasi </option>
              <option value="33">
                Surat Keterangan Aktif Kuliah Untuk Keperluan Tertentu
              </option>
            </select>
          </label>
          <div className="flex justify-between">
            <button className="card__button-status py-2 px-10 rounded-full">
              Cek Status
            </button>
            <button className="card__button-create text-white spy-2 px-10 rounded-full">
              Buat Baru
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default card;
