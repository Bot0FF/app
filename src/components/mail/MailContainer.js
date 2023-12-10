import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapMailStateToProps = (mailState) => {
    return{
        dialogs: mailState.mailPage.dialogs,
        messages: mailState.mailPage.messages,
        updateNewMessageBody: mailState.mailPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            let action = {type: "UPDATE_NEW_MESSAGE_BODY", body: body};
            dispatch(action);
        },
        sendMessage: () => {
            let action = {type: "SEND_MESSAGE"};
            dispatch(action);
        }
    }
}

const MailContainer = connect(mapMailStateToProps, mapDispatchToProps)(Dialogs)

export default MailContainer;