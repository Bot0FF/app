import React from 'react';
import "./dialogs.css";
import DialogItem from './DialogItem';
import Message from './Message';

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let sendMessage = () => {
        let text = newMessage.current.value;
        console.log(text)
    }

    let dialogs = props.mail.dialogs
        .map((dialog) => <DialogItem from={dialog.from} id={dialog.id}/>);

    let messages = props.mail.messages
        .map((message) => <Message message={message.message}/>)

    return (
        <div className="mails">
            <div className="mailsItems">
                {dialogs}    
            </div>
            <div className="messages">
                {messages}
                <br />
                <div>
                    <textarea ref={newMessage}/>
                </div>
                <div>
                    <button
                        onClick={sendMessage}
                        >Отправить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;