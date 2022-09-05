import React from 'react'

export default function Heading(props) {
  return (
    <>
        <div className="w-full bg-[rgba(33,33,33)] text-white font-Guardian-Semibold text-base h-[50px] grid place-items-center" style={{fontSize:props.size}}>{props.title}</div>
    </>
  )
}
