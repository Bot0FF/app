import React from "react";
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { updateNewMessageBody, sendMessage } from '../../common/reducer/mail-reducer';

class MailContainer extends React.Component {

    render() {
        return <>
            <Dialogs
                dialogs={this.props.dialogs}
                messages={this.props.messages}
                updateNewMessageBody={this.props.updateNewMessageBody}
                sendMessage={this.props.sendMessage}
                newMessageBody={this.props.newMessageBody}
                />
        </>
    };
};

//передает props в UI компонент
let mapMailStateToProps = (state) => {
    return{
        dialogs: state.mailPage.dialogs,
        messages: state.mailPage.messages
    }
}

//коннектит props и dispatch к UI компоненту
export default connect(mapMailStateToProps, {
    updateNewMessageBody,
    sendMessage
})(MailContainer);