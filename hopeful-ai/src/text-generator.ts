const minResponseTime = Number(process.env.MIN_RESPONSE_TIME || "2000");
const maxResponseTime = Number(process.env.MAX_RESPONSE_TIME || "10000");
const successRate = Number(process.env.SUCCESS_RATE || "0.7");

const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc turpis, " +
"suscipit at interdum id, mollis nec libero. Donec congue turpis vel metus convallis vulputate. " +
"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. " +
"Mauris aliquam euismod magna, sed tempor ipsum elementum id. Curabitur egestas lorem ligula, " +
"quis porttitor nibh gravida non. Praesent sit amet turpis tortor. Vivamus metus mauris, " +
"mollis et quam et, semper blandit velit. Donec id posuere lorem. Duis feugiat ante a ipsum pretium, " +
"non tincidunt mi posuere. Aliquam erat volutpat. Etiam pretium facilisis lectus. Donec euismod enim in quam egestas, " +
"ut interdum purus consequat. Mauris luctus dolor quis arcu feugiat vestibulum euismod eu diam. Quisque consectetur quis urna at posuere."

export function generateText() {
    return new Promise((resolve, reject) => {
        const responseTime = minResponseTime + Math.random() * (maxResponseTime - minResponseTime);
        setTimeout(() => {
            if (Math.random() < successRate) {
                resolve({ text: dummyText, tokens: dummyText.split(" ").length });
            }
            else {
                reject("Text generation failed");
            }
        }, responseTime);
    });
}