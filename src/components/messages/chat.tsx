import useChatStore from '../../stores/chatStore';

function Chat() {
  const chatStore = useChatStore((state) => state);
  if (!chatStore.selectedChat) return <></>;

  const chat = chatStore.chats[chatStore.selectedChat];

  return (
    <div className="h-[50vh] w-[33vw] rounded-xl shadow-2xl bg-[#383838] overflow-auto opacity-95 p-2">
      {chat.map((message) => {
        return <div>{message.message}</div>;
      })}
    </div>
  );
}

export default Chat;
