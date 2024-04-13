'use client'

import Link from "next/link";
import { useFormState } from "react-dom"
import { createUser } from "#/actions/users";

export default function RegisterForm() {
  const errorsState = {message: null, errors: {}}
  const [state, dispatch] = useFormState(createUser, errorsState)    

  return (
    <form className="w-96 p-10 border rounded" action={dispatch}>
      <h1 className="mb-10 font-medium text-lg text-gray-600">Crie uma conta para continuar</h1>
      <div className="grid gap-1 mb-4">
        <label htmlFor="name" className="text-gray-600">Github Username</label>
        <input
          type="text"
          name="name"
          placeholder="dracoalv1"
          className="max-w-xs h-9 px-2 text-sm placeholder:text-gray-300 border rounded"
        />
        {state.errors?.name && state.errors.name.map(error => (
        <p key={error} className="text-sm text-red-500">{error}</p>)
      )}
      </div>
      <div className="grid gap-1 mb-4">
        <label htmlFor="email" className="text-gray-600">E-mail</label>
        <input
          type="text"
          name="email"
          placeholder="seuemail@dvsk.com"
          className="max-w-xs h-9 px-2 text-sm placeholder:text-gray-300 border rounded"
        />
        {state.errors?.email && state.errors.email.map(error => (
        <p key={error} className="text-sm text-red-500">{error}</p>)
      )}
      </div>
      <div className="grid gap-1 mb-6">
        <label htmlFor="password" className="text-gray-600">Password</label>
        <input
          type="password"
          name="password"
          className="max-w-xs h-9 px-2 text-sm placeholder:text-gray-300 border rounded"
        />
        {state.errors?.password && state.errors.password.map(error => (
        <p key={error} className="text-sm text-red-500">{error}</p>)
      )}
      </div>
      <button 
        type="submit"
        className="px-4 py-2 mb-4  bg-violet-50 hover:bg-violet-100 border rounded"
      >
        Criar conta
      </button>
      <p className="w-full">
        Já tem uma conta? {' '} 
        <Link href="/auth/login" className="text-violet-500 hover:underline">Faça login</Link>
      </p>
    </form>
  )
}
