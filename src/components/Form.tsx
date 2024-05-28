import { useState, ChangeEvent, useRef, useEffect } from "react"

export default function Form() {
    const [otp, setOtp] = useState(new Array(5).fill(""))
    const inputref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputref.current?.focus()
    }, []);

    function handleChange(e: ChangeEvent<HTMLInputElement>, index: number) {

        if(isNaN(Number(e.target.value))) return false;

        setOtp([...otp.map((data, i) => (i === index ? e.target.value : data))])

        const next_input = e.currentTarget.nextSibling as HTMLInputElement | null
        
        if(next_input && index < 4 && e.target.value !== '') {
            next_input.focus()
        }
        
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        const prev_input = e.currentTarget.previousSibling as HTMLInputElement | null
        const next_input = e.currentTarget.nextElementSibling as HTMLInputElement | null

        if (e.key === 'Backspace' && !e.currentTarget.value  && prev_input) {
            e.preventDefault()
            prev_input.focus()
            setOtp(otp.map((data, i) => (i === Array.from(e.currentTarget.parentElement!.children).indexOf(prev_input) ? '' : data)));
        }  else if (e.key === 'ArrowLeft' && prev_input) {
            e.preventDefault()
            prev_input.focus();
        } else if (e.key === 'ArrowRight' && next_input) {
            e.preventDefault()
            next_input.focus();
        }
            
    }

    function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text').slice(0, otp.length).split('');

        if(pasteData.length < 5) {
            alert("O código não possui 5 Dígitos!")
            return;
        }
        
        const updatedOtp = otp.map((data, i) => pasteData[i] || data);
        
        setOtp(updatedOtp);
    }

    function handleSubmit() {
        alert("Parabéns, Você preencheu perfeitamento o formulário!")
    }

    return(
        <form onSubmit={handleSubmit} >
            
            {
                otp.map((data, i) => {
                    return <input
                        key={i}
                        required
                        inputMode="numeric" 
                        autoComplete="one-time-code"
                        type="text"
                        ref={i !== 0 ? null : inputref}
                        maxLength={1}
                        value={data}
                        onChange={(e) => handleChange(e, i)}
                        onKeyDown={handleKeyDown}
                        onFocus={(e) => e.currentTarget.select()}
                        onPaste={handlePaste}
                        className="bg-third-gray mx-3 my-10 w-12 py-3 text-center text-3xl font-sansInter text-primary-brown font-medium rounded-md" 
                    />
                })
            }
        
            <button type="submit" className="block mx-auto mb-10 bg-primary-blue text-[#FFFF] font-bold text-xl py-4 px-20 rounded-2xl">Verificar OTP</button>

        </form>
    )
}