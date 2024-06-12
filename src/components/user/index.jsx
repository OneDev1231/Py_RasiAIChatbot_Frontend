import React from 'react';
import Image from 'next/image';

export const SingleUser = ({id, name}) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-800 px-5 duration-200">
        <div className="w-11 h-11 rounded-full overflow-hidden">
            <Image src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg" alt="logo" 
                className="w-full h-full object-cover"
            />  
        </div>
        <div className="w-full border border-transparent border-t-gray-400 dark:border-t-gray-800 py-3">
            <p className="text-md font-medium">{ name }</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{ "abc@gmail.com" }</p>
        </div>
    </div>
  )
}

export const Users = ({usersData}) => {
  return (
    <div>
      <div className="py-2 flex flex-col gap-1 overflow-y-auto max-h-[75vh]">
        { usersData.map(({ id, name }) => {
          return (
              <div key={id}>
                <SingleUser key={id} name={name} />
              </div>
          )
        }) }
      </div>
    </div>
  )
}
