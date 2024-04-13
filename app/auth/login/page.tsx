import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <main>
      <section className="bg-[#010E21] min-h-screen flex items-center justify-center">
        <div className="bg-[#E7C7A1] flex rounded-2xl shadow-lg min-h-96 min-w-fit">
          <div className="px-16 pt-10 py-10">
            <h2 className="font-bold text-2xl ">Login</h2>
            <p className="">Se já é um cliente, realize o Login</p>

            {/* Formulario */}
            <LoginForm />
            
          </div>
        </div>
      </section>
    </main >
  )
}