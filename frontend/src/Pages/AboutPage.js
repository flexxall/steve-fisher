import React, { useEffect, useState } from "react";
import axios from "axios";

const AboutPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");

    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <>
      <div>
        {chats.map((chat) => (
          <div key={chat._id}>{chat.chatName}</div>
        ))}
      </div>
      <div className="credits">
        <div>
          Freebie made by{" "}
          <a href="https://www.frebers.com/" title="Frebers">
            www.frebers.com
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
