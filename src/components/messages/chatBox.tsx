import useChatStore from '../../stores/chatStore';
import { FaAngleDown } from 'react-icons/fa6';
import NewChat from './newChat';
interface ChatBoxProps {
  closeChatBox: () => void;
}

function ChatBox({ closeChatBox }: ChatBoxProps) {
  const chats = useChatStore((state) => state.chats);
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
        return (
          <div className="flex flex-col items-start gap-3 bg-[#4f4f4f] shadow-xl mb-3 last:mb-0 py-3 px-4 rounded-lg">
            <section className="flex justify-start gap-4 items-center">
              <img
                src={chat.profileImg}
                className="rounded-full w-[30px] h-[30px] object-cover"
              />
              <span>{chat.username}</span>
            </section>
            <span>{chat.lastMessage}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ChatBox;
