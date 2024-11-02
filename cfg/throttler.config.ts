import { ThrottlerModuleOptions } from "@nestjs/throttler";

// 50 запросов в минуту
export const THROTTLER_CONFIG: ThrottlerModuleOptions = [{
    ttl: 3600 * 1000,
    limit: 50
}];