import React from 'react';

interface ChatBoxProps {
  closeChatBox: () => void;
}

function ChatBox({ closeChatBox }: ChatBoxProps) {
  return (
    <div
      onClick={closeChatBox}
      className="h-[50vh] w-[33vw] border border-white"
    >
      Hello! I'm the <b>ChatBox</b>
    </div>
  );
}

export default ChatBox;
