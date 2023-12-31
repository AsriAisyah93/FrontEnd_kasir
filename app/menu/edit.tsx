"use client"
import React, { SyntheticEvent, use } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

type menu = {
  id: number;
  nama_menu: string;
  harga: number;
  image: number;
  deskripsi: string;
  jenis_id: number;
};
const API_URL = 'http://127.0.0.1:8000/api'
const EditMenu = (menu: menu) => {
  const [modal, setModal] = useState(false);
  const [nama_menu, setNama_menu] = useState(menu.nama_menu);
  const [harga, setHarga] = useState(menu.harga);
  const [image, setImage] = useState(menu.image);
  const [deskripsi, setDeskripsi] = useState(menu.deskripsi);
  const [jenis_id, setJenis_id] = useState(menu.jenis_id);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/menu/${menu.id}`;
    const data = { nama_menu: nama_menu, harga: harga, deskripsi
      : deskripsi, jenis_id
      : jenis_id};
    await axios.patch(endpoint, data);
    setNama_menu("");
    setHarga(1);
    setImage(1);
    setDeskripsi("");
    setJenis_id(1);
    setIsMutating(false);
    router.refresh();
    setModal(false);
  };
  return (
    <div>
      <button className="btn" onClick={handleChange}>
        Edit
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Menu</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Nama Menu</label>
              <input
                type="text"
                value={nama_menu}
                onChange={(e) => setNama_menu(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Edit Nama Menu"
              />
              <label className="label font-bold">Harga</label>
              <input
                type="number"
                value={harga}
                onChange={(e) => setHarga(e.target.valueAsNumber)}
                className="input w-full input-bordered"
                placeholder=" Edit Harga Menu"
              />
              <label className="label font-bold">Gambar</label>
              <input
                type="number"
                value={image}
                onChange={(e) => setImage(e.target.valueAsNumber)}
                className="input w-full input-bordered"
                placeholder=" Edit Gambar Menu"
              />
              <label className="label font-bold">Deskripsi</label>
              <input
                type="text"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Edit Deskripsi"
              />
              <label className="label font-bold">Jenis Id</label>
              <input
                type="number"
                value={jenis_id}
                onChange={(e) => setJenis_id(e.target.valueAsNumber)}
                className="input w-full input-bordered"
                placeholder=" Edit Jenis ID"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Submit loading ...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMenu;