import React from 'react';
import { Message as MessageType } from '../../types';
import useAuthStore from '../../stores/authStore';

function Message({ createdAt, message, messageId, username }: MessageType) {
  const { username: currentUser } = useAuthStore();
  const messageDate = new Date(createdAt).toLocaleString();
  return (
    <section
      className={`flex flex-col gap-[2px] ${currentUser === username ? 'ml-auto' : 'mr-auto'}`}
    >
      <div
        className={`${currentUser === username ? 'bg-[#4f4f4f]' : 'bg-[#686868]'} py-1 px-2 text-base rounded-lg shadow-xl relative`}
      >
        {message}
      </div>
      <span
        className={`${currentUser === username ? 'ml-auto mr-1' : 'mr-auto ml-1'} text-[10px]`}
      >
        {messageDate}
      </span>
    </section>
  );
}

export default Message;
