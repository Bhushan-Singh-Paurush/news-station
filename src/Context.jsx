import { createContext, useState } from "react";
import axios from "axios"
const ContextApi=createContext();
const apiKey=import.meta.env.VITE_APP_API_KEY
const api=axios.create({
       baseURL:`https://newsapi.org/v2`
})
const AppProvider=({children})=>{
    const currentDate = new Date();
    const year=currentDate.getFullYear()
    const month=currentDate.getMonth()
    const date=currentDate.getDate()    
  
    const[loading,setLoading]=useState(false)
    const[result,setResult]=useState([])
    const[start,setStart]=useState(0)
    const[post,setPost]=useState([])
    async function fatchdata(search = "indian news") {
        
        try{
       setLoading(true)     
       const resp=await api.get("/everything",{
            params:{
                q:search,
                from:`${year}-${month}-${date}`,
                sortBy:"publishedAt",
                language:"en",
                apiKey:apiKey
            }    
          })
          setResult(resp.data.articles.slice(0,10))
          setStart(10)
          setPost(resp.data.articles)
          setLoading(false)
        }catch(error)
        {
            console.log(error);
        } 
    }
    function increment()
    {
        setLoading(true)
        if(post.length>start)
        {
            setResult(post.slice(start,start+10))
            setStart(start+10)
          
        }
        setLoading(false) 
    }  
    function decrement()
    {
        setLoading(true)
            if(start>0)
             {     
            setResult(post.slice(start-10,start))
            setStart(start-10)
             }
        setLoading(false) 
    }  
    
   const value={
    loading,
    fatchdata,
    increment,
    decrement,
    result
   }
 
   return (
    <ContextApi.Provider value={value}>
    {children}
    </ContextApi.Provider>
   )
}
export {ContextApi,AppProvider}
