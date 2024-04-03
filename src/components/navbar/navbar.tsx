import React, { useState } from 'react'
import useAuthStore from '../../stores/authStore'
import { IoSearch } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import useFollowersStore from '../../stores/followersStore';
import CustomModal from '../customModal/customModal';
import { CiCircleCheck,CiCircleRemove } from "react-icons/ci";
function Navbar() {
const [contactsModal,setContactsModal] = useState<boolean>(false)

    const profileImage = useAuthStore(state => state.profileImg)
    const {followRequests,followers,followed} = useFollowersStore(state=>state)

    return (
<>
        <nav className='w-full  px-4 pt-4'>
            <section className='h-16 flex justify-between items-center shadow-xl rounded-full py-2 px-2 bg-[#383838]'>

            <section className='ml-6 font-bold leading-[18px] cursor-pointer text-[#242424]'>
                <p>
                    Small
                </p>
                <p>
                    Social
                </p>
                <p>
                    Media
                </p>
            </section>
            <section className='h-full flex justify-end items-center gap-4'>
                <label htmlFor="" className='bg-[#4f4f4f] flex items-center h-full rounded-full shadow-xl relative'>
                   <IoSearch size={30} color='#383838' className='absolute select-none z-0 left-2'/>
                    <input type="text" placeholder='Search in Small Social Media' className='h-full pl-12 pr-2 w-[30vw] text-lg bg-transparent rounded-full z-10'/>
                    </label>
                <button onClick={()=>{setContactsModal(true)}} className='bg-[#4f4f4f] rounded-full h-[48px] w-[48px] p-2 flex items-center justify-center shadow-xl relative'>
                <LuUsers size={30} color='#383838'/>
                {
                    followRequests && followRequests.length?<div className='bg-[#4f4f4f]s bg-white rounded-full w-5 h-5 flex items-center justify-center absolute right-[-4px] bottom-[-4px] text-[#4f4f4f] font-bold text-sm'>{followRequests.length}</div>:<></>
                }
                </button>
            <section className='h-full'>
            <img src={profileImage} alt="Profile Image" className='h-[48px] w-[48px] cursor-pointer rounded-full shadow-xl object-cover' />
            </section>
            </section>
            </section>
        </nav>
        {contactsModal?
        <CustomModal handleClose={()=>{setContactsModal(false)}}>
            <div>
                <section>
                <h3 className='mb-2'>Follow Requests</h3>
                {followRequests.map((request)=>{
                    return <div className='mb-2 ml-1 border-b-2 last:border-b-0 border-b-[#4f4f4f] pb-2 text-white flex items-center justify-between gap-2 capitalize w-[30dvw]'>{request.firstName+' '+ request.lastName} <section className='flex items-center gap-2 justify-end w-[30%]'>
    <CiCircleCheck size={30}/> <CiCircleRemove size={30}/>
    </section>
    </div>
                })}
                </section>
                <section>
                <h3 className='mb-2'>Followers</h3>
                {followers.map((request)=>{
                    return <div className='mb-2 ml-1 border-b-2 last:border-b-0 border-b-[#4f4f4f] pb-2 text-white flex items-center justify-between gap-2 capitalize w-[30dvw]'>{request.firstName+' '+ request.lastName}
    </div>
                })}
                </section>
                <section>
                <h3 className='mb-2'>Followed</h3>
                {followed.map((request)=>{
                    return <div className='mb-2 ml-1 border-b-2 last:border-b-0 border-b-[#4f4f4f] pb-2 text-white flex items-center justify-between gap-2 capitalize w-[30dvw]'>{request.firstName+' '+ request.lastName}
    </div>
                })}
                </section>
            </div>
        </CustomModal>
        :<></>}
                </>
    )
}

export default Navbar