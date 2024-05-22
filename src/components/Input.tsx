type Props = {
    valor?: number;
}

export default function Input({valor}: Props) {
    return(
        <input type="number" value={valor} className="[appearance:textfield] bg-third-gray mx-2 w-9 py-2 text-center text-3xl font-sansInter text-primary-brown font-medium rounded-md"/>
    )
}