import { useCallback, useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import ChatBox from './chatBox';

function Messages() {
  const [chatBox, setChatBox] = useState<boolean>(false);
  const openChatBox = useCallback(() => {
    setChatBox(true);
  }, [setChatBox]);
  const closeChatBox = useCallback(() => {
    setChatBox(false);
  }, [setChatBox]);
  return (
    <div className="fixed bottom-0 right-0 bordser border-wshite rounded-xl">
      {chatBox ? <ChatBox closeChatBox={closeChatBox} /> : <></>}
      {!chatBox ? (
        <button
          onClick={openChatBox}
          type="button"
          className="rounded-full flex justify-center shadow-lg p-3 items-center bg-[#4f4f4f]"
        >
          <FiMessageCircle color="#383838" size={40} />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Messages;
