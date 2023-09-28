"use client";

import MainNav from "@/app/components/main-nav";
import Card from "@/app/components/ui/card";
import { addBoard } from "@/app/redux/boardSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";

const Popup = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [openPopUp, setOpenPopup] = useState(false);
  
  const handleOpen = () => {
    setOpenPopup(!openPopUp);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    handleAddBoard();
    setValue("");
  };

  const handleAddBoard = () => {
    const newBoard = {
      id: nanoid(),
      title: value,
      lists: [],
    };
    dispatch(addBoard(newBoard));
  };

  return (
    <>
      <div className=" bg-slate-100 py-1 rounded-lg max-w-xs mx-5 ">
        {!openPopUp ? (
        <div className="px-10 py-3 ">
          <p className="text-sm" onClick={handleOpen}>
            add another list
          </p>
        </div>
        ):(

          <div>
            <div className="mt-1 mx-5">
              <input
                type="text"
                placeholder="Enter list title..."
                className="outline-none ring-1 rounded-md pl-5 text-sm py-1.5 focus:ring-2"
                value={value}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center gap-5 mt-3 mx-5">
              <button
                className="bg-primary text-white text-xs py-2 px-3 rounded-md capitalize"
                onClick={handleOnClick}
              >
                add a list
              </button>
              <CgClose size={20} onClick={handleOpen} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default function Workspace() {
  const boardList = useSelector((state) => state.boards);

  return (
    <>
      <MainNav />
      <div className="container flex items-center">
        <div className="flex gap-x-5">
          {boardList?.boards?.map((item) => (
            <div className="" key={item.id}>
              <Card text={item.title} />
            </div>
          ))}
        </div>
        <Popup />
      </div>
    </>
  );
}
