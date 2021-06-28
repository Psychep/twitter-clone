import React, { useState } from 'react'
import TwitterLogo from "../images/twitter.svg"
import SideLink from "../components/SideLink"
import {
    HomeIcon, ExploreIcon, Notifications, MessagesIcon, BookmarksIcon, ListIcon, ProfileIcon, MoreIcon,
} from '../icons/icons';
import UserBox from '../components/UserBox';
const sideLinks = [


    {
        name: 'Home',
        icon: HomeIcon,
    },
    {
        name: 'Exploere',
        icon: ExploreIcon,
    },
    {
        name: 'Notifications',
        icon: Notifications,
    },
    {
        name: 'Messages',
        icon: MessagesIcon,
    },
    {
        name: 'Bookmarks',
        icon: BookmarksIcon,
    },
    {
        name: 'Lists',
        icon: ListIcon,
    },
    {
        name: 'Profile',
        icon: ProfileIcon,
    },
    {
        name: 'More',
        icon: MoreIcon,
    },


]

const Sidebar = () => {
    const [active, setActive] = useState("Home");
    const handleMenuItemClick = (name) => {
        setActive(name);
    }
    return (
        <div className=" h-screen sticky top-0 flex flex-col justify-between  px-2 w-72 ">
            <div className="">
                <div className=" mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full  hover:bg-gray-dark">
                    <img src={TwitterLogo} alt="Twitter Logo" className="w-9 h-9"></img>
                </div>
                <nav>
                    <ul>
                        {sideLinks.map(({ name, icon }) => (
                            <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick}></SideLink>
                        ))}
                    </ul>
                </nav>
                <button className=" bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200 ">Tweet</button>
            </div>
            <UserBox />

        </div>
    )
}


export default Sidebar;
