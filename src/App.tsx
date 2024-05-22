import lockIcon from "./assets/lock.svg"
import Input from "./components/Input"

function App() {

  return (
    <main className="min-h-screen bg-primary-gray flex items-center justify-center font-sansRoboto">
      <section className="bg-[#FFFF] border-solid border-[1px] border-[#000] flex flex-col items-center  w-[466px] max-h-[] rounded-3xl">
        <img src={lockIcon} alt="lock logo" className="my-6"/>

        <h1 className="font-sansRobotoCondensed font-bold text-primary-brown text-3xl">Preencha o Código</h1>
        <p className="mt-1 font-medium text-sm text-second-gray">Enviamos um código por email e por SMS</p>

        <form className="">
        
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
        
          <button className="block mx-auto mb-10 bg-primary-blue text-[#FFFF] font-bold text-xl py-4 px-20 rounded-2xl">Verificar OTP</button>
        </form>
      </section>
    </main>
  )
}

export default App
