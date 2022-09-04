import React from 'react'

export default function Heading(props) {
  return (
    <>
        <div className="w-full text-white font-Guardian-Semibold text-base h-[50px] grid place-items-center" style={{fontSize:props.size}}>{props.title}</div>
    </>
  )
}
