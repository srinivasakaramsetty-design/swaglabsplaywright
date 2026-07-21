# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC011_Logout.spec.ts >> Verify Back Home and Logout functionality
- Location: tests\TC011_Logout.spec.ts:13:5

# Error details

```
TypeError: _LogoutPage.LogoutPage is not a constructor
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - generic [ref=e14]:
        - generic [ref=e15]: Products
        - generic [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: Name (A to Z)
          - combobox [ref=e19]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e23]:
      - generic [ref=e24]:
        - link "Sauce Labs Backpack" [ref=e26] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]:
            - link "Sauce Labs Backpack" [ref=e30] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e31]: Sauce Labs Backpack
            - generic [ref=e32]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e33]:
            - generic [ref=e34]: $29.99
            - button "Add to cart" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - link "Sauce Labs Bike Light" [ref=e38] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e39]
        - generic [ref=e40]:
          - generic [ref=e41]:
            - link "Sauce Labs Bike Light" [ref=e42] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e43]: Sauce Labs Bike Light
            - generic [ref=e44]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e45]:
            - generic [ref=e46]: $9.99
            - button "Add to cart" [ref=e47] [cursor=pointer]
      - generic [ref=e48]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e50] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e51]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e54] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e55]: Sauce Labs Bolt T-Shirt
            - generic [ref=e56]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e57]:
            - generic [ref=e58]: $15.99
            - button "Add to cart" [ref=e59] [cursor=pointer]
      - generic [ref=e60]:
        - link "Sauce Labs Fleece Jacket" [ref=e62] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e63]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - link "Sauce Labs Fleece Jacket" [ref=e66] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e67]: Sauce Labs Fleece Jacket
            - generic [ref=e68]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e69]:
            - generic [ref=e70]: $49.99
            - button "Add to cart" [ref=e71] [cursor=pointer]
      - generic [ref=e72]:
        - link "Sauce Labs Onesie" [ref=e74] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e75]
        - generic [ref=e76]:
          - generic [ref=e77]:
            - link "Sauce Labs Onesie" [ref=e78] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e79]: Sauce Labs Onesie
            - generic [ref=e80]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e81]:
            - generic [ref=e82]: $7.99
            - button "Add to cart" [ref=e83] [cursor=pointer]
      - generic [ref=e84]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e86] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e87]
        - generic [ref=e88]:
          - generic [ref=e89]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e90] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e91]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e92]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e93]:
            - generic [ref=e94]: $15.99
            - button "Add to cart" [ref=e95] [cursor=pointer]
  - contentinfo [ref=e96]:
    - list [ref=e97]:
      - listitem [ref=e98]:
        - link "Twitter" [ref=e99] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e100]:
        - link "Facebook" [ref=e101] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e102]:
        - link "LinkedIn" [ref=e103] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e104]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  18  | 
  19  |     // Login
  20  | 
  21  |     const loginPage = new LoginPage(page);
  22  | 
  23  | 
  24  |     await loginPage.login(
  25  |         ConfigReader.getUsername(),
  26  |         ConfigReader.getPassword()
  27  |     );
  28  | 
  29  | 
  30  |     await expect(page)
  31  |         .toHaveURL(/inventory/);
  32  | 
  33  | 
  34  |     logger.info("Login successful");
  35  | 
  36  | 
  37  | 
  38  |     // Add Product
  39  | 
  40  |     const addCartPage = new AddCartPage(page);
  41  | 
  42  | 
  43  |     await addCartPage.addProductToCart();
  44  | 
  45  | 
  46  |     await addCartPage.viewCart();
  47  | 
  48  | 
  49  |     await expect(page)
  50  |         .toHaveURL(/cart\.html/);
  51  | 
  52  | 
  53  |     logger.info("Cart opened");
  54  | 
  55  | 
  56  | 
  57  |     // Checkout
  58  | 
  59  |     const checkoutPage = new CheckoutPage(page);
  60  | 
  61  | 
  62  |     await checkoutPage.clickCheckout();
  63  | 
  64  | 
  65  | 
  66  |     const checkoutInfo =
  67  |         new CheckoutInformationPage(page);
  68  | 
  69  | 
  70  |     await checkoutInfo.enterCheckoutInformation(
  71  |         "Srinivas",
  72  |         "Akaramsetty",
  73  |         "500001"
  74  |     );
  75  | 
  76  | 
  77  |     logger.info("Checkout information completed");
  78  | 
  79  | 
  80  | 
  81  |     // Finish Order
  82  | 
  83  |     const overviewPage =
  84  |         new CheckoutOverviewPage(page);
  85  | 
  86  | 
  87  |     await overviewPage.clickFinish();
  88  | 
  89  | 
  90  |     await expect(page)
  91  |         .toHaveURL(/checkout-complete\.html/);
  92  | 
  93  | 
  94  |     logger.info("Order completed successfully");
  95  | 
  96  | 
  97  | 
  98  |     // Back Home
  99  | 
  100 |     const backHomePage =
  101 |         new BackButtonPage(page);
  102 | 
  103 | 
  104 |     await backHomePage.clickBackHome();
  105 | 
  106 | 
  107 |     await expect(page)
  108 |         .toHaveURL(/inventory/);
  109 | 
  110 | 
  111 |     logger.info("Back Home button verified");
  112 | 
  113 | 
  114 | 
  115 |     // Logout
  116 | 
  117 |     const logoutPage =
> 118 |         new LogoutPage(page);
      |         ^ TypeError: _LogoutPage.LogoutPage is not a constructor
  119 | 
  120 | 
  121 |     await logoutPage.logout();
  122 | 
  123 | 
  124 |     logger.info("Logout clicked");
  125 | 
  126 | 
  127 | 
  128 |     // Verify Login Page
  129 | 
  130 |     await expect(page)
  131 |         .toHaveURL("https://www.saucedemo.com/");
  132 | 
  133 | 
  134 |     await expect(page.locator("#login-button"))
  135 |         .toBeVisible();
  136 | 
  137 | 
  138 |     logger.info("Logout completed successfully");
  139 | 
  140 | 
  141 |     logger.info("===== Back Home and Logout Test Completed =====");
  142 | 
  143 | 
  144 | });
```