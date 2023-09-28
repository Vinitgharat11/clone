'use client'
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";


import { BsPerson, BsTrello } from "react-icons/bs";
import { CiWavePulse1 } from "react-icons/ci";
import { HiOutlineViewGrid, HiTemplate } from "react-icons/hi";
import { AiOutlinePlus, AiTwotoneSetting } from "react-icons/ai";

import MainNav from "./components/main-nav";


const BoardList = [
  { id: 1, icon: <BsTrello className="mx-2" />, name: "Boards" },
  { id: 2, icon: <HiTemplate className="mx-2" />, name: "Templates" },
  { id: 3, icon: <CiWavePulse1 className="mx-2" />, name: "Home" },
];

const menu = [
  { id: 1, name: "Boards", icon: <BsTrello /> },
  { id: 2, name: "Views", icon: <HiOutlineViewGrid /> },
  { id: 3, name: "Members", icon: <BsPerson /> },
  { id: 4, name: "Settings", icon: <AiTwotoneSetting /> },
];

const list = [1, 2, 3];

export default function Home() {
  const params = useParams()
  console.log(params)
  const [activeTabName, setActiveTabName] = useState("Boards");

  const handleTabClick = (name) => {
    setActiveTabName(name);
  };
  return (
    <>
      <div className="">
        <MainNav />
        <div className="container flex ">
          <section className="left-side ">
            <div className="mx-24 my-16 border-b-2 ">
              {BoardList.map((items) => (
                <div
                  className={`flex items-center gap-2 my-2 pr-28   py-2 rounded-lg cursor-pointer  ${
                    activeTabName === items.name
                      ? "bg-blue-200/95 text-blue-800"
                      : ""
                  }`}
                  key={items.id}
                  onClick={() => handleTabClick(items.name)}
                >
                  {items.icon}
                  <h1 className="text-xs">{items.name}</h1>
                </div>
              ))}
            </div>
            <div className="mx-24 my-16  max-w-[250px]">
              <div className="flex items-center text-xs justify-between">
                <p className="">Workspaces</p>
                <AiOutlinePlus />
              </div>
            </div>
          </section>
          <section className="right-side my-16 w-[90%]">
            <p className="font-bold uppercase text-slate-500 ">
              Your Workspace
            </p>
            <div className=" flex items-center gap-3 my-3 justify-between ">
              <div className="flex items-center  gap-3">
                <p className="bg-gradient-to-l from-emerald-400 via-30% to-emerald-500 to-60% px-3  py-2 rounded-md text-center text-white text-md font-bold">
                  T
                </p>
                <p className="text-bold">Trello Workspace</p>
              </div>
              <div className="flex gap-2">
                {menu.map((item) => (
                  <div
                    className="flex items-center gap-2 bg-slate-200 px-4 py-2 rounded-md text-slate-800 cursor-pointer hover:bg-slate-300 text-xs"
                    key={item.id}
                  >
                    {item.icon}
                    <h1>{item.name}</h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 py-6">
              {list.map((i) => (
                <div
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 mx-3 px-3 my-2 rounded-lg text-white cursor-pointer"
                key={i}
                >
                  <p>Board Name</p>
                </div>
              ))}
              <Link href={`workspace/test`}>
                <div className="bg-slate-400/10 p-10 mx-3 px-3 my-2 rounded-lg text-white cursor-pointer">
                  <p className="text-black">Add new Board</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
