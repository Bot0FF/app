import React from "react";
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { sendMessage } from '../../common/reducer/mail-reducer';
import { withAuthRedirect } from './../../common/hoc/withAuthRedirect';

class MailContainer extends React.Component {

    render() {
        return <>
            <Dialogs
                dialogs={this.props.dialogs}
                messages={this.props.messages}
                sendMessage={this.props.sendMessage}
                />
        </>
    };
};

//передает props в UI компонент
let mapMailStateToProps = (state) => {
    return{
        dialogs: state.mailPage.dialogs,
        messages: state.mailPage.messages,
        isAuth: state.auth.isAuth
    };
};

let WithDataMailContainer = withAuthRedirect(MailContainer);

//коннектит props и dispatch к UI компоненту
export default connect(mapMailStateToProps, {
    sendMessage
})(WithDataMailContainer);