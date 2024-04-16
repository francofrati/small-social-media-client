import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import { Fragment, useEffect } from "react";
import useAuthStore from "../../stores/authStore";
import useFollowersStore from "../../stores/followersStore";
import CustomModal from "../customModal/customModal";
import useFeedStore from "../../stores/feedStore";

function Layout() {
  const authStore = useAuthStore((state) => state);
  const followersStore = useFollowersStore((state) => state);
  const feedStore = useFeedStore((state) => state);
  useEffect(() => {
    authStore.setData();
    followersStore.setData();
    feedStore.setFeed();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
