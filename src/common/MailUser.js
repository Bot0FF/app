export let mail = {
    dialogs: [
        {id: 1, from: "John"},
        {id: 2, from: "Mike"}
    ],
    messages: [
        {id: 1, message: "Message 1"},
        {id: 2, message: "Message 2"}
    ]
};

export let addMessage = (message) => {
    let newMessage = {
        id: 3,
        message: message
    };
    mail.messages.push(newMessage);
}