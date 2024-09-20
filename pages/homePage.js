export default class HomePage {
    constructor(page){
        this.page = page;
        this.searchBox = '#twotabsearchtextbox';
        this.dynamicSuggestions = '.s-suggestion-container';
    }
    
    // Method to search and get the item from dynamic suggestions 
    async searchFor(product){
        await this.page.locator(this.searchBox).fill(product);
        await this.page.waitForSelector(this.dynamicSuggestions, {state: 'visible'});
        const suggestions =await this.page.$$(this.dynamicSuggestions);


        for(const suggestion of suggestions){
            const text = await suggestion.innerText();
            if(text.toLowerCase()=='phone samsung'){
                await suggestion.click();
                break;
            }
        }
    }
}

