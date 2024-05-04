interface PostHeaderProps {
  profileImg: string | null;
  username: string;
}

function PostHeader({ profileImg, username }: PostHeaderProps) {
  return (
    <section className="flex items-center gap-3 my-4">
      {profileImg ? (
        <img
          className="w-12 h-12 rounded-full object-cover shadow-xl"
          src={profileImg}
        />
      ) : (
        <></>
      )}
      <div className="text-[#ffffff] font-semibold text-xl">{username}</div>
    </section>
  );
}

export default PostHeader;
