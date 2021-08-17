import { test, expect } from '@playwright/test';
import { FormPage } from './form-page';

    

test('form validation', async ({ page }) => {
        const formPage = new FormPage(page)

        await formPage.goto();
        await formPage.fillUpForm("johnmark", "46", "resident", "saving", "usa");
        
        await formPage.takeScreenShot('form.png');
        
});



