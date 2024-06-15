import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { useEffect } from 'react';
import useAuthStore from '../../stores/authStore';
import useFollowersStore from '../../stores/followersStore';
import useFeedStore from '../../stores/feedStore';
import Messages from '../messages/messages';
import useChatStore from '../../stores/chatStore';

function Layout() {
  const authStore = useAuthStore((state) => state);
  const followersStore = useFollowersStore((state) => state);
  const feedStore = useFeedStore((state) => state);
  const chatStore = useChatStore((state) => state);

  useEffect(() => {
    authStore.setData();
    followersStore.setData();
    feedStore.setFeed();
    chatStore.setChats();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Messages />
    </>
  );
}

export default Layout;
