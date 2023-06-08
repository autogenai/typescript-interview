import { Injectable } from "@nestjs/common";
import { ActivityService } from "src/activity/activity.service";

interface HopefulAiRequest {
    prompt: string;
    temperature: number;
}

interface HopefulAiResponse {
    text: string;
}

@Injectable()
export class HopefulAiService {
    constructor(private readonly activityService: ActivityService) {}

    public async makePostRequest(prompt: string, action: string): Promise<HopefulAiResponse> {
        const request: HopefulAiRequest = {
            prompt: prompt,
            temperature: 0.5,
        };
        await this.activityService.recordActivity(action, "hopeful-ai");
        const result = await fetch("http://localhost:3001/", {
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
