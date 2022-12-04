import Router from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import firebaseAuth from "./base";

type Props = {};

function SideBar({}: Props) {
  const userData = useSelector((state: RootState) => state?.auth?.userData);
  console.log("sidebae", userData);

  const signOut = () => {
    firebaseAuth?.auth()?.signOut();
    Router.push("/login");
  };
  return (
    <div className="flex flex-col items-center w-64 h-full overflow-hidden text-gray-400 bg-[#075E54] ">
      <div className="h-full  flex flex-col space-y-3 items-center justify-center">
        <div className="flex items-center justify-center w-20 h-20 mx-2 overflow-hidden rounded-full">
          <img src={userData?.imageURL} />
        </div>

        <div className="flex flex-col space-y-1 items-center justify-center text-gray-100">
          <div>{userData?.userName}</div>
          <div className="text-sm">{userData?.userEmail}</div>
        </div>
      </div>

      <div
        className="flex mb-8 cursor-pointer items-center text-gray-900 justify-center rounded-xl border-4 border-green-800 bg-green-100 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50"
        onClick={signOut}
      >
        Sign Out
        <span aria-hidden="true" className="ml-1.5" role="img">
          🤔
        </span>
      </div>
    </div>
  );
}

export default SideBar;
