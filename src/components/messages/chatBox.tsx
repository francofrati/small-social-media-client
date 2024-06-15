import useChatStore from '../../stores/chatStore';

interface ChatBoxProps {
  closeChatBox: () => void;
}

function ChatBox({ closeChatBox }: ChatBoxProps) {
  const chats = useChatStore((state) => state.chats);
  return (
    <div
      onClick={closeChatBox}
      className="h-[50vh] w-[33vw] rounded-xl shadow-2xl bg-[#383838] overflow-auto opacity-90 p-2"
    >
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
