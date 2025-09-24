import { Model } from 'mongoose';
import { ScarapedData } from '../models/ScrapedData.schema';
export declare class AppService {
    private readonly productModel;
    constructor(productModel: Model<ScarapedData>);
    getHello(): string;
    scrapeNavigationData(): Promise<any[]>;
    scrapeCategories(): Promise<any[]>;
    scrapeSearchResults(query: string): Promise<any[]>;
    scrapeProducts(categorySlug: string): Promise<any[]>;
    scrapeProductDetails(sourceUrl: string): Promise<any>;
}
