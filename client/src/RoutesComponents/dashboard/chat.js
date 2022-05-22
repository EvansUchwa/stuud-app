import { SimpleImage } from "../../GlobalComponents/Img"
export const ChatDiscussionsPreview = () => {
    const chats = [
        { readState: "notViewed" },
        { readState: "notViewed" },
        { readState: "notViewed" },
        { readState: "viewed" },
        { readState: "viewed" },
        { readState: "viewed" },
    ]
    return <div className="chatPreview">
        <section className="cP-list">
            {
                chats.map((chatPreview, index) => <article className="cP-l-preview"
                    id={"chatPreview-" + chatPreview.readState}
                    key={"Chat preview nb" + index}>
                    <SimpleImage props={{ src: 'profils/myUser.jpg', alt: 'dd', className: '' }} />
                    <b>@_interlocutor</b>
                    <section className="cP-l-p-actionsAndAlert">
                        <i className="mdi mdi-bell-outline"></i>
                        <span>12 <i className="mdi mdi-chat"></i> </span>
                    </section>
                </article>)
            }
        </section>
    </div>
}