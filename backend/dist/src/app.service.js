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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const crawlee_1 = require("crawlee");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AppService = class AppService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    getHello() {
        return 'Hello from Server!';
    }
    async scrapeNavigationData() {
        crawlee_1.Configuration.set('memoryMbytes', 4096);
        crawlee_1.Configuration.set('systemInfoV2', true);
        let finalData = [];
        const crawler = new crawlee_1.PlaywrightCrawler({
            requestHandler: async ({ page, log }) => {
                log.info('Navigating to https://www.worldofbooks.com/');
                await page.goto('https://www.worldofbooks.com/');
                try {
                    await page.waitForSelector('#onetrust-accept-btn-handler', { timeout: 5000 });
                    await page.click('#onetrust-accept-btn-handler');
                    log.info('Cookie banner accepted.');
                }
                catch (error) {
                    log.info('Cookie banner not found or could not be clicked.');
                }
                await page.waitForTimeout(1000);
                log.info('Scraping navigation data...');
                const navigationData = await page.evaluate(() => {
                    let mainIdCounter = 1;
                    let categoryIdCounter = 1;
                    const results = [];
                    const topLevelItems = document.querySelectorAll('nav > ul.list-menu--inline > li');
                    topLevelItems.forEach(mainLi => {
                        var _a, _b, _c;
                        const mainLink = mainLi.querySelector('a');
                        if (!mainLink)
                            return;
                        const heading = mainLink.querySelector('span');
                        if (!heading)
                            return;
                        const title = (_b = (_a = heading.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '';
                        const slug = (_c = mainLink.getAttribute('href')) !== null && _c !== void 0 ? _c : '';
                        if (!title)
                            return;
                        const navItem = {
                            id: mainIdCounter++,
                            title: title,
                            slug: slug,
                            categories: [],
                        };
                        const subMenu = mainLi.querySelector('.onstate-mega-menu__submenu');
                        if (subMenu) {
                            let currentCategory = null;
                            const categoryGroups = subMenu.querySelectorAll('.onstate-mega-menu__submenu__links > ul > li');
                            categoryGroups.forEach(groupLi => {
                                var _a;
                                const groupTitleEl = groupLi.querySelector('.caption-large');
                                const groupTitle = (_a = groupTitleEl === null || groupTitleEl === void 0 ? void 0 : groupTitleEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                                if (groupTitle && groupTitle !== '' && groupTitle !== '&nbsp;') {
                                    currentCategory = {
                                        id: categoryIdCounter++,
                                        title: groupTitle,
                                        subcategories: [],
                                    };
                                    navItem.categories.push(currentCategory);
                                }
                                if (currentCategory) {
                                    const subcategoryLinks = groupLi.querySelectorAll('ul > li > a');
                                    subcategoryLinks.forEach(subLink => {
                                        var _a, _b, _c;
                                        currentCategory.subcategories.push({
                                            name: (_b = (_a = subLink.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : 'Unnamed',
                                            slug: (_c = subLink.getAttribute('href')) !== null && _c !== void 0 ? _c : '#',
                                            product_count: 0,
                                        });
                                    });
                                }
                            });
                        }
                        results.push(navItem);
                    });
                    return results;
                });
                finalData = navigationData;
                log.info(`Successfully scraped ${finalData.length} main navigation items.`);
            },
            errorHandler: async ({ request, log }, error) => {
                log.error(`Request ${request.url} failed with error: ${error.message}`);
            },
        });
        await crawler.run(['https://www.worldofbooks.com/']);
        if (finalData && finalData.length > 0) {
            const scrapedTime = new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            });
            const processedData = finalData.map(item => (Object.assign(Object.assign({}, item), { last_scraped_at: scrapedTime })));
            const product = new this.productModel({
                query: 'navigation',
                data: processedData,
                source: 'worldofbooks',
            });
            await product.save();
            return processedData;
        }
        return finalData;
    }
    async scrapeCategories() {
        crawlee_1.Configuration.set('memoryMbytes', 4096);
        crawlee_1.Configuration.set('systemInfoV2', true);
        let finalData = [];
        const crawler = new crawlee_1.PlaywrightCrawler({
            requestHandler: async ({ page, log }) => {
                log.info('Navigating to https://www.worldofbooks.com/');
                await page.goto('https://www.worldofbooks.com/');
                try {
                    await page.waitForSelector('#onetrust-accept-btn-handler', { timeout: 5000 });
                    await page.click('#onetrust-accept-btn-handler');
                    log.info('Cookie banner accepted.');
                }
                catch (error) {
                    log.info('Cookie banner not found or could not be clicked.');
                }
                await page.waitForTimeout(1000);
                log.info('Scraping navigation data...');
                const navigationData = await page.evaluate(() => {
                    let mainIdCounter = 1;
                    let categoryIdCounter = 1;
                    const flatCategoryResults = [];
                    const topLevelItems = document.querySelectorAll('nav > ul.list-menu--inline > li');
                    topLevelItems.forEach(mainLi => {
                        const mainId = mainIdCounter++;
                        const subMenu = mainLi.querySelector('.onstate-mega-menu__submenu');
                        if (subMenu) {
                            let currentCategory = null;
                            const categoryGroups = subMenu.querySelectorAll('.onstate-mega-menu__submenu__links > ul > li');
                            categoryGroups.forEach(groupLi => {
                                var _a, _b;
                                const groupTitleEl = groupLi.querySelector('.caption-large');
                                const groupTitle = (_a = groupTitleEl === null || groupTitleEl === void 0 ? void 0 : groupTitleEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                                if (groupTitle && groupTitle !== '' && groupTitle !== '&nbsp;') {
                                    const categoryLinkEl = groupLi.querySelector('a');
                                    const categorySlug = (_b = categoryLinkEl === null || categoryLinkEl === void 0 ? void 0 : categoryLinkEl.getAttribute('href')) !== null && _b !== void 0 ? _b : '#';
                                    currentCategory = {
                                        id: categoryIdCounter++,
                                        navigation_id: mainId,
                                        slug: categorySlug,
                                        title: groupTitle,
                                        subcategories: [],
                                    };
                                    flatCategoryResults.push(currentCategory);
                                }
                                if (currentCategory) {
                                    const subcategoryLinks = groupLi.querySelectorAll('ul > li > a');
                                    subcategoryLinks.forEach(subLink => {
                                        var _a, _b, _c;
                                        currentCategory.subcategories.push({
                                            name: (_b = (_a = subLink.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : 'Unnamed',
                                            slug: (_c = subLink.getAttribute('href')) !== null && _c !== void 0 ? _c : '#',
                                            product_count: 0,
                                        });
                                    });
                                }
                            });
                        }
                    });
                    return flatCategoryResults;
                });
                finalData = navigationData;
                log.info(`Successfully scraped ${finalData.length} categories.`);
            },
            errorHandler: async ({ request, log }, error) => {
                log.error(`Request ${request.url} failed with error: ${error.message}`);
            },
        });
        await crawler.run(['https://www.worldofbooks.com/']);
        if (finalData && finalData.length > 0) {
            const scrapedTime = new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            });
            const processedData = finalData.map(category => (Object.assign(Object.assign({}, category), { last_scraped_at: scrapedTime })));
            const product = new this.productModel({
                query: 'categories',
                data: processedData,
                source: 'worldofbooks',
            });
            await product.save();
            return processedData;
        }
        return finalData;
    }
    async scrapeSearchResults(query) {
        crawlee_1.Configuration.set('memoryMbytes', 4096);
        crawlee_1.Configuration.set('systemInfoV2', true);
        const searchQuery = encodeURIComponent(query);
        const scrapedResults = [];
        const maxResults = 16;
        const crawler = new crawlee_1.PlaywrightCrawler({
            requestHandler: async ({ page, log }) => {
                log.info(`Scraping page: ${page.url()}`);
                await page.waitForSelector('ol.ais-InfiniteHits-list');
                await page.locator('li.ais-InfiniteHits-item').first().waitFor();
                const elements = await page.locator('li.ais-InfiniteHits-item').all();
                log.info(`Found ${elements.length} product items.`);
                const itemsToProcess = elements.slice(0, maxResults);
                const promises = itemsToProcess.map((el, i) => Promise.all([
                    el.locator('h3.card__heading a').innerText().catch(() => ''),
                    el.locator('p.author').innerText().catch(() => 'N/A'),
                    el.locator('.price-item').innerText().catch(() => '$0.00'),
                    el.locator('img').getAttribute('src').catch(() => ''),
                    el.locator('h3.card__heading a').getAttribute('href').catch(() => ''),
                ]).then(([title, author, price, image, productPath]) => {
                    if (title && productPath) {
                        return {
                            id: i + 1,
                            title: title.trim(),
                            author: author.trim(),
                            price: price.trim(),
                            image_url: image,
                            source_url: `https://www.worldofbooks.com${productPath}`,
                        };
                    }
                    return null;
                }));
                const results = await Promise.all(promises);
                scrapedResults.push(...results.filter(Boolean));
            },
        });
        await crawler.run([`https://www.worldofbooks.com/search?q=${searchQuery}`]);
        if (scrapedResults && scrapedResults.length > 0) {
            const scrapedTime = new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            });
            const processedData = scrapedResults.map(item => (Object.assign(Object.assign({}, item), { last_scraped_at: scrapedTime })));
            const product = new this.productModel({
                query: query,
                data: processedData,
                source: 'worldofbooks',
            });
            await product.save();
            return processedData;
        }
        return scrapedResults;
    }
    async scrapeProducts(categorySlug) {
        crawlee_1.Configuration.set('memoryMbytes', 4096);
        crawlee_1.Configuration.set('systemInfoV2', true);
        const searchSlug = categorySlug;
        const scrapedProducts = [];
        const maxProducts = 16;
        const crawler = new crawlee_1.PlaywrightCrawler({
            requestHandler: async ({ page, log }) => {
                const url = `https://www.worldofbooks.com/${searchSlug}`;
                log.info(`Navigating to category URL: ${url}`);
                await page.goto(url, { waitUntil: 'networkidle' });
                await page.waitForSelector('ol.ais-InfiniteHits-list');
                const elements = await page.locator('li.ais-InfiniteHits-item').all();
                for (let i = 0; i < Math.min(elements.length, maxProducts); i++) {
                    const el = elements[i];
                    const title = await el.locator('h3.card__heading a').innerText().catch(() => '');
                    const author = await el.locator('p.author').innerText().catch(() => 'N/A');
                    const price = await el.locator('.price-item').innerText().catch(() => '$0.00');
                    const image = await el.locator('img').getAttribute('src').catch(() => '');
                    const productPath = await el.locator('h3.card__heading a').getAttribute('href').catch(() => '');
                    scrapedProducts.push({
                        id: i + 1,
                        title: title.trim(),
                        author: author.trim(),
                        price: price.trim(),
                        image_url: image,
                        source_url: `https://www.worldofbooks.com${productPath}`,
                    });
                }
            },
        });
        await crawler.run([`https://www.worldofbooks.com/${searchSlug}`]);
        if (scrapedProducts && scrapedProducts.length > 0) {
            const scrapedTime = new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            });
            const processedData = scrapedProducts.map(item => (Object.assign(Object.assign({}, item), { last_scraped_at: scrapedTime })));
            const product = new this.productModel({
                query: categorySlug,
                data: processedData,
                source: 'worldofbooks',
            });
            await product.save();
            return processedData;
        }
        return scrapedProducts;
    }
    async scrapeProductDetails(sourceUrl) {
        crawlee_1.Configuration.set('memoryMbytes', 4096);
        crawlee_1.Configuration.set('systemInfoV2', true);
        let scrapedProduct = null;
        const crawler = new crawlee_1.PlaywrightCrawler({
            requestHandler: async ({ page, request, log }) => {
                try {
                    const fullTitleText = await page.locator('div.product__title h1').innerText().catch(() => '');
                    const author = await page.locator('div.product__title .author-item a').innerText().catch(() => 'N/A');
                    const title = fullTitleText.replace(` by ${author}`, '').trim();
                    const price = await page.locator('.price-item--regular').first().innerText().catch(() => 'N/A');
                    const description = await page.locator('.summary-block .rich-text__text p').first().innerText().catch(() => 'N/A');
                    const rawImageUrl = await page.locator('.product__media-list .product__media-item img').first().getAttribute('src');
                    const image_url = rawImageUrl ? new URL(rawImageUrl, request.loadedUrl).href : null;
                    const specs = {};
                    const specItems = await page.locator('table.additional-info-table tr').all();
                    for (const item of specItems) {
                        const label = await item.locator('td').nth(0).innerText().catch(() => '');
                        const value = await item.locator('td').nth(1).innerText().catch(() => '');
                        if (label && value) {
                            const key = label.trim().toLowerCase().replace(/\s+/g, '_');
                            specs[key] = value.trim();
                        }
                    }
                    const recommendedProducts = [];
                    const allRecommendedItems = await page.locator('div[id^="relatedProducts"] .main-product-card').all();
                    const recommendedItems = allRecommendedItems.slice(0, 12);
                    for (const item of recommendedItems) {
                        try {
                            const recTitle = await item.locator('.card__heading a').innerText();
                            const recAuthor = await item.locator('.author').innerText();
                            const recPrice = await item.locator('.price .price-item').innerText();
                            const recRawImageUrl = await item.locator('.card__inner img').getAttribute('src');
                            const relativeUrl = await item.locator('.card__heading a').getAttribute('href');
                            const recImageUrl = recRawImageUrl ? new URL(recRawImageUrl, request.loadedUrl).href : null;
                            const recSourceUrl = relativeUrl ? new URL(relativeUrl, request.loadedUrl).href : null;
                            recommendedProducts.push({
                                id: recommendedProducts.length + 1,
                                title: recTitle,
                                author: recAuthor,
                                price: recPrice,
                                image_url: recImageUrl,
                                source_url: recSourceUrl,
                            });
                        }
                        catch (e) {
                            log.warning("Could not parse a recommended product, skipping.", { error: e.message });
                        }
                    }
                    scrapedProduct = {
                        id: 1,
                        title,
                        author,
                        price,
                        image_url,
                        source_url: request.loadedUrl,
                        description,
                        specs,
                        last_scraped_at: new Date().toLocaleString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                        }),
                        recommendedProducts,
                    };
                }
                catch (error) {
                    log.error(`Failed to scrape ${request.url}`, { error: error.message });
                }
            },
        });
        await crawler.run([sourceUrl]);
        if (scrapedProduct) {
            const product = new this.productModel({
                query: sourceUrl,
                data: scrapedProduct,
                source: 'worldofbooks',
            });
            await product.save();
        }
        return scrapedProduct;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('ScarapedData')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AppService);
//# sourceMappingURL=app.service.js.map