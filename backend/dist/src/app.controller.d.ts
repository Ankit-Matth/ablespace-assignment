import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly logger;
    constructor(appService: AppService);
    getHello(): string;
    scrapeNavigationData(): Promise<any[]>;
    scrapeCategories(): Promise<any[]>;
    scrapeSearchResults(query: string): Promise<any[]>;
    scrapeProducts(categorySlug: string): Promise<any[]>;
    scrapeProductDetails(sourceUrl: string): Promise<any>;
}
