const minResponseTime = Number(process.env.MIN_RESPONSE_TIME || "1000");
const maxResponseTime = Number(process.env.MAX_RESPONSE_TIME || "3000");
const successRate = Number(process.env.SUCCESS_RATE || "0.9");

const dummyText = "Curabitur nec consequat ligula. Mauris ultricies et nisi ut pulvinar." +
"Duis ipsum ipsum, lobortis eu mauris nec, mollis luctus nunc. Suspendisse sit amet sollicitudin mauris. " +
"Morbi ultrices metus non ante placerat eleifend.";

export function generateText(): Promise<string> {
    return new Promise((resolve, reject) => {
        const responseTime = minResponseTime + Math.random() * (maxResponseTime - minResponseTime);
        setTimeout(() => {
            if (Math.random() < successRate) {
                resolve(dummyText);
            }
            else {
                reject("Text generation failed");
            }
        }, responseTime);
    });
}