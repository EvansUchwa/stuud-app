import React from 'react'
import { SimpleImage } from '../../GlobalComponents/Img'
import moment from 'moment'
import { ChatListItem } from './chatUI'
function ChatsList({ props }) {
    const { usersDiscussions, groupsDiscussions, setCurrentDiscussion } = props
    return (
        <div className='cpl-chatsList'>
            <h2>Tes chats recent</h2>
            <section className='cplc-search'>
                <i className='mdi mdi-magnify'></i>
                <input type="search" placeholder='Chercher un chat ici' />
            </section>
            <section className='cplc-list'>

                <div>
                    <p>
                        <b>Discussions de groupes</b>
                        <span>
                            <i className='mdi mdi-plus'></i>
                        </span>
                    </p>
                    {
                        groupsDiscussions.map((cs, i) => <ChatListItem
                            props={{ isGroup: true, item: cs, setCurrentDiscussion }}
                            key={"users chatslist item nb" + i}
                        />)
                    }
                </div>
                <div>
                    <p>
                        <b>Discussions direct</b>
                        <span>
                            <i className='mdi mdi-plus'></i>
                        </span>
                    </p>
                    {
                        usersDiscussions.map((cs, i) => <ChatListItem
                            props={{ isUser: true, item: cs, setCurrentDiscussion }}
                            key={"users chatslist item nb" + i} />)
                    }
                </div>
            </section>
        </div>
    )
}

export default ChatsList
