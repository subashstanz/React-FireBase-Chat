import React, { useEffect, useState } from "react";
import firebaseAuth, { db } from "../base";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { RootState } from "../../redux/store";
import UserMessage from "./userMessage";
import { useSelector } from "react-redux";

type Props = {};

// const db = getFirestore(firebaseAuth);

export type allMessagesT = {
  createdAt: any;
  imageURL: string;
  text: string;
  uid: string;
  userName: string;
};

export default function Message({}: Props) {
  const userData = useSelector((state: RootState) => state);
  const { imageURL, uid, userEmail, userName } = userData?.auth?.userData;
  const [newMessage, setNewMessage] = useState<string>("");
  const [allMessages, setAllMessages] = useState<allMessagesT[]>([]);

  const sortMessages = (messages: allMessagesT[]) => {
    return (
      messages?.sort((first, second) =>
        first?.createdAt?.seconds <= second?.createdAt?.seconds ? -1 : 1
      ) || []
    );
  };

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {
    const data = db.collection("messages");
    const final = await data.get();
    const finalData = final.docs?.map((item) => {
      const {
        createdAt = null,
        imageURL = "",
        text = "",
        uid = "",
        userName = "",
      } = item.data();
      return { createdAt, imageURL, text, uid, userName };
    });
    setAllMessages(finalData);
  };

  const sendMessage = () => {
    const data = db.collection("messages");
    try {
      data.add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        userName,
        imageURL,
      });
      setNewMessage("");
      getMessage();
    } catch (error) {
      console.timeLog("errro", error);
    }
  };
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 h-[70%] overflow-auto bg-[#DAD3CC]">
        <div className="py-2 px-3">
          <div className="flex justify-center mb-2">
            <div className="rounded py-2 px-4 bg-[#DDECF2]">
              <p className="text-sm uppercase">February 20, 2018</p>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <div className="rounded py-2 px-4 bg-[#FCF4CB]">
              <p className="text-xs">
                Messages to this chat and calls are now secured with end-to-end
                encryption. Tap for more info.
              </p>
            </div>
          </div>

          {sortMessages(allMessages)?.map((message, index) => {
            return (
              <div key={index}>
                <UserMessage {...message} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-grey-lighter px-4 py-4 flex items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              opacity=".45"
              fill="#263238"
              d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
            ></path>
          </svg>
        </div>
        <div className="flex-1 mx-4">
          <input
            className="w-full border rounded px-2 py-2"
            type="text"
            value={newMessage}
            placeholder="Enter the message"
            onChange={(event) => setNewMessage(event.target.value)}
          />
        </div>
        {/* <div
          className="bg-green-900  flex item-center justify-center rounded-full h-16 w-16 cursor-pointer"
          onClick={sendMessage}
        > */} 
          <span onClick={sendMessage} className="ml-4 w-10 h-10 flex-shrink-0  cursor-pointer rounded-full flex  items-center justify-center bg-green-900 p-2 text-indigo-600 group-active:text-indigo-500">
            <svg
              className="h-5 w-5 text-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        {/* </div> */}
      </div>
   </div>
  );
}
