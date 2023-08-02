import { useState, useEffect } from "react"
import Header from "./header"
import WeddingRing from '../public/wedding_pack.png'
import PartyPack from '../public/party_pack.png'
import MiniBottles from '../public/mini_bottles.png'
import BulkCandy from '../public/bulk_candy.png'
import Giftjar from '../public/giftjar.png'
import Image from "next/image"
import dayjs from "dayjs"

export default function PackageSelection({ incomingMms }) {
    const [packaging, setPackaging] = useState([
        {
            id: 'BK0001',
            src: BulkCandy,
            name: 'Bulk Candy 2lbs',
            available: true,
            availabilityDate: '',
            chosen: ''
        },
        {
            id: 'BK0001_05',
            src: BulkCandy,
            name: 'Bulk Candy 5lbs',
            available: true,
            availabilityDate: '',
            chosen: ''
        },
        {
            id: 'GJ0001',
            src: Giftjar,
            name: 'Gift Jar Red',
            available: true,
            availabilityDate: '',
            chosen: 'border-solid border-4 border-black'
        },
        {
            id: 'PF0001',
            src: PartyPack,
            name: 'Party Favor Packs',
            available: true,
            availabilityDate: '',
            chosen: ''
        },
        {
            id: 'DIY0001',
            src: MiniBottles,
            name: 'DIY Mini Occasion Bottle Party Favor Kit',
            available: true,
            availabilityDate: '',
            chosen: ''
        },
        {
            id: 'WR0001',
            src: WeddingRing,
            name: 'Wedding Ring Party Favors',
            available: true,
            availabilityDate: '',
            chosen: ''
        }
    ])

    useEffect(() => {
        for (const index in packaging) {
            fetch('https://api.watsoncommerce.ibm.com/inventory/us-1bbb91c7/v1/availability/network', {
                method: 'POST',
                body: JSON.stringify({
                    distributionGroupId: "DIAB_ALL",
                    lines: [
                        {
                            lineId: "1",
                            itemId: packaging[index].id,
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
                    if (data.lines[0].networkAvailabilities[0].onhandAvailableQuantity <= 0) {
                        updateAvailability(index, data.lines[0].networkAvailabilities[0].futureEarliestShipTs)
                    }
                })
        }
    }, [])

    function updateAvailability(ind, date){
        const newpackaging = packaging.map((pack, i) => {
            if(i == ind){
                pack.available = false
                pack.availabilityDate = dayjs(date).format('MMMM D, YYYY')
                console.log(pack.availabilityDate)
                return pack
            }
            else{
                return pack
            }
        })

        setPackaging(newpackaging)
    }

    return (
        <div className="h-96">
            <Header
                firstLine='Select your packaging'
                secondLine='Tap to select available packaging.'
            />
            <div className="flex flex-row flex-wrap justify-center">
                {
                    packaging.map((pack, index) => (
                        <div 
                            className="m-2 rounded-full aspect-square h-fit flex flex-col w-1/4"
                            key={pack.id}>
                            <Image
                                src={pack.src}
                                alt={pack.name}
                                className={`m-2 rounded-xl aspect-square h-20 w-fit ${pack.chosen}`}
                            />
                            <span className={`text-xs text-center flex-wrap ${pack.available ? '' : 'opacity-25'}`}>{pack.name}</span>
                            {!pack.available && <span className="text-xs text-center flex-wrap">Available on {pack.availabilityDate}</span>}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}