export default class SearchPage{
    constructor(page){
        this.page = page;
        this.productList = 'div[data-component-type ="s-search-result"]';
    }
   
    // Method to get the specific item in search result and add to the cart
    async addToCart(specificProduct){

        let itemFound =false;
        while(!itemFound){
            await this.page.waitForSelector(this.productList);
            const products = await this.page.$$(this.productList);
            for(const product of products){
                const prodcutTitle = await product.$eval('h2 a.a-link-normal span.a-size-medium', el => el.innerText);
                if(prodcutTitle.includes(specificProduct)){
                    const price= await product.$eval('.a-price .a-offscreen', el => el.innerText);
                    await product.$r('//button[text()= "Add to cart"]').click();
                    itemFound =true;
                    return price;
                }
            }
            
            // If not found in the 1st page, go to the next page and search until next button is disabled
            const nextPageButton = await this.page.locator('s-pagination-next');
            const isNextPageEnabled = await nextPageButton.isVisible();
            if(isNextPageEnabled){
                await nextPageButton.click();
            }
            else {
                console.log('No more pages to search');
                break;
            }
        }
        return null;
    }
}