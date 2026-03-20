function detectFraud(transactions) {
    const map = new Map();

    for (let tx of transactions) {
        const [sender, receiver, amount, timestampStr] = tx.split(" ");
        console.log(timestampStr);
        const timestamp = parseInt(timestampStr);

        const key = sender + "-" + receiver + "-" + amount;

        if (map.has(key)) {
            const oldTimestamp = map.get(key);

            if (timestamp - oldTimestamp < 60) {
                // FRAUD
                console.log(tx);

                // ❗ Do NOT update timestamp
            } else {
                // Safe → update timestamp
                map.set(key, timestamp);
            }
        } else {
            map.set(key, timestamp);
        }
    }
    
    console.log(map)
}

const input = [
    "Anto Logesh 50 100",
    "Anto Logesh 50 120", // fraud (diff = 20)
    "Anto Logesh 50 200"  // safe (diff from 100 = 100)
];

detectFraud(input);