import lockIcon from "./assets/lock.svg"
import Input from "./components/Input"

function App() {

  return (
    <main className="min-h-screen bg-primary-gray flex items-center justify-center font-sansRoboto">
      <section className="bg-[#FFFF] flex flex-col items-center justify-evenly  w-[466px] h-96 rounded-3xl">
        <img src={lockIcon} alt="lock logo" className=""/>

        <h1 className="font-sansRobotoCondensed font-bold text-primary-brown text-3xl">Preencha o Código</h1>
        <p className="font-medium text-sm text-second-gray">Enviamos um código por email e por SMS</p>

        <form className="">
        
          <Input valor={2}/>
          <Input valor={9}/>
          <Input valor={1}/>
          <Input valor={7}/>
          <Input valor={8}/>
        
          <button className="block mx-auto mt-10 bg-primary-blue text-[#FFFF] font-bold text-xl py-2 px-8 rounded-xl">Verificar OTP</button>
        </form>
      </section>
    </main>
  )
}

export default App
