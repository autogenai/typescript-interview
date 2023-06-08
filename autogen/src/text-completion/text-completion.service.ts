import { Injectable } from "@nestjs/common";
import { HopefulAiService } from "./hopeful-ai.service";
import CompletionResponse from "./dto/completion-response.dto";
import CompletionRequest from "./dto/completion-request.dto";

const ideatePrompts = [
    "Come up with a one line idea on the topic of:",
    "Write a one line concept about:",
    "Think of a novel approach to:",
];

@Injectable()
export class TextCompletionService {
    constructor(private readonly hopefulAiService: HopefulAiService) {}

    public async summarise(request: CompletionRequest): Promise<CompletionResponse> {
        const prompt = `Summarise the following text: ${request.input}`;
        const response = await this.hopefulAiService.makePostRequest(prompt, "summarise");

        return { choices: [response.text] };
    }

    public async ideate(request: CompletionRequest): Promise<CompletionResponse> {
        const choices: string[] = [];

        for (const prompt of ideatePrompts) {
            const response = await this.hopefulAiService.makePostRequest(`${prompt} ${request.input}`, "ideate");
            choices.push(response.text);
        }

        return { choices };
    }
}
