import React from 'react'

const UserBox = () => {
    return (
        <div className=" flex justify-between item-center mb-6 hover:bg-blue-400 cursor-pointer rounded-bl-full py-2 px-3 transform transition-colors duration-200">
            <img src="https://pbs.twimg.com/profile_images/1299266121502093313/XupSvdRn_400x400.jpg" alt="Profile Images"
                className="w-11 h-11 rounded-full"></img>
            <div className="flex flex-col">
                <span className="font-bold  text-md text-black">
                    Salih
                </span>
                <span className="text-sm text-gray-dark">
                    @Hevallica
                </span>
            </div>
            <div className="flex space-x-1 ">
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
            </div>

        </div>

    )
}

export default UserBox
