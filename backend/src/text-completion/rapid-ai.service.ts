import { Injectable } from "@nestjs/common";
import { ActivityService } from "src/activity/activity.service";

interface RapidAiRequest {
    question: string;
    creativity: number;
    answerLength: number;
}

interface RapidAiResponse {
    answer: string;
}

@Injectable()
export class RapidAiService {
    constructor(private readonly activityService: ActivityService) {}

    public async makePostRequest(prompt: string, action: string): Promise<RapidAiResponse> {
        const request: RapidAiRequest = {
            question: prompt,
            creativity: 0.5,
            answerLength: 100,
        };
        await this.activityService.recordActivity(action, "rapid-ai");
        const result = await fetch("http://localhost:3003/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        });

        if (!result.ok) {
            throw new Error("Request failed");
        }

        return await result.json();
    }
}
