import React from 'react'

const Card = () => {
    return (
        <div>
            <div className="bg-blue-200 flex flex-row justify-between items-center p-8 rounded-lg cursor-pointer dark:bg-gray-900 m-4">
              {/* md:flex-row flex-col */}
               <div className="flex flex-col w-3/5 text-base md:text-base xl:text-xl text-left">
               <h2 className="font-bold text-xs md:text-lg">Title</h2>
            <h4>Description this is very long</h4>
            <h4>Published at : </h4>
               </div>
               <div className="rounded-lg w-2/5">
               <img src="https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-172169309.jpg?w=602"
               className="md:h-auto rounded-sm float-right"
               />
               </div>


            </div>
           
        </div>
    )
}

export default Card
