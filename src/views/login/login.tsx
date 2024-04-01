import Btn1 from "../../components/btn1/btn1";

function Login() {
  return (
    <main className="max-w-lg">
      <h1 className="text-center text-[50px]">SMALL SOCIAL MEDIA</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col gap-10 "
      >
        <label
          htmlFor="
        "
          className="flex flex-col gap-3 items-start text-lg"
        >
          Email
          <input
            className="w-full py-2 px-2 border border-[#525252] rounded-lg "
            type="text"
          />
        </label>
        <label
          htmlFor="
        "
          className="flex flex-col gap-3 items-start text-lg"
        >
          Password
          <input
            type="password"
            className="w-full py-2 px-2 border border-[#525252] rounded-lg"
          />
        </label>
        <Btn1>Sign In</Btn1>
      </form>
    </main>
  );
}

export default Login;
