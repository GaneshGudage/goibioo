import {expect, Page} from '@playwright/test';
import { Bus_locators } from '../locators/Bus.json';

export class Bus_section {
  readonly Page: Page;

  constructor(page: Page) {
    this.Page = page;
  }


async Bus_booking (from: string, to: string) {

  await this.Page.locator(Bus_locators.type_of_vcl).nth(4).click();

  await this.Page.locator(Bus_locators.From_bus).fill(from);
  await this.Page.locator(Bus_locators.DD_first_option).nth(0).click();

  await this.Page.locator(Bus_locators.TO_bus).fill(to);
  await this.Page.locator(Bus_locators.DD_first_option).nth(0).click();

  await this.Page.locator(Bus_locators.Sarch_button).click();

  await expect(this.Page).toHaveURL(/bus\/search/);
  console.log('✅ Congratulation! You got the URL');

  await this.Page.locator(Bus_locators.Bus_calender).click();
  await this.Page.locator(Bus_locators.Bus_Date).nth(1).click();
  await this.Page.locator(Bus_locators.filter_Type).nth(3).click();
  await this.Page.locator(Bus_locators.filter_Type).nth(1).click();  
  
  await this.Page.locator(Bus_locators.Update_Search).click();
  

  await this.Page.locator(Bus_locators.first_bus_Select_seat).nth(0).click();


  await this.Page.locator(Bus_locators.Dropping_point).nth(2).click();
  await this.Page.locator(Bus_locators.Dropping_point).nth(16).click();

  const seat1 = await this.Page.locator(Bus_locators.Middle_sleeper_seat).nth(1)
  const seat2 = await this.Page.locator(Bus_locators.Middle_sleeper_seat).nth(2)


    if (await seat1.isVisible() && await seat1.isEnabled()) {
      await seat1.click();
      console.log("Seat 1 selected successfully");
    } 
    else if (await seat2.isVisible() && await seat2.isEnabled()) {
      await seat2.click();
      console.log("Seat 2 selected successfully");
    } 
    else {
      console.log("Seat is unavailable");
    };
  await expect (this.Page.locator(Bus_locators.continue_button)).toBeVisible();
    console.log('Continue Button Is Visiable');
  await this.Page.locator(Bus_locators.continue_button).click();

  await expect (this.Page.locator(Bus_locators.Header_of_Booking_page)).toBeVisible();
      console.log("Paymentdetails page Is oppened");

  await this.Page.pause();
};












};