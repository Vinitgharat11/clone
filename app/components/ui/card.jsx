import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { HiTemplate } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "@/app/redux/boardSlice";

export default function Card({ text }) {
  const dispatch = useDispatch();
  const [openPopUp, setOpenPopup] = useState(true);
  const [value, setValue] = useState("");
  const listsdata = useSelector((state) => state.boards);
  console.log(listsdata);

  const handleOpen = () => {
    setOpenPopup(!openPopUp);
  };

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleAddCard = () => {
    const newCard = {
      id: nanoid(),
      text: value,
      lists: [
      ],
    };
    const payload = {
      id: nanoid(),
      list: newCard,
    };
    dispatch(addList(payload));
  };

  const handleOnClick = () => {
    handleAddCard();
    setValue("");
  };

  return (
    <div className="my-3 bg-slate-100 py-1 rounded-lg max-w-xs w-72 ">
      <div className="flex items-center justify-between mx-5 my-1">
        <p>{text}</p>
        <BsThreeDots />
      </div>
      <div className="card-items">
        {listsdata?.boards?.map((items) => (
          <div className="" key={items}>
            {items.lists.map((list) => (
            <div className="mx-5 "key={list.id}>
              {list.cards.map((card)=>(
                <p key={card.id} className="py-2 bg-slate-400 px-4 my-3 rounded-lg text-white">{card.text}</p>
              ))}
            </div>
            ))}
          </div>
        ))}
      </div>
      {openPopUp ? (
        <div className="mt-4 mb-2 mx-5 flex justify-between items-center bg-green-200">
          {/*add popup from here*/}

          <div className="flex items-center gap-2 hover:bg-slate-300 rounded-md">
            <BiPlus className="ml-2" />{" "}
            <p className="my-1 mx-4" onClick={handleOpen}>
              Add a card
            </p>
          </div>
          <HiTemplate className="hover:ring-slate-500 hover:ring-4 rounded-md" />
        </div>
      ) : (
        <div className="">
          <div className="mx-5">
            <input
              type="text"
              placeholder="hey"
              className="outline-none ring-2 rounded-md py-4 px-3 text-sm"
              value={value}
              onChange={onChangeValue}
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              className="bg-primary text-white py-1 px-3 rounded-md mt-3 mb-2 mx-4"
              onClick={handleOnClick}
            >
              Add card
            </button>
            <CgClose size={20} />
          </div>
        </div>
      )}
    </div>
  );
}
