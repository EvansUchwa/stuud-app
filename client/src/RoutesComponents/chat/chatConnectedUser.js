import React from 'react'
import { SimpleImage } from '../../GlobalComponents/Img'
function ChatConnectedUser() {
    return (
        <div className='cpl-connectedStudents'>
            <h2>Amis connectés</h2>
            {
                [0, 0, 0, 0].map((cs, i) => <section key={"student connected nb" + i}
                >
                    <SimpleImage props={{
                        src: "profils/bf1.jpg", alt: "User connceted pic",
                        withBadge: true, badgeContent: " ",
                        badgeStyle: {
                            backgroundColor: "#43bf48", width: "15px", height: "15px",
                            borderRadius: "100%"
                        }
                    }} />
                    <span>Pseudo</span>
                </section>)
            }
        </div>
    )
}

export default ChatConnectedUser
