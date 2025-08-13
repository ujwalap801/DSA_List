process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputData = '';
process.stdin.on('data', function (chunk) {
    inputData += chunk;
});

process.stdin.on('end', function () {
    inputData = inputData.trim().split(/\s+/); // Tokenize everything

    let index = 0;
    const next = () => inputData[index++];
    const nextInt = () => parseInt(next());
    const nextFloat = () => parseFloat(next());
    const nextLine = () => inputData.slice(index, index = inputData.length).join(' ');

    solve(next, nextInt, nextFloat, nextLine);
});

let next = 5;
let nextInt = [1, 2, 3, 4, 5]

function solve(next, nextInt) {
    let n = nextInt();
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(nextInt());
    }

    console.log(arr); // [1, 2, 3, 4, 5]
}

