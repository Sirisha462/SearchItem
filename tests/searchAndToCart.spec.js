const {chromium,test} = require('playwright/test');
import HomePage from "../pages/homePage.js";
import SearchPage from "../pages/searchPage.js";
import CartPage from "../pages/cartPage.js";

test("Search for Samsung Phone and add to cart", async () => {

    const browser= await chromium.launch();
    const page= await browser.newPage();
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);
    const cartPage = new CartPage(page);

    await page.goto('https://www.amazon.com/');

    // 1. Search for 'phone sam' in search bar and collect dynamic suggestion to get 'phone samsung'
     await homePage.searchFor('phone sam');

     // 2. Add 'Galaxy A25 5G' to cart and get price
     const price = await searchPage.addToCart('Galaxy A25 5G');
     
     // If not found log the details and exit the test 
     if(!price){
         console.log('Galaxy A25 5G Cell Phone not found.');
         await browser.close();
         return;
     }

    // 3. Go to the cart
     await cartPage.goToCart();
     
     //Verify the item in cart along with the price shown in the search result 
     const itemInCart = await cartPage.verifyItemInCart('Galaxy A25 5G', price);
     if(!itemInCart) console.log('Item with the same price not found in the cart');



    await page.close();
    await browser.close();

})