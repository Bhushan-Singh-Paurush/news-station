import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
import { MdDarkMode ,MdLightMode  } from "react-icons/md";

export  const Header = () => {
const[currenttopic,setCurrentTopic]=useState("News")
const[keyword,setKeyword]=useState("")
const[isdark,setIsdark]=useState(true)
useEffect(()=>{
  if(localStorage.getItem("theme")=== "dark") {
    setIsdark(false);
  }
},[])

function themehandelar(){
        document.documentElement.classList.toggle("dark",isdark)
        localStorage.setItem("theme", isdark ? "dark" : "light")
        setIsdark(!isdark)
}
const Navi=useNavigate()
function handelar(event)
{
     if(event.key==="Enter")
     {
      Navi(`/api/${keyword}`)
     }
}

    return (
    <div className=' bg-slate-900 sticky top-0'>
      <div className='w-10/12 max-w-[1200px] text-slate-400 py-6 mx-auto flex flex-wrap items-center justify-between'>
        <NavLink className={currenttopic==="News" ? 'text-slate-300 py-1 px-2 bg-slate-800 select-none': 'select-none'} onClick={()=>setCurrentTopic("News")} to={'/'} >News</NavLink>
        <NavLink className={currenttopic==="Technology" ? 'text-slate-300 py-1 px-2 bg-slate-800 select-none': 'select-none'} onClick={()=>setCurrentTopic("Technology")} to={'/api/technology'}>Technology</NavLink>
        <NavLink className={currenttopic==="Gaming" ? 'text-slate-300 py-1 px-2 bg-slate-800 select-none': 'select-none'} onClick={()=>setCurrentTopic("Gaming")} to={'/api/gaming'}>Gaming</NavLink>
        <NavLink className={currenttopic==="Space" ? 'text-slate-300 py-1 px-2 bg-slate-800 select-none': 'select-none'} onClick={()=>setCurrentTopic("Space")} to={'/api/space'}>Space</NavLink>
        <NavLink className={currenttopic==="Global" ? 'text-slate-300 py-1 px-2 bg-slate-800 select-none': 'select-none'} onClick={()=>setCurrentTopic("Global")} to={'/api/global-warming'}>Global Warming</NavLink>
        <div className='flex items-center gap-2'>
          <input onKeyDown={handelar} className='w-[100px] sm:w-full bg-slate-800 pl-2 text-lg text-slate-200' value={keyword} type='text' placeholder='enter keyword' onChange={(event)=>setKeyword(event.target.value)} />
          <NavLink onClick={()=>setCurrentTopic("serach")} to={keyword ? `/api/${keyword}` :'/api/indian news'}><IoMdSearch className='text-xl select-none'/></NavLink>
        </div>
        <div className='text-2xl' onClick={()=>themehandelar()}>{isdark ? <MdDarkMode /> : <MdLightMode />}</div>
      </div>
    </div>
    
  )
}
