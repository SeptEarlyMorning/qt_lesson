const data = require('./mock-data');
const LATENCY = 1600;
export function getAllMessages(cd) {
    setTimeout(() => {
        cd(data);
    }, LATENCY)
}