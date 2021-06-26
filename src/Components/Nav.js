import React from 'react'
import useDarkMode from "../hooks/useDarkMode";
const Navbar = () => {
    const [theme,setTheme]=useDarkMode();
    
    return (
        <div className="bg-blue-900 h-14 flex justify-around items-center w-full p-2">
            <h2 className="font-semibold text-2xl text-gray-200">Hello from Navbar</h2>
            <h2 className="font-semibold text-2xl text-gray-200">Hello from Navbar</h2>
            <div className="font-semibold text-2xl text-gray-200 cursor-pointer" onClick={()=>{
                setTheme(theme)
                console.log(theme)
            }}>🎇</div>
        </div>
    )
}

export default Navbar
