import React from 'react'

const ProfileContent = () => {
    return (
        <div>
            <div className="relative flex w-full justify-between">
                <div className="p-4 justify-between">
                    <div className="relative flex w-full">
                        <div className="-mt-24">
                            <div className="h-36 w-36 md rounded-full relative">
                                <img className="md rounded-full relative border-4 border-white" src="https://pbs.twimg.com/profile_images/1299266121502093313/XupSvdRn_400x400.jpg" alt="Profile"></img>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=" space-y-1 justify-center w-full mt-3 ml-3 ">
                    <div className="flex flex-col text-right mt-2">
                        <button className=" flex justify-center max-h-max whitespace-nowrap focus:outline-none focus:ring rounded max-w-max border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800 hover:border-blue-800 flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">Profili düzenle</button>
                    </div>
                </div>
            </div >
            <div className="space-y-1 justify-center w-full mt-3 ml-3">
                <div >
                    <h2 className="text-xl leading-6 font-bold">Salih</h2>
                    <span className="text-sm leading-5 font-medium text-gray-600">@hevallica</span>
                </div>
            </div>
            <div className="mt-3">
                <p className="leading-tight mb-2">There are things known and things unknown and in between are the doors</p>

            </div>

            <div class="pt-3 flex justify-start items-start w-full divide-x divide-white divide-solid">
                <div class="text-center pr-3"><span class="font-bold ">520</span><span class="text-gray-600"> Following</span></div>
                <div class="text-center px-3"><span class="font-bold ">23,4m </span><span class="text-gray-600"> Followers</span></div>
            </div>
        </div>


    )
}

export default ProfileContent
