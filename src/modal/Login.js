import React, { useContext, useState } from 'react';
import { authContext } from '../context/authContext';

const Login = () => {
  const { handleLogin, handleSignUp } = useContext(authContext);
  const [isSignUp, setIsSignUp] = useState(false);
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function toggleSignUp() {
    setIsSignUp(!isSignUp);
  }

  return (
    <>
      <div className="relative">
        <div className="h-full fixed inset-0 bg-neutral-900/50">
          <div class="mx-auto my-36 fle p-[30px] w-[350px] flex-col border-2 bg-white text-black shadow-xl  ">
            <div class="mt-7 mb-1 flex flex-row justify-start space-x-2">
              <div class="h-7 w-3 bg-violet-500"></div>
              <div class="text-center font-sans text-xl font-bold">
                {isSignUp ? <h1>Sign Up</h1> : <h1>LOGIN</h1>}
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
              {isSignUp && (
                <input
                  class="my-2 w-72 border p-2"
                  type="password"
                  placeholder="confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              )}
            </div>
            <div class="my-2 flex justify-center">
              <button
                class="mt-2 w-60 border bg-violet-500 p-2 font-sans rounded-full hover:bg-violet-600 text-white"
                onClick={() => {
                  isSignUp
                    ? handleSignUp(account, password)
                    : handleLogin(account, password);
                }}
              >
                {!isSignUp ? 'Login' : 'SignUp'}
              </button>
            </div>
            <div
              className="text-center underline cursor-pointer text-sm"
              onClick={toggleSignUp}
            >
              {isSignUp ? 'Login' : 'SignUp'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
