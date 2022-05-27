import React from 'react'
import { SimpleImage } from '../../GlobalComponents/Img'
import moment from 'moment'
export function ChatListItem({ props }) {
    const { isGroup, isUser, item, setCurrentDiscussion } = props;

    function dispatchInterlocuteurKey() {
        if (isGroup) {
            return 'group_name'
        } else if (isUser) {
            return 'user_name'
        }
    }
    return (
        <article className={isGroup && 'groupMessagesPreview'}
            onClick={() => setCurrentDiscussion({ id: item.id, type: isGroup ? "group" : "direct" })}>
            <SimpleImage props={{
                src: "profils/bf1.jpg", alt: "User connceted pic",
                withBadge: true, badgeContent: " ",
                badgeStyle: {
                    backgroundColor: "#43bf48", width: "15px", height: "15px",
                    borderRadius: "100%"
                }
            }} />
            <p>
                <b>{item[dispatchInterlocuteurKey()]}</b>
                <br />
                <span>
                    {item.last_message}
                </span>
            </p>
            <span>
                {moment(item.last_message_date).startOf('hour').fromNow()}
            </span>
        </article>
    )
}



export function MessageItem({ props }) {
    const { typeMessage, message } = props;
    return <article className={typeMessage === "user" ? 'userMessage' : "otherMessage"
    }>
        <section>
            {
                typeMessage == "user" ? <>
                    <i className='mdi mdi-dots-horizontal'></i>
                    <p>
                        {message.message}
                    </p>
                    <SimpleImage props={{
                        src: "profils/connected.jpg", alt: "User connceted pic"
                    }} />
                </> :
                    <>
                        <SimpleImage props={{
                            src: "profils/connected.jpg", alt: "User connceted pic"
                        }} />
                        <p>
                            {message.message}
                        </p>
                        <i className='mdi mdi-dots-horizontal'></i>
                    </>
            }
        </section>
        <b>03:04</b>
    </article >
}