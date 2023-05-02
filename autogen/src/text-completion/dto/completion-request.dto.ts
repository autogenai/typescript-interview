import { IsString, IsNotEmpty } from "class-validator";

export default class CompletionRequest {
    @IsString()
    @IsNotEmpty()
    public input: string;
}
