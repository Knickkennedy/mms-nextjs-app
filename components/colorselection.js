import { useState } from "react"
import Header from "./header"


export default function ColorSelection({incomingMms}) {
    const [mms, setMms] = useState(incomingMms)

    return (
        <div className="h-96">
            <Header 
                firstLine='Choose up to three colors'
                secondLine='Selecting a fourth color will replace the first color.'
            />
            <div className="flex flex-row flex-wrap">
                {
                    mms.map((mm, index) => (
                        <div key={index} className={`border-2 m-2 basis-1/5 rounded-full aspect-square h-auto ${mm.color} ${mm.available ? '' : 'opacity-25'}`}></div>
                    ))
                }
            </div>
        </div>
    )
}