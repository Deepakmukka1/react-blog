import React from 'react'

const Card = () => {
    return (
        <div>
            <div className="bg-blue-200 flex flex-row justify-between items-center p-8 rounded-lg cursor-pointer dark:bg-gray-900 m-4">
               <div>
               <h2 className="font-bold text-2xl">Title</h2>
            <h4>Description this is very long</h4>
            <h4>Published at : </h4>
               </div>
               <img src="https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-172169309.jpg?w=602"
               className="rounded-lg md:h-48"/>


            </div>
           
        </div>
    )
}

export default Card
