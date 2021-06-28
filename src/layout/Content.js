import React, { useState, useEffect } from 'react'
import Divider from '../components/Divider'
import TweetBox from '../components/TweetBox'
import { PopulerIcon } from "../icons/icons"
import db from "../firebase"
import FeedList from '../components/FeedList'
const Content = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        db.collection("feed")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setTweets(snapshot.docs.map((doc) => doc.data())))
    }, [])


    return (

        <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight ">
            <header className=" sticky top-0 flex justify-between p-4 border-b border-gray-extraLight bg-white">
                <span className="font-bold text-xl text-gray-900 ">Home</span>
                <PopulerIcon className=" " />
            </header >
            <div className="flex space-x-4 px-4 py-3">
                <img src="https://pbs.twimg.com/profile_images/1299266121502093313/XupSvdRn_400x400.jpg" alt="Profile Images"
                    className="w-11 h-11 rounded-full"></img>
                <TweetBox />
            </div>
            <Divider />
            {/*feed*/}
            <FeedList tweets={tweets} ></FeedList>
        </main >
    )
}

export default Content
