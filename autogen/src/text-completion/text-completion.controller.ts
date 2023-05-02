import { Body, Controller, Post } from "@nestjs/common";
import { TextCompletionService } from "./text-completion.service";
import CompletionRequest from "./dto/completion-request.dto";

@Controller()
export class TextCompletionController {
    constructor(private readonly textCompletionService: TextCompletionService) {}

    @Post("ideate")
    public async pureCompletion(@Body() completionRequest: CompletionRequest) {
        return this.textCompletionService.ideate(completionRequest);
    }

    @Post("summarise")
    public async summarise(@Body() completionRequest: CompletionRequest) {
        return this.textCompletionService.summarise(completionRequest);
    }
}
