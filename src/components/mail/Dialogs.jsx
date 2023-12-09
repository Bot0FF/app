import React from 'react';
import "./mail.css";
import DialogItem from './DialogItem';
import Message from './Message';

const Dialogs = (props) => {
    let mailState = props.mailState;
    let newMessageBody = props.mailState.newMessageBody;

    let updateNewMessageBody = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    let sendMessage = () => {
        props.sendMessage();
    };

    let dialogs = mailState.dialogs
        .map((dialog) => <DialogItem from={dialog.from} id={dialog.id}/>);

    let messages = mailState.messages
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
                    <textarea 
                        value={newMessageBody}
                        onChange={updateNewMessageBody}
                        placeholder="Введите сообщение..."    
                    />
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