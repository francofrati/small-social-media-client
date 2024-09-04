import { useState } from 'react';
import useChatStore from '../../stores/chatStore';
import Message from './message';
import { IoCloseSharp } from 'react-icons/io5';

function Chat() {
  const chatStore = useChatStore((state) => state);
  if (!chatStore.selectedChat) return <></>;

  const { chatRoomId, profileImg, username } = chatStore.selectedChat;
  const chat = chatStore.chats[chatRoomId];

  const [newMessageContent, setNewMessageContent] = useState<string>('');

  return (
    <div className="h-[50vh] w-[33vw] rounded-xl shadow-2xl bg-[#383838] overflow-auto opacity-95 p-2 flex-col flex">
      <section className="flex justify-start gap-4 items-center">
        <img
          src={profileImg}
          className="rounded-full w-[30px] h-[30px] object-cover"
        />
        <span>{username}</span>
        <button
          className="flex justify-center items-center bg-[#4f4f4f] relative w-[25px] h-[25px] shadow-xl btn1-alter rounded-full ml-auto"
          type="button"
          onClick={chatStore.closeSelectedChat}
        >
          <IoCloseSharp color="#4f4f4f" size={20} />
        </button>
      </section>
      <hr className="mt-1 mb-2 border-[2px] rounded-full border-[#686868] w-full" />

      <section className="flex flex-col gap-1 items-center h-full overflow-y-auto">
        {chat.map((message) => {
          return <Message key={message.messageId} {...message} />;
        })}
      </section>
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            await chatStore.sendMessage(
              chatRoomId,
              username,
              newMessageContent
            );

            setNewMessageContent('');
          } catch (error: any) {
            console.log(error.message);
          }
        }}
      >
        <input
          type="text"
          className="btn1-alter pl-2 pr-8 w-full h-[40px] rounded-lg"
          onChange={(e) => {
            const { value } = e.target;
            setNewMessageContent(value);
          }}
          value={newMessageContent}
          placeholder="Send a new message"
        />
      </form>
    </div>
  );
}

export default Chat;
