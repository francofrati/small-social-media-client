import { useCallback, useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import ChatBox from './chatBox';
import useChatStore from '../../stores/chatStore';
import Chat from './chat';

function Messages() {
  const [chatBox, setChatBox] = useState<boolean>(false);

  const chatStore = useChatStore((state) => state);

  const openChatBox = useCallback(() => {
    setChatBox(true);
  }, [setChatBox]);

  const closeChatBox = useCallback(() => {
    setChatBox(false);
  }, [setChatBox]);

  return (
    <div className="fixed bottom-[20px] right-[20px] bordser border-wshite rounded-xl flex gap-4">
      {chatBox && chatStore.selectedChat ? <Chat /> : <></>}
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
