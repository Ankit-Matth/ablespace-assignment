"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AppController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = AppController_1 = class AppController {
    constructor(appService) {
        this.appService = appService;
        this.logger = new common_1.Logger(AppController_1.name);
        this.logger.log('AppController instantiated');
    }
    getHello() {
        this.logger.log('AppController instantiated');
        return this.appService.getHello();
    }
    async scrapeNavigationData() {
        this.logger.log('Scraping navigation data');
        return this.appService.scrapeNavigationData();
    }
    async scrapeCategories() {
        this.logger.log('Scraping navigation data');
        return this.appService.scrapeCategories();
    }
    async scrapeSearchResults(query) {
        this.logger.log('Scraping search results');
        return this.appService.scrapeSearchResults(query);
    }
    async scrapeProducts(categorySlug) {
        this.logger.log('Scraping products');
        return this.appService.scrapeProducts(categorySlug);
    }
    async scrapeProductDetails(sourceUrl) {
        this.logger.log('Scraping product details');
        return this.appService.scrapeProductDetails(sourceUrl);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('scrapeNavigationData'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "scrapeNavigationData", null);
__decorate([
    (0, common_1.Get)('scrapeCategories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "scrapeCategories", null);
__decorate([
    (0, common_1.Get)('scrapeSearchResults'),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "scrapeSearchResults", null);
__decorate([
    (0, common_1.Get)('scrapeProducts'),
    __param(0, (0, common_1.Query)('categorySlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "scrapeProducts", null);
__decorate([
    (0, common_1.Get)('scrapeProductDetails'),
    __param(0, (0, common_1.Query)('sourceUrl')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "scrapeProductDetails", null);
exports.AppController = AppController = AppController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map