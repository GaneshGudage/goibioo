
import {test,expect, chromium} from "@playwright/test";

import { Bus_section } from "./pages/Bus";
import { Train_page } from "./pages/Train";

test.beforeEach(async ({page}) => {
  await page.goto('https://www.goibibo.com/');
  const closePopup = page.locator("//span[@class='logSprite icClose']");
  if (await closePopup.isVisible()) {
    await closePopup.click();
  }
});

// test('Make my trip Bus booking page', async ({ page }) => {
//   const Bus = new Bus_section (page)
//   await Bus.Bus_booking('Hydrabad','Solapur');
// });

test ('train booking', async ({page}) =>{
  const train = new Train_page (page)
  await train.train_booking('Hydrabad','pune');
});



