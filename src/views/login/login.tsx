import { useCallback, useState } from "react";
import Btn1 from "../../components/btn1/btn1";
import { LoginBody, loginUrl } from "../../api/urls";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [logging, setLogging] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleLogin = useCallback(async (loginData: LoginBody) => {
    try {
      setLogging(true)
      const { status, data } = await axios.post<LoginBody, AxiosResponse<string, any>>(loginUrl, loginData,{withCredentials:true})

      if (status === 200) navigate('/feed')
      else alert(JSON.stringify(data))

    } catch (error) {
      alert(JSON.stringify(error))
    }finally{
      setLogging(false)
    }
  }, [])

  return (
    <main className="max-w-lg">
      <h1 className="text-center text-[50px]">SMALL SOCIAL MEDIA</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          await handleLogin({ email: email, password: password })
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full py-2 px-2 border border-[#525252] rounded-lg "
            type="email"
          />
        </label>
        <label
          htmlFor="
        "
          className="flex flex-col gap-3 items-start text-lg"
        >
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full py-2 px-2 border border-[#525252] rounded-lg"
          />
        </label>
        <Btn1 type="submit" disabled={logging}>Sign In</Btn1>
      </form>
    </main>
  );
}

export default Login;
