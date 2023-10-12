import { expect } from '@playwright/test';
const { test } = require('../lambdatest-setup')

import assert from 'assert';
test.describe.configure({ mode: 'parallel' });

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/');
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle(/^Selenium Grid Online | Run Selenium Test On Cloud$/);
});

test('Test Scenario 1', async ({ page }) => {


    await page.getByRole('link', { name: 'Simple Form Demo' }).click();
    const message = "Welcome to Lambda Test";
    await page.locator('[type="text"][id="user-message"]').fill(message);
    await page.locator('[id="showInput"]').click();
    const outputMessage = await (await page.locator('[id="message"]')).innerText();
    expect(outputMessage).toEqual(message);

})

test('Test Scenario 2', async ({ page, browser }) => { 
 
    await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click(); 
    const slider = page.locator('#slider3', { visible: true }).getByRole('slider');
    slider.focus();  

    const targetValue = await page.locator('[id="rangeSuccess"]').innerText();
    const arrowInteraction = [];    
    const expectedValue = 95;

    for (let index = targetValue; index < 95; index++) {
            arrowInteraction.push(slider.press('ArrowRight'));
    }

    await Promise.all(arrowInteraction); 
    const output = await page.locator('[id="rangeSuccess"]').innerText();
    expect(Number(output)).toBe(expectedValue); 
})

test('Test Scenario 3', async ({ page }) => {

    await page.getByRole('link', { name: 'Input Form Submit' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();

    page.on('dialog', async (dialog) => {
        const dialogMessage = `${dialog.message()}`;
        assert(dialogMessage?.includes('Please fill out this fields'));
    });

    await page.locator('[id="name"]').fill('Rocio Zelaya');
    await page.locator('[id="inputEmail4"]').fill('rocio_zelaya@outlook.com');
    await page.locator('[id="inputPassword4"]').fill('testpassword123');
    await page.locator('[id="company"]').fill('LambdaTest');
    await page.locator('[id="websitename"]').fill('./selenium-playground');

    await page.locator('[name="country"]').click();
    await page.selectOption('select[name="country"]', { label: 'United States' });

    await page.locator('[id="inputCity"]').fill('Buffalo');
    await page.locator('[id="inputAddress1"]').fill('Walt Nuzum Farm Road');
    await page.locator('[id="inputAddress2"]').fill('1006');
    await page.locator('[id="inputState"]').fill('New York');
    await page.locator('[id="inputZip"]').fill('14202');
    await page.getByRole('button', { name: 'Submit' }).click();


    const successMessage = await page.locator('[class="success-msg hidden"]').innerText();
    expect(successMessage).toBe("Thanks for contacting us, we will get back to you shortly.");

})