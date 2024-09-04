import { useCallback, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import useFollowersStore from '../../stores/followersStore';
import { User } from '../../types';
function NewChat() {
  const followed = useFollowersStore((state) => state.followed);

  const [searchBar, setSearchBar] = useState<boolean>(false);
  const [searchFollowed, setSearchFollowed] = useState<Array<User>>([]);

  const closeSearchBar = useCallback(() => {
    setSearchBar(false);
  }, []);
  const openSearchBar = useCallback(() => {
    setSearchBar(true);
  }, []);

  const handleFollowedSearch = useCallback(
    (search: string) => {
      const matchedFollowed = followed.filter((user) => {
        const usernameMatch = user.username.includes(search);
        if (usernameMatch) return true;
        return false;
      });
      setSearchFollowed(matchedFollowed);
    },
    [followed]
  );

  return (
    <div>
      {searchBar === false ? (
        <button
          className="flex justify-center items-center bg-[#4f4f4f] relative shadow-xl h-[40px] btn1-alter rounded-lg px-2"
          type="button"
          onClick={() => {
            setSearchFollowed(followed);
            openSearchBar();
          }}
        >
          New Chat
        </button>
      ) : (
        <></>
      )}
      {searchBar ? (
        <div className="w-full relative">
          <label className="relative">
            <input
              type="text"
              className="btn1-alter pl-2 pr-8 w-full h-[40px] rounded-lg"
              onChange={(e) => {
                const { value } = e.target;
                handleFollowedSearch(value);
              }}
              placeholder="Search User"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={closeSearchBar}
            >
              <IoClose size={25} color="#4f4f4f" />
            </button>
          </label>
          <section className="btn1-alter w-full absolute -top-[-45px] h-max-[300px] rounded-lg p-2 overflow-auto">
            {searchFollowed.length
              ? searchFollowed.map((user) => {
                  return (
                    <section
                      key={user.username}
                      className="flex justify-start gap-4 items-center bg-[#4f4f4f] shadow-xl mb-3 last:mb-0 py-3 px-4 rounded-lg"
                    >
                      <img
                        src={user.profileImg}
                        className="rounded-full w-[30px] h-[30px] object-cover"
                      />
                      <span>{user.username}</span>
                    </section>
                  );
                })
              : 'Not found'}
          </section>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default NewChat;
