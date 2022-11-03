import React, { useContext, useState } from "react";
import { authContext } from "../context/authContext";

const Login = () => {
  const { isAuth, handleLogin } = useContext(authContext);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {!isAuth && (
        <div className="relative ">
          <div className="h-full fixed inset-0 bg-neutral-900/50">
            <div class="mx-auto my-36 flex h-[300px] w-[350px] flex-col border-2 bg-white text-black shadow-xl  ">
              <div class="mx-8 mt-7 mb-1 flex flex-row justify-start space-x-2">
                <div class="h-7 w-3 bg-violet-500"></div>
                <div class="w-3 text-center font-sans text-xl font-bold">
                  <h1>LOGIN</h1>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <input
                  class="my-2 w-72 border p-2"
                  type="email"
                  placeholder="email"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                />
                <input
                  class="my-2 w-72 border p-2"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="my-2 flex justify-center">
                <button
                  class="mt-2 w-60 border bg-violet-500 p-2 font-sans rounded-full hover:bg-violet-600 text-white"
                  onClick={() => handleLogin(account, password)}
                >
                  LOGIN
                </button>
              </div>
              <div className="text-center underline cursor-pointer text-sm">
                SIGN UP
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
