"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Jenis = {
  id: number;
  name: string;
  kategori_id: number;
};
const API_URL = "http://127.0.0.1:8000/api";
const EditJenis = (jenis: Jenis) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(jenis.name);
  const [kategori_id, setKategoriId] = useState(jenis.kategori_id);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/jenis/${jenis.id}`;
    const data = { name: name, kategori_id: kategori_id };
    await axios.patch(endpoint, data);
    setName("");
    setKategoriId(1);
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
          <h3 className="font-bold text-lg">Edit Jenis</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nama Jenis"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">ID Kategori</label>
              <input
                type="number"
                value={kategori_id}
                onChange={(e) => setKategoriId(e.target.valueAsNumber)}
                className="input w-full input-bordered"
                placeholder="ID Kategori"
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

export default EditJenis;