import { useContext, useState } from 'react';
import '../Assets/styles/chat.css';
import { ChatContext } from '../Context/chatContext';
import { showMenuOptionAnimation } from '../Assets/js/animations';
import { searchOnArray } from '../Assets/js/array';

const faker = [
    {
        id: 1, type: 'group', headerTitle: 'Chat 1', hour: '12:05', msg: 'lorem ipsum dolor fsplorem ipsum dolor fsp' +
            'lorem ipsum dolor fsplorem ipsum dolor fsp lorem ipsum dolor fsp',
        img: 'random1.jpg'
    },
    {
        id: 2, type: 'p2p', headerTitle: 'Chat 2', hour: '12:05', msg: 'lorem ipsum dolor fsplorem ipsum dolor fsp' +
            'lorem ipsum dolor fsplorem ipsum dolor fsp lorem ipsum dolor fsp',
        img: 'random1.jpg'
    },
    {
        id: 3, type: 'group', headerTitle: 'Chat 3', hour: '12:05', msg: 'lorem ipsum dolor fsplorem ipsum dolor fsp' +
            'lorem ipsum dolor fsplorem ipsum dolor fsp lorem ipsum dolor fsp',
        img: 'random1.jpg'
    },
    {
        id: 4, type: 'p2p', headerTitle: 'Chat 4', hour: '12:05', msg: 'lorem ipsum dolor fsplorem ipsum dolor fsp' +
            'lorem ipsum dolor fsplorem ipsum dolor fsp lorem ipsum dolor fsp',
        img: 'random1.jpg'
    }]


export const UserMsgListAndSearch = () => {
    const chatcontext = useContext(ChatContext);
    const setChatMsgsView = chatcontext.setChatMsgsView;
    const [msgPreview, setMP] = useState(faker)


    return <div className="userMsgListAndSearch">
        <section className="umlasSearch">
            <input type="search" className="semiRounded"
                onChange={(event) => searchOnArray(faker, event.target.value, setMP, 'pseudo')}
                placeholder="Chercher utilisateur ou Groupe..." />
        </section>
        <section className="umlasMsgList">
            {
                msgPreview.map((mp, index) => <div key={index}
                    onClick={() => setChatMsgsView(mp.id, mp.headerTitle, mp.type)}>
                    <img className="rounded" src={require('../Assets/images/profils/' + mp.img).default} />
                    <div>
                        <p>
                            <b>{mp.headerTitle}</b>
                            <span>{mp.hour}</span>
                        </p>
                        <p>
                            {mp.msg}
                        </p>
                    </div>
                </div>)
            }
        </section>
    </div>
}


export const UserMsgView = () => {

    const chatcontext = useContext(ChatContext);
    const currentMsgView = chatcontext.chatMsgs;
    const chatViewTitle = chatcontext.chatViewTitle;
    const msgOptions = chatcontext.msgOptions;
    return <div className="userMsgView">
        {
            currentMsgView ?
                <>
                    <div className="umvBanner">
                        <section className="umvbPersonOrGroup">
                            <img className="rounded" src={require('../Assets/images/profils/random1.jpg').default} />
                            <span>{chatViewTitle}</span>
                        </section>
                        <section className="umvbMsgMenu">
                            <i className="mdi mdi-comment-search"></i>
                            <i className="mdi mdi-segment"
                                onClick={() => showMenuOptionAnimation('umvbmmOptions')}></i>
                            {/* dots */}
                            <div className="umvbmmOptions">
                                {msgOptions}
                            </div>
                        </section>
                    </div>
                    <div className="umvBody">
                        {
                            currentMsgView.msg.map((cmv, index) => <div key={index}
                                className={cmv.autor == 'user' ? "umvbUser" : 'umvbOther'}  >
                                <section>
                                    {cmv.autor == 'user' ? ""
                                        : <img className="umvboImg" src={require('../Assets/images/profils/random1.jpg').default} />}
                                    <p>{cmv.msg}</p>
                                    <p>
                                        <span>{cmv.hour} </span>
                                        {cmv.autor == 'user'
                                            ? <i className="mdi mdi-checkbox-multiple-marked-circle msgHasSent"></i> : ''}
                                    </p>
                                </section>
                            </div>

                            )
                        }

                    </div>
                    <form className="umvForm">
                        <section className="umvfIconsActions">
                            <label htmlFor="umvfFileInput">
                                <i className="mdi mdi-file"></i>
                                <input type="file" id="umvfFileInput" />
                            </label>
                            <label htmlFor="umvfCameraInput">
                                <i className="mdi mdi-image"></i>
                                <input type="file" accept="image/*" id="umvfCameraInput" />
                            </label>
                            <label htmlFor="umvfVideoInput">
                                <i className="mdi mdi-video"></i>
                                <input type="file" accept="video/*" id="umvfVideoInput" />
                            </label>
                            <label htmlFor="umvfVoiceInput">
                                <i className="mdi mdi-voicemail"></i>
                                <input type="file" id="umvfVoiceInput" />
                            </label>
                        </section>
                        <section className="umvfTextMsg">
                            <input className="semiRounded" placeholder="Message..." />
                            <button className="rounded mdi mdi-send-outline"></button>
                        </section>
                    </form>
                </>
                :
                <div className="umvMessageNotSelected">
                    <p>Selectionnez un message pour entamer la discussions</p>
                </div>
        }



    </div>
}