import { Injectable } from "@nestjs/common";
import { Activity } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import ActivityRequest from "./dto/activity-request.dto";

@Injectable()
export class ActivityService {
    constructor(private prisma: PrismaService) {}

    public async getHopefulAiUsage(request: ActivityRequest): Promise<Activity[]> {
        return await this.prisma.activity.findMany({
            where: { model: "hopeful-ai", time: { gte: request.since } },
            orderBy: { time: "desc" },
        });
    }

    public async recordActivity(action: string, model: string) {
        await this.prisma.activity.create({
            data: { model, action },
        });
    }
}
