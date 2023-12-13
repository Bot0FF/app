import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { updateNewMessageBody, sendMessage } from '../../common/reducer/mail-reducer';

//передает props в UI компонент
let mapMailStateToProps = (state) => {
    return{
        mailPage: state.mailPage
    }
}

//передает callback в UI компонент
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBody(body));
        },
        sendMessage: () => {
            dispatch(sendMessage());
        }
    }
}

//коннектит props и dispatch к UI компоненту
const MailContainer = connect(mapMailStateToProps, mapDispatchToProps)(Dialogs)

export default MailContainer;