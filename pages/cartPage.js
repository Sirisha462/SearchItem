export default class CartPage {

    constructor(page){
        this.page = page;
        this.cartButton = '#nav-cart';
        this.cartItems = 'div.sc-list-item-content';
    }
    
    // Go to cart and wait for cart items to load
    async goToCart(){
        await this.page.click(this.cartButton);
        await this.page.waitForSelector(this.cartItems);
    }

    // Search for the added item in the cart along with price
    async verifyItemInCart(product, price){
        const cartItems = await this.page.$$(this.cartItems);
        for(const cartItem of cartItems){
            const cartTitle = await cartItem.$eval('h2 a', el=> el.innerText);
            const cartPrice = await cartItem.$eval('.a-price .a-offscreen', el=>el.innerText);
            if(cartTitle.includes(product)&& cartPrice ==price){
                console.log('Item added to cart successfully');
                return true;
            }
        }
        return false;
    }

}