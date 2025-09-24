
import { Controller, Get, Logger, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {
    this.logger.log('AppController instantiated');
  }

  @Get()
  getHello(): string {
    this.logger.log('AppController instantiated');
    return this.appService.getHello();
  }

  @Get('scrapeNavigationData')
  async scrapeNavigationData(): Promise<any[]> {
    this.logger.log('Scraping navigation data');
    return this.appService.scrapeNavigationData();
  }

  @Get('scrapeCategories')
  async scrapeCategories(): Promise<any[]> {
    this.logger.log('Scraping navigation data');
    return this.appService.scrapeCategories();
  }

  @Get('scrapeSearchResults')
  async scrapeSearchResults(@Query('query') query: string) {
    this.logger.log('Scraping search results');
    return this.appService.scrapeSearchResults(query);
  }

  @Get('scrapeProducts')
  async scrapeProducts(@Query('categorySlug') categorySlug: string) {
    this.logger.log('Scraping products');
    return this.appService.scrapeProducts(categorySlug);
  }

  @Get('scrapeProductDetails')
  async scrapeProductDetails(@Query('sourceUrl') sourceUrl: string) {
    this.logger.log('Scraping product details');
    return this.appService.scrapeProductDetails(sourceUrl);
  }
}
