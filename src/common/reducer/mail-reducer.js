const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, from: "John" },
        { id: 2, from: "Mike" }
    ],
    messages: [
        { id: 1, message: "Message 1" },
        { id: 2, message: "Message 2" }
    ]
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const sendMessage = (newMessageBody) => ({type: "SEND_MESSAGE", newMessageBody: newMessageBody});

//через dispatch из контейнера в reducer передается action и обновляется state
const mailReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {...state,
                messages: [...state.messages, {id: Date.now(), message: action.newMessageBody}]
            };
        }
        default:
            return state;
    }
};

export default mailReducer;