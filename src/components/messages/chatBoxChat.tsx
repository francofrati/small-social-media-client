import useChatStore from '../../stores/chatStore';
import { Chat } from '../../types';

interface ChatBoxChatProps {
  chat: Chat;
}

function ChatBoxChat({ chat }: ChatBoxChatProps) {
  const chatStore = useChatStore((state) => state);

  return (
    <button
      type="button"
      onClick={async () => {
        await chatStore.setChat(chat.chatRoomId);
        chatStore.openChat(chat.chatRoomId);
      }}
      className="flex flex-col items-start gap-3 bg-[#4f4f4f] shadow-xl mb-3 last:mb-0 py-3 px-4 rounded-lg w-full hover:scale-[101%] transition-all"
    >
      <section className="flex justify-start gap-4 items-center">
        <img
          src={chat.profileImg}
          className="rounded-full w-[30px] h-[30px] object-cover"
        />
        <span>{chat.username}</span>
      </section>
      <span>{chat.lastMessage}</span>
    </button>
  );
}

export default ChatBoxChat;
