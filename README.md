# Search a product in amazon and add to cart

## Framework and Tools
- **Framework**: Playwright
- **Language**: JavaScript

## Project Description: 
This project automates the process of searching for an item on Amazon, selecting a product from dynamic suggestions, adding it to the cart, and verifying that the item details match in the cart.

## Getting Started 
1. Install playwright from command line 
``` npm init playwright@latest```

2. While installing the playwright install the browsers as well.

## Scenario Tested
1. **Search for an Item**: The script initiates a search by entering a few letters in the Amazon search bar.
2. **Dynamic Suggestions**: It captures the dynamic suggestions and selects the relevant item based on predefined criteria.
3. **Iterate Through Results**: The script collects all displayed products from the search results and iterates to find a specific item.
4. **Navigate to next page in search**: If specific item is not present, go to next pagination. 
4. **Add to Cart**: The selected item is added to the cart.
5. **Verify Cart Contents**: After adding the item, the script navigates to the cart and checks whether the item is present, along with verifying that the price matches the search results.

## Steps to Run the Automation

Command to be used:
1. To run test case in all browser
``` npx playwright test ```

2. To run test case in chromium browser
``` npx playwright test --project chromium```

3. To run test case in headed mode
``` npx playwright test --headed```

4. To debug the test cases
``` npx playwright test --debug```

