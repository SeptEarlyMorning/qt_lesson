const forkComputer = () => {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
        sum += i;
    }
    return sum;
};

process.on('message', msg => {
    const sum = forkComputer();
    process.send(sum);
});