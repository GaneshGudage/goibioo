import {expect, Page} from '@playwright/test';
import { train_locators } from '../locators/train.json';

export class Train_page {
  readonly Page: Page;

  constructor(page: Page) {
    this.Page = page;
  }


async train_booking (from: string, to: string) {

  await this.Page.locator(train_locators.type_of_vcl).nth(2).click();

  await this.Page.locator(train_locators.From_train).nth(0).click();
  await this.Page.keyboard.type(from);
  await this.Page.locator(train_locators.DD_first_option_Train).nth(0).click();

  await this.Page.locator(train_locators.TO_train).nth(1).click()
  await this.Page.keyboard.type(to);
  await this.Page.locator(train_locators.DD_first_option_Train).nth(0).click();

  // await this.Page.locator(train_locators.train_calender).nth(3).click();
  await this.Page.locator(train_locators.train_Date).nth(0).click();

  await this.Page.locator(train_locators.Train_Search).click();  
  await this.Page.locator(train_locators.Filter_For_available_only).click();
await this.Page.locator(train_locators.first_Train_Select).nth(0).click();

  await expect(this.Page.locator(train_locators.comfirmation_page)).toBeVisible();
  console.log('✅ Congratulation! You got the URL');


  // await this.Page.locator(train_locators.Filter_For_available_only).nth(1).click();  
  
  // await this.Page.locator(train_locators.Train_Search).click();
  

  


  // await this.Page.locator(train_locators.Dropping_point).nth(2).click();
  // await this.Page.locator(train_locators.Dropping_point).nth(16).click();

  // const seat1 = await this.Page.locator(train_locators.Middle_sleeper_seat).nth(1)
  // const seat2 = await this.Page.locator(train_locators.Middle_sleeper_seat).nth(2)


  //   if (await seat1.isVisible() && await seat1.isEnabled()) {
  //     await seat1.click();
  //     console.log("Seat 1 selected successfully");
  //   } 
  //   else if (await seat2.isVisible() && await seat2.isEnabled()) {
  //     await seat2.click();
  //     console.log("Seat 2 selected successfully");
  //   } 
  //   else {
  //     console.log("Seat is unavailable");
  //   };
  // await expect (this.Page.locator(train_locators.continue_button)).toBeVisible();
  //   console.log('Continue Button Is Visiable');
  // await this.Page.locator(train_locators.continue_button).click();

  // await expect (this.Page.locator(train_locators.Header_of_Booking_page)).toBeVisible();
  //     console.log("Paymentdetails page Is oppened");

  await this.Page.pause();


}};