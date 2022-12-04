import React from "react";
import { formatDate } from "../../helper/formatDate";
import { allMessagesT } from "./message";

const UserMessage = (props: allMessagesT) => {
  const { createdAt, imageURL, text, uid, userName } = props;

  return (
    <div className="flex mb-2">
      <div className="rounded py-2 px-3 bg-[#F2F2F2]">
        <div className="flex flex-col">
          <div className='flex items-center justify-center'>
            <div>
              <div className="flex items-center justify-center w-10 h-10 mx-2 overflow-hidden rounded-full">
                <img src={imageURL} />
              </div>
            </div>
            <p className="text-sm text-teal font-semibold">{userName}</p>
          </div>
        </div>
        <div className='flex justify-end'><p className="text-sm mt-1">{text}</p></div>
        <p className="text-right text-xs text-grey-dark mt-1">{createdAt !== null ? formatDate(createdAt)  :''}</p>
      </div>
    </div>
  );
};

export default UserMessage;
