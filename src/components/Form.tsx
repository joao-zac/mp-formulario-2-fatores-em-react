import { useRef, useEffect } from "react"

export default function Form() {

    useEffect(() => {
        inputRefs[0].current?.focus();
    },[]);

    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null)
    ];

    const handleInput = (index: number) => {
        const currentInput = inputRefs[index].current;
        const nextInput = inputRefs[index + 1]?.current;
    
        if (currentInput && currentInput.value.length >= 1) {
          nextInput?.focus();
        }
    };
    
    const handleBackspace = (event: React.KeyboardEvent, index: number) => {
        const currentInput = inputRefs[index].current;
        const nextInput = inputRefs[index + 1]?.current;
        const prevInput = inputRefs[index - 1]?.current;
    
        if (event.key === 'Backspace' && currentInput?.value.length === 0) {
            prevInput?.focus();
        }

        // if (event.key === 'ArrowLeft') {
        //     prevInput?.focus();
        // }

        event.key === 'ArrowLeft' ? prevInput?.focus() : event.key === 'ArrowRight' ? nextInput?.focus(): 0;
    };
    

    return(
        <form className="">
        
            {inputRefs.map((inputRef, index) => (
                <input
                    required
                    inputMode="numeric" 
                    autoComplete="one-time-code"
                    key={index}
                    type="text"
                    maxLength={1}
                    ref={inputRef}
                    onInput={() => handleInput(index)}
                    onKeyDown={(event) => handleBackspace(event, index)}
                    className="bg-third-gray mx-3 my-10 w-12 py-3 text-center text-3xl font-sansInter text-primary-brown font-medium rounded-md" 
                />
            ))}
        
            <button className="block mx-auto mb-10 bg-primary-blue text-[#FFFF] font-bold text-xl py-4 px-20 rounded-2xl">Verificar OTP</button>

        </form>
    )
}