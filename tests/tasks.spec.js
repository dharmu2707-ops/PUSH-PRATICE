import { test } from '@playwright/test';
test('login facebook', async ({page})=>
{
    // Open Facebook
    await page.goto('https://www.facebook.com');
    console.log(' Facebook opened');

    // Fill Username/Email
    await page.fill('.x1i10hfl', 'dhams');
    console.log(' Username filled');
     await tagena
});