import { IsDate } from "class-validator";

export default class ActivityRequest {
    @IsDate()
    public since: Date;
}
