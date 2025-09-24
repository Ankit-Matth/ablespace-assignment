"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    var _a;
    const logger = new common_1.Logger('bootstrap');
    logger.log('Application starting...');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000);
    logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map