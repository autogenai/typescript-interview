import { Body, Controller, Post } from "@nestjs/common";
import { TextCompletionService } from "./text-completion.service";
import CompletionRequest from "./dto/completion-request.dto";
import CompletionResponse from "./dto/completion-response.dto";

@Controller()
export class TextCompletionController {
    constructor(private readonly textCompletionService: TextCompletionService) {}

    @Post("summarise")
    public async summarise(@Body() completionRequest: CompletionRequest): Promise<CompletionResponse> {
        return this.textCompletionService.summarise(completionRequest);
    }
}
