const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

//стейт
let initialState = {
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

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const updateNewMessageBody = (body) => {
    return {type: "UPDATE_NEW_MESSAGE_BODY", body: body};
};

export const sendMessage = () => {
    return {type: "SEND_MESSAGE"};
}

//через dispatch из контейнера в reducer передается action и обновляется state
const mailReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: Date.now(), message: body}]
            };
        }
        default:
            return state;
    }
};

export default mailReducer;