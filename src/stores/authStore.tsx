import axios from "axios";
import { create } from "zustand";
import { userInfoUrl } from "../api/urls";
import { User } from "../types";

interface AuthStoreTypes {
  firstName: string;
  lastName: string;
  profileImg: string;
  username: "";
  email: string;
  setData: () => Promise<void>;
}

const useAuthStore = create<AuthStoreTypes>((set) => ({
  email: "",
  firstName: "",
  lastName: "",
  profileImg: "",
  username: "",
  setData: async () => {
    const { data } = await axios.get<User>(userInfoUrl, {
      withCredentials: true,
    });
    set({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      profileImg: data.profileImg,
    });
  },
}));

export default useAuthStore;
