import { useState, useEffect } from "react"
import ColorSelection from "./colorselection"
import ImageSelection from "./imageselection"
import PackageSelection from "./packageselection"


export default function Floatbox() {
    const [index, setIndex] = useState(0)
    const [showColorSelection, setColor] = useState(true)
    const [showImageSelection, setImage] = useState(false)
    const [showPackageSelection, setPackage] = useState(false)
    const [mms, setMms] = useState([
        {
            id: 'RC0001',
            color: 'bg-mm-red border-solid border-4 border-black',
            available: true
        },
        {
            id: 'WC0001',
            color: 'bg-white',
            available: true
        },
        {
            id: 'BC0001',
            color: 'bg-mm-blue',
            available: true
        },
        {
            id: 'LBC0001',
            color: 'bg-mm-lightblue border-solid border-4 border-black',
            available: true
        },
        {
            id: 'DBC0001',
            color: 'bg-mm-darkblue',
            available: true
        },
        {
            id: 'DPC0001',
            color: 'bg-mm-darkpink',
            available: true
        },
        {
            id: 'PC0001',
            color: 'bg-mm-pink',
            available: true
        },
        {
            id: 'OC0001',
            color: 'bg-mm-orange',
            available: true
        },
        {
            id: 'DYC0001',
            color: 'bg-mm-darkyellow',
            available: true
        },
        {
            id: 'YC0001',
            color: 'bg-mm-yellow border-solid border-4 border-black',
            available: true
        }])

    useEffect(() => {
        for (const index in mms) {
            fetch('https://api.watsoncommerce.ibm.com/inventory/us-1bbb91c7/v2/availability/network', {
                method: 'POST',
                body: JSON.stringify({
                    distributionGroupId: "DIAB_ALL",
                    lines: [
                        {
                            lineId: "1",
                            itemId: mms[index].id,
                            unitOfMeasure: "EACH"
                        }
                    ],
                    segment: "",
                    segmentType: "",
                    considerSafetyStock: false
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_BEARER_TOKEN
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    if (data.lines[0].networkAvailabilities[0].currentAvailability.availableQuantity <= 0) {
                        updateAvailability(index)
                    }
                })
        }
    }, [])

    const handleButtonClick = (ind) => {
        if (ind == 0) {
            setColor(false)
            setImage(true)
            setPackage(false)
            setIndex(1)
        }
        else if (ind == 1) {
            setColor(false)
            setImage(false)
            setPackage(true)
            setIndex(2)
        }
        else {
            setColor(true)
            setImage(false)
            setPackage(false)
            setIndex(0)
        }
    }

    function updateAvailability(ind) {
        const newmms = mms.map((mm, i) => {
            if (i == ind) {
                mm.available = false
                return mm
            }
            else {
                return mm
            }
        })
        setMms(newmms)
    }

    return (
        <div className="shadow-lg h-fit w-1/4 m-16 rounded-lg bg-white">
            {showColorSelection && <ColorSelection incomingMms={mms} />}
            {showImageSelection && <ImageSelection />}
            {showPackageSelection && <PackageSelection />}
            <button
                className="h-16 w-full m-8 bg-mm-yellow rounded-lg next-button"
                style={{ width: `-moz-available` }}
                onClick={() => handleButtonClick(index)}
            >
                Next
            </button>
        </div>
    )
}