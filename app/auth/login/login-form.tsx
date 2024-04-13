'use client'
import { authenticate } from "#/actions/users";
import Link from "next/link";
import { useFormState } from "react-dom";

export function LoginForm() {
  const [state, dispatch] = useFormState(authenticate, undefined)

  return (
    <div>
      <form className="w-fit p-10" action={dispatch}>
        {/* Email */}
        <div className="flex flex-col">
          <label className="input input-bordered flex items-center gap-2 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              name="email"
              id="email"
            />
          </label>

          {/* Senha */}
          <label className="input input-bordered flex items-center gap-2 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input
              type="password"
              className="grow"
              placeholder="Senha"
              name="password"
              id="password"
            />
          </label>
          <button className="bg-[#010E21] text-[#E7C7A1] rounded-xl pt-3 py-3 mt-3 hover:bg-[#445a7e] transition-all">
            LOGIN
          </button>
        </div>

        {/* Esqueceu a senha / não possui conta */}

        <div className="mt-7 grid grid-cols-3 items-center text-black">
          <hr className="border-black" />
          <p className="text-center">OU</p>
          <hr className="border-black" />
        </div>


      </form>

      <div className=" py-4 text-xs flex justify-between">
        <p className="pt-3 py-3">Não possui conta ainda?</p>
        <a href="/auth/register/"><button className=" rounded-xl pt-3 p-5 py-3 justify-center bg-[#010E21] text-[#E7C7A1] hover:bg-[#445a7e] transition-all">Registre-se</button></a>
      </div>
    </div>

  )
}