import React from 'react'

const Login = () => {
  return (
    <div className='bg-slate-200 h-full'>
        <div class="mx-auto my-36 flex h-[300px] w-[350px] flex-col border-2 bg-white text-black shadow-xl  ">
  <div class="mx-8 mt-7 mb-1 flex flex-row justify-start space-x-2">
    <div class="h-7 w-3 bg-[#0DE6AC]"></div>
    <div class="w-3 text-center font-sans text-xl font-bold"><h1>Login</h1></div>
  </div>
  <div class="flex flex-col items-center">
    <input class="my-2 w-72 border p-2" type="email" placeholder="Username" />
    <input class="my-2 w-72 border p-2" type="password" placeholder="Password" />
  </div>
  <div class="my-2 flex justify-center">
    <button class="w-72 border bg-[#0DE6AC] p-2 font-sans">Login</button>
  </div>
  <div class="mx-7 my-3 flex justify-center font-semibold ">
    <div class='underline underline-offset-2 text-sm cursor-pointer'>
      SIGN UP</div>
  </div>
</div>
    </div>
  )
}

export default Login