import React from 'react'

const Sharebutton = ({messageURL}) => {
    return (
        <div>
            <button className="bg-green-600 hover:bg-green-800 text-white font-bold rounded w-36 h-9 mt-4 text-xs" onClick={()=>{
            window.open(messageURL,"_blank")
          }}>
            Share on Whatsapp</button>
        </div>
    )
}

export default Sharebutton
