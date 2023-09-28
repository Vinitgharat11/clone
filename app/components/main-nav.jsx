"use client";


import { CgMenuGridO } from "react-icons/cg";
import { BiLogoTrello } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { BsQuestionCircle } from "react-icons/bs";
import { ButtonComponent } from "./ui/button";
import Input from "./ui/input";
import NavMenu from "./ui/navMenu";
import InputComponent from "./ui/input";
import ProfileIcon from "./ui/profileIcon";


export default function MainNav() {
  return (
    <nav className="flex justify-between  border-b-2">
      <div className="Nav-links flex items-center p-2 mx-3">
          <div className="logo flex gap-5">
            <CgMenuGridO size={24} />
            <div className="flex gap-1">
              <BiLogoTrello size={24} />
              <h1 className="font-extrabold">Trello</h1>
            </div>
          </div>
          <NavMenu/>
          <ButtonComponent button={'Create'}/>
      </div>
      <div className="flex items-center mx-5 gap-3 ">
        <InputComponent/>
        <GoBell className="rotate-45"/>
        <BsQuestionCircle/>
        <ProfileIcon/>
      </div>
    </nav>
  );
}
