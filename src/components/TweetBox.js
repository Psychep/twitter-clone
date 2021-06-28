import React, { useState } from 'react'
import db from "../firebase"
import firebase from "firebase"
import { AttachmentIcon, EmojiIcon, GIFIcon, PictureIcon, PollIcon, ScheduleIcon } from "../icons/icons"
const TweetBox = () => {
    const [content, setContent] = useState('')
    const sendTweet = () => {
        if (content !== "") {
            db.collection('feed').add({
                displayName: "Salih Güngörmez",
                username: "@hevallica",
                content,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                image: "",
                avatar: "https://pbs.twimg.com/profile_images/1299266121502093313/XupSvdRn_400x400.jpg"
            })
            setContent("")
        }

    }
    return (
        <div className="flex flex-col flex-1 mt-2 px-2">
            <textarea
                className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
                placeholder="What's happening?"
                onChange={(e) => setContent(e.target.value)}
                value={content}
            />
            <div className="flex items-center justify-between">
                <div className="flex items-center -ml-3  justify-betweens">

                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lighttest text-primary-base">
                        <PictureIcon className="" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lighttest text-primary-base">
                        <GIFIcon className="" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lighttest text-primary-base">
                        <PollIcon className="" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lighttest text-primary-base">
                        <AttachmentIcon className="" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lighttest text-primary-base">
                        <EmojiIcon className="" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lighttest text-primary-base">
                        <ScheduleIcon className="" />
                    </div>

                </div>

                <button className="bg-primary-base text-white rounded-full px-4 py-2 font-md"
                    onClick={sendTweet}

                >Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox
