import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContextApi } from '../Context'
import noimage from '../assets/noimage.jpg'
import { Spinner } from './Spinner'
export const Blogs = () => {
    const{id}=useParams()
    const{fatchdata,result,loading}=useContext(ContextApi)
    useEffect(()=>{
        fatchdata(id);
    },[id])
    const[status,setStatus]=useState([])
    function handelar(key)
    {
      status.includes(key) ? setStatus(status.filter(value=>key!==value))
      : setStatus(pre=>[...pre,key])
    }
    return (
   <div className='w-10/12 max-w-[1200px] my-10 mx-auto flex flex-col gap-5'>
   {loading ? <Spinner/> : result.map((item,key)=>(
    item.title!==`[Removed]` && <div key={key} className='w-full flex justify-between items-start bg-slate-200 p-2'>
      <div className='w-[50%] flex flex-col gap-2'>
      <h1 className=' text-2xl font-bold'>{item.title}</h1>
      <p>Description {item.description}</p>
      <p>Content {status.includes(key) ? item.content+"..." : item.content.split(" ").slice(0,10).join(" ")+"..."}<button className='text-blue-800' onClick={()=>handelar(key)}>{status.includes(key) ? "Less" : "Read more"}</button></p>
      <div>
      <h3 className=' italic font-semibold'>author - {item.author}</h3>
      <h5>{item.publishedAt}</h5>
      </div>
      </div>
      <img loading="lazy" src={item.urlToImage ? item.urlToImage : noimage } width={400} className=' shadow-md'/>
    </div>
   ))}
    </div>
  )
}

