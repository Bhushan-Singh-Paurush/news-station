import { Route, Routes } from "react-router-dom"
import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"
import { Home } from "./Components/Home"
import { Blogs } from "./Components/Blogs"

function App() {
    return (
    <div className="h-[100vh] overflow-y-auto w-[100vw] overflow-x-hidden scroll-smooth">
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
