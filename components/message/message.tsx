import React, { useEffect, useState } from "react";
import firebaseAuth from "../base";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../redux/store";
import UserMessage from "./userMessage";

type Props = {};

// const db = getFirestore(firebaseAuth);
const db = firebase.firestore();

export type allMessagesT = {
  createdAt: any;
  imageURL: string;
  text: string;
  uid: string;
  userName: string;
};

export default function Message({}: Props) {
  const userData = useSelector((state: RootState) => state);
  console.log("datuserDataa", userData?.auth?.userData);
  const { imageURL, uid, userEmail, userName } = userData?.auth?.userData;
  const [newMessage, setNewMessage] = useState<string>("");
  const [allMessages, setAllMessages] = useState<allMessagesT[]>([]);

  console.log("allMessages", allMessages);

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
    // <div className="flex flex-col space-y-1">
    //   <div>
    //     {/* {me} */}
    //     {/* <div>
    //       <input
    //         value={newMessage}
    //         type="text"
    //         onChange={(event) => setNewMessage(event.target.value)}
    //       />
    //       <div
    //         onClick={sendMessage}
    //         className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
    //       >
    //         <span className="sr-only"> Download </span>

    //         <svg
    //           className="h-5 w-5"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M14 5l7 7m0 0l-7 7m7-7H3"
    //           />
    //         </svg>
    //       </div>
    //     </div> */}
    //     {/* <UserMessage /> */}
    //   </div>
    // </div>
    <div className="w-full h-full">
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

          {allMessages?.map((message, index) => {
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
        <div
          className="bg-green-900  flex item-center justify-center rounded-full h-16 w-16 cursor-pointer"
          onClick={sendMessage}
        >
          <div className="text-gray-100 flex item-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="text-gray-100"
            >
              <path
                fill="#263238"
                fill-opacity=".45"
                d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
