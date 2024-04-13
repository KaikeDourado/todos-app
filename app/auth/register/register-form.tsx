'use client'

import Link from "next/link";
import { useFormState } from "react-dom"
import { createUser } from "#/actions/users";

export default function RegisterForm() {
  const errorsState = {message: null, errors: {}}
  const [state, dispatch] = useFormState(createUser, errorsState)    

  return (
    <form className="w-96 p-10 bg-[#E7C7A1] rounded-2xl shadow-lg " action={dispatch}>
      <h1 className="mb-10 font-medium text-2xl text-black  ">Crie uma conta </h1>
      <div className="grid gap-1 mb-4">
      <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
   <input
          type="text"
          name="name"
          placeholder="Username"
          className="grow"
        />
        </label>
        {state.errors?.name && state.errors.name.map(error => (
        <p key={error} className="text-sm text-red-500">{error}</p>)
      )}
      </div>
      <div className="grid gap-1 mb-4">
      <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input
          type="text"
          name="email"
          placeholder="Email"
          className="grow"
        />
        </label>
        {state.errors?.email && state.errors.email.map(error => (
        <p key={error} className="text-sm text-red-500">{error}</p>)
      )}
      </div>
      <div className="grid gap-1 mb-6">
      <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input
          type="password"
          name="password"
          placeholder="Senha"
          className="grow"
        />
        </label>
        {state.errors?.password && state.errors.password.map(error => (
        <p key={error} className="text-sm text-red-500">{error}</p>)
      )}
      </div>
      <button 
        type="submit"
        className="rounded-xl px-4 py-2 mb-4 ml-auto mr-auto flex w-full justify-center bg-none hover:bg-[#445a7e] transition-all  text-[#E7C7A1] bg-[#09172C]"
      >
        CRIAR CONTA
      </button>
      
      <p className="w-full">
        Já tem uma conta? {' '} 
        <Link href="/auth/login" className="text-violet-500 hover:underline">Faça login</Link>
      </p>
    </form>
  )
}
