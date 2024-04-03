import axios, { AxiosResponse } from "axios";
import { create } from "zustand";
import { UserContactsResponse, userContacts } from "../api/urls";
import { User } from "../types";

interface FollowersStoreTypes {
    followers:Array<User>,
    followed:Array<User>,
    followRequests:Array<User>
    setData: ()=>Promise<void>
}

const useFollowersStore = create<FollowersStoreTypes>((set) => ({
    followed:[],
    followers:[],
    followRequests:[],
    setData: async () => {
        const { data } = await axios.get<any,AxiosResponse<UserContactsResponse>>(userContacts,{withCredentials:true})
        set({followed:data.followeds,followers:data.followers,followRequests:data.followRequests})
    }
}))

export default useFollowersStore