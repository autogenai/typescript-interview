import { Injectable } from "@nestjs/common";
import { ActivityService } from "src/activity/activity.service";

const minResponseTime = 10;
const maxResponseTime = 20;
const successRate = 1;

interface RapidAiResponse {
    answer: string;
}

@Injectable()
export class RapidAiService {
    constructor(private readonly activityService: ActivityService) {}

    public async makePostRequest(prompt: string, action: string): Promise<RapidAiResponse> {
        await this.activityService.recordActivity(action, "rapid-ai");
        const answer = await this.generateText(prompt);
        return { answer };
    }

    async generateText(input: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const responseTime = minResponseTime + Math.random() * (maxResponseTime - minResponseTime);
            setTimeout(() => {
                if (Math.random() < successRate) {
                    const words = input.split(" ");
                    resolve(words.slice(0, 20).join(" "));
                } else {
                    reject("Text generation failed");
                }
            }, responseTime);
        });
    }
}
