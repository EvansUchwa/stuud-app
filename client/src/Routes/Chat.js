import { ChatNavBar } from "../GlobalComponents/navBar";
import { UserMsgListAndSearch, UserMsgView } from "../RoutesSubComponents/chatComponents";
import { ChatContext } from "../Context/chatContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const fakemsg = [
    {
        id: 1, msg: [
            { autor: 'user', msg: 'User 1 Msg', hour: '12h05' },
            { autor: 'other', msg: 'User 1 Msg Response', hour: '12h05', img: "random1.jpg" }]
    },
    {
        id: 2, msg: [
            { autor: 'user', msg: 'User 2 Msg', hour: '12h05' },
            { autor: 'other', msg: 'User 2 Msg Response', hour: '12h05', img: "random1.jpg" }]
    },
    {
        id: 3, msg: [
            { autor: 'user', msg: 'User 3 Msg', hour: '12h05' },
            { autor: 'other', msg: 'User 3 Msg Response', hour: '12h05', img: "random1.jpg" }]
    },
    {
        id: 4, msg: [
            { autor: 'user', msg: 'User 4 Msg', hour: '12h05' },
            { autor: 'other', msg: 'User 4 Msg Response', hour: '12h05', img: "random1.jpg" }]
    },
]

const Chat = () => {

    const [chatType, setCT] = useState('user');
    const [msgOptions, setMsgOptions] = useState('');
    const [chatMsgs, setCMs] = useState();
    const [chatViewTitle, setChatViewTitle] = useState('');

    const setChatMsgsView = (chatId, chatViewTitle, chatType) => {
        setCMs(fakemsg[chatId - 1]);
        setChatViewTitle(chatViewTitle)
        dispatchMsgOptions(chatType)
    }

    const dispatchMsgOptions = (msgType) => {
        if (msgType == 'p2p') {
            setMsgOptions(<>
                <Link to="/">Profil</Link>
                <span>Medias(fichier échangé(s))</span>
                <span>Bloquer le chat</span>
                <span>Bloquer le profil </span></>)
        } else {
            setMsgOptions(<>
                <Link to="/">Membre du groupe</Link>
                <span>Medias(fichier échangé(s))</span>
                <span>Quitter le chat</span>
            </>)
        }
    }
    return <div className="chatPart">
        <ChatContext.Provider value={{
            chatType, chatMsgs, chatViewTitle, msgOptions,
            setCT, setChatMsgsView
        }}>
            <ChatNavBar />
            <UserMsgListAndSearch />
            <UserMsgView />
        </ChatContext.Provider>
    </div>
}

export default Chat;

