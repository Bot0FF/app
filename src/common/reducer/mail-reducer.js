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
        case UPDATE_NEW_MESSAGE_BODY:
            mailState.newMessageBody = action.body;
            return mailState;
        case SEND_MESSAGE:
            let newMessage = {
                id: 3,
                message: mailState.newMessageBody
            };
            mailState.messages.push(newMessage);
            return mailState;
        default:
            return mailState;
    }
};

export default mailReducer;