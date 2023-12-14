import React from 'react';
import DialogItem from './DialogItem';
import Message from './Message';
import "./dialogs.css";

const Dialogs = (props) => {
    let updateNewMessageBody = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    let sendMessage = () => {
        props.sendMessage();
    };

    let dialogs = props.mailPage.dialogs
        .map((dialog) => <DialogItem key={dialog.id} id={dialog.id} from={dialog.from}/>);

    let messages = props.mailPage.messages
        .map((message) => <Message key={message.id} message={message.message}/>)

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
                        value={props.mailPage.newMessageBody}
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