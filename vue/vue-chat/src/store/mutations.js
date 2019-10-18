import Vue from 'vue'

export default {
    receiveAll(state, messages) {
        console.log(messages)
        let lastMessage
        messages.forEach(message => {
            if (!state.threads[message.threadID]) {
                createThread(state, message.threadID, message.threadName)
            }
            if (!lastMessage || message.timestamp > lastMessage.timestamp) {
                lastMessage = message
            }
            addMesage(state, message);
        })
        setCurrentThread(state, lastMessage.threadID);
    }
}

function setCurrentThread(state, id) {
    state.currentThreadId = id;
    state.threads[id].lastMessage.isRead = true;
}

function createThread(state, id, name) {
    Vue.set(state.threads, id, {
        id,
        name,
        messages: [],
        lastMessage: null
    })
}

function addMesage(state, message) {
    message.isRead = message.threadID === state.currentThreadId;
    const thread = state.threads[message.threadID];
    if (!thread.messages.some(id => id === message.id)) {
        thread.messages.push(message.id);
        thread.lastMessage = message;
    }
    Vue.set(state.messages, message.id, message);
}