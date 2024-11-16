import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage.js";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utility/chatSlice.js";
import { RandomNameGenerator } from "../utility/helper.js";

const LiveChat = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // Api Polling
      dispatch(
        addMessage({
          name: RandomNameGenerator(),
          message: "Lorem Ipsum Dolor Site",
        })
      );
    }, 1500);

    return () => {
      clearInterval(i); // if we will not clear the interval than it will continiously calling api even we are on another page
    };
  }, []);

  const handleSend = () => {
    // Send Message to the server
    dispatch(addMessage({ name: "Sumit", message: text }));
    setText(""); // Clear the input field after sending message
  };

  return (
    <>
      {/* Live Chat Box */}
      <h1 className="text-center font-bold text-gray-700 py-2 border-b border-gray-300 bg-gray-100">
        Live Chat
      </h1>
      <div className="h-[500px] overflow-y-scroll flex flex-col-reverse">
        <div className="p-2">
          {chatMessages.map((m, i) => (
            <ChatMessage name={m.name} key={i} message={m.message} />
          ))}
        </div>
      </div>

      {/* Input Section */}
      <form
        className="flex items-center mt-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          value={text}
          className="flex-grow border border-gray-300 rounded-full p-2 focus:outline-none focus:ring focus:ring-blue-300"
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Type your message here..."
        />
        <button
          className="ml-2 font-medium px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
          onClick={() => handleSend()}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
