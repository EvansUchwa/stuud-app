import React, { useEffect, useState } from 'react'
import { SimpleImage } from '../../GlobalComponents/Img'
import { directsMessages, groupsMessages } from '../../Rawdata/messages';
import { MessageItem } from './chatUI';
function ChatView({ props }) {
    const { currentDiscussion, setCurrentDiscussion } = props
    const [messages, setMessages] = useState([])
    const userId = 5;

    useEffect(() => {
        if (currentDiscussion != null) {

            const arrayToFilter = currentDiscussion.type == 'group' ? groupsMessages : directsMessages;
            const getDiscussionMessages = arrayToFilter.filter(msgs => msgs.discussion_id === currentDiscussion.id);

            setMessages(getDiscussionMessages)
        }

    }, [currentDiscussion])
    function isOnMobile() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true;
        }
        return false;
    }

    if (currentDiscussion === null) {
        return <>
            {
                isOnMobile() ? null : <section className='cp-chatViewEmpty'>
                    <h1>Cliquer sur une discussions pour commencer a chatter</h1>
                </section>
            }
        </>
    }
    return (<>
        {
            <section className='cp-chatView'>
                <article className='cpcv-header'>
                    <div className='cpcvh-infos'>
                        {
                            isOnMobile() && <i className='mdi mdi-arrow-left' onClick={() => setCurrentDiscussion(null)} ></i>
                        }
                        <SimpleImage props={{
                            src: "profils/bf1.jpg", alt: "User connceted pic",
                            withBadge: true, badgeContent: " ",
                            badgeStyle: {
                                backgroundColor: "#43bf48", width: "15px", height: "15px",
                                borderRadius: "100%"
                            }
                        }} />
                        <p>
                            <b>Pseudo</b>
                            <br />
                            <span>Université ......</span>
                        </p>
                    </div>

                    <div className='cpcvh-actions'>
                        <i className='mdi mdi-dots-horizontal'></i>
                    </div>
                </article>
                <div className="cpcv-messages">
                    {
                        messages.length > 0 ?
                            messages.map((message, j) => <MessageItem key={"message item nb" + j}
                                props={{
                                    typeMessage: message.from === userId ? "user" : "other",
                                    message
                                }} />)
                            : <p>Aucun message envoyé</p>
                    }
                </div>
                <form className="cpcv-form">
                    <i className='mdi mdi-file'></i>
                    <input type="text" placeholder='Votre message....' />
                    <i className='mdi mdi-emoticon'></i>
                    <span>
                        <i className='mdi mdi-send'></i>
                    </span>
                </form>
            </section>
        }
    </>
    )
}

export default ChatView
