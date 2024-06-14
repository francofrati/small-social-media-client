import { FaImage, FaUserTag } from 'react-icons/fa6';

function AddPost() {
  return (
    <section className="w-full min-h-[150px] mt-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full flex flex-col gap-2 justify-start"
      >
        <textarea
          placeholder="What are you posting today?"
          className="px-2 py-1 rounded-lg shadow-lg resize-none outline-none w-full min-h-20 bg-[#4f4f4f]"
        />
        <section className="flex justify-end items-center gap-4">
          <button type="button" className="shadow-xl">
            <FaImage color="#4f4f4f" size={30} />
          </button>
          <button type="button" className="shadow-xl">
            <FaUserTag color="#4f4f4f" size={30} />
          </button>
          <button
            className="btn1 w-[100px] btn1-hover cursor-pointer"
            type="submit"
          >
            Post
          </button>
        </section>
      </form>
      <hr className="mt-5 border-[3px] rounded-full border-[#383838] w-full" />
    </section>
  );
}

export default AddPost;
