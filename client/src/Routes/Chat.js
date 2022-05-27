import React, { useEffect, useState } from 'react'
import { SimpleImage } from '../GlobalComponents/Img'
import moment from "moment"
import ChatConnectedUser from '../RoutesComponents/chat/chatConnectedUser'
import ChatsList from '../RoutesComponents/chat/chatList'
import ChatView from '../RoutesComponents/chat/chatView'
function Chat() {
    const [currentDiscussion, setCurrentDiscussion] = useState(null)
    // Wed May 25 2022 18:07:38 GMT+0100 (West Africa Standard Time)
    const usersDiscussions = [
        {
            id: "1", user_pic: "profils/bf1.jpg", user_name: "Jeanne",
            last_message: "Hey t'avus le derniers cours de philos que John a publié ?",
            last_message_date: "Wed May 25 2022 18:07:38 GMT+0100 (West Africa Standard Time)"
        },
        {
            id: "2", user_pic: "profils/wf1.jpg", user_name: "Sarah",
            last_message: "Hey t'avus le derniers cours de philos que John a publié ?",
            last_message_date: "Wed May 25 2022 18:07:38 GMT+0100 (West Africa Standard Time)"
        },
        {
            id: "3", user_pic: "profils/bm2.jpg", user_name: "Paul",
            last_message: "Hey t'avus le derniers cours de philos que John a publié ?",
            last_message_date: "Wed May 25 2022 18:07:38 GMT+0100 (West Africa Standard Time)"
        },
        {
            id: "4", user_pic: "profils/wm2.jpg", user_name: "Jean",
            last_message: "Hey t'avus le derniers cours de philos que John a publié ?",
            last_message_date: "Wed May 25 2022 18:07:38 GMT+0100 (West Africa Standard Time)"
        }
    ]

    const groupsDiscussions = [
        {
            id: "1", user_pic: "profils/bf1.jpg", group_name: "Général",
            last_message: "Hey t'avus le derniers cours de philos que John a publié ?",
            last_message_date: "Wed May 25 2022 18:07:38 GMT+0100 (West Africa Standard Time)"
        },
        {
            id: "2", user_pic: "profils/wf1.jpg", group_name: "Groupe Matière ...",
            last_message: "Hey t'avus le derniers cours de philos que John a publié ?",
            last_message_date: "Wed May 25 2022 18:07:38 GMT+0100 (West Africa Standard Time)"
        },
    ]




    // isOnMobile("hzh")
    return (
        <div className='chatPart'>
            {/* <h1>Chat</h1> */}
            <section className='cp-lists'>
                <h1>Chat</h1>
                <ChatConnectedUser />
                <ChatsList props={{ usersDiscussions, groupsDiscussions, setCurrentDiscussion }} />
            </section>
            <ChatView props={{ currentDiscussion, setCurrentDiscussion }} />
        </div>
    )
}

{/* <div className='chatPart'>
<h1>Tout reste a faire.....</h1>
</div> */}
export default Chat
