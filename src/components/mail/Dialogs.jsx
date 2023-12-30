import React from 'react';
import DialogItem from './DialogItem';
import Message from './Message';
import "./dialogs.css";
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {

    let sendMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    };

    let dialogs = props.dialogs
        .map((dialog) => <DialogItem key={dialog.id} id={dialog.id} from={dialog.from} />);

    let messages = props.messages
        .map((message) => <Message key={message.id} message={message.message} />)

    return (
        <div className="mails">
            <div className="mailsItems">
                {dialogs}
            </div>
            <div className="messages">
                {messages}
                <br />
                <AddMessageFormRedux onSubmit={sendMessage}/>
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"Введите сообщение..."}/>
            </div>
            <div><button>Отправить</button></div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;