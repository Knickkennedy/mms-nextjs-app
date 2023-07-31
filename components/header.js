import { useState } from "react"


export default function Header({firstLine, secondLine}){
    const [first, setFirst] = useState(firstLine)
    const [second, setSecond] = useState(secondLine)

    return(
        <>
            <h1 className="text-xl font-extrabold text-center pt-5">
                { first }
            </h1>
            <h6 className="text-xs text-center pt-1 pb-6">
                { second }
            </h6>
        </>
    )
}