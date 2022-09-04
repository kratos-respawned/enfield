import React from 'react'

import MapItems from "./MapItems";
export default function Maprow() {
    return (
        <>

            <div className="flex flex-row flex-wrap items-center justify-evenly w-full h-[140px] bg-[#212121]">

                <MapItems />
                <MapItems />
                <MapItems />
                <MapItems />
            
            </div>
        </>
    )
}
