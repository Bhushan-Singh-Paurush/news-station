import React, { useContext, useState } from 'react'
import { ContextApi } from '../Context'

export const Footer = () => {
  const{increment,decrement}=useContext(ContextApi)
  return (
    <div className=' bg-slate-900'>
      <div className='w-10/12 max-w-[1200px] text-slate-400 h-[60px] mx-auto flex items-center justify-between'>
       <button className=' select-none' onClick={()=>decrement()}>Previous</button>
       <button className=' select-none p-2' onClick={()=>increment()}>Next</button>
       </div>
       </div>
  )
}
