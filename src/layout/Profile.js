import React, { useState, useEffect } from 'react'
import ProfileContent from '../components/ProfileContent'
import ProfileHeader from '../components/ProfileHeader'
import db from "../firebase"
import FeedList from '../components/FeedList'

const Profile = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        db.collection("feed")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setTweets(snapshot.docs.map((doc) => doc.data())))
    }, [])
    return (
        <main className="flex-1 flex flex-col border-r justify-start border-gray-extraLight">
            <ProfileHeader />
            <ProfileContent />
            <FeedList tweets={tweets} ></FeedList>

        </main>
    )
}

export default Profile
