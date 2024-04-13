import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <main className="w-full bg-[#09172C] 
      h-screen flex  left-auto">
      <div className="flex justify-center h-fit mt-28 bg-black items-center ml-auto mr-auto">
        <RegisterForm />
      </div>
    </main>
  )
}