import React from 'react'
import { LeftArrow } from '../icons/icons'

const ProfileHeader = () => {
    return (
        <main className>
            <header className="sticky top-0 bg-white flex flex-row space-x-4 items-center ">
                <LeftArrow className="" />
                <div className="">
                    <h4 className="font-semibold text-xl text-gray-900">Salih</h4>
                    <span className="text-sm text-gray-dark">2.066 Tweet</span>
                </div>
            </header>
            <div className="space-y-1 justify-center w-full mt-3 ml-3">
                <img src="https://pbs.twimg.com/profile_banners/1357896882/1599329285/600x200" alt="Banner" />
            </div>
        </main>
    )
}

export default ProfileHeader
