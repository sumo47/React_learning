import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-md my-1">
      <img
        className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer rounded-full m-1"
        src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        alt="user"
      />
      <h1 className="mr-3 font-bold">{name}</h1>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
