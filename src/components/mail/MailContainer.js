import React from 'react';
import Dialogs from './Dialogs';

const MailContainer = (props) => {
    let mailState = props.mailStore.getState();

    let updateNewMessageBody = (body) => {
        let action = {type: "UPDATE_NEW_MESSAGE_BODY", body: body};
        props.mailStore.dispatch(action);
    }

    let sendMessage = () => {
        let action = {type: "SEND_MESSAGE"};
        props.mailStore.dispatch(action);
    }
    
    return (<Dialogs updateNewMessageBody={updateNewMessageBody}
                        sendMessage={sendMessage}
                        mailState={mailState.mailPage}/>);
};

export default MailContainer;