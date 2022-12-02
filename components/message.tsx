import React, { useEffect, useState } from "react";
import firebaseAuth from "./base";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";

type Props = {};

// const db = getFirestore(firebaseAuth);
const db = firebase.firestore();

export default function Message({}: Props) {
  const [newMessage, setNewMessage] = useState<string>("");

  console.log("newMessage", newMessage);

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {
    const data = db.collection("messages");
    console.log("finalsdata", data);
    //  data.get().then(data => console.log('2323',data))
    // console.log('final',final)
    const final = await data.get();
    console.log("achu", final.docs);
    const map = final.docs?.map((item) => item.data());
    console.log("3333", map);
  };
  return (
    <div className="flex flex-col space-y-1">
      <div>
        {/* {me} */}
        <div>
          <input
            value={newMessage}
            type="text"
            onChange={(event) => setNewMessage(event.target.value)}
          />
          <div
            className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            
          >
            <span className="sr-only"> Download </span>

            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
