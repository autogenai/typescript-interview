import { Controller, Get, Param } from "@nestjs/common";
import { ActivityService } from "./activity.service";
import ActivityRequest from "./dto/activity-request.dto";

@Controller()
export class ActivityController {
    constructor(private readonly activityService: ActivityService) {}

    @Get("usage/hopeful-ai")
    public async activity(@Param() request: ActivityRequest) {
        return this.activityService.getHopefulAiUsage(request);
    }
}
