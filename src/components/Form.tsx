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

        if (e.key === 'Backspace' && !e.currentTarget.value  && prev_input) {
            e.preventDefault()
            prev_input.focus()
            setOtp(otp.map((data, i) => (i === Array.from(e.currentTarget.parentElement!.children).indexOf(prev_input) ? '' : data)));
        }
            
    }

    function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
        e.currentTarget.select()
    }

    return(
        <form>
            
            {
                otp.map((data, i) => {
                    return <input
                        key={i}
                        required
                        inputMode="numeric" 
                        autoComplete="one-time-code"
                        type="text"
                        maxLength={1}
                        value={data}
                        onChange={(e) => handleChange(e, i)}
                        onKeyDown={handleKeyDown}
                        onFocus={handleFocus}
                        ref={i !== 0 ? null : inputref}
                        className="bg-third-gray mx-3 my-10 w-12 py-3 text-center text-3xl font-sansInter text-primary-brown font-medium rounded-md" 
                    />
                })
            }
        
            <button type="submit" className="block mx-auto mb-10 bg-primary-blue text-[#FFFF] font-bold text-xl py-4 px-20 rounded-2xl">Verificar OTP</button>

        </form>
    )
}