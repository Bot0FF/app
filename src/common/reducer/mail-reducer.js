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
            return {
                ...mailState,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE: {
            let body = mailState.newMessageBody;
            return {
                ...mailState,
                newMessageBody: "",
                messages: [...mailState.messages, {id: Date.now(), message: body}]
            };
        }
        default:
            return mailState;
    }
};

export default mailReducer;