import { test, expect } from '@playwright/test';

test('minimum and maximum product price', async ({ page }) => {

    await page.goto('https://www.myntra.com/shop/women')
    await page.hover('(//a[text()="Kids"])[1]')
    await page.waitForTimeout(5000)
    await page.click('//a[@data-reactid="345"]')
    await page.waitForTimeout(3000)

    const productNames = await page.locator('//li[@class="product-base"]//h3').allInnerTexts()
    const prices = await page.locator('//li[@class="product-base"]//span[@class="product-discountedPrice"]').allInnerTexts()

    let priceNumbers = prices.map(p => parseInt(p.replace("Rs. ", "")))

    let minPrice = Math.min(...priceNumbers)
    let minIndex = priceNumbers.indexOf(minPrice)

    console.log("Minimum Price :", minPrice)
    console.log("Minimum Price Product Name :", productNames[minIndex])

})