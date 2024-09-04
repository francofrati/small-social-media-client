import useChatStore from '../../stores/chatStore';
import { FaAngleDown } from 'react-icons/fa6';
import NewChat from './newChat';
import ChatBoxChat from './chatBoxChat';
interface ChatBoxProps {
  closeChatBox: () => void;
}

function ChatBox({ closeChatBox }: ChatBoxProps) {
  const chats = useChatStore((state) => state.chatBoxChats);
  return (
    <div className="h-[50vh] w-[33vw] rounded-xl shadow-2xl bg-[#383838] overflow-auto opacity-95 p-2">
      <section className="mb-2 flex items-center justify-between">
        <NewChat />
        <button
          className="flex justify-center items-center bg-[#4f4f4f] relative w-[40px] h-[40px] shadow-xl btn1-alter rounded-full "
          type="button"
          onClick={closeChatBox}
        >
          <FaAngleDown color="#4f4f4f" size={30} className="mt-1" />
        </button>
      </section>
      {chats.map((chat) => {
        return <ChatBoxChat key={chat.chatRoomId} chat={chat} />;
      })}
    </div>
  );
}

export default ChatBox;
