import { Route, Routes } from "react-router-dom"
import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"
import { Home } from "./Components/Home"
import { Blogs } from "./Components/Blogs"
import { useEffect } from "react"

function App() {
  useEffect(()=>{
    const darkMode=localStorage.getItem("theme") === "dark"
    document.documentElement.classList.toggle("dark" , darkMode)
  },[])
  return (
    <div className="h-[100vh] overflow-y-auto w-[100vw] overflow-x-hidden scroll-smooth dark:bg-slate-900">
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/api/:id" element={<Blogs/>}/>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
