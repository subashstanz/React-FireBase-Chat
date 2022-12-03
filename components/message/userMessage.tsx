import React from "react";
import { allMessagesT } from "./message";

const UserMessage = (props: allMessagesT) => {
  const { createdAt, imageURL, text, uid, userName } = props;
  console.log('prosp',props)
  return (
    <div className="flex mb-2">
      <div className="rounded py-2 px-3 bg-[#F2F2F2]">
        <p className="text-sm text-teal">{userName}</p>
        <p className="text-sm mt-1">
         {text}
        </p>
        <p className="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
      </div>
    </div>
  );
};

export default UserMessage;
