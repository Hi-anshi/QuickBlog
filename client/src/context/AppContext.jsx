import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL
const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const navigate = useNavigate()
    const [ token , setToken] = useState(() => localStorage.getItem('token') || null)
    const [blogs,setBlogs] = useState([])
    const [input , setInput] = useState('')

    // Keep axios header in sync with token
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = token
        } else {
            delete axios.defaults.headers.common['Authorization']
        }
    }, [token])

    const fetchBlogs = async()=>{
        try {
            const {data} = await axios.get('/api/blog/all')
            data.success ? setBlogs(data.blogs ) : toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        fetchBlogs()
    },[])

    // Logout function
    const logout = () => {
        setToken(null)
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        navigate('/')
    }

    const value = {axios , navigate , token , setToken , blogs , setBlogs , input , setInput, logout}
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () =>{
    return useContext(AppContext)
}