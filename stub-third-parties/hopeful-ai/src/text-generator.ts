import { faker } from "@faker-js/faker";

const minResponseTime = Number(process.env.MIN_RESPONSE_TIME || "2000");
const maxResponseTime = Number(process.env.MAX_RESPONSE_TIME || "10000");
const successRate = Number(process.env.SUCCESS_RATE || "0.7");

export function generateText() {
    return new Promise((resolve, reject) => {
        const responseTime = minResponseTime + Math.random() * (maxResponseTime - minResponseTime);
        const responseText = faker.lorem.paragraph();
        setTimeout(() => {
            if (Math.random() < successRate) {
                resolve({ text: responseText, tokens: responseText.split(" ").length });
            }
            else {
                reject("Text generation failed");
            }
        }, responseTime);
    });
}