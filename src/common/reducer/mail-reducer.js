const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

//начальные данные имеющейся почты
let initialMailState = {
    dialogs: [
        { id: 1, from: "John" },
        { id: 2, from: "Mike" }
    ],
    messages: [
        { id: 1, message: "Message 1" },
        { id: 2, message: "Message 2" }
    ],
    newMessageBody: ""
}

//принимает action и возвращает измененные данные имеющейся почты 
const mailReducer = (mailState = initialMailState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let mailStateCopy = { ...mailState };
            mailStateCopy.dialogs = [...mailState.dialogs];
            mailStateCopy.newMessageBody = action.body;
            return mailStateCopy;
        }
        case SEND_MESSAGE: {
            let newMessage = {
                id: 3,
                message: mailState.newMessageBody
            };
            let mailStateCopy = { ...mailState };
            mailStateCopy.messages = [...mailState.messages];
            mailStateCopy.messages.push(newMessage);
            return mailStateCopy;
        }
        default:
            return mailState;
    }
};

export default mailReducer;