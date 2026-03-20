 import { test, expect } from '@playwright/test';
import { log } from 'node:console';

test.only('myntra', async ({ page }) => {

 
  await page.goto('https://www.myntra.com');
  await page.waitForTimeout(1000);
  await page.hover('//a[@data-reactid="335"]')
  await page.waitForTimeout(2000);
  await page.click('//a[@data-reactid="345"]')
  await page.waitForTimeout(1000);
  const prize= await (page.locator('//li[@class="product-base"]')).count();
  console.log(prize);
   await page.waitForTimeout(1000);

   const price=await page.locator('//span[@class="product-discountedPrice"]').allTextContents();
   const count=await page.locator('//span[@class="product-discountedPrice"]').count()
   console.log(price)
   console.log(count)
   const price1=price.map(p=>parseInt(p.replace('Rs. ','')))
   console.log(price1)
   const minprice=Math.min(...price1)
   console.log(minprice)

   
   
})